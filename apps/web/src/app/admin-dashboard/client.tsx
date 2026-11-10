"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Menu, ChevronDown, LogOutIcon, Mail, Home, Settings, Users, Settings2, BarChart2, ShoppingBag, Shield, Calendar, Folder, LogIn, MailSearch, Clock } from "lucide-react"
import Link from "next/link"

interface DashboardStats {
  totalMerchants: number
  activeAffiliateLinks: number
  activeOffers: number
  advertisers: number
  pendingApplications: number
  activeCampaigns: number
  totalImpressions: number
  totalClicks: number
  affiliateConversions: number
  advertisingRevenue: number
}

export function AdminDashboardClient() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/v1/admin/dashboard", {
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load dashboard statistics")
        }
        return response.json()
      })
      .then((data) => {
        setStats(data)
        setLoading(false)
      })
      .catch(() => {
        setError("Error connecting to server")
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="animate-spin h-6 w-6 text-navy" />
        <span className="ml-2">Loading...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 bg-red-100 rounded-lg border-red-400 text-red-700">
        <strong className="font-medium">Error:</strong> {error}
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto py-8">
      <nav className="mb-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div>
            <h1 className="text-3xl font-bold text-navy">Admin Dashboard</h1>
            <p className="text-gray-600">Platform administration</p>
          </div>
          <Link
            href="/"
            className="text-blue-600 hover:underline"
          >
            ← Back to website
          </Link>
        </div>
      </nav>

      {/* Statistics Cards */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Merchants</p>
                <p className="text-2xl font-bold text-navy">{stats.totalMerchants}</p>
              </div>
              <div className="p-2 bg-navy/10 rounded-lg">
                {/* Menu icon removed for build testing */}
              </div>
            </div>
          </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Active Affiliate Links</p>
                  <p className="text-2xl font-bold text-navy">{stats.activeAffiliateLinks}</p>
                </div>
                <div className="p-2 bg-navy/10 rounded-lg">
                  <Menu className="h-5 w-5 text-navy" />
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Advertisers</p>
                  <p className="text-2xl font-bold text-navy">{stats.advertisers}</p>
                </div>
                <div className="p-2 bg-navy/10 rounded-lg">
                  <Users className="h-5 w-5 text-navy" />
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Pending Applications</p>
                  <p className="text-2xl font-bold text-navy">{stats.pendingApplications}</p>
                </div>
                <div className="p-2 bg-navy/10 rounded-lg">
                  <Clock className="h-5 w-5 text-navy" />
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Key Metrics Section */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4">
              <p className="text-sm text-gray-500">Total Impressions</p>
              <p className="text-2xl font-bold text-navy">{stats.totalImpressions}</p>
            </Card>

            <Card className="p-4">
              <p className="text-sm text-gray-500">Total Clicks</p>
              <p className="text-2xl font-bold text-navy">{stats.totalClicks}</p>
            </Card>

            <Card className="p-4">
              <p className="text-sm text-gray-500">Affiliate Conversions</p>
              <p className="text-2xl font-bold text-navy">{stats.affiliateConversions}</p>
            </Card>

            <Card className="p-4">
              <p className="text-sm text-gray-500">Advertising Revenue</p>
              <p className="text-2xl font-bold text-navy">${stats.advertisingRevenue.toFixed(2)}</p>
            </Card>
          </div>
        )}

        {/* Action Sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Merchant Management */}
          <Link href="/admin/merchants" className="block">
            <Card className="p-6 hover:shadow-lg transition-shadow">

            <h3 className="font-medium text-navy mb-3">Merchant Management</h3>
            <p className="text-gray-600 text-sm">Manage merchants, categories, and affiliate destinations</p>
            <Menu className="mt-2 h-5 w-5 text-navy" />

            </Card>
          </Link>

          {/* Offer Management */}
          <Link href="/admin/offers" className="block">
            <Card className="p-6 hover:shadow-lg transition-shadow">

            <h3 className="font-medium text-navy mb-3">Offer Management</h3>
            <p className="text-gray-600 text-sm">Create, edit, and approve offers</p>
            <ChevronDown className="mt-2 h-5 w-5 text-navy" />

            </Card>
          </Link>

          {/* Advertiser Management */}
          <Link href="/admin/advertisers" className="block">
            <Card className="p-6 hover:shadow-lg transition-shadow">

            <h3 className="font-medium text-navy mb-3">Advertiser Management</h3>
            <p className="text-gray-600 text-sm">Review applications and manage advertiser accounts</p>
            <Settings className="mt-2 h-5 w-5 text-navy" />

            </Card>
          </Link>

          {/* Campaign Management */}
          <Link href="/admin/campaigns" className="block">
            <Card className="p-6 hover:shadow-lg transition-shadow">

            <h3 className="font-medium text-navy mb-3">Campaign Management</h3>
            <p className="text-gray-600 text-sm">Create and manage advertising campaigns</p>
            <BarChart2 className="mt-2 h-5 w-5 text-navy" />

            </Card>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="font-medium text-navy mb-3">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/api/v1/admin/merchants" className="text-blue-600 hover:underline">Merchants</Link>
            <Link href="/api/v1/admin/offers" className="text-blue-600 hover:underline">Offers</Link>
            <Link href="/api/v1/admin/advertisers" className="text-blue-600 hover:underline">Advertisers</Link>
            <Link href="/api/v1/admin/campaigns" className="text-blue-600 hover:underline">Campaigns</Link>
          </div>
        </div>
      </div>
    )
  }