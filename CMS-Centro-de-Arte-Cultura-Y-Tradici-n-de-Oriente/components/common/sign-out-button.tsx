"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { logout } from "@/actions/auth"
import { cn } from "@/lib/utils"

interface SignOutButtonProps {
  children?: React.ReactNode
  className?: string
  variant?: "ghost" | "default"
}

export function SignOutButton({
  children,
  className,
  variant,
}: SignOutButtonProps) {
  const handleClick = async () => {
    try {
      await logout()
    } catch {
      toast.error("Algo salió mal al cerrar sesión.")
    }
  }

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      className={cn(
        "rounded-lg px-3 py-2.5 text-primary/70 transition-all hover:text-primary dark:text-primary/70 dark:hover:text-primary hover:bg-gray-200/40 dark:hover:bg-gray-600/40",
        className
      )}
    >
      {children && children}
      Cerrar sesión
    </Button>
  )
}
