import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export const metadata = {
  title: "ClickNShop - CJ-Affiliate Network",
  description: "Verified CJ-Affiliate merchant and offers",
}

export default function CJAffiliatePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [merchantsRes, offersRes] = await Promise.all([
          fetch(`/api/v1/affiliate-links?network=cj&status=ACTIVE&take=20`),
          fetch(`/api/v1/offers?featured=true&take=10`),
        ])

        if (!merchantsRes.ok || !offersRes.ok) throw new Error("Failed to fetch CJ data")

        const [merchantsData, offersData] = await Promise.all([
          merchantsRes.json(),
          offersRes.json(),
        ])

        setLoading(false)
      } catch (err) {
        console.error("Error fetching CJ data:", err)
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
          { label: "CJ-Affiliate", href: undefined },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          CJ-Affiliate Network
        </h1>

        <p className="text-sm text-slate-500 mb-8">
          Verified affiliate merchants with direct tracking.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Merchants */}
          <div>
            <h3 className="text-lg font-medium text-slate-900">CJ Merchants</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Merchant cards will be populated by API data */}
              <p className="text-sm text-slate-400">
                Loading merchants from API...
              </p>
            </div>
          </div>

          {/* Offers */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-slate-900">Featured Offers</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Offers cards will be populated by API data */}
              <p className="text-sm text-slate-400">
                Loading offers from API...
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}