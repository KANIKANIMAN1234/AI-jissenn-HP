import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NEWリリース | AI実践起業塾",
  description: "AI実践起業塾の最新情報・新ブートキャンプのお知らせ",
}

export default function NewReleasePage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="pt-12 lg:pt-16 pb-5 lg:pb-7 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              NEW RELEASE
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
              最新リリース情報
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              AI実践起業塾の最新ブートキャンプ・イベント情報をお届けします
            </p>
          </div>
        </section>

        {/* ===== NEW RELEASE 1: AI秘書ブートキャンプ ===== */}
        <section className="pt-5 lg:pt-7 pb-16 lg:pb-24 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* 新着バッジ */}
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                NEW
              </span>
              <span className="text-sm text-muted-foreground">2026年7月開催</span>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* タイトル */}
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                  AI秘書構築ブートキャンプ
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  非エンジニア向け ／ 2h × 3日間
                </p>
                <Image
                  src="/secretary-bootcamp-banner.png"
                  alt="AI秘書構築ブートキャンプ"
                  width={1200}
                  height={630}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>

              {/* 導入文 */}
              <div className="bg-card p-8 rounded-2xl border border-border mb-12">
                <p className="text-lg leading-relaxed" style={{ color: '#001B3A' }}>
                  AIを「使う道具」から「働く仲間」へ。ClaudeCodeを使った自分だけのAI秘書を3日間で構築します。
                  日々の業務を自動化し、あなたの時間をより価値ある仕事へ解放しましょう。
                </p>
              </div>

              {/* カリキュラム */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-3xl">🗓</span>
                  3日間のカリキュラム
                </h3>

                <div className="space-y-4">
                  {/* Day 1 */}
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Day 1：7/4（土）
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        ClaudeCode 入門・インストール・初期設定
                      </li>
                      <li className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        秘書エージェント作成（バーチャル会社構築）
                      </li>
                    </ul>
                  </div>

                  {/* Day 2 */}
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Day 2：7/5（日）
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        TODOシステム構築・日次ブリーフィング自動化
                      </li>
                      <li className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        カレンダー連携・スケジュール管理
                      </li>
                    </ul>
                  </div>

                  {/* Day 3 */}
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Day 3：7/11（土）
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        Inbox 整理・メール下書き自動化
                      </li>
                      <li className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        自分の業務にカスタマイズ・QA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 料金 */}
              <div className="bg-card p-8 rounded-2xl border-2 border-primary/20 mb-10">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-3xl">💰</span>
                  受講料金
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-background p-6 rounded-xl">
                    <p className="text-sm font-medium text-muted-foreground mb-2">塾生以外</p>
                    <p className="text-4xl font-bold" style={{ color: '#001B3A' }}>¥49,800</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border-2 border-primary/30">
                    <p className="text-sm font-medium text-primary mb-2">塾生価格</p>
                    <p className="text-4xl font-bold" style={{ color: '#001B3A' }}>¥19,800</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== NEW RELEASE 2: AI開発者向け環境構築ブートキャンプ ===== */}
        <section className="py-16 lg:py-24 bg-primary/3 border-b border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* 新着バッジ */}
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                NEW
              </span>
              <span className="text-sm text-muted-foreground">2026年7〜8月開催</span>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* タイトル */}
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                  AIアプリ開発環境構築ブートキャンプ
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  アプリ開発志望者向け ／ 2h × 3日間
                </p>
                <Image
                  src="/devenv-bootcamp-banner.png"
                  alt="AIアプリ開発者向け環境構築ブートキャンプ"
                  width={1200}
                  height={630}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>

              {/* 導入文 */}
              <div className="bg-card p-8 rounded-2xl border border-border mb-12">
                <p className="text-lg leading-relaxed" style={{ color: '#001B3A' }}>
                  「アプリを作りたいけど、環境構築で詰まる…」そんな壁を3日間で突破します。
                  WSL2からClaudeCode・MCPまで、プロが使うモダン開発環境を一気に整えて、
                  実際にアプリを世界へデプロイするところまで完走します。
                </p>
              </div>

              {/* カリキュラム */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-3xl">🗓</span>
                  3日間のカリキュラム
                </h3>

                <div className="space-y-4">
                  {/* Day 1 */}
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Day 1：7/25（土）
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        WSL2・Git・Node.js 環境構築
                      </li>
                      <li className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        ClaudeCode 設定・プロジェクト接続
                      </li>
                    </ul>
                  </div>

                  {/* Day 2 */}
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Day 2：7/26（日）
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        MCP 連携（Calendar・Drive等）
                      </li>
                      <li className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        エージェント設計・PDCA 開発の考え方
                      </li>
                    </ul>
                  </div>

                  {/* Day 3 */}
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Day 3：7/31（金）
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        実際にアプリを作る（ハンズオン）
                      </li>
                      <li className="flex items-start gap-2 text-foreground/80 leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        デプロイ・運用設計・QA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 料金 */}
              <div className="bg-card p-8 rounded-2xl border-2 border-primary/20 mb-10">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-3xl">💰</span>
                  受講料金
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-background p-6 rounded-xl">
                    <p className="text-sm font-medium text-muted-foreground mb-2">塾生以外</p>
                    <p className="text-4xl font-bold" style={{ color: '#001B3A' }}>¥79,800</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl border-2 border-primary/30">
                    <p className="text-sm font-medium text-primary mb-2">塾生価格</p>
                    <p className="text-4xl font-bold" style={{ color: '#001B3A' }}>¥29,800</p>
                  </div>
                </div>
              </div>

              {/* 申し込みボタン */}
              <div className="py-10 lg:py-12">
                <Button
                  asChild
                  className="w-full max-w-2xl mx-auto flex h-auto min-h-[72px] lg:min-h-[88px] bg-[#FF8C00] hover:bg-[#E67E00] text-white font-bold text-2xl sm:text-3xl lg:text-4xl tracking-wide px-8 py-8 lg:py-10 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Link
                    href="https://forms.gle/VJxKfQAxz5jrEQ9Z9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center"
                  >
                    申し込みはコチラ
                  </Link>
                </Button>
              </div>

              <div className="mt-4">
                <Image
                  src="/devenv-bootcamp-message.png"
                  alt="あなたの本番URLは、ただのURLではありません。AIに頼む人から、AIと開発する人になった証拠です。"
                  width={700}
                  height={420}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== 過去のリリース ===== */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* セクションヘッダー */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-xl font-bold text-muted-foreground tracking-widest">
                過去のリリース
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Supabase ブートキャンプ（終了） */}
            <div className="bg-card/60 rounded-2xl border border-border overflow-hidden opacity-80">
              {/* 終了バッジ */}
              <div className="bg-muted px-6 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">2026年5〜6月開催</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted-foreground/20 text-muted-foreground text-xs font-bold">
                  終了
                </span>
              </div>

              <div className="p-6 lg:p-10">
                <div className="prose prose-lg max-w-none">
                  {/* タイトル */}
                  <div className="mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground/70 mb-2">
                      【5日間集中】AI×データベース実装ブートキャンプ
                    </h3>
                    <p className="text-base text-muted-foreground italic">
                      〜「ツール屋」で終わるか、高単価な「システム構築のプロ」になるか。〜
                    </p>
                  </div>

                  {/* バナー画像 */}
                  <div className="mb-8">
                    <Image
                      src="/bootcamp-banner.png"
                      alt="AI×データベース実装ブートキャンプ"
                      width={1920}
                      height={1080}
                      className="w-full h-auto rounded-xl grayscale-[30%]"
                    />
                  </div>

                  {/* 導入文 */}
                  <div className="bg-background/60 p-6 rounded-xl border border-border mb-8">
                    <p className="text-base leading-relaxed text-foreground/70">
                      今回のテーマは「データベース（Supabase）」。前回のGASブートキャンプで「動くツール」を作れるようになった次の一歩として、「数百万〜一千万円規模の案件」を支えるプロの設計・開発手法を5日間でマスターしていただきます。
                    </p>
                  </div>

                  {/* カリキュラム概要 */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground/70 mb-4 flex items-center gap-2">
                      <span className="text-xl">🗓</span>
                      5日間のカリキュラム
                    </h4>
                    <div className="space-y-3">
                      {[
                        { day: "Day 1", date: "5/9（土）", title: "基礎固め「Excel地獄からの脱出」", desc: "スプレッドシートの限界を知り、リレーショナルデータベース（RDB）の思考をインストール。" },
                        { day: "Day 2", date: "5/16（土）", title: "設計の真髄「プロの設計図・ER図」", desc: "データの重複を許さない「正規化」とテーブル同士のリレーションを学びます。" },
                        { day: "Day 3", date: "5/23（土）", title: "実装フェーズ「SupabaseとSQL」", desc: "実際にSupabaseを構築。データのやり取りに欠かせないSQLと言語を習得。" },
                        { day: "Day 4", date: "5/30（土）", title: "堅牢性を生む「セキュリティとアクセス制御」", desc: "プロの現場で必須となる、安全なデータ管理の仕組みを構築します。" },
                        { day: "Day 5", date: "6/6（土）", title: "完結「アプリ公開・世界へデプロイ」", desc: "CursorでUIを作成し、Vercelへデプロイ。自分の作ったシステムが世界中で動く感動を！" },
                      ].map((item) => (
                        <div key={item.day} className="flex gap-4 bg-background/40 p-4 rounded-lg border border-border/50">
                          <div className="shrink-0 w-20 text-center">
                            <p className="text-xs font-bold text-muted-foreground">{item.day}</p>
                            <p className="text-xs text-muted-foreground">{item.date}</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-foreground/60 mb-1">{item.title}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 料金 */}
                  <div className="bg-background/40 p-6 rounded-xl border border-border/50 mb-4">
                    <h4 className="text-lg font-bold text-foreground/60 mb-4 flex items-center gap-2">
                      <span className="text-xl">💰</span>
                      受講料金（参考）
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="space-y-1">
                        <p className="font-semibold">Supabaseブートキャンプ単体</p>
                        <p>銀行振り込み：29,800円（手数料なし）</p>
                        <p>スクエア決済：32,900円（手数料10%込み、分割可能）</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold">AI実践起業塾追加（セット）</p>
                        <p>銀行振り込み：59,800円（手数料なし）</p>
                        <p>スクエア決済：65,900円（手数料10%込み、分割可能）</p>
                      </div>
                    </div>
                  </div>
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
