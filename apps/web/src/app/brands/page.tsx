"use client"

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

export const metadata: Metadata = {
  title: "ClickNShop – Brands",
  description:
    "Browse verified brands and merchants across fashion, electronics, travel, wellness and more.",
}

type Merchant = {
  name: string
  slug: string
  category: string
  description: string
  logo: string
}

const merchants: Merchant[] = [
  {
    name: "FansEdge",
    slug: "fansedge",
    category: "Fashion & Apparel",
    description: "Sports apparel, fan gear and merchandise.",
    logo: "/fansedge-logo.webp",
  },
  {
    name: "SHEIN",
    slug: "shein",
    category: "Fashion & Apparel",
    description: "Fashion, accessories and lifestyle collections.",
    logo: "/shein-logo.webp",
  },
  {
    name: "Athleta",
    slug: "athleta",
    category: "Fashion & Apparel",
    description: "Activewear and performance clothing.",
    logo: "/athleta-logo.webp",
  },
  {
    name: "Columbia",
    slug: "columbia",
    category: "Fashion & Apparel",
    description: "Outdoor clothing, footwear and equipment.",
    logo: "/columbia-logo.webp",
  },
  {
    name: "ABT",
    slug: "abt",
    category: "Electronics & Technology",
    description: "Electronics, appliances and technology.",
    logo: "/abt-logo.webp",
  },
  {
    name: "Fanttik",
    slug: "fanttik",
    category: "Electronics & Technology",
    description: "Innovative tools and electronic accessories.",
    logo: "/fanttik-logo.webp",
  },
  {
    name: "HostGator",
    slug: "hostgator",
    category: "Software & Business",
    description: "Web hosting and online business services.",
    logo: "/hostgator-logo.webp",
  },
  {
    name: "CyberGhost VPN",
    slug: "cyberghostvpn",
    category: "Software & Business",
    description: "Online privacy and VPN services.",
    logo: "/cyberghostvpn-logo.webp",
  },
  {
    name: "Homebase",
    slug: "joinhomebase",
    category: "Software & Business",
    description: "Employee scheduling and workforce tools.",
    logo: "/homebase-logo.webp",
  },
  {
    name: "AmigoSIM",
    slug: "amigosim",
    category: "Mobile & Connectivity",
    description: "Mobile connectivity and SIM services.",
    logo: "/amigosim-logo.webp",
  },
  {
    name: "Consumer Cellular",
    slug: "consumercellular",
    category: "Mobile & Connectivity",
    description: "Mobile plans and wireless services.",
    logo: "/consumercellular-logo.webp",
  },
  {
    name: "Priceline",
    slug: "priceline",
    category: "Travel & Transport",
    description: "Travel bookings and accommodation.",
    logo: "/priceline-logo.webp",
  },
  {
    name: "Budget",
    slug: "budget",
    category: "Travel & Transport",
    description: "Car rental and travel transportation.",
    logo: "/budget-logo.webp",
  },
  {
    name: "Hill's Pet",
    slug: "hillspet",
    category: "Pets & Animals",
    description: "Pet nutrition and food products.",
    logo: "/hillspet-logo.webp",
  },
  {
    name: "PetCareSupplies",
    slug: "petcaresupplies",
    category: "Pets & Animals",
    description: "Pet care products and supplies.",
    logo: "/petcaresupplies-logo.webp",
  },
  {
    name: "BODi",
    slug: "bodi",
    category: "Health & Wellness",
    description: "Fitness and wellness programmes.",
    logo: "/bodi-logo.webp",
  },
  {
    name: "EcoWise Vitamins",
    slug: "ecowisevitamins",
    category: "Health & Wellness",
    description: "Vitamins and wellness products.",
    logo: "/ecowisevitamins-logo.webp",
  },
  {
    name: "GiftCards.com",
    slug: "giftcards.com",
    category: "Entertainment & Gifts",
    description: "Gift cards and gifting options.",
    logo: "/giftcards.com-logo.webp",
  },
  {
    name: "StubHub",
    slug: "stubhub",
    category: "Entertainment & Gifts",
    description: "Tickets for live events and entertainment.",
    logo: "/stubhub-logo.webp",
  },
  {
    name: "Gardenreet",
    slug: "gardenreet",
    category: "Home & Lifestyle",
    description: "Home and lifestyle shopping.",
    logo: "/gardenreet-logo.webp",
  },
]

