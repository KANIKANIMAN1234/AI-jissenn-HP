import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Calendar, Video, Users, BookOpen, Flame, Lightbulb, MessageCircle, Archive } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "セミナー | AI実践起業塾",
  description: "AI実践起業塾のセミナー - 毎週開催の定期セミナー、67回分のアーカイブ動画",
}

const stats = [
  { icon: Calendar, value: "毎週", label: "定期開催" },
  { icon: Video, value: "67回+", label: "アーカイブ動画" },
  { icon: Users, value: "参加自由", label: "塾生限定" },
]

const features = [
  {
    icon: Flame,
    title: "最新技術の解説",
    description: "ManusAI、BananaNL、Cursorなど、最新のAI技術をいち早く解説。実務での活用方法を具体的に学べます。",
  },
  {
    icon: Lightbulb,
    title: "実践事例の共有",
    description: "塾生の成功事例、失敗事例を共有。リアルな実務での活用方法を学び、自分のビジネスに応用できます。",
  },
  {
    icon: MessageCircle,
    title: "質疑応答・相談",
    description: "セミナー内で直接質問が可能。あなたの疑問や課題に、講師や他の塾生が答えます。",
  },
  {
    icon: Archive,
    title: "アーカイブ視聴",
    description: "過去67回分以上のセミナーアーカイブにアクセス可能。いつでも好きな時に復習できます。",
  },
]

const topics = [
  {
    title: "ManusAI完全攻略",
    description: "自律型AIエージェントの使い方から、実務での活用事例まで徹底解説",
  },
  {
    title: "BananaNL × NotebookLM",
    description: "プレゼン資料を1/10の時間で作成する超速資料作成術",
  },
  {
    title: "GAS × LINE × OpenAI連携",
    description: "ビジネスの神経網を構築し、機会損失をゼロにする自動化戦略",
  },
  {
    title: "AI補助金の活用戦略",
    description: "2026年のAI補助金時代に向けた、先行者利益を獲得する戦略",
  },
  {
    title: "高単価案件の受注方法",
    description: "「0が1つ、2つ多い」案件を受注するための提案書作成と価格設定",
  },
  {
    title: "塾生の成功事例紹介",
    description: "ノンプログラマーから独立・高単価案件受注までの実際のストーリー",
  },
]

export default function SeminarPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                定期セミナー
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                毎週開催の実践セミナーで、最新のAI技術とビジネス戦略を学ぶ
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-muted border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">常に最新の情報をキャッチアップ</h2>
              <p className="text-muted-foreground leading-relaxed">
                AI技術は日々進化しています。AI実践起業塾では、毎週開催される定期セミナーを通じて、最新のAI技術、ビジネス戦略、実務での活用事例を共有しています。
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground/20 mb-4">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-serif font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-8 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Topics</h2>
              <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                過去のセミナートピック例
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <div
                  key={topic.title}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-16 bg-muted border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">開催スケジュール</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">開催頻度</h3>
                <p className="text-foreground">毎週1回（曜日・時間は塾生コミュニティで告知）</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">参加方法</h3>
                <p className="text-foreground">Zoom（オンライン）</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">アーカイブ</h3>
                <p className="text-foreground">全セミナーを録画。後日視聴可能</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">参加費</h3>
                <p className="text-foreground">無料（塾生限定）</p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
