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
                無料セミナーアーカイブ一覧
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                毎週木曜日14時～15時の無料セミナーで、最新のAI技術とビジネス戦略を学ぶ
              </p>
            </div>
          </div>
        </section>

        {/* Seminar Archive */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

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
