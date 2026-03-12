import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { MessageSquare, Zap, Code, ShoppingBag, Scale, Users, Bot, Palette } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "カリキュラム | AI実践起業塾",
  description: "AI実践起業塾のカリキュラム - 300超の動画コンテンツで実務スキルを習得",
}

const detailedCurriculum = [
  {
    icon: MessageSquare,
    category: "AI活用のSNS発信・マーケティングノウハウ",
    items: [
      "マーケティングの基礎(1)",
      "AI活用＋note活用講座(19)",
      "AI活用＋X運用講座(17)",
      "自己紹介ポートフォリオサイト作成講座(1)",
      "LINE公式の始め方(32)",
      "便利ツール集(8)",
    ],
  },
  {
    icon: Zap,
    category: "プロのAI活用テクニック",
    items: [
      "なべ式 AIメソッド（AIを気軽に、自在に操る本質のテクニック）(9)",
    ],
  },
  {
    icon: ShoppingBag,
    category: "商品開発",
    items: [
      "はじめての商品開発講座(8)",
    ],
  },
  {
    icon: ShoppingBag,
    category: "販売サイトの登録方法",
    items: [
      "ストア開設講座(10)",
      "ココナラ開設講座(6)",
    ],
  },
  {
    icon: Bot,
    category: "Dify基礎（ノーコード自動化ツール）",
    items: [
      "Dify概要(3)",
      "APIの基本(1)",
      "5つのアプリケーションタイプ(1)",
      "［チャットボット］簡単なチャットボットを作成しよう(1)",
      "［チャットボット］RAGチャットボットを作成しよう(3)",
      "［テキストジェネレーター］SNS投稿テキストを作成しよう(1)",
      "［チャットフロー］問合せチャットフローを作成しよう(2)",
      "［ワークフロー］PDFファイルからQA集を自動生成するアプリ(1)",
    ],
  },
  {
    icon: Palette,
    category: "スキル習得",
    items: [
      "Midjourney基礎講座(16)",
      "GPTs選習講座(4)",
      "Canva基礎講座(22)",
    ],
  },
  {
    icon: Code,
    category: "GoogleAppsScriptScript（GAS）",
    items: [
      "GAS色々なアプリを作ってみよう(10)",
      "　・WEBビンゴゲームを作ろう！",
      "　・席次自動割り当てアプリを作ろう！",
      "　・シフト管理WEBアプリ作成ガイド",
      "　・学習塾向け暗記カードWEBアプリ作成ガイド",
      "　・AIC暴露書を自動作成！Googleサービスだけで作る時短ツール",
      "　・（まじん式）GASでGoogleスライドで資料を自動生成する方法",
      "　・X投稿の『〇〇8選or10選』の画像をサクッと作る！",
      "　・RSSフィードを活用し、最新NEWS情報のリンクを収集して自動投稿",
      "　・ファイル名をルールに沿ってリネーム修正する",
      "　・GASで作るWEBアプリ！見積もり作成ツール！",
    ],
  },
  {
    icon: MessageSquare,
    category: "LINE公式＋αチャレンジ",
    items: [
      "LINE公式＋αチャレンジ(6)",
      "　・LINE 予定管理 秘書bot（LINE＊GAS連携）",
      "　・LINE メール管理 AI秘書bot（LINE＊GAS連携）",
      "　・cafe飲食店向け LINE公式＋順番待ちBot",
      "　・宅配弁当LINEbot(chatGPT連携)",
      "　・LINEとGASで作る歯科医院予約システムの構築ガイド",
      "　・LINE公式アカウント家計簿アプリ（GAS・Googleスプレッドシート連携）",
    ],
  },
]

export default function CurriculumPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                実務直結のカリキュラム
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                300超の動画コンテンツで、AIエンジニアとしてのスキルを体系的に習得
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Curriculum List */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Detailed Curriculum</h2>
              <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                AI実践起業塾 カリキュラム一覧
              </p>
            </div>

            <div className="space-y-8">
              {detailedCurriculum.map((section, index) => (
                <div
                  key={section.category}
                  className="bg-card p-8 rounded-2xl border border-border"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary">{index + 1}</span>
                      <h3 className="text-2xl font-bold text-foreground">{section.category}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3 ml-16">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
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
