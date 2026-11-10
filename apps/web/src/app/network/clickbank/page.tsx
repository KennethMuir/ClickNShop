import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export const metadata = {
  title: "ClickNShop - ClickBank Network",
  description: "Verified ClickBank affiliate merchants and offers",
}

export default function ClickBankPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [merchantsRes, offersRes] = await Promise.all([
          fetch(`/api/v1/affiliate-links?network=clickbank&status=ACTIVE&take=20`),
          fetch(`/api/v1/offers?featured=true&take=10`),
        ])

        if (!merchantsRes.ok || !offersRes.ok) throw new Error("Failed to fetch ClickBank data")

        const [merchantsData, offersData] = await Promise.all([
          merchantsRes.json(),
          offersRes.json(),
        ])

        setLoading(false)
      } catch (err) {
        console.error("Error fetching ClickBank data:", err)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="flex min-h-64 items-center justify-center py-12">
          <span className="text-gray-500">Loading data...</span>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "ClickBank", href: undefined },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          ClickBank Network
        </h1>

        <p className="text-sm text-slate-500 mb-8">
          Verified affiliate merchants with direct tracking.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="h-full">
            <div className="p-4">
              <h4 className="font-medium">ClickBank merchants</h4>
              <p className="mt-2 text-sm text-slate-500">
                Verified affiliate program members
              </p>
            </div>
          </Card>
          <Card className="h-full">
            <div className="p-4">
              <h4 className="font-medium">ClickBank offers</h4>
              <p className="mt-2 text-sm text-slate-500">
                Featured offers from ClickBank partners
              </p>
            </div>
          </Card>
          <Card className="h-full">
            <div className="p-4">
              <h4 className="font-medium">Network tracking</h4>
              <p className="mt-2 text-sm text-slate-500">
                Commission attribution for ClickBank
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}