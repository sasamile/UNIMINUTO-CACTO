import { cn } from "@/lib/utils";
import Image from "next/image";

interface InfoSectionProps {
  reverse?: boolean;
  imageSrc: string;
  title: string;
  description: string;
  label?: string;
  className?: string;
}

export default function InfoSection({
  reverse,
  imageSrc,
  description,
  title,
  className,
}: InfoSectionProps) {
  return (
    <div
      className={cn(
        "grid lg:grid-cols-2 lg:gap-12 gap-4 items-center max-lg:flex-col-reverse",
        className
      )}
    >
      <div
        className={cn(
          "relative h-80 lg:h-96",
          reverse ? "lg:order-last" : "lg:order-first"
        )}
      >
        <Image
          src={imageSrc}
          alt="Servicios y soluciones innovadoras"
          fill
          className={cn("object-cover size-full shadow-md rounded-sm")}
        />
      </div>
      <div
        className={cn(
          "w-full flex-1 flex items-center justify-center sm:p-12 py-4 lg:px-4 max-sm:px-4",
          reverse ? "lg:order-first order-last" : "lg:order-last"
        )}
      >
        <div className="max-sm:text-start w-full space-y-4 max-sm:py-4">
          <h2 className="text-[26px] font-bold text-gray-800">{title}</h2>
          <p className="text-foreground/70 lg:text-[17px] max-lg:text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
