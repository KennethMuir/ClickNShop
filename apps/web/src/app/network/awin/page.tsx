import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "ClickNShop - Awin Affiliate Network",
  description: "Verified Awin affiliate merchants and offers",
}

export default function AwinPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Awin", href: undefined },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Awin Affiliate Network
        </h1>

        <p className="text-sm text-slate-500 mb-8">
          Verified affiliate merchants with direct tracking.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="h-full">
            <div className="p-4">
              <h4 className="font-medium">Awin merchants</h4>
              <p className="mt-2 text-sm text-slate-500">
                Verified affiliate program members
              </p>
            </div>
          </Card>
          <Card className="h-full">
            <div className="p-4">
              <h4 className="font-medium">Awin offers</h4>
              <p className="mt-2 text-sm text-slate-500">
                Featured offers from Awin partners
              </p>
            </div>
          </Card>
          <Card className="h-full">
            <div className="p-4">
              <h4 className="font-medium">Network tracking</h4>
              <p className="mt-2 text-sm text-slate-500">
                Commission attribution for Awin
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}