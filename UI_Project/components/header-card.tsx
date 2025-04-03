import { cn } from "@/lib/utils"

interface HeaderCardProps {
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref: string
  imageSrc: string
  contentAlign?: "items-center" | "items-start" | "items-end"
  textAlign?: "text-center" | "text-left" | "text-right"
  className?: string
}

export default function HeaderCard({
  title,
  description,
  buttonLabel,
  buttonHref,
  imageSrc,
  contentAlign,
  textAlign = "text-center",
  className,
}: HeaderCardProps) {
  return (
    <div
      className={cn(
        "relative flex items-center md:justify-start justify-center min-w-full h-[485px] px-4 py-2 md:px-16",
        className
      )}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="absolute inset-0 max-md:bg-primary/45 md:bg-gradient-to-r from-primary/50 via-primary/20" />
      <div
        className={cn(
          "flex flex-col justify-center md:text-left md:items-start items-center text-center lg:max-w-[65%] md:max-w-[70%] h-full space-y-6 md:px-12 sm:px-6 z-10 text-gray-50",
          contentAlign,
          textAlign
        )}
      >
        <h2 className="tracking-tight text-4xl max-md:text-3xl max-xs:text-[26px] font-extrabold">
          {title}
        </h2>
        <p className="text-lg max-md:text-base max-xs:text-[15px] lg:w-[70%] text-gray-50">
          {description}
        </p>
        <a
          href={buttonHref}
          className="text-sm font-medium flex items-center justify-center rounded-sm bg-transparent text-gray-50 border-2 hover:bg-gray-100 hover:text-[#29457a] border-gray-100 z-30 h-10 px-4 py-2 transition-colors"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  )
}
