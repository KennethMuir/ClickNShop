import Link from "next/link"
import { Card } from "@/components/ui/card"
import { AdminDashboardClient } from "@/app/admin-dashboard/client"

export const metadata = {
  title: "ClickNShop - Admin Dashboard",
  description: "Admin dashboard for platform management",
}

export default function AdminDashboardPage() {
  return <AdminDashboardClient />
}