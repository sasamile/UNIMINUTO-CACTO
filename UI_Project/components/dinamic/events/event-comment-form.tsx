"use client";

import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios"
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const eventCommentSchema = z.object({
  name: z.string().min(1).trim(),
  comment: z.string().min(1).trim(),
});

export function EventCommentForm({ eventId, route }: { eventId: string, route: string }) {
  const [isLoading, startTransition] = useTransition();

  const form = useForm<z.infer<typeof eventCommentSchema>>({
    resolver: zodResolver(eventCommentSchema),
    defaultValues: {
      name: "",
      comment: "",
    },
  });

  const { isValid } = form.formState;

  const handleSubmit = (values: z.infer<typeof eventCommentSchema>) => {
    startTransition(async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/${route}/${eventId}/comments`,
          values
        );

        if (response.status === 200 || response.status === 201) {
          toast.success("Comentario enviado con éxito.");
          form.reset()
        }
      } catch (error: any) {
        toast.error(
          error.response?.data || "Ocurrió un error al enviar el comentario."
        );
      }
    });
  };

  return (
    <div className="my-12 bg-muted-foreground/15 p-4 px-6 rounded-lg">
      <h1 className="text-2xl font-semibold">Comentarios</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="py-6 space-y-4"
        >
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nombre de la persona que hace el comentario"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="comment"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comentario *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Escribe aqui..."
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full flex justify-end">
            <Button disabled={!isValid || isLoading} className="w-[200px]">
              {isLoading && <Loader2 className="size-4 mr-2 animate-spin" />}
              Enviar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
