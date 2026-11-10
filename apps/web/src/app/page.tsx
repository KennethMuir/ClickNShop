import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { Shirt } from "lucide-react"

export const metadata = {
  title: "ClickNShop | Discover brands. Explore products. Shop with confidence.",
  description:
    "Discover trusted brands, explore products, compare shopping opportunities and find deals across fashion, technology, travel, lifestyle and more.",
  keywords: [
    "online shopping",
    "shopping discovery",
    "affiliate deals",
    "fashion deals",
    "electronics",
    "travel deals",
    "online brands",
    "ClickNShop",
  ],
  openGraph: {
    title: "ClickNShop | Discover brands. Explore products.",
    description:
      "Explore brands, discover shopping opportunities and shop with confidence.",
    type: "website",
  },
}

type Category = {
  name: string
  slug: string
  description: string
  icon: typeof Shirt
  gradient: string
}

const categories: Category[] = [
  {
    name: "Fashion & Apparel",
    slug: "fashion-and-apparel",
    description: "Clothing, footwear, accessories and everyday style.",
    icon: Shirt,
    gradient: "from-pink-500/15 to-rose-500/5",
  },
  {
    name: "Electronics & Technology",
    slug: "electronics-and-technology",
    description: "Electronics, gadgets and technology essentials.",
    icon: Shirt,
    gradient: "from-blue-500/15 to-cyan-500/5",
  },
  {
    name: "Software & Business",
    slug: "software-and-business",
    description: "Business tools, hosting and digital services.",
    icon: Shirt,
    gradient: "from-violet-500/15 to-purple-500/5",
  },
  {
    name: "Mobile & Connectivity",
    slug: "mobile-and-connectivity",
    description: "Mobile services, connectivity and travel SIMs.",
    icon: Shirt,
    gradient: "from-sky-500/15 to-blue-500/5",
  },
  {
    name: "Travel & Transport",
    slug: "travel-and-transport",
    description: "Flights, accommodation and car rental.",
    icon: Shirt,
    gradient: "from-emerald-500/15 to-teal-500/5",
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkText,
}: {
  eyebrow: string
  title: string
  description: string
  href?: string
  linkText?: string
}) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {description}
      </p>

      {href && linkText && (
        <Link
          href={href}
          className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-indigo-700 transition hover:text-indigo-900"
        >
          {linkText}
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Header */}
      <Header />

      {/* Hero */}      <section className="relative bg-gradient-to-b from-navy to-purple-500 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Discover brands.
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-xl">
              Explore products. Shop with confidence. Find the best deals from trusted merchants.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Categories", href: "/shop?view=categories" },
            ]}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/shop?category=${category.slug}`}
                className={`group rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} text-indigo-800">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a3 3 0 003 3h2a3 3 0 003-3v-10M5 10a3 3 0 013-3h2a3 3 0 013 3v10m-7-7a3 3 0 003 3h2a3 3 0 003-3v-10a3 3 0 00-3-3H5a3 3 0 00-3 3v10Z" />
                    </svg>
                  </span>

                  <div className="flex-1">
                    <p className="font-bold text-slate-900">{category.name}</p>
                    <p className="text-xs text-slate-500">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Merchants */}      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Brands to explore
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Selected merchant - Yazing example */}
            <Card className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4">
                <h3 className="font-medium text-indigo-600">Yazing: FansEdge</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Sports apparel, fan gear and merchandise.
                </p>
                <Link
                  href="/api/v1/go/fansedge"
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition hover:text-indigo-700"
                >
                  Visit merchant
                </Link>
              </div>
            </Card>

            {/* Featured offer placeholder */}
            <Card className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4">
                <h3 className="font-medium text-indigo-600">Featured Deal</h3>
                <p className="mt-1 text-sm text-slate-500">Limited time offer on quality products</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-slate-400">Ends soon</span>
                  <span className="text-indigo-600 font-bold">25% off</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Affiliate Discovery */}      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Affiliate network discovery
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
              <h4 className="font-bold text-indigo-600">Yazing</h4>
              <p className="mt-2 text-sm text-slate-500">
                38 verified merchants with direct affiliate tracking
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
              <h4 className="font-bold text-indigo-600">Impact</h4>
              <p className="mt-2 text-sm text-slate-500">
                Rising affiliate programme
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
              <h4 className="font-bold text-indigo-600">Awin</h4>
              <p className="mt-2 text-sm text-slate-500">
                Established affiliate network
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Promotion */}      <section className="py-12 bg-[#101a3b] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid max-w-7xl items-center gap-10 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                For brands and businesses
              </p>
              <h2 className="mt-4 text-2xl font-black tracking-tight">
                Put your brand in front of shoppers.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Promote your business through sponsored listings, featured placements,
                and advertising campaigns on ClickNShop.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/advertisers"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-amber-300"
                >
                  Advertise with us
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/advertisers"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore advertising
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
            </div>

            <div className="grid grid-cols-2 gap-3 sm:min-w-80">
              <div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <svg
                    className="size-5 mb-3 text-amber-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.21L7 14.14 2 9.27l6.9-1.02L12 2z" />
                  </svg>
                  <p className="text-sm font-bold">Sponsored listings</p>
                  <p className="text-xs leading-5 text-slate-400">
                    Prominent brand placements
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <svg
                    className="size-5 mb-3 text-amber-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2L4 7l8 8 8-8L12 2zM4 7l16 15.09L17 2H4z" />
                  </svg>
                  <p className="text-sm font-bold">Featured brands</p>
                  <p className="text-xs leading-5 text-slate-400">
                    Brand discovery opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}      <section className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="px-4 py-6">
            <h2 className="font-extrabold text-slate-950">
              Our affiliate disclosure
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
              ClickNShop participates in affiliate marketing programmes. Some links on
              this website are affiliate links. If you click one of these links and
              make a qualifying purchase or complete an eligible action, we may earn
              a commission at no additional cost to you. Affiliate relationships do
              not mean that every placement is sponsored. Sponsored listings and paid
              advertisements are identified separately. Product prices, promotions,
              availability, shipping and merchant terms are determined by the
              respective merchants and may change.
            </p>
            <Link
              href="/affiliate-disclosure"
              className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-indigo-700 hover:text-indigo-900"
            >
              Read our full disclosure
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
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}