"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const mainNavItems = [
  { href: "/about", label: "はじめに" },
  { href: "/new-release", label: "NEWリリース" },
  { href: "/features", label: "特徴" },
  { href: "/curriculum", label: "カリキュラム" },
  { href: "/seminar", label: "セミナー" },
  { href: "/success", label: "実績" },
  { href: "/founder", label: "発起人" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "料金" },
  { href: "/faq", label: "FAQ" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="AI実践起業塾ロゴ"
              width={48}
              height={48}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold tracking-tight" style={{ color: '#004AAD' }}>
                AI実践起業塾
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                次世代の「AIエンジニア」として稼ぐ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="https://timerex.net/s/kanikaniman1234_00ba/202fa228" target="_blank" rel="noopener noreferrer">無料カウンセリング</Link>
            </Button>

            {/* Admin Login Button */}
            <Button
              asChild
              variant="outline"
              size="icon"
              className="hidden sm:inline-flex border-border hover:bg-accent"
              title="管理者ログイン"
            >
              <Link href="/admin/login">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニューを開く"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-16 bg-background border-b border-border transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="https://timerex.net/s/kanikaniman1234_00ba/202fa228" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
              無料カウンセリング
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
