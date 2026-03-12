import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "プライバシーポリシー | AI実践起業塾",
  description: "AI実践起業塾のプライバシーポリシー",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                プライバシーポリシー
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 lg:py-32 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                AI実践起業塾（以下「当塾」）は、お客様の個人情報の重要性を認識し、その保護を徹底するため、以下のプライバシーポリシーを定めます。
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">1. 収集する個人情報</h2>
                  <p className="text-muted-foreground mb-4">当塾では、以下の個人情報を収集することがあります。</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>氏名</li>
                    <li>メールアドレス</li>
                    <li>電話番号</li>
                    <li>お支払い情報</li>
                    <li>その他、サービス提供に必要な情報</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">2. 個人情報の利用目的</h2>
                  <p className="text-muted-foreground mb-4">収集した個人情報は、以下の目的で利用いたします。</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>サービスの提供・運営</li>
                    <li>お問い合わせへの対応</li>
                    <li>セミナーやイベントのご案内</li>
                    <li>サービス改善のための分析</li>
                    <li>その他、お客様に同意いただいた目的</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">3. 個人情報の第三者提供</h2>
                  <p className="text-muted-foreground">
                    当塾は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">4. 個人情報の管理</h2>
                  <p className="text-muted-foreground">
                    当塾は、個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を講じます。
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">5. 個人情報の開示・訂正・削除</h2>
                  <p className="text-muted-foreground">
                    お客様は、ご自身の個人情報について、開示、訂正、削除を請求することができます。ご希望の場合は、運営者までお問い合わせください。
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">6. プライバシーポリシーの変更</h2>
                  <p className="text-muted-foreground">
                    当塾は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、ウェブサイト上に掲載することにより、お客様に通知いたします。
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">7. お問い合わせ</h2>
                  <p className="text-muted-foreground">
                    本プライバシーポリシーに関するお問い合わせは、
                    <Link href="/company" className="text-primary hover:underline">運営者情報</Link>
                    ページよりお願いいたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
