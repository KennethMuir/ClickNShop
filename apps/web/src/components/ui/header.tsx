"use client"

import Link from "next/link"
import { useState } from "react"
import { Search } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a3 3 0 003 3h2a3 3 0 003-3v-10M5 10a3 3 0 013-3h2a3 3 0 013 3v10m-7-7a3 3 0 003 3h2a3 3 0 003-3v-10a3 3 0 00-3-3H5a3 3 0 00-3 3v10Z" />
            </svg>
          </span>
          <span className="text-xl font-black tracking-tight">
            Click<span className="text-indigo-600">N</span>Shop
          </span>
        </Link>

        {/* Desktop Navigation */}        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/shop" className="hover:text-indigo-600">Shop</Link>
          <Link href="/advertisers" className="hover:text-indigo-600">Advertise</Link>
          <Link href="/affiliate-disclosure" className="hover:text-indigo-600">Disclosure</Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-3 sm:hidden" aria-label="Main menu">
          <button
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-slate-100"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}        <div
          className={`fixed inset-0 left-0 top-0 right-0 bg-black/70 backdrop-blur-sm z-50 ${mobileMenuOpen ? "visible" : "hidden"}`}
          aria-hidden={true}
        >
          <div className="fixed inset-0 flex flex-col items-center justify-center gap-8 py-12">
            <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">Click<span className="text-indigo-600">N</span>Shop</Link>

            <nav className="flex flex-col gap-6 w-full">
              <Link href="/" className="hover:text-indigo-600">Home</Link>
              <Link href="/shop" className="hover:text-indigo-600">Shop</Link>
              <Link href="/advertisers" className="hover:text-indigo-600">Advertise</Link>
              <Link href="/affiliate-disclosure" className="hover:text-indigo-600">Disclosure</Link>
            </nav>

            <div className="mt-8 w-full border-t border-slate-200 pt-6">
              <form
                action="/shop"
                method="GET"
                role="search"
                className="w-full flex items-center gap-3 px-4 py-3"
              >
                <Search className="h-5 w-5 text-slate-400" />
                <input
                  type="search"
                  name="q"
                  placeholder="Search brands, products or categories..."
                  className="flex-1 bg-transparent outline-none text-sm text-slate-900"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}