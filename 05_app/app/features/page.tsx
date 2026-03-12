import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { TrendingUp, Zap, Target, ArrowRight, RotateCcw, Rocket } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "特徴 | AI実践起業塾",
  description: "AI実践起業塾の特徴 - なぜ今AI実装スキルが必要なのか、AI実践起業塾の4つの特徴",
}

const whyNowReasons = [
  {
    icon: TrendingUp,
    title: "市場価値の爆発",
    description: "4月の新年度予算サイクルに合わせて巨額の予算が投下。既存の給料より「0が1つ、2つ多い」案件を受注可能",
  },
  {
    icon: Zap,
    title: "先行者利益の獲得",
    description: "今（2月・3月）から準備を開始し、アプリや仕組みを構築できる状態にしておくことが絶対条件",
  },
  {
    icon: Target,
    title: "ユーザーからエンジニアへ",
    description: "AIを単に使うだけの「ユーザー」ではなく、ビジネスの仕組みを構築する「AIエンジニア」へ昇華",
  },
]

const features = [
  {
    number: "01",
    title: "初心者でも安心",
    description: "プログラミング未経験からでもAIエンジニアとして自立できる環境を提供。基礎から実践まで、段階的に学べるカリキュラムを用意しています。",
  },
  {
    number: "02",
    title: "実務直結のカリキュラム",
    description: "要件定義から実装まで、実際に動くものを作る経験を積み上げる。GASブートキャンプでは5日間で実践的なアプリ開発を体験できます。",
  },
  {
    number: "03",
    title: "永年参加権",
    description: "一度入塾すれば、300超の動画コンテンツに永年アクセス可能。月額課金なし、追加料金なしで新しいコンテンツも視聴できます。",
  },
  {
    number: "04",
    title: "最新技術を網羅",
    description: "ManusAI、BananaNL、GAS連携など、最先端のAI技術を習得。毎週のセミナーで最新トレンドもキャッチアップできます。",
  },
]

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl pl-6 relative page-title-arrow">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight whitespace-nowrap">
                なぜ今「AI実装スキル」が必要なのか
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                2025-2026年のマクロトレンドと戦略的勝ち筋
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Headline */}
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
              <span className="text-destructive">2026年は補助金×AIアプリ開発が爆発</span>
              <span className="text-foreground">——ここが一番重要です</span>
            </h2>

            {/* Two Cards Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-stretch">
              {/* 2025年の振り返り */}
              <div className="bg-card border border-border rounded-xl p-6 lg:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <RotateCcw className="h-6 w-6 text-primary" />
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">2025年の振り返り</h3>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground mb-2">背景：リスキリング補助金</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    昨年は教育分野への投資が活発で、<br />
                    「AI講師」や「教育事業」が市場を牽引。
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-muted-foreground text-sm">
                      「AIの使い方を教える」だけで<br />
                      十分に仕事として成立した年でした。
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center bg-card">
                  <ArrowRight className="h-5 w-5 text-muted-foreground lg:rotate-0 rotate-90" />
                </div>
              </div>

              {/* 2026年の大予測 */}
              <div className="bg-card border-2 border-destructive rounded-xl p-6 lg:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="h-6 w-6 text-foreground" />
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">2026年の大予測</h3>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground mb-2">背景：AI省力化・IT導入補助金</p>
                  <p className="text-muted-foreground text-sm mb-2">
                    今年は流れが完全に変わります。<br />
                    これら補助金を活用した
                  </p>
                  <p className="text-lg font-bold text-primary mb-4">
                    『AIアプリ開発』が爆発的に伸びます！
                  </p>
                  <div className="border-t border-border pt-4 mb-4">
                    <p className="font-bold text-foreground mb-2">企業のニーズの変化</p>
                    <p className="text-muted-foreground text-sm">
                      「学びたい」→「業務に実装してほしい」
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <p className="text-primary font-bold">
                      今、「作る技術」を持っている<br />
                      AIエンジニアが最強になります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyNowReasons.map((reason) => (
                <div key={reason.title} className="group">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-32 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Features</h2>
              <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                AI実践起業塾の4つの特徴
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="bg-card p-8 lg:p-10 rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <span className="text-6xl font-serif font-bold text-primary/20">{feature.number}</span>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
