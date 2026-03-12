import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Trophy, Briefcase, GraduationCap, Quote } from "lucide-react"
import type { Metadata } from "next"
import { sql } from "@/lib/db"

export const metadata: Metadata = {
  title: "実績 | AI実践起業塾",
  description: "AI実践起業塾の実績 - ノンプログラマーから独立・高単価案件受注までの成功事例",
}

export const revalidate = 0

const iconMap = {
  Trophy,
  Briefcase,
  GraduationCap,
}

async function getSuccessStories() {
  try {
    const stories = await sql`
      SELECT * FROM success_stories 
      ORDER BY display_order ASC, created_at DESC
    `
    
    return stories.map(story => ({
      ...story,
      icon: iconMap[story.icon as keyof typeof iconMap] || Trophy,
      achievements: typeof story.achievements === 'string' 
        ? JSON.parse(story.achievements) 
        : story.achievements
    }))
  } catch (error) {
    console.error("Failed to fetch success stories:", error)
    return []
  }
}

const metrics = [
  { value: "300+", label: "動画コンテンツ" },
  { value: "67+", label: "セミナー開催回数" },
  { value: "多数", label: "独立・転職成功者" },
  { value: "高単価", label: "案件受注実績" },
]

export default async function SuccessPage() {
  const successStories = await getSuccessStories()
  
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
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
