"use client"

import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

export function Button({ variant = "default", size = "default", className, children, ...props }: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-50",
    variant === "default"
      ? "bg-navy text-white"
      : variant === "outline"
      ? "border border-navy text-navy bg-white hover:bg-navy hover:text-white"
      : "text-navy underline-offset-4 hover:underline text-white bg-transparent focus-visible:ring-navy",
    size === "sm"
      ? "h-8 py-1 rounded-sm"
      : size === "lg"
      ? "h-10 rounded-lg py-3"
      : "h-9 py-2"
  )

  return (
    <button
      className={cn(baseClasses, className)}
      {...props}
    >
      {children}
    </button>
  )
}