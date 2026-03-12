import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Calendar, Video, Users, BookOpen, PlayCircle } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import { sql } from "@/lib/db"
import { getThumbnailUrl } from "@/lib/youtube"

export const metadata: Metadata = {
  title: "セミナー | AI実践起業塾",
  description: "AI実践起業塾のセミナー - 毎週開催の定期セミナー、67回分のアーカイブ動画",
}

export const revalidate = 0 // 常に最新のデータを取得

async function getSeminars() {
  try {
    const seminars = await sql`
      SELECT 
        id,
        number,
        title,
        video_url as "videoUrl",
        description,
        thumbnail
      FROM seminars 
      ORDER BY display_order ASC, created_at DESC
    `
    return seminars
  } catch (error) {
    console.error("Failed to fetch seminars:", error)
    return []
  }
}

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

export default async function SeminarPage() {
  const seminars = await getSeminars()
  
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                無料セミナー
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                毎週木曜日14時～15時の無料セミナーで、最新のAI技術とビジネス戦略を学ぶ
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-muted border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">常に最新の情報をキャッチアップ</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AI技術は日々進化しています。AI実践起業塾では、毎週開催される無料セミナーを通じて、最新のAI技術、ビジネス戦略、実務での活用事例を共有しています。
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>最新技術の解説</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>実践事例の共有</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>質疑応答・相談</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>アーカイブ視聴</span>
                </li>
              </ul>
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
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">開催スケジュール</h2>
            <div className="flex justify-center">
              <Image
                src="/images/seminar-schedule.png"
                alt="セミナー開催スケジュール - 毎週1回開催、Zoom参加、アーカイブ視聴可能、無料（塾生限定）"
                width={1200}
                height={300}
                className="w-full max-w-5xl h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Seminar Archive */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Archive</h2>
              <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
                無料セミナーアーカイブ一覧
              </p>
              <p className="text-muted-foreground">
                過去のセミナー動画をいつでも視聴できます
              </p>
            </div>

            {seminars.length === 0 ? (
              <div className="text-center py-16">
                <Video className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">まだセミナーがありません</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {seminars.map((seminar) => {
                  const thumbnailUrl = getThumbnailUrl(seminar.thumbnail, seminar.videoUrl)
                  
                  return (
                    <div
                      key={seminar.id}
                      className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-colors group"
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-video bg-muted flex items-center justify-center">
                        {thumbnailUrl ? (
                          <Image
                            src={thumbnailUrl}
                            alt={seminar.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-muted-foreground">
                            <Video className="h-12 w-12 mb-2" />
                            <span className="text-sm">サムネイル未設定</span>
                          </div>
                        )}
                        {seminar.videoUrl && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <PlayCircle className="h-16 w-16 text-white" />
                          </div>
                        )}
                      </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {seminar.number > 0 && (
                          <span className="px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded">
                            第{seminar.number}回
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                        {seminar.title}
                      </h3>
                      {seminar.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {seminar.description}
                        </p>
                      )}
                      {seminar.videoUrl && (
                        <a
                          href={seminar.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline"
                        >
                          <PlayCircle className="h-4 w-4" />
                          動画を視聴する
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
