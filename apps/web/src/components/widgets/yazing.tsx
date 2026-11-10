"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

// Yazing Widget Integration
// ID: yzwg-18124934b9951f7acef555688afa13c3
// Username: KennethMuiruri
// Script: https://yazing.com/js/showdeals-yzwg.js?id=yzwg-18124934b9951f7acef555688afa13c3&d=

interface YazingWidgetProps {
  containerId?: string
  className?: string
  fallback?: boolean
}

export function YazingWidget({ containerId = "yazing-widget", className, fallback = true }: YazingWidgetProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadWidget()
  }, [])

  const loadWidget = () => {
    const widgetId = "yzwg-18124934b9951f7acef555688afa13c3"
    const scriptUrl = "https://yazing.com/js/showdeals-yzwg.js?id=yzwg-18124934b9951f7acef555688afa13c3&d="

    const script = document.createElement("script")
    script.src = scriptUrl
    script.async = true
    script.defer = true

    script.onload = () => {
      setIsLoaded(true)
      if ((window as any).Yazing && (window as any).Yazing.init) {
        ;(window as any).Yazing.init({
          id: widgetId,
          username: "KennethMuiruri",
        })
      }
    }

    script.onerror = () => {
      setError("Failed to load Yazing widget")
      if (fallback) {
        showFallback()
      }
    }

    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }

  const showFallback = () => {
    return (
      <div className="yazing-fallback p-4 bg-white rounded-lg shadow-md">
        <h3 className="font-medium text-navy mb-3">Featured Merchants</h3>
        <p className="text-gray-600 text-sm">
          Yazing widget is temporarily unavailable. Discover merchants
          through our native catalogue below.
        </p>
        <Button
          variant="outline"
          onClick={() => window.location.href = "/shop"}
          className="mt-2"
        >
          Browse Merchants
        </Button>
      </div>
    )
  }

  if (error && !isLoaded) {
    return showFallback()
  }

  if (!isLoaded) {
    return (
      <div className="yazing-loading flex min-h-64 items-center justify-center">
        <span className="animate-spin h-6 w-6 text-navy" />
        <span className="ml-2 text-sm text-navy">Loading Yazing widget...</span>
      </div>
    )
  }

  // Widget is loaded - render the container
  // The actual widget DOM will be injected by the Yazing script
  return (
    <div
      id={containerId}
      className={className || "yazing-widget-container"}
      dangerouslySetInnerHTML={{ __html: "<div id='yzwg-deals'></div>" }}
    />
  )
}