import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ExternalLink, MessageCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "運営者情報 | AI実践起業塾",
  description: "AI実践起業塾の運営者情報",
}

const founders = [
  {
    initial: "井",
    name: "井上 剛聡",
    role: "共同発起人",
    handle: "タケさん @ X集客UP+AI活用！",
    twitter: "https://twitter.com/AI____japan",
    twitterHandle: "@AI____japan",
    note: "https://note.com/take_by_place",
  },
  {
    initial: "渡",
    name: "渡邉 裕司",
    role: "共同発起人",
    handle: "渡邉ゆうじ @ AI活用アドバイザー｜GPTs開発",
    twitter: "https://twitter.com/YuNabe_ai",
    twitterHandle: "@YuNabe_ai",
    note: "https://note.com/yunabe_ai",
  },
]

const businessItems = [
  "AI技術を活用したビジネス支援",
  "AIエンジニア育成プログラムの提供",
  "オンライン・オフラインセミナーの開催",
  "伴走型アプリ開発＆販売支援",
  "AI関連コンテンツの制作・配信",
]

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl pl-6 relative page-title-arrow">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                運営者情報
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 lg:py-32 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              {/* Name */}
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">塾名</h2>
                <p className="text-xl font-bold text-foreground">AI実践起業塾</p>
              </div>

              {/* Founders */}
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">共同発起人</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {founders.map((founder) => (
                    <div
                      key={founder.name}
                      className="p-6 bg-background rounded-lg border border-border"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-lg font-bold text-primary-foreground">{founder.initial}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground">{founder.name}</h3>
                          <p className="text-sm text-primary">{founder.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{founder.handle}</p>
                      <div className="flex items-center gap-4">
                        <Link
                          href={founder.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          X {founder.twitterHandle}
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                        <Link
                          href={founder.note}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          note
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business */}
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">事業内容</h2>
                <ul className="space-y-3">
                  {businessItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">お問い合わせ</h2>
                <p className="text-muted-foreground mb-6">
                  AI実践起業塾に関するお問い合わせは、以下の方法でお願いいたします。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-background rounded-lg border border-border">
                    <h3 className="font-bold text-foreground mb-2">無料セミナー参加・お問い合わせ</h3>
                    <p className="text-sm text-muted-foreground mb-4">Chatworkグループにご参加ください</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href="https://www.chatwork.com/g/qyorym87oyox4t"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chatworkグループに参加
                      </Link>
                    </Button>
                  </div>
                  <div className="p-6 bg-background rounded-lg border border-border">
                    <h3 className="font-bold text-foreground mb-2">入塾・カウンセリングのお問い合わせ</h3>
                    <p className="text-sm text-muted-foreground mb-4">無料カウンセリングをご予約ください</p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="https://timerex.net/s/kanikaniman1234_00ba/202fa228" target="_blank" rel="noopener noreferrer">無料カウンセリングを予約</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Privacy */}
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">個人情報の取り扱いについて</h2>
                <p className="text-muted-foreground">
                  当塾では、お客様の個人情報を適切に管理し、保護することに努めております。詳しくは、
                  <Link href="/privacy" className="text-primary hover:underline">プライバシーポリシー</Link>
                  をご確認ください。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
