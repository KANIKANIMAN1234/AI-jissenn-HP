import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NEWリリース | AI実践起業塾",
  description: "AI実践起業塾の最新情報 - BootCamp販売のお知らせ",
}

export default function NewReleasePage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              NEW RELEASE
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
              NEW！BootCamp販売のお知らせ
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* Title */}
              <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 whitespace-nowrap">
                  【5日間集中】AI×データベース実装ブートキャンプ
                </h2>
                <p className="text-xl text-muted-foreground italic mb-8">
                  〜「ツール屋」で終わるか、高単価な「システム構築のプロ」になるか。〜
                </p>

                {/* Banner Image */}
                <div className="mt-8">
                  <Image
                    src="/bootcamp-banner.png"
                    alt="AI×データベース実装ブートキャンプ"
                    width={1920}
                    height={1080}
                    className="w-full h-auto rounded-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Introduction */}
              <div className="bg-card p-8 rounded-2xl border border-border mb-12">
                <p className="text-lg leading-relaxed" style={{ color: '#001B3A' }}>
                  AI実践企業塾の皆様、お待たせいたしました！4月、あなたのスキルを一段上のステージへ引き上げる、超実践型ブートキャンプを開催します。
                </p>
              </div>

              <div className="space-y-6 mb-12">
                <p className="text-lg text-foreground leading-relaxed">
                  今回のテーマは<strong className="text-primary">「データベース（Supabase）」</strong>。前回のGASブートキャンプで「動くツール」を作れるようになった次の一歩として、<strong className="text-primary">「数百万〜一千万円規模の案件」</strong>を支えるプロの設計・開発手法を5日間でマスターしていただきます。
                </p>
              </div>

              {/* Why Database */}
              <div className="bg-primary/5 p-8 rounded-2xl mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-3xl">🌟</span>
                  なぜ、今「データベース」が必要なのか？
                </h3>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    最近ではAI（ClaudeやCursorなど）を使えば、誰でも簡単にツールが作れるようになりました。しかし、そこには明確な壁が存在します。
                  </p>
                  <div className="pl-6 border-l-4 border-primary/30 space-y-2">
                    <p className="text-muted-foreground">単発の個人利用で終わる「ツール屋」</p>
                    <p className="text-lg font-semibold text-primary">↓</p>
                    <p className="text-foreground font-semibold">組織の基盤となり、高単価で発注される「システムエンジニア」</p>
                  </div>
                  <p>
                    この差はどこにあるのか？ それが<strong className="font-bold text-[#001B3A]">「データベース設計力」</strong>です。
                  </p>
                  <p>
                    複数のユーザーが使い、権限が守られ、データが積み重なっても壊れない。そんな「本物のシステム」を作るには、データベースの理解が欠かせません。
                  </p>
                  <p>
                    本講座では、モダンな開発基盤として注目される<strong className="text-primary">「Supabase（スーパーベース）」</strong>を使い、AIを最高の相棒にしながら、一生モノの設計スキルを身につけていただきます。
                  </p>
                </div>
              </div>

              {/* Curriculum */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-3xl">🗓</span>
                  5日間のカリキュラム（完全ハンズオン形式）
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  土曜の朝、少し早起きして「一生物の資産」を手に入れませんか？
                </p>

                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="text-xl font-bold text-primary mb-3">
                      Day 1：4/4(土) 基礎固め「Excel地獄からの脱出」
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      スプレッドシートの限界を知り、リレーショナルデータベース（RDB）の思考をインストール。
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="text-xl font-bold text-primary mb-3">
                      Day 2：4/11(土) 設計の真髄「プロの設計図・ER図」
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      データの重複を許さない「正規化」とテーブル同士のリレーションを学びます。
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="text-xl font-bold text-primary mb-3">
                      Day 3：4/18(土) 実装フェーズ「SupabaseとSQL」
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      実際にSupabaseを構築。データのやり取りに欠かせないSQLと言語を習得。
                    </p>
                  </div>

                  {/* Day 4 */}
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="text-xl font-bold text-primary mb-3">
                      Day 4：4/25(土) 堅牢性を生む「セキュリティとアクセス制御」
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      プロの現場で必須となる、安全なデータ管理の仕組みを構築します。
                    </p>
                  </div>

                  {/* Day 5 */}
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="text-xl font-bold text-primary mb-3">
                      Day 5：4/29(祝) 完結「アプリ公開・世界へデプロイ」
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      CursorでUIを作成し、Vercelへデプロイ。自分の作ったシステムが世界中で動く感動を！
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-3xl">🚀</span>
                  この講座で得られる3つの価値
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">
                      単価の桁が変わる「設計力」
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      講師の案件が600万〜1000万円規模である理由。その裏側にある「データベースの思考法」を直接伝授します。
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">
                      AIを「最高の相棒」にできる
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      全体設計ができるようになれば、AIへの指示（プロンプト）の質が劇的に向上し、爆速で開発が可能になります。
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">
                      共に走る「エンジニア仲間」
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      共通言語で語り合える仲間ができ、将来的にチームで大きな案件を受注する土壌を作ります。
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-card p-8 rounded-2xl border-2 border-primary/20 mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-3xl">💰</span>
                  受講料金
                </h3>
                <div className="space-y-6">
                  {/* Supabaseブートキャンプ単体 */}
                  <div className="bg-background p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-foreground mb-4">Supabaseブートキャンプ単体</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/80">銀行振り込み：</span>
                        <span className="text-2xl font-bold text-[#001B3A]">29,800円</span>
                      </div>
                      <p className="text-sm text-muted-foreground">（手数料なし）</p>
                      <div className="flex items-center justify-between border-t border-border pt-3">
                        <span className="text-foreground/80">スクエア決済：</span>
                        <span className="text-2xl font-bold text-[#001B3A]">32,900円</span>
                      </div>
                      <p className="text-sm text-muted-foreground">（手数料10%込み、分割可能）</p>
                    </div>
                  </div>

                  {/* AI実践起業塾追加 */}
                  <div className="bg-primary/5 p-6 rounded-xl border-2 border-primary/20">
                    <h4 className="text-xl font-bold text-primary mb-4">AI実践起業塾追加（セット価格）</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/80">通常価格：</span>
                        <span className="text-xl font-bold text-foreground line-through">79,800円</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">銀行振り込み：</span>
                        <span className="text-3xl font-bold text-[#001B3A]">59,800円</span>
                      </div>
                      <p className="text-sm text-muted-foreground">（手数料なし）</p>
                      <div className="flex items-center justify-between border-t border-primary/20 pt-3">
                        <span className="text-foreground/80">スクエア決済：</span>
                        <span className="text-2xl font-bold text-[#001B3A]">65,900円</span>
                      </div>
                      <p className="text-sm text-muted-foreground">（手数料10%込み、分割可能）</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl mb-12 text-center">
                <p className="text-lg text-foreground leading-relaxed">
                  「AIエンジニア元年」と言われる2026年。ただAIを使うだけの人で終わるか、AIを使いこなして価値あるシステムを創る側になるか。この5日間で、あなたの未来を大きく変えていきましょう！
                </p>
              </div>

              {/* Application Info */}
              <div className="bg-card p-8 rounded-2xl border border-border mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-3xl">📩</span>
                  お申し込み方法
                </h3>
                <div className="space-y-6">
                  <p className="text-foreground/80 leading-relaxed">
                    以下の専用フォームより、必要事項をご入力の上お申し込みください。
                  </p>
                  
                  <div className="text-center py-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6"
                    >
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf0Go-4ov0rBM0ZZNPQvtBquQEDaP3YvMpb1YeanYGHy8f6Kw/viewform" target="_blank" rel="noopener noreferrer">
                        お申し込みフォームはこちら
                      </Link>
                    </Button>
                  </div>

                  <div className="bg-background p-6 rounded-xl space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[80px]">時間：</span>
                      <span className="text-foreground/80">各日 9:00 〜 11:30（予定）</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[80px]">形式：</span>
                      <span className="text-foreground/80">Zoomによるオンライン集中講義（アーカイブ・チャットサポートあり）</span>
                    </div>
                  </div>

                  <p className="text-center text-lg text-foreground font-medium mt-8">
                    皆様の挑戦を、心よりお待ちしております！
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
