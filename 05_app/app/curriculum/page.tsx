import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Rocket, Palette, Bot, Link2, Lightbulb, BarChart3, MessageSquare, Zap, Code, ShoppingBag, Scale, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "カリキュラム | AI実践起業塾",
  description: "AI実践起業塾のカリキュラム - 300超の動画コンテンツで実務スキルを習得",
}

const curriculumItems = [
  {
    icon: Rocket,
    title: "GASブートキャンプ",
    duration: "5日間集中講座",
    description: "要件定義から仕様書作成、実装までを一気通貫で学ぶ超実践型講座。短期間で「実際に動くもの」を作る経験を積み上げます。",
    points: ["要件定義の基礎", "仕様書の作成方法", "GASによる実装", "デバッグとテスト"],
  },
  {
    icon: Palette,
    title: "BananaNL マスター",
    duration: "デザイン民主化",
    description: "日本語テキスト入力を得意とする画像生成エンジン「ナノバナ」を使いこなし、プロフェッショナルな資料を1/10の時間で作成。",
    points: ["NotebookLMとの連携", "300種類以上のスタイル活用", "プレゼン資料の超速作成", "ブランディング戦略"],
  },
  {
    icon: Bot,
    title: "ManusAI 完全攻略",
    duration: "自律型エージェント",
    description: "完全自律型AIエージェントを使いこなし、30人以上の部下に同時指示を出すような並列処理を実現。アプリ生成から公開まで。",
    points: ["ワイドリサーチ（多重影分身）", "永続的なクラウド実行", "アプリ生成と公開", "市場リサーチ自動化"],
  },
  {
    icon: Link2,
    title: "API連携マスター",
    duration: "ビジネス自動化",
    description: "GAS × LINE × OpenAI の連携で、ビジネスの神経網を構築。情報の見落としをゼロにし、機会損失を防ぐ。",
    points: ["GASによる監視システム", "OpenAI APIでの解析", "LINE通知の実装", "即応性の確保"],
  },
  {
    icon: Lightbulb,
    title: "AI実装戦略",
    duration: "ビジネス構築",
    description: "AIを単に使うだけでなく、ビジネスの仕組みとして構築。高単価案件を受注するための戦略的思考を習得。",
    points: ["要件定義のフレームワーク", "クライアントヒアリング", "提案書の作成", "価格設定の戦略"],
  },
  {
    icon: BarChart3,
    title: "データ分析・可視化",
    duration: "意思決定支援",
    description: "市場リサーチ結果をレーダーチャート付きのExcelで出力。データを武器に変える技術を習得。",
    points: ["データ収集の自動化", "AIによる分析", "可視化とレポート作成", "意思決定への活用"],
  },
]

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

        {/* Curriculum Grid */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Curriculum</h2>
              <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                学べる内容
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {curriculumItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-background p-8 rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{item.duration}</p>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  <ul className="mt-6 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
