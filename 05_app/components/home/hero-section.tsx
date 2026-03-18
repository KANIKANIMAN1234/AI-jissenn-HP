import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2">
        <Image
          src="/hero-background.png"
          alt="AI実践起業塾"
          fill
          className="object-cover opacity-20 lg:opacity-100"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            2026年 AI補助金時代の到来
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-foreground leading-tight">
            <span className="block">AIを「使う」側から</span>
            <span className="block text-primary">「作る」側へ</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            実務で稼げるAIエンジニアになる。
            <br className="hidden sm:block" />
            市場価値を爆発させる最大のチャンスは、今この瞬間。
          </p>

          {/* Hero Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground">300+</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground">50万円</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground">永年</div>
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
