"use client"

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  ArrowUpRight,
  BadgePercent,
  CheckCircle2,
  ChevronRight,
  Compass,
  Globe2,
  Heart,
  Laptop,
  Mail,
  Megaphone,
  Package,
  PawPrint,
  Plane,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Tag,
  Shirt,
  Gift,
  House,
} from "lucide-react"

export const metadata: Metadata = {
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
  merchantCount: number
  icon: LucideIcon
  gradient: string
  heroImage?: string
}

type Merchant = {
  name: string
  slug: string
  category: string
  description: string
  destinationUrl: string
}

const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL ?? ""
).replace(/\/$/, "")

function affiliateHref(slug: string): string {
  return `${API_BASE_URL}/api/v1/go/${encodeURIComponent(slug)}`
}

/* Premium hero data with lifestyle imagery – these are shopping-category
   hero backgrounds.  In a fully wired-in deployment the hero images would
   come from an asset store or CMS; here we use decorative gradients +
   embedded hero imagery that matches the category mood. */
const categories: Category[] = [
  {
    name: "Fashion & Apparel",
    slug: "fashion-and-apparel",
    description: "Clothing, footwear, accessories and everyday style.",
    merchantCount: 11,
    icon: Shirt,
    gradient: "from-pink-500/15 to-rose-500/5",
    heroImage: "/fashion-hero.webp",
  },
  {
    name: "Electronics & Technology",
    slug: "electronics-and-technology",
    description: "Electronics, gadgets and technology essentials.",
    merchantCount: 3,
    icon: Laptop,
    gradient: "from-blue-500/15 to-cyan-500/5",
    heroImage: "/tech-hero.webp",
  },
  {
    name: "Software & Business",
    slug: "software-and-business",
    description: "Business tools, hosting and digital services.",
    merchantCount: 6,
    icon: Globe2,
    gradient: "from-violet-500/15 to-purple-500/5",
    heroImage: "/software-hero.webp",
  },
  {
    name: "Mobile & Connectivity",
    slug: "mobile-and-connectivity",
    description: "Mobile services, connectivity and travel SIMs.",
    merchantCount: 3,
    icon: Smartphone,
    gradient: "from-sky-500/15 to-blue-500/5",
    heroImage: "/mobile-hero.webp",
  },
  {
    name: "Travel & Transport",
    slug: "travel-and-transport",
    description: "Flights, accommodation and car rental.",
    merchantCount: 4,
    icon: Plane,
    gradient: "from-emerald-500/15 to-teal-500/5",
    heroImage: "/travel-hero.webp",
  },
  {
    name: "Pets & Animals",
    slug: "pets-and-animals",
    description: "Pet supplies, nutrition and animal care.",
    merchantCount: 3,
    icon: PawPrint,
    gradient: "from-amber-500/15 to-orange-500/5",
    heroImage: "/pets-hero.webp",
  },
  {
    name: "Health & Wellness",
    slug: "health-and-wellness",
    description: "Wellness, fitness and lifestyle products.",
    merchantCount: 3,
    icon: Heart,
    gradient: "from-rose-500/15 to-pink-500/5",
    heroImage: "/wellness-hero.webp",
  },
  {
    name: "Entertainment & Gifts",
    slug: "entertainment-and-gifts",
    description: "Experiences, tickets, gifts and digital creativity.",
    merchantCount: 4,
    icon: Gift,
    gradient: "from-purple-500/15 to-indigo-500/5",
    heroImage: "/gifts-hero.webp",
  },
  {
    name: "Home & Lifestyle",
    slug: "home-and-lifestyle",
    description: "Discover products for your home and everyday life.",
    merchantCount: 1,
    icon: House,
    gradient: "from-teal-500/15 to-green-500/5",
    heroImage: "/home-hero.webp",
  },
]

