import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Check, CreditCard, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "料金 | AI実践起業塾",
  description: "AI実践起業塾の料金 - 永年参加権5万円、300超の動画コンテンツに永年アクセス",
}

const features = [
  "300超の動画コンテンツに永年アクセス",
  "毎週開催の定期セミナーに参加",
  "67回分以上のセミナーアーカイブ視聴",
  "アプリ開発の伴走型サポート",
  "塾生コミュニティへの参加",
  "最新コンテンツの追加（永年無料）",
  "GASブートキャンプ参加権",
  "質問・相談サポート",
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto pl-6 relative page-title-arrow">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                料金プラン
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                一度の投資で、永年アクセス。50万円相当のコンテンツを、圧倒的なコストパフォーマンスで
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-20 lg:py-32 bg-muted">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-8 text-center">
                <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/20 text-sm font-semibold mb-4">
                  おすすめ
                </span>
                <h2 className="text-2xl font-bold">永年参加権</h2>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="text-5xl lg:text-6xl font-serif font-bold">50,000</span>
                  <span className="text-xl">円</span>
                </div>
                <p className="mt-2 text-primary-foreground/80">買い切り・月額課金なし</p>
              </div>

              {/* Features */}
              <div className="p-8 lg:p-12">
                <h3 className="text-lg font-bold text-foreground mb-6">含まれる内容</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Payment Options */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-lg font-bold text-foreground mb-6">お支払い方法</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Building className="h-5 w-5 text-primary" />
                        <h4 className="font-bold text-foreground">銀行振込</h4>
                      </div>
                      <p className="text-2xl font-bold text-foreground">50,000円</p>
                      <p className="text-sm text-muted-foreground mt-1">一括払い</p>
                    </div>
                    <div className="p-6 bg-muted rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <h4 className="font-bold text-foreground">クレジットカード</h4>
                      </div>
                      <p className="text-2xl font-bold text-foreground">55,000円</p>
                      <p className="text-sm text-muted-foreground mt-1">Square決済（手数料込み）</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                  <Button
                    asChild
                    size="lg"
                    className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-base"
                  >
                    <Link href="https://timerex.net/s/kanikaniman1234_00ba/202fa228" target="_blank" rel="noopener noreferrer">今すぐ申し込む</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Comparison */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Value</h2>
              <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                圧倒的なコストパフォーマンス
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="p-8 bg-muted rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">一般的なプログラミングスクール</h3>
                <p className="text-3xl font-bold text-muted-foreground">30万円〜100万円</p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li>3ヶ月〜6ヶ月の期間限定</li>
                  <li>基礎的なプログラミングスキル</li>
                  <li>サポート期間終了後はアクセス不可</li>
                </ul>
              </div>

              <div className="text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold">
                  VS
                </span>
              </div>

              <div className="p-8 bg-primary/10 rounded-lg border-2 border-primary">
                <h3 className="text-lg font-bold text-foreground mb-2">AI実践起業塾</h3>
                <p className="text-3xl font-bold text-primary">5万円</p>
                <ul className="mt-6 space-y-3 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    永年アクセス可能
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    実務直結のAI実装スキル
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    継続的なコンテンツ追加
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    50万円相当の価値
                  </li>
                </ul>
              </div>
            </div>

            {/* ROI Message */}
            <div className="mt-16 p-8 bg-card rounded-lg border border-border text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">投資回収の見込み</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                AI実践起業塾で習得したスキルを活用すれば、高単価案件を1件受注するだけで、入塾費用を回収できます。既存の給料より「0が1つ、2つ多い」案件を受注できる市場価値を獲得することで、この投資は確実にリターンを生み出します。
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