type Brand = {
  name: string
  slug: string
  category: string
  description: string
  logo: string
  merchantCount: number
}

const brands: Brand[] = [
  {
    name: "Fashion & Apparel",
    slug: "fashion-and-apparel",
    category: "Fashion & Apparel",
    description: "Clothing, footwear, accessories and everyday style.",
    logo: "/fashion-brands.webp",
    merchantCount: 11,
  },
  {
    name: "Electronics & Technology",
    slug: "electronics-and-technology",
    category: "Electronics & Technology",
    description: "Electronics, gadgets and technology essentials.",
    logo: "/tech-brands.webp",
    merchantCount: 3,
  },
  {
    name: "Software & Business",
    slug: "software-and-business",
    category: "Software & Business",
    description: "Business tools, hosting and digital services.",
    logo: "/software-brands.webp",
    merchantCount: 6,
  },
  {
    name: "Mobile & Connectivity",
    slug: "mobile-and-connectivity",
    category: "Mobile & Connectivity",
    description: "Mobile services, connectivity and travel SIMs.",
    logo: "/mobile-brands.webp",
    merchantCount: 3,
  },
  {
    name: "Travel & Transport",
    slug: "travel-and-transport",
    category: "Travel & Transport",
    description: "Flights, accommodation and car rental.",
    logo: "/travel-brands.webp",
    merchantCount: 4,
  },
  {
    name: "Pets & Animals",
    slug: "pets-and-animals",
    category: "Pets & Animals",
    description: "Pet supplies, nutrition and animal care.",
    logo: "/pets-brands.webp",
    merchantCount: 3,
  },
  {
    name: "Health & Wellness",
    slug: "health-and-wellness",
    category: "Health & Wellness",
    description: "Wellness, fitness and lifestyle products.",
    logo: "/wellness-brands.webp",
    merchantCount: 3,
  },
  {
    name: "Entertainment & Gifts",
    slug: "entertainment-and-gifts",
    category: "Entertainment & Gifts",
    description: "Experiences, tickets, gifts and digital creativity.",
    logo: "/gifts-brands.webp",
    merchantCount: 4,
  },
  {
    name: "Home & Lifestyle",
    slug: "home-and-lifestyle",
    category: "Home & Lifestyle",
    description: "Discover products for your home and everyday life.",
    logo: "/home-brands.webp",
    merchantCount: 1,
  },
]

/* ==========================================================
   Brands grid – each brand displays a logo image, name and
   description.  Logos link to the shop page filtered by
   category so visitors can browse the associated merchants.
   ========================================================== */

function BrandsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {brands.map((brand) => {
        const Logo = brand.logo

        return (
          <Link
            key={brand.slug}
            href={`/shop?category=${brand.slug}`}
            className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition-shadow"
          >
            <Image
              src={Logo}
              alt={brand.name}
              width={280}
              height={140}
              className="aspect-square w-full h-object object-cover group-hover:opacity-90 transition-opacity"
              priority={false}
            />
            <div className="p-5">
              <h3 className="font-medium text-slate-900 truncate">
                {brand.name}
              </h3>
              <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                {brand.description}
              </p>
              <p className="mt-3 text-xs font-bold text-indigo-600">
                {brand.merchantCount} merchants
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

/* ==========================================================
   Page layout
   ========================================================== */

export default function BrandsPage() {
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
            <Link href="/advertiser" className="hover:text-indigo-600">Advertise</Link>
          </nav>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto text-center mb-12">
          <h1 className="text-4xl font-black tracking-tight text-slate-950">
            Browse Brands
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600 max-w-2xl mx-auto">
            Discover verified brands and merchants across fashion,
            electronics, travel, wellness and more.  Each brand page
            showcases the merchants that match your interest.
          </p>
        </div>

        <BrandsGrid />

        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            Explore all categories ›
            <Link href="/shop?view=categories" className="font-medium text-indigo-600 hover:underline">
              Shop by category
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}