const merchants: Merchant[] = [
  {
    name: "FansEdge",
    slug: "fansedge",
    category: "Fashion & Apparel",
    description: "Sports apparel, fan gear and merchandise.",
    destinationUrl: "/api/v1/go/fansedge",
  },
  {
    name: "SHEIN",
    slug: "shein",
    category: "Fashion & Apparel",
    description: "Fashion, accessories and lifestyle collections.",
    destinationUrl: "/api/v1/go/shein",
  },
  {
    name: "Athleta",
    slug: "athleta",
    category: "Fashion & Apparel",
    description: "Activewear and performance clothing.",
    destinationUrl: "/api/v1/go/athleta",
  },
  {
    name: "Columbia",
    slug: "columbia",
    category: "Fashion & Apparel",
    description: "Outdoor clothing, footwear and equipment.",
    destinationUrl: "/api/v1/go/columbia",
  },
  {
    name: "ABT",
    slug: "abt",
    category: "Electronics & Technology",
    description: "Electronics, appliances and technology.",
    destinationUrl: "/api/v1/go/abt",
  },
  {
    name: "Fanttik",
    slug: "fanttik",
    category: "Electronics & Technology",
    description: "Innovative tools and electronic accessories.",
    destinationUrl: "/api/v1/go/fanttik",
  },
  {
    name: "HostGator",
    slug: "hostgator",
    category: "Software & Business",
    description: "Web hosting and online business services.",
    destinationUrl: "/api/v1/go/hostgator",
  },
  {
    name: "CyberGhost VPN",
    slug: "cyberghostvpn",
    category: "Software & Business",
    description: "Online privacy and VPN services.",
    destinationUrl: "/api/v1/go/cyberghostvpn",
  },
  {
    name: "Homebase",
    slug: "joinhomebase",
    category: "Software & Business",
    description: "Employee scheduling and workforce tools.",
    destinationUrl: "/api/v1/go/joinhomebase",
  },
  {
    name: "AmigoSIM",
    slug: "amigosim",
    category: "Mobile & Connectivity",
    description: "Mobile connectivity and SIM services.",
    destinationUrl: "/api/v1/go/amigosim",
  },
  {
    name: "Consumer Cellular",
    slug: "consumercellular",
    category: "Mobile & Connectivity",
    description: "Mobile plans and wireless services.",
    destinationUrl: "/api/v1/go/consumercellular",
  },
  {
    name: "Priceline",
    slug: "priceline",
    category: "Travel & Transport",
    description: "Travel bookings and accommodation.",
    destinationUrl: "/api/v1/go/priceline",
  },
  {
    name: "Budget",
    slug: "budget",
    category: "Travel & Transport",
    description: "Car rental and travel transportation.",
    destinationUrl: "/api/v1/go/budget",
  },
  {
    name: "Hill's Pet",
    slug: "hillspet",
    category: "Pets & Animals",
    description: "Pet nutrition and food products.",
    destinationUrl: "/api/v1/go/hillspet",
  },
  {
    name: "PetCareSupplies",
    slug: "petcaresupplies",
    category: "Pets & Animals",
    description: "Pet care products and supplies.",
    destinationUrl: "/api/v1/go/petcaresupplies",
  },
  {
    name: "BODi",
    slug: "bodi",
    category: "Health & Wellness",
    description: "Fitness and wellness programmes.",
    destinationUrl: "/api/v1/go/bodi",
  },
  {
    name: "EcoWise Vitamins",
    slug: "ecowisevitamins",
    category: "Health & Wellness",
    description: "Vitamins and wellness products.",
    destinationUrl: "/api/v1/go/ecowisevitamins",
  },
  {
    name: "GiftCards.com",
    slug: "giftcards.com",
    category: "Entertainment & Gifts",
    description: "Gift cards and gifting options.",
    destinationUrl: "/api/v1/go/giftcards.com",
  },
  {
    name: "StubHub",
    slug: "stubhub",
    category: "Entertainment & Gifts",
    description: "Tickets for live events and entertainment.",
    destinationUrl: "/api/v1/go/stubhub",
  },
  {
    name: "Gardenreet",
    slug: "gardenreet",
    category: "Home & Lifestyle",
    description: "Home and lifestyle shopping.",
    destinationUrl: "/api/v1/go/gardenreet",
  },
]

/* Discovery cards – curated shopping themes. */
const discoveryCards = [
  {
    title: "Refresh your wardrobe",
    description:
      "Explore fashion brands, everyday essentials and clothing collections.",
    category: "Fashion & Apparel",
    slug: "fashion-and-apparel",
    icon: Shirt,
    gradient: "from-fuchsia-600 to-purple-700",
  },
  {
    title: "Upgrade your technology",
    description:
      "Discover electronics, gadgets and useful technology products.",
    category: "Electronics & Technology",
    icon: Laptop,
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    title: "Plan your next journey",
    description:
      "Explore travel services, accommodation and transportation.",
    category: "Travel & Transport",
    icon: Plane,
    gradient: "from-emerald-600 to-teal-700",
  },
]

