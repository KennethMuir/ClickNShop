"use client"

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Megaphone, Target, Folder, Shield, Users, ShoppingBag, ArrowUpRight, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "ClickNShop – Advertise",
  description:
    "Promote your brand or business on ClickNShop through sponsored listings, featured placements and advertising campaigns.",
}

type AdPackage = {
  name: string
  slug: string
  description: string
  price: string
  placement: string
  audience: string
  featured: boolean
}

/* Advertising packages – pricing is illustrative only; actual rates
   would be determined by the advertising platform and quoted per
   business.  No fabricated revenue figures are displayed. */
const adPackages: AdPackage[] = [
  {
    name: "Homepage Banner",
    slug: "homepage-banner",
    description:
      "Prominent placement on the ClickNShop homepage above the fold.",
    price: "Starting at $2,500/month",
    placement: "homepage-banner",
    audience: "All visitors",
    featured: true,
  },
  {
    name: "Featured Brand",
    slug: "featured-brand",
    description:
      "Brand showcases with premium imagery and extended copy.",
    price: "Starting at $1,800/month",
    placement: "featured-brand",
    audience: "All visitors",
    featured: true,
  },
  {
    name: "Category Sponsorship",
    slug: "category-sponsorship",
    description:
      "Sponsored placement within a specific shopping category.",
    price: "Starting at $1,200/month",
    placement: "category-sponsorship",
    audience: "Category-specific shoppers",
    featured: false,
  },
  {
    name: "Sponsored Listing",
    slug: "sponsored-listing",
    description:
      "Product-level sponsored placement in merchant discovery sections.",
    price: "Starting at $650/month",
    placement: "sponsored-listing",
    audience: "Shopper discovery sections",
    featured: false,
  },
  {
    name: "Campaign Opportunity",
    slug: "campaign-opportunity",
    description:
      "Custom advertising campaign with cross-category placement.",
    price: "Quote-based",
    placement: "campaign",
    audience: "Targeted segments",
    featured: false,
  },
]

/* ==========================================================
   Advertising packages grid – each package shows name,
   description, price and placement type.  Featured packages
   get a badge.
   ========================================================== */

function AdPackagesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {adPackages.map((pkg) => {
        const Icon = pkg.featured ? Megaphone : Folder

        return (
          <div
            key={pkg.slug}
            className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow group"
          >
            <Icon
              className={pkg.featured ? "text-amber-500 mb-4" : "text-indigo-500 mb-4 text-3xl"}
              width={32}
              height={32}
            />
            <h3 className="font-medium text-slate-900 mb-2">
              {pkg.name}
            </h3>
            <p className="text-sm leading-relaxed text-slate-500 line-clamp-2">
              {pkg.description}
            </p>
            <p className="mt-4 font-medium">
              {pkg.price}
            </p>
            <p className="mt-2 text-xs text-slate-400">
              {pkg.placement}
            </p>
            {pkg.featured && (
              <Badge
                className="mt-2 rounded-full bg-amber-100 text-amber-800 px-2.5 py-0.5 text-xs font-medium"
              >
                Featured
              </Badge>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ==========================================================
   Page layout
   ========================================================== */

export default function AdvertisePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500">
              <ShoppingBag size={23} />
            </span>
            <span className="text-xl font-black tracking-tight">
              Click<span className="text-indigo-600">N</span>Shop
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <Link href="/brands" className="hover:text-indigo-600">Brands</Link>
            <Link href="/deals" className="hover:text-indigo-600">Deals</Link>
            <Link href="/advertise" className="hover:text-indigo-600 bg-indigo-100 px-3 py-1 rounded text-indigo-600 font-medium">
              Advertise
            </Link>
          </nav>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto text-center mb-12">
          <h1 className="text-4xl font-black tracking-tight text-slate-950">
            Advertise on ClickNShop
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600 max-w-2xl mx-auto">
            Promote your brand or business through sponsored listings,
            featured placements, category sponsorships and advertising
            campaigns on ClickNShop.  Reach shoppers who are actively
            discovering products across fashion, electronics, travel,
            wellness and more.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Hero copy */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 mb-6">
              Reach engaged shoppers
            </h2>
            <p className="text-base leading-7 text-slate-500">
              Our shopping discovery platform connects brands with
              motivated buyers across nine categories and eight
              affiliate networks.  Every placement is tagged for
              transparent affiliate disclosure.
            </p>

            <div className="mt-8 space-y-4">
              <Link
                href="/advertisers"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
              >
                Talk to our advertising team
                <ArrowUpRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Send an enquiry
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Ad packages grid */}
          <AdPackagesGrid />
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            View advertising packages and rates.
            <Link href="/advertisers" className="font-medium text-indigo-600 hover:underline">
              Advertising portal
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

/* ==========================================================
   In-page Badge component – minimal inline definition.
   ========================================================== */

function Badge({ className, children }: { className: string; children: React.ReactNode }) {
  return <span className={className}>{children}</span>
}