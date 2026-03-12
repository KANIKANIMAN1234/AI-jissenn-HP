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

const stats = [
  { value: "300+", label: "動画コンテンツ" },
  { value: "50万円", label: "相当の価値" },
  { value: "永年", label: "アクセス権" },
  { value: "11", label: "カテゴリー" },
]

const detailedCurriculum = [
  {
    icon: MessageSquare,
    category: "SNS発信・マーケティング活用",
    items: [
      "SNSマーケティングノウハウ: AIを活用した発信戦略",
      "note活用講座: AIを組み合わせて記事作成を効率化",
      "X（旧Twitter）運用講座: AIによる効果的なポスト・運用術",
      "LINE公式アカウント: 基本的な始め方から初期設定まで",
    ],
  },
  {
    icon: Zap,
    category: "プロンプト・AIスキルアップ",
    items: [
      "プロンプトテクニック: 「鍋敷きAIメソッド」プロンプト動画コンテンツ",
      "画像生成・デザイン: Midjourney（ミッドジャーニー）基礎講座",
      "Canva（キャンバ）の基本的な使い方講座",
      "魅力的なサムネイル画像の作成方法（チャレンジ企画）",
      "ChatGPT活用: GPTs（カスタムGPT）特集講座",
    ],
  },
  {
    icon: Bot,
    category: "自動化・システム開発（Dify / API）",
    items: [
      "Dify（ディフィー）基礎: APIの基礎、5つのアプリケーションタイプ",
      "チャットボット・RAG（検索拡張生成）活用ボットの作成",
      "SNS向けテキスト自動作成などの事例サンプル",
      "Dify中級チャレンジ: 3,000文字のnote記事生成アプリ制作など",
      "システム開発環境: GitHub、Obsidian、Cursorのインストール・基本操作",
    ],
  },
  {
    icon: Code,
    category: "プログラミング・GAS（Google Apps Script）活用",
    items: [
      "GAS（ガス）入門: 「習うより慣れろ」をテーマにしたアプリ制作",
      "LINE × GAS 連携アプリ開発:",
      "　・Googleカレンダー連携の予定管理ボット",
      "　・キーワード判別によるメールのLINE自動転送",
      "　・飲食店向け順番待ちアプリ",
      "　・宅配弁当予約ラインボット",
      "　・EC予約システム",
      "　・家計簿アプリ",
    ],
  },
  {
    icon: ShoppingBag,
    category: "商品開発・収益化支援",
    items: [
      "商品開発講座: 自身の商品開発・作成の並走サポート",
      "販売プラットフォーム構築:",
      "　・STORES（ストアーズ）開設・登録方法",
      "　・ココナラ開設・活用講座",
      "伴走型アプリ開発・販売プログラム: 開発から販売までの概要解説",
    ],
  },
  {
    icon: Scale,
    category: "法務・リスク管理（座学）",
    items: [
      "契約・法的知識: 特定商取引法、産業財産権、著作権法などの基礎知識",
      "インシデント対策: AI利用時やビジネスにおける基本知識",
    ],
  },
  {
    icon: Users,
    category: "コミュニティ・コンテンツ",
    items: [
      "共同マガジン企画: SNSの認知拡大を目指す参加型プロジェクト",
      "動画アーカイブ: 無料講座アーカイブ（約42分）",
      "会員限定講座（26本）",
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

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-serif font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
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