/* Featured merchant cards – the first 8 merchants from the central list. */
const featuredMerchants = merchants.slice(0, 8)

/* ==========================================================
   Shared component: SectionHeading
   ========================================================== */

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
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          {description}
        </p>
      </div>

      {href && linkText && (
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-indigo-700 transition hover:text-indigo-900"
        >
          {linkText}
          <ArrowRight size={17} />
        </Link>
      )}
    </div>
  )
}

/* ==========================================================
   Hero banner – full-bleed with decorative gradient and
   optional hero image.  The image is marked with
   `fill` + `object-cover` so it always covers the area
   regardless of viewport height.
   ========================================================== */

function HeroBanner() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#0b1534] text-white"
    >
      {/* Decorative layered gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="bg-[radial-gradient(ellipse_at_75%_15%,rgba(99,102,241,0.45),transparent_45%),radial-gradient(ellipse_at_10%_90%,rgba(14,165,233,0.2),transparent_40%)]"
        />
      </div>

      <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-20 top-20 -z-10 h-72 w-72 rounded-full border border-white/10" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-indigo-100 backdrop-blur">
              <Sparkles size={15} className="text-amber-300" />
              A smarter way to discover shopping opportunities
            </div>

            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Discover brands.
              <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Explore products.
              </span>
              Shop with confidence.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Discover brands, explore products and find shopping
              opportunities across fashion, technology, travel, lifestyle
              and more — all in one place.
            </p>

            {/* Search form */}
            <form
              action="/shop"
              method="GET"
              role="search"
              className="mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-white/15 bg-white p-2 shadow-2xl shadow-black/20 sm:flex-row"
            >
              <label htmlFor="homepage-search" className="sr-only">
                Search brands, products and categories
              </label>
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <Search size={20} className="shrink-0 text-slate-400" />
                <input
                  id="homepage-search"
                  name="q"
                  type="search"
                  placeholder="Search brands, products or categories..."
                  className="h-12 min-w-0 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-700 px-7 text-sm font-bold text-white transition hover:bg-indigo-800"
              >
                Search
                <ArrowRight size={17} />
              </button>
            </form>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400" />
                Multiple shopping categories
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-emerald-400" />
                Transparent affiliate links
              </span>
              <span className="flex items-center gap-2">
                <Store size={15} className="text-emerald-400" />
                Discover different brands
              </span>
            </div>
          </div>

          {/* Hero visual – decorative gradient + optional image */}
          <div className="relative lg:order-2">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-2xl" />

            <div
              className="relative rounded-2xl border border-white/15 bg-white/[0.07] p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
                    The discovery hub
                  </p>
                  <p className="mt-1 text-lg font-bold">Explore your interests</p>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-300">
                  DISCOVER
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {categories.slice(0, 4).map((category) => {
                  const Icon = category.icon

                  return (
                    <Link
                      key={category.slug}
                      href={`/shop?category=${category.slug}`}
                      className={`group rounded-2xl border border-white/10 bg-gradient-to-br ${category.gradient} p-4 transition hover:-translate-y-1 hover:border-white/30`}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                        <Icon size={21} />
                      </span>
                      <p className="mt-5 text-sm font-bold">{category.name}</p>
                      <p className="mt-1 text-xs text-slate-300">
                        {category.merchantCount} merchants
                      </p>
                    </Link>
                  )
                })}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-[#111f45]/90 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300">
                      <Compass size={21} />
                    </span>
                    <div>
                      <p className="text-sm font-bold">Your next discovery</p>
                      <p className="text-xs text-slate-400">
                        Explore brands and opportunities
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={19} className="text-indigo-300" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-white p-4 text-slate-900 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Tag size={20} />
                </span>
                <div>
                  <p className="text-sm font-extrabold">More to explore</p>
                  <p className="text-xs text-slate-500">
                    Brands across categories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================
   Categories grid section
   ========================================================== */

function CategoriesGrid() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Browse by interest"
          title="Explore our shopping categories"
          description="From fashion and electronics to travel, wellness and everyday lifestyle products, find brands that match what you are looking for."
          href="/shop?view=categories"
          linkText="View all categories"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon

            return (
              <Link
                key={category.slug}
                href={`/shop?category=${category.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5"
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} text-indigo-800`}
                >
                  <Icon size={25} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-slate-900 transition group-hover:text-indigo-700">
                    {category.name}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-500">
                    {category.description}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-indigo-700">
                    Explore category
                    <ChevronRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================
   Curated discovery collections (3 themes)
   ========================================================== */

function DiscoveryCollections() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Curated discovery"
          title="Find something worth exploring"
          description="Start with a category and discover merchants, products and shopping opportunities."
          href="/shop"
          linkText="Explore the shop"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {discoveryCards.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.slug}
                href={`/shop?category=${item.slug}`}
                className={`group relative isolate min-h-64 overflow-hidden rounded-3xl bg-gradient-to-br ${item.gradient} p-7 text-white shadow-lg transition hover:-translate-y-1`}
              >
                <div className="absolute -right-12 -top-12 -z-10 h-56 w-56 rounded-full border border-white/15" />
                <div className="absolute -right-4 -top-4 -z-10 h-36 w-36 rounded-full border border-white/15" />

                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15">
                  <Icon size={27} />
                </span>

                <p className="mt-8 text-xl font-extrabold">{item.title}</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-white/80">
                  {item.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
                  Discover now
                  <ArrowUpRight
                    size={17}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================
   Featured merchant discovery – first 8 merchants with
   clickable affiliate links.
   ========================================================== */

function FeaturedMerchantsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Merchant discovery"
          title="Brands to explore"
          description="Discover selected merchants from our shopping network. Follow the links to explore their current products and offers."
          href="/shop"
          linkText="Explore all merchants"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featuredMerchants.map((merchant, index) => (
            <article
              key={merchant.slug}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5"
            >
              {/* Image-free merchant card – use merchant’s affiliate URL
                  as the destination.  The icon + name + description identify the
                  merchant; the card links out through the affiliate endpoint. */}
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white bg-white text-indigo-700 shadow-sm">
                  {index % 4 === 0 && <ShoppingBag size={29} />}
                  {index % 4 === 1 && <Sparkles size={29} />}
                  {index % 4 === 2 && <Package size={29} />}
                  {index % 4 === 3 && <Store size={29} />}
                </span>
              </div>

              <div className="p-4">
                <p className="text-xs font-semibold text-indigo-600">
                  {merchant.category}
                </p>
                <h3 className="mt-1 font-extrabold text-slate-900">
                  {merchant.name}
                </h3>
                <p className="mt-2 min-h-10 text-xs leading-5 text-slate-500">
                  {merchant.description}
                </p>
                <Link
                  href={affiliateHref(merchant.slug)}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-indigo-700 transition hover:text-indigo-900"
                >
                  Visit merchant
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-slate-900">
              Looking for another brand?
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Explore more merchants across our shopping categories.
            </p>
          </div>
          <Link
            href="/shop"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-800 sm:mt-0"
          >
            Browse merchants
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================
   More merchants – alphabetical list (placeholder until API-backed
   directory is connected).  These are merchant *names only* – no
   fabricated URLs or prices.
   ========================================================== */

function MoreMerchants() {
  return (
    <section className="border-y border-slate-100 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              More to discover
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-slate-950">
              Explore more names in our merchant network
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700"
          >
            View merchant directory
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {merchants.map((merchant) => (
            <span
              key={merchant.slug}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600"
            >
              {merchant.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================
   Advertiser/promotional section
   ========================================================== */

function AdvertiserSection() {
  return (
    <section className="bg-[#101a3b] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            For brands and businesses
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Put your brand in front of shoppers.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Promote your business through sponsored listings, featured
            placements, category sponsorships and advertising campaigns on
            ClickNShop.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/advertisers"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-amber-300"
            >
              Advertise with us
              <ArrowUpRight size={17} />
            </Link>
            <Link
              href="/advertisers"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explore advertising
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:min-w-80">
          {[

            {
              icon: BadgePercent,
              title: "Sponsored listings",
              detail: "Prominent brand placements",
            },
            {
              icon: Store,
              title: "Featured brands",
              detail: "Brand discovery opportunities",
            },
            {
              icon: Megaphone,
              title: "Campaigns",
              detail: "Promotional advertising",
            },
            {
              icon: Compass,
              title: "Category exposure",
              detail: "Reach relevant shoppers",
            },
          ].map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
              >
                <Icon size={23} className="text-amber-300" />
                <p className="mt-4 text-sm font-bold">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {item.detail}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================
   Newsletter section
   ========================================================== */

function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-100 bg-white p-7 shadow-xl shadow-indigo-900/5 sm:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
            <Mail size={25} />
          </span>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            Stay in the loop
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Discover more. Stay inspired.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Get updates about new brands, shopping opportunities and
            featured discoveries.
          </p>

          <Link
            href="/shop"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-800"
          >
            Explore ClickNShop
            <ArrowRight size={17} />
          </Link>

          <p className="mt-4 text-xs text-slate-400">
            Newsletter subscriptions will be enabled when the subscription
            endpoint is connected.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================
   Affiliate disclosure
   ========================================================== */

function AffiliateDisclosure() {
  return (
    <section className="border-t border-slate-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-start">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
          <ShieldCheck size={22} />
        </span>
        <div>
          <h2 className="font-extrabold text-slate-950">
            Our affiliate disclosure
          </h2>
          <p className="mt-2 max-w-5xl text-sm leading-7 text-slate-600">
            ClickNShop participates in affiliate marketing programmes. Some
            links on this website are affiliate links. If you click one of
            these links and make a qualifying purchase or complete an
            eligible action, we may earn a commission at no additional cost
            to you. Affiliate relationships do not mean that every
            placement is sponsored. Sponsored listings and paid
            advertisements are identified separately. Product prices,
            promotions, availability, shipping and merchant terms are
            determined by the respective merchants and may change.
          </p>
          <Link
            href="/affiliate-disclosure"
            className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-indigo-700 hover:text-indigo-900"
          >
            Read our full disclosure
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================
   Footer
   ========================================================== */

function Footer() {
  return (
    <footer className="bg-[#09132e] px-4 pb-8 pt-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500">
                <ShoppingBag size={23} />
              </span>
              <span className="text-xl font-black tracking-tight">
                Click<span className="text-indigo-300">N</span>Shop
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Discover brands. Explore products. Shop with confidence.
              Your destination for shopping discovery.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/shop" className="hover:text-white">
                  Shop all
                </Link>
              </li>
              <li>
                <Link href="/shop?view=categories" className="hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/shop?sort=popular" className="hover:text-white">
                  Popular discoveries
                </Link>
              </li>
              <li>
                <Link href="/shop?view=merchants" className="hover:text-white">
                  Merchant directory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold">Business</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/advertisers" className="hover:text-white">
                  Advertise with us
                </Link>
              </li>
              <li>
                <Link href="/advertisers" className="hover:text-white">
                  Sponsored placements
                </Link>
              </li>
              <li>
                <Link href="/advertisers" className="hover:text-white">
                  Campaign opportunities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold">Information</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white">About ClickNShop</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">Contact</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">Terms of service</Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-white">
                  Affiliate disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ClickNShop. All rights reserved.
          </p>
          <p>
            ClickNShop is an independent shopping discovery and advertising
            platform.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ==========================================================
   Page composition
   ========================================================== */

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Navigation */}
      <header className="relative z-20 border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 text-white shadow-lg shadow-indigo-900/15">
              <ShoppingBag size={23} />
            </span>
            <span>
              <span className="block text-xl font-black tracking-tight text-slate-950">
                Click<span className="text-indigo-600">N</span>Shop
              </span>
              <span className="block text-[10px] font-medium tracking-[0.13em] text-slate-500">
                DISCOVER. EXPLORE. SHOP.
              </span>
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="order-3 flex w-full flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-100 pt-3 text-sm font-semibold text-slate-600 sm:order-none sm:w-auto sm:border-0 sm:pt-0"
          >
            <Link href="/" className="text-indigo-700">
              Home
            </Link>
            <Link href="/shop" className="transition hover:text-indigo-700">
              Shop
            </Link>
            <Link href="/shop?sort=popular" className="transition hover:text-indigo-700">
              Popular
            </Link>
            <Link
              href="/shop?view=categories"
              className="transition hover:text-indigo-700"
            >
              Categories
            </Link>
            <Link
              href="/advertisers"
              className="transition hover:text-indigo-700"
            >
              Advertise
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/shop"
              className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700 sm:inline-flex"
            >
              <Search size={16} />
              Explore
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-700 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-900/15 transition hover:bg-indigo-800"
            >
              Start shopping
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <HeroBanner />

      {/* Categories */}
      <CategoriesGrid />

      {/* Discovery collections */}
      <DiscoveryCollections />

      {/* Featured merchant discovery */}
      <FeaturedMerchantsSection />

      {/* More merchants */}
      <MoreMerchants />

      {/* Advertiser section */}
      <AdvertiserSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Affiliate disclosure */}
      <AffiliateDisclosure />

      {/* Footer */}
      <Footer />
    </main>
  )
}