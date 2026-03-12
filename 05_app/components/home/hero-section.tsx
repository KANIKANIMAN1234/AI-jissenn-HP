import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - fills viewport width/height */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/hero-classroom.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 w-full h-full bg-white/85" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-8 lg:pt-16 pb-20 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            2026年 AI補助金時代の到来
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-foreground leading-tight">
            <span className="block">AIを「使う」側から</span>
            <span className="block text-primary">「作る」側へ</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            実務で稼げるAIエンジニアになる。
            <br className="hidden sm:block" />
            市場価値を爆発させる最大のチャンスは、今この瞬間。
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
            >
              <Link href="https://timerex.net/s/kanikaniman1234_00ba/202fa228" target="_blank" rel="noopener noreferrer">
                今すぐ無料カウンセリングを予約
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground">300+</div>
              <div className="mt-2 text-sm text-muted-foreground">動画コンテンツ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground">50万円</div>
              <div className="mt-2 text-sm text-muted-foreground">相当の価値</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground">永年</div>
              <div className="mt-2 text-sm text-muted-foreground">参加権</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
