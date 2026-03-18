export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        {/* 画像をここに配置してください */}
        {/* 推奨サイズ: 1200px × 1080px (横長の画像) */}
        <div className="w-full h-full bg-gradient-to-l from-muted/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-32 w-full">
        <div className="max-w-2xl">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-foreground leading-tight">
            <span className="block">AIを「使う」側から</span>
            <span className="block text-primary">「作る」側へ</span>
          </h1>

          {/* Hero Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
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
