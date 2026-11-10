"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className="flex gap-2 text-sm text-slate-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link href={item.href} className="hover:text-indigo-600">
                {item.label}
              </Link>
            ) : (
              <span className="text-indigo-600 font-medium">{item.label}</span>
            )}

            {index < items.length - 1 && (
              <span className="mx-1 text-xs opacity-50">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}