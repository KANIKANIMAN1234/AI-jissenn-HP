import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Rocket, Palette, Bot, Link2, Lightbulb, BarChart3 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "カリキュラム | AI実践起業塾",
  description: "AI実践起業塾のカリキュラム - 300超の動画コンテンツで実務スキルを習得",
}

const curriculumItems = [
  {
    icon: Rocket,
    title: "GASブートキャンプ",
    duration: "5日間集中講座",
    description: "要件定義から仕様書作成、実装までを一気通貫で学ぶ超実践型講座。短期間で「実際に動くもの」を作る経験を積み上げます。",
    points: ["要件定義の基礎", "仕様書の作成方法", "GASによる実装", "デバッグとテスト"],
  },
  {
    icon: Palette,
    title: "BananaNL マスター",
    duration: "デザイン民主化",
    description: "日本語テキスト入力を得意とする画像生成エンジン「ナノバナ」を使いこなし、プロフェッショナルな資料を1/10の時間で作成。",
    points: ["NotebookLMとの連携", "300種類以上のスタイル活用", "プレゼン資料の超速作成", "ブランディング戦略"],
  },
  {
    icon: Bot,
    title: "ManusAI 完全攻略",
    duration: "自律型エージェント",
    description: "完全自律型AIエージェントを使いこなし、30人以上の部下に同時指示を出すような並列処理を実現。アプリ生成から公開まで。",
    points: ["ワイドリサーチ（多重影分身）", "永続的なクラウド実行", "アプリ生成と公開", "市場リサーチ自動化"],
  },
  {
    icon: Link2,
    title: "API連携マスター",
    duration: "ビジネス自動化",
    description: "GAS × LINE × OpenAI の連携で、ビジネスの神経網を構築。情報の見落としをゼロにし、機会損失を防ぐ。",
    points: ["GASによる監視システム", "OpenAI APIでの解析", "LINE通知の実装", "即応性の確保"],
  },
  {
    icon: Lightbulb,
    title: "AI実装戦略",
    duration: "ビジネス構築",
    description: "AIを単に使うだけでなく、ビジネスの仕組みとして構築。高単価案件を受注するための戦略的思考を習得。",
    points: ["要件定義のフレームワーク", "クライアントヒアリング", "提案書の作成", "価格設定の戦略"],
  },
  {
    icon: BarChart3,
    title: "データ分析・可視化",
    duration: "意思決定支援",
    description: "市場リサーチ結果をレーダーチャート付きのExcelで出力。データを武器に変える技術を習得。",
    points: ["データ収集の自動化", "AIによる分析", "可視化とレポート作成", "意思決定への活用"],
  },
]

const stats = [
  { value: "300+", label: "動画コンテンツ" },
  { value: "50万円", label: "相当の価値" },
  { value: "永年", label: "アクセス権" },
  { value: "11", label: "カテゴリー" },
]

export default function CurriculumPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl pl-6 relative page-title-arrow">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                実務直結のカリキュラム
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                300超の動画コンテンツで、AIエンジニアとしてのスキルを体系的に習得
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-serif font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Grid */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Curriculum</h2>
              <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                学べる内容
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {curriculumItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-background p-8 rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{item.duration}</p>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  <ul className="mt-6 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
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
