"use client"

import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "password" | "search"
  placeholder?: string
}

export function Input({ type = "text", placeholder, className, ...props }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        "flex-1 rounded-blg border border-white/20 bg-transparent px-3 py-2 focus-outline:text-navy focus-outline:outline-none focus-visible:ring-2 focus-visible:ring-navy transition-colors"
      )}
      {...props}
    />
  )
}