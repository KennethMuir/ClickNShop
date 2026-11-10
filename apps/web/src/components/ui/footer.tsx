import Link from "next/link"

export function Footer() {
  return (
<footer className="bg-[#09132e] text-white">
  <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a3 3 0 003 3h2a3 3 0 003-3v-10M5 10a3 3 0 013-3h2a3 3 0 013 3v10m-7-7a3 3 0 003 3h2a3 3 0 003-3v-10a3 3 0 00-3-3H5a3 3 0 00-3 3v10Z" />
            </svg>
          </span>
          <span className="text-xl font-black tracking-tight">
            Click<span className="text-indigo-300">N</span>Shop
          </span>
        </Link>

        <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
          Discover brands. Explore products. Shop with confidence. Your destination for shopping discovery.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-extrabold">Explore</h3>
        <ul className="mt-5 space-y-3 text-sm text-slate-400">
          <li>
            <Link href="/shop" className="hover:text-white">Shop all</Link>
          </li>
          <li>
            <Link href="/shop?view=categories" className="hover:text-white">Categories</Link>
          </li>
          <li>
            <Link href="/shop?sort=popular" className="hover:text-white">Popular discoveries</Link>
          </li>
          <li>
            <Link href="/advertisers" className="hover:text-white">Merchant directory</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-extrabold">Business</h3>
        <ul className="mt-5 space-y-3 text-sm text-slate-400">
          <li>
            <Link href="/advertisers" className="hover:text-white">Advertise with us</Link>
          </li>
          <li>
            <Link href="/advertisers" className="hover:text-white">Sponsored placements</Link>
          </li>
          <li>
            <Link href="/advertisers" className="hover:text-white">Campaign opportunities</Link>
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
            <Link href="/affiliate-disclosure" className="hover:text-white">Affiliate disclosure</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>
        2026 ClickNShop. All rights reserved.
      </p>
      <p>
        ClickNShop is an independent shopping discovery and advertising platform.
      </p>
    </div>
  </div>
</footer>
  )
}
