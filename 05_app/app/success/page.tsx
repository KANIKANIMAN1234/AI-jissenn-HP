import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Trophy, Briefcase, GraduationCap, Quote } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "実績 | AI実践起業塾",
  description: "AI実践起業塾の実績 - ノンプログラマーから独立・高単価案件受注までの成功事例",
}

const successStories = [
  {
    icon: Trophy,
    name: "エレンさん",
    role: "元会社員 → 独立AIエンジニア",
    featured: true,
    title: "プログラミング経験ゼロから独立へ",
    description: "エレンさんは、元々はプログラミング経験のない会社員でした。AI実践起業塾で学んだスキルを武器に独立を決意。現在は、AIを活用したアプリ開発で実務を劇的に改善させています。",
    achievements: [
      "車内向けシーズンチケット管理アプリを自作。社内の予約管理を劇的に効率化",
      "案件管理アプリを開発。複数のプロジェクトを一元管理し、生産性を大幅向上",
      "GASとAIを組み合わせた自動化システムを構築",
      "独立後、高単価案件を継続的に受注",
    ],
    quote: "プログラミング経験がなくても、AIを使えば実務で使えるアプリが作れる。この塾で学んだスキルが、独立の決め手になりました。",
  },
  {
    icon: Briefcase,
    name: "Aさん",
    role: "営業職 → AIコンサルタント",
    featured: false,
    title: "営業スキル × AI技術で高単価案件を受注",
    description: "営業職として培ったコミュニケーションスキルに、AI実装スキルを掛け合わせることで、クライアントの課題を技術で解決できるAIコンサルタントへ転身。",
    achievements: [
      "BananaNLを活用した提案資料で、1万ドル（約150万円）クラスの商談を成約",
      "GAS × OpenAI連携で、クライアントの業務自動化を実現",
      "既存の給料より「0が1つ多い」案件を複数受注",
    ],
  },
  {
    icon: GraduationCap,
    name: "Bさん",
    role: "教育関係者 → AI教材開発者",
    featured: false,
    title: "教育現場にAIを導入",
    description: "ManusAIを活用し、中学生向けの「英単語神経衰弱アプリ」を数十分で構築。教育現場でのAI活用の可能性を広げています。",
    achievements: [
      "学習アプリを短時間で開発し、教育現場に導入",
      "AIによる自動採点システムを構築",
      "教育機関からの開発依頼を受注",
    ],
  },
]

const metrics = [
  { value: "300+", label: "動画コンテンツ" },
  { value: "67+", label: "セミナー開催回数" },
  { value: "多数", label: "独立・転職成功者" },
  { value: "高単価", label: "案件受注実績" },
]

export default function SuccessPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl pl-6 relative page-title-arrow">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                塾生の成功実績
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                ノンプログラマーから独立・高単価案件受注までの実際のストーリー
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-muted border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">実務で稼げるAIエンジニアへ</h2>
              <p className="text-muted-foreground leading-relaxed">
                AI実践起業塾では、プログラミング未経験からでも、実務で稼げるAIエンジニアとして自立できる環境を提供しています。ここでは、実際に塾生が達成した成果をご紹介します。
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              {successStories.map((story) => (
                <div
                  key={story.name}
                  className={`p-8 lg:p-12 rounded-2xl border ${
                    story.featured
                      ? "bg-primary/5 border-primary/30"
                      : "bg-background border-border"
                  }`}
                >
                  {story.featured && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-6">
                      Featured
                    </span>
                  )}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <story.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{story.name}</h3>
                      <p className="text-sm text-primary font-medium">{story.role}</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-4">{story.title}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">{story.description}</p>
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">主な成果</h5>
                    <ul className="space-y-3">
                      {story.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {story.quote && (
                    <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border">
                      <Quote className="h-6 w-6 text-primary flex-shrink-0" />
                      <p className="text-foreground italic">"{story.quote}"</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-center text-xl font-bold text-primary-foreground mb-12">塾全体の実績</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-serif font-bold text-primary-foreground">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm text-primary-foreground/80">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Success */}
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">あなたも次の成功者に</h2>
            <p className="text-muted-foreground leading-relaxed">
              AI実践起業塾で学んだスキルは、単なる知識ではなく、実務で稼げる「武器」です。あなたも次の成功者として、私たちと共に歩みませんか？
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
