"use client";

import { z } from "zod";
import { SpecialEvent } from "@prisma/client";
import {
  ArrowLeft,
  FileAudio,
  ImagePlus,
  ImageUp,
  Loader2,
  Trash2,
  X,
} from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { CustomProvider, DatePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import esES from "rsuite/locales/es_ES";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AlertModal } from "@/components/common/alert-modal";
import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EventSchema } from "@/schemas/event";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  deleteFile,
  deleteFiles,
  uploadAudio,
  uploadImage,
  uploadImages,
} from "@/actions/uploadthing";
import {
  createSpecialEvent,
  deleteSpecialEvent,
  updateSpecialEvent,
} from "@/actions/special-event";
import { vi } from "date-fns/locale";

interface EventFormProps {
  initialData: SpecialEvent | null;
}

export function SpecialEventForm({ initialData }: EventFormProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loadingDelete, startDeleteTransition] = useTransition();

  const [isLoading, startTransition] = useTransition();
  const [imageSrc, setImageSrc] = useState<string | null>(
    initialData?.billboard ?? ""
  );
  const [podcastSrc, setPodcastSrc] = useState<string | null>(
    initialData?.podcastUrl ?? ""
  );
  const [imagesSrc, setImagesSrc] = useState<string[] | null>(
    initialData?.images ?? null
  );
  const [file, setFile] = useState<File | null>(null);
  const [imageFiles, setImageFiles] = useState<File[] | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | undefined>(
    initialData?.videoUrl ?? undefined
  );
  const [podcastFile, setPodcastFile] = useState<File | null>(null);

  const title = initialData ? "Editar evento" : "Crear evento";
  const description = initialData
    ? "Realiza los cambios que necesites para el evento"
    : "Agrega un nuevo evento";
  const toastMessage = initialData ? "Evento actualizado" : "Evento creado";
  const action = initialData ? "Guardar cambios" : "Crear evento";

  const form = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      address: initialData?.address || "",
      startDate: initialData?.startDate,
      endDate: initialData?.endDate,
    },
  });

  const { isSubmitting } = form.formState;

  // Funciones para la elección de la imagen y el podcast
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "image" | "podcast"
  ) => {
    const file = e.target.files && e.target.files[0];

    if (file && type === "image") {
      const maxSizeInBytes = 1 * 1024 * 1024; // Tamaño máximo de la imagen 4MB
      if (file.size > maxSizeInBytes) {
        setImageSrc(null);
        toast.error(
          "La imagen seleccionada excede el tamaño máximo permitido de 4MB."
        );
        return;
      }

      setFile(file);

      const src = URL.createObjectURL(file);
      setImageSrc(src);

      // Restablecer el valor del campo para permitir la selección del mismo archivo después
      e.target.value = "";
    }

    if (file && type === "podcast") {
      setPodcastFile(file);

      const src = URL.createObjectURL(file);
      setPodcastSrc(src);

      // Restablecer el valor del campo para permitir la selección del mismo archivo después
      e.target.value = "";
    }
  };

  // Función para manejar la selección de múltiples imágenes
  const handleMultipleImageSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    const maxSizeInBytes = 4 * 1024 * 1024; // Tamaño máximo por imagen (4MB)
    const selectedFiles = Array.from(files);

    // Verifica si alguna imagen excede el tamaño permitido
    const validFiles = selectedFiles.filter((file) => {
      if (file.size > maxSizeInBytes) {
        toast.error(
          `La imagen ${file.name} excede el tamaño máximo permitido de 4MB.`
        );
        return false;
      }
      return true;
    });

    // Si hay imágenes válidas, las agregamos al estado
    if (validFiles.length > 0) {
      const imageUrls = validFiles.map((file) => URL.createObjectURL(file));
      setImagesSrc((prevImages) =>
        prevImages ? [...prevImages, ...imageUrls] : imageUrls
      );
      setImageFiles((prevFiles) =>
        prevFiles ? [...prevFiles, ...validFiles] : validFiles
      );
    }

    // Restablecer el valor del input para permitir la selección del mismo archivo después
    e.target.value = "";
  };

  const onSubmit = (values: z.infer<typeof EventSchema>) => {
    const formData = new FormData();

    // Agregar la imagen principal si existe
    if (file) {
      formData.append("image", file);
    }

    // Agregar las imágenes múltiples al mismo campo del FormData
    if (imageFiles && imageFiles.length > 0) {
      imageFiles.forEach((imageFile) => {
        formData.append("images", imageFile); // Todas las imágenes se agregan bajo el mismo campo 'images'
      });
    }

    // Agregar el podcast si existe
    if (podcastFile) {
      formData.append("audio", podcastFile);
    }

    startTransition(async () => {
      try {
        let billboardImage = initialData?.billboard || "";
        let images = initialData?.images || [];
        let audioUrl = initialData?.podcastUrl || "";

        // Si hay una nueva imagen principal, subirla
        if (file) {
          const mainImageResult = await uploadImage(formData);
          if (!mainImageResult.success || !mainImageResult.imageUrl) {
            throw new Error("Error uploading main image");
          }
          billboardImage = mainImageResult.imageUrl;

          // Eliminar la imagen principal anterior si existe
          if (initialData?.billboard) {
            await deleteFile(initialData.billboard);
          }
        }

        // Si hay nuevas imágenes adicionales, subirlas
        if (imageFiles && imageFiles.length > 0) {
          const imagesResult = await uploadImages(formData);
          if (!imagesResult.success || !imagesResult.imageUrls) {
            throw new Error("Error uploading event images");
          }

          // Agregar las nuevas imágenes a la lista de imágenes existentes
          images = [...images, ...imagesResult.imageUrls.map((img) => img.url)];
        }

        // Si hay imágenes eliminadas, eliminarlas del servidor
        const removedImages = initialData?.images?.filter(
          (img) => !imagesSrc?.includes(img)
        );
        if (removedImages && removedImages.length > 0) {
          await deleteFiles(removedImages);
          // Actualizar la lista de imágenes existentes
          images = images.filter((img) => !removedImages.includes(img));
        }

        // Si hay un nuevo podcast, subirlo
        if (podcastFile) {
          const audioResult = await uploadAudio(formData);
          if (!audioResult.success || !audioResult.audioUrl) {
            throw new Error("Error uploading audio");
          }
          audioUrl = audioResult.audioUrl;

          // Eliminar el podcast anterior si existe
          if (initialData?.podcastUrl) {
            await deleteFile(initialData.podcastUrl);
          }
        }

        if (!initialData) {
          await creationProcess(
            values,
            billboardImage,
            images,
            audioUrl,
            videoUrl!
          );
        } else {
          await updateProcess(
            values,
            billboardImage,
            images,
            audioUrl,
            videoUrl!
          );
        }
      } catch {
        toast.error("Algo salió mal en la subida de los archivos multimedia.");
      }
    });
  };

  const getEmbeddedYoutubeUrl = (url: string) => {
    const youtubeRegex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
    const match = url.match(youtubeRegex);

    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  const creationProcess = async (
    values: z.infer<typeof EventSchema>,
    billboardImage: string,
    images: string[],
    audio: string,
    videoUrl: string
  ) => {
    try {
      const formattedVideoUrl = getEmbeddedYoutubeUrl(videoUrl);
      const { success, error } = await createSpecialEvent(
        values,
        billboardImage,
        images,
        audio,
        formattedVideoUrl
      );

      if (success) {
        toast.success(toastMessage);
        router.push("/special-events");
      }

      if (error) {
        toast.error(error);
      }
    } catch {
      toast.error("Algo salio mal al crear el cartel publicitario.");
    }
  };

  const updateProcess = async (
    values: z.infer<typeof EventSchema>,
    billboardImage: string,
    images: string[],
    audioUrl: string,
    videoUrl: string
  ) => {
    try {
      const formattedVideoUrl = getEmbeddedYoutubeUrl(videoUrl);
      if (initialData && initialData.id) {
        const { success, error } = await updateSpecialEvent(
          initialData.id,
          values,
          images,
          billboardImage,
          audioUrl,
          formattedVideoUrl
        );

        if (success) {
          toast.success(toastMessage);
          router.push("/special-events");
        }

        if (error) {
          toast.error(error);
        }
      }
    } catch {
      toast.error("Algo salió mal en la actualización del evento.");
    }
  };

  const handleDeletionConfirmation = () => {
    if (initialData) {
      const filesToDelete = [
        ...initialData.images,
        initialData.billboard,
        initialData.podcastUrl,
      ];

      if (filesToDelete.length > 0) {
        startDeleteTransition(async () => {
          try {
            const { success, error } = await deleteSpecialEvent(
              initialData.id,
              filesToDelete as Array<string>
            );

            if (error) {
              toast.error(error);
            }

            if (success) {
              router.push("/special-events");
              toast.success(success);
            }
          } catch {
            toast.error("Algo salió mal al eliminar el evento.");
          } finally {
            setOpen(false);
          }
        });
      }
    }
  };

  return (
    <CustomProvider locale={esES}>
      <div className="space-y-6">
        <AlertModal
          isLoading={loadingDelete}
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={handleDeletionConfirmation}
        />

        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/special-events")}
          className="p-0 size-fit hover:bg-transparent dark:hover:bg-transparent mb-2"
        >
          <ArrowLeft className="size-5 mr-2" />
          <span className="text-base text-muted-foreground">Volver</span>
        </Button>
        <div className="flex max-xs:flex-col xs:items-center xs:justify-between gap-3">
          <Heading title={title} description={description} />
          {initialData && (
            <Button
              variant="destructive"
              size="icon"
              onClick={() => {
                setOpen(true);
              }}
              className="dark:bg-red-500 max-xs:w-full items-center"
            >
              <Trash2 className="size-4 max-xs:mr-2" />
              <p className="xs:hidden">Eliminar evento</p>
            </Button>
          )}
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-5 mb-5">
              <Label className="text-xl font-semibold tracking-tight">
                Imagen principal del evento *
              </Label>
              <div className="relative size-fit flex items-center justify-center gap-4">
                <div className="size-[180px] rounded-lg mb-3">
                  <label
                    htmlFor="fileInput"
                    className="relative flex items-center justify-center size-full rounded-lg cursor-pointer"
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center z-50 inset-0 size-full rounded-lg bg-zinc-600/60 absolute",
                        imageSrc && "hidden"
                      )}
                    >
                      <ImageUp className="text-white size-2/5" />
                    </div>
                    <input
                      id="fileInput"
                      name="file"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleChange(e, "image")}
                      hidden
                    />
                    {initialData?.billboard && !imageSrc && (
                      <Image
                        src={initialData?.billboard}
                        alt="image file selected"
                        width={180}
                        height={180}
                        className="object-cover size-full rounded-lg"
                      />
                    )}
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt="image file selected"
                        width={180}
                        height={180}
                        className="object-cover size-full rounded-lg"
                      />
                    )}
                  </label>
                </div>
                {imageSrc && (
                  <Button
                    type="button"
                    size="icon"
                    variant="destructive"
                    className="absolute top-1 right-1 dark:bg-red-500 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                      setImageSrc(null);
                    }}
                  >
                    <X className="size-4" />
                  </Button>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <Label className="text-xl font-semibold tracking-tight">
                  Informacion General
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
                  <FormField
                    name="title"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Título *</FormLabel>
                        <FormControl>
                          <Input
                            variant="largeRounded"
                            placeholder="Titulo del evento"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="description"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descripción *</FormLabel>
                        <FormControl>
                          <Input
                            variant="largeRounded"
                            placeholder="Descripción del evento"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="address"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dirección del evento *</FormLabel>
                        <FormControl>
                          <Input
                            variant="largeRounded"
                            placeholder="Dirección del evento"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="startDate"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fecha de inicio *</FormLabel>
                        <FormControl>
                          <DatePicker
                            format="MM/dd/yyyy hh:mm aa"
                            showMeridian
                            style={{ width: "100%", height: "56px" }}
                            value={field.value}
                            onChange={(date) => field.onChange(date)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="endDate"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fecha de finalización *</FormLabel>
                        <FormControl>
                          <DatePicker
                            format="MM/dd/yyyy hh:mm aa"
                            showMeridian
                            style={{ width: "100%" }}
                            value={field.value}
                            onChange={(date) => field.onChange(date)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-xl font-semibold tracking-tight">
                  Recursos Multimedia
                </Label>
                <div>
                  <div className="space-y-2">
                    <Label>Imagenes del evento</Label>
                    <div className="flex max-md:flex-col gap-2 w-full">
                      <div className="relative size-fit flex items-center justify-center gap-4">
                        <div className="size-[180px] rounded-lg mb-3">
                          <label
                            htmlFor="multipleFileInput"
                            className="relative flex items-center justify-center size-full rounded-lg cursor-pointer"
                          >
                            <div className="flex items-center justify-center inset-0 size-full rounded-lg bg-zinc-600/60 absolute">
                              <ImagePlus className="text-white size-2/5" />
                            </div>
                            <input
                              id="multipleFileInput"
                              name="file"
                              type="file"
                              accept="image/*"
                              multiple
                              onChange={handleMultipleImageSelection}
                              hidden
                            />
                          </label>
                        </div>
                      </div>
                      {imagesSrc && (
                        <div className="flex gap-2 w-full min-h-full overflow-x-auto max-md:mb-3">
                          {imagesSrc.map((imgSrc, index) => (
                            <div
                              key={index}
                              className="relative size-[180px] min-w-[180px] rounded-lg"
                            >
                              <Image
                                src={imgSrc}
                                alt="image file selected"
                                fill
                                className="object-cover size-full rounded-lg"
                              />
                              <Button
                                type="button"
                                size="icon"
                                variant="destructive"
                                className="absolute top-1 right-1 dark:bg-red-500 rounded-full z-50"
                                onClick={() => {
                                  setImagesSrc(
                                    (prev) =>
                                      prev?.filter((_, i) => i !== index) ||
                                      null
                                  );
                                  setImageFiles(
                                    (prev) =>
                                      prev?.filter((_, i) => i !== index) ||
                                      null
                                  );
                                }}
                              >
                                <X className="size-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
                    <div className="space-y-3">
                      <Label className="">URL del video</Label>

                      <Input
                        variant="largeRounded"
                        placeholder="Enlace del video promocional"
                        disabled={isSubmitting}
                        value={videoUrl}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setVideoUrl(e.target.value);
                        }}
                      />
                    </div>
                    <div className="relative space-y-2">
                      <Label>Podcast *</Label>
                      <div className="flex items-center gap-3 rounded-lg h-[56px]">
                        <label
                          htmlFor="podcastFileInput"
                          className={cn(
                            "relative flex items-center px-4 size-full rounded-lg cursor-pointer bg-zinc-600/20 dark:bg-zinc-600/60",
                            podcastSrc && "hidden"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <FileAudio className="size-6 shrink-0" />
                            <p>Selecciona un archivo</p>
                          </div>
                          <input
                            id="podcastFileInput"
                            name="file"
                            type="file"
                            accept="audio/*"
                            onChange={(e) => handleChange(e, "podcast")}
                            hidden
                          />
                        </label>
                        {podcastSrc && <audio src={podcastSrc!} controls />}
                        {podcastSrc && (
                          <Button
                            type="button"
                            size="icon"
                            variant="destructive"
                            className="dark:bg-red-500 rounded-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPodcastFile(null);
                              setPodcastSrc(null);
                            }}
                          >
                            <X className="size-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 pb-2 text-end">
              <Button
                type="submit"
                disabled={isSubmitting || !imageSrc || isLoading}
                className="font-semibold"
              >
                {isSubmitting ||
                  (isLoading && (
                    <Loader2 className="size-5 mr-3 animate-spin" />
                  ))}
                {action}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </CustomProvider>
  );
}
