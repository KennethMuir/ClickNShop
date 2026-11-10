"use client"

import { cn } from "@/lib/utils"

interface MenuItemProps {
  value: string
  children?: React.ReactNode
  className?: string
}

export function MenuItem({ value, children, className }: MenuItemProps) {
  const isSelected = value === undefined
  return (
    <div
      role="option"
      aria-selected={isSelected}
      className={cn(
        "flex cursor-pointer select-none py-2 pl-8 pr-2 text-sm outline-none focus:bg-navy focus:text-white focus-visible:ring-2 focus-visible:ring-focus",
        isSelected ? "bg-navy text-white" : "",
        className
      )}
    >
      {children || value}
    </div>
  )
}

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  onValueChange?: (value: string) => void
  value?: string
  placeholder?: string
}

export function Select({ onValueChange, value, placeholder = "Select", className, children }: SelectProps) {
  const handleSelect = (value: string) => {
    onValueChange?.(value)
  }

  return (
    <div className={cn("relative", className)}>
      <div
        role="button"
        aria-haspopup="listbox"
        aria-label={placeholder}
        onClick={(e) => e.currentTarget.focus()}
        tabIndex={0}
        className={cn(
          "flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 focus-outline:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          value && "border-navy",
          !value ? "placeholder-gray-400" : undefined
        )}
      >
        <span>{value || placeholder}</span>
      </div>

      <ul
        role="listbox"
        className={cn(
          "absolute right-0 z-50 mt-2 w-48 rounded-md bg-white shadow-lg py-1 ring-1 ring-black ring-opacity-5% overflow-hidden space-y-1",
          "max-h-80",
          "scrollable"
        )}
      >
        {children}
        <MenuItem value="" />
      </ul>
    </div>
  )
}