import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { sql } from "@/lib/db"

export const metadata: Metadata = {
  title: "Blog | AI実践起業塾",
  description: "AI実践起業塾のブログ。AI技術、ビジネス活用、成功事例など最新情報をお届けします。",
}

export const revalidate = 0

async function getBlogArticles() {
  try {
    const articles = await sql`
      SELECT 
        id,
        note_url as "noteUrl",
        title,
        description,
        thumbnail,
        category,
        published_at as "publishedAt",
        featured
      FROM blog_articles 
      ORDER BY display_order ASC, created_at DESC
    `
    return articles
  } catch (error) {
    console.error("Failed to fetch blog articles:", error)
    return []
  }
}

interface BlogArticle {
  id: string
  noteUrl: string
  title: string
  description: string
  thumbnail: string
  category: string
  publishedAt: string
  featured: boolean
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogPage() {
  const articles: BlogArticle[] = await getBlogArticles()
  const categories: string[] = Array.from(new Set(articles.map(a => a.category).filter(Boolean)))

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                Blog
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                AI技術、ビジネス活用、成功事例など最新情報をお届けします
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex gap-2 py-4 overflow-x-auto">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {articles.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">まだ記事がありません。</p>
                <p className="text-sm text-muted-foreground mt-2">
                  data/blog-articles.json に記事を追加してください。
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-muted overflow-hidden">
                      {article.thumbnail && !article.thumbnail.includes('placeholder') ? (
                        <Image
                          src={article.thumbnail}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                          <span className="text-4xl font-serif font-bold text-primary/30">note</span>
                        </div>
                      )}
                      {article.featured && (
                        <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
                          注目
                        </span>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(article.publishedAt)}
                        </div>
                        <Link
                          href={article.noteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          noteで読む
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
