"use client"

import Link from "next/link"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CategoryData = {
  name: string
  slug: string
  description: string
  merchantCount: number
  icon: any
  gradient: string
}

type CategoryTemplateProps = {
  category: CategoryData
  merchants: any[]
  sponsoredMerchants?: any[]
  showFilters?: boolean
  showSponsored?: boolean
}

/**
 * Shared category page template.
 * Renders category browsing page with merchants and filters.
 */
export function CategoryTemplate({
  category,
  merchants,
  sponsoredMerchants,
  showFilters = true,
  showSponsored = true,
}: CategoryTemplateProps) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: category.name, href: undefined },
          ]}
        />

        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            {category.name.replace("-", " ")}
          </h1>
          <p className="text-gray-600">
            Explore offers from {category.description.toLowerCase()} merchants
          </p>
        </div>

        {/* Merchant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {merchants.map((merchant, index) => (
            <Card
              key={merchant.slug}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="p-4">
                <h3 className="font-medium text-slate-900">{merchant.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{merchant.description}</p>
                <Link
                  href={`/api/v1/go/${merchant.slug}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition hover:text-indigo-700"
                >
                  Visit merchant
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Sponsored placements (if enabled) */}
        {showSponsored && sponsoredMerchants && sponsoredMerchants.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-indigo-600 mb-2">
              Sponsored placements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sponsoredMerchants.map((merchant, index) => (
                <Card
                  key={merchant.slug}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-4">
                    <h4 className="font-medium text-indigo-600">{merchant.name}</h4>
                    <p className="mt-1 text-sm text-slate-500">{merchant.description}</p>
                    <Link
                      href={merchant.destinationUrl}
                      target="_blank"
                      rel="sponsored nofollow noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition hover:text-indigo-700"
                    >
                      Visit
                      <svg
                        className="size-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Pagination */}
        {false && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center gap-2">
              <Button variant="outline" disabled>Previous</Button>
              <span className="hidden sm:inline">1</span>
              <span className="mx-1">2</span>
              <span className="hidden sm:inline">3</span>
              <Button variant="outline" disabled>Next</Button>
            </nav>
          </div>
        )}
      </div>
    </section>
  )
}