import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "利用規約 | AI実践起業塾",
  description: "AI実践起業塾の利用規約",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                利用規約
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-muted-foreground mb-12">
              AI実践起業塾をご利用いただくにあたり、以下の利用規約を必ずお読みいただき、同意の上でご利用ください。
            </p>

            <div className="space-y-12">
              {/* Article 1 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">第1条（禁止事項）</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-3">1. 情報の転記禁止</h3>
                    <p className="text-muted-foreground mb-4">
                      サロン内の内容やオーナーが発信する内容について、
                      <strong className="text-foreground">サロン外（口外、SNS等を含む全てのメディア・媒体）へ転記することを禁止</strong>
                      致します。
                    </p>
                    <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">
                        塾内で共有される情報、教材、ノウハウは会員限定のものです。外部への漏洩は厳禁です。
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground mb-3">2. 迷惑行為の禁止</h3>
                    <p className="text-muted-foreground mb-4">
                      <strong className="text-foreground">他の利用者への中傷、脅迫、いやがらせに該当する行為を禁止</strong>
                      致します。程度によっては<strong className="text-foreground">法的処置を断行</strong>いたします。
                    </p>
                    <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">
                        当塾は、全ての会員が安心して学べる環境を維持するため、迷惑行為には厳正に対処します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">第2条（規約違反への対応）</h2>
                <div className="p-6 bg-muted rounded-lg border border-border">
                  <p className="text-foreground font-medium mb-4">
                    ※規約違反は見つけ次第、強制退会とさせて頂きますのでご了承ください。
                  </p>
                  <p className="text-muted-foreground">
                    規約違反が確認された場合、事前の警告なく強制退会の措置を取らせていただく場合があります。また、既にお支払いいただいた料金の返金は致しかねますので、予めご了承ください。
                  </p>
                </div>
              </div>

              {/* Article 3 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">第3条（その他の注意事項）</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">当塾のサービス内容は、予告なく変更される場合があります。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">会員は、自己の責任において当塾のサービスを利用するものとします。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">当塾は、サービスの利用により生じた損害について、一切の責任を負いません。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">本規約は、日本法に準拠し、解釈されるものとします。</span>
                  </li>
                </ul>
              </div>

              {/* Article 4 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">第4条（規約の変更）</h2>
                <p className="text-muted-foreground">
                  当塾は、必要に応じて本規約を変更することができます。規約を変更した場合は、ウェブサイト上に掲載することにより、会員に通知するものとします。
                </p>
              </div>

              {/* Contact */}
              <div className="p-6 bg-muted rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">お問い合わせ</h3>
                <p className="text-muted-foreground mb-4">
                  本規約に関するご質問やご不明な点がございましたら、運営者までお問い合わせください。
                </p>
                <Link
                  href="/company"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  運営者情報を見る →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
