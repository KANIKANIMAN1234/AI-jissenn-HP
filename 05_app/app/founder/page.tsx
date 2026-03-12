import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "発起人 | AI実践起業塾",
  description: "AI実践起業塾の共同発起人の紹介",
}

const founders = [
  {
    initial: "井",
    name: "井上 剛聡",
    role: "共同発起人",
    handle: "タケさん @ X集客UP+AI活用！",
    twitter: "https://twitter.com/AI____japan",
    note: "https://note.com/take_by_place",
    description: "X集客のプロ。10億規模オフィス移転コンサル経験。AI活用とビジネス戦略の融合を推進。",
  },
  {
    initial: "渡",
    name: "渡邉 裕司",
    role: "共同発起人",
    handle: "渡邉ゆうじ @ AI活用アドバイザー｜GPTs開発",
    twitter: "https://twitter.com/YuNabe_ai",
    note: "https://note.com/yunabe_ai",
    description: "AI活用の専門家。SE・YouTubeディレクター経験。GPTs開発を得意とし、最新AI技術の実装を推進。",
  },
]

export default function FounderPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                発起人
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                共に歩む仲間たち
              </p>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Team</h2>
              <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                共同発起人
              </p>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                AI実践起業塾は、AI技術とビジネスの最前線で活躍する専門家たちによって運営されています。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="bg-card p-8 rounded-2xl border border-border"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">{founder.initial}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{founder.name}</h3>
                      <p className="text-sm text-primary font-medium">{founder.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{founder.handle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{founder.description}</p>
                  <div className="flex items-center gap-4">
                    <Link
                      href={founder.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      X (Twitter)
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                    <Link
                      href={founder.note}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      note
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
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
