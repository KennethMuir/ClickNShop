import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "ClickNShop - Yazing Affiliate Network",
  description: "Verified Yazing affiliate merchants and offers",
}

export default function YazingLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}