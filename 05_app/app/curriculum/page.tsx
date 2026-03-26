"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type ToggleItem = {
  index: number
  details: string[]
}

type SubCategory = {
  name: string
  items: string[]
  detailItems?: string[]
  toggleItemIndex?: number
  toggleItems?: ToggleItem[]
}

type CurriculumSection = {
  category: string
  items?: string[]
  subcategories?: SubCategory[]
}

const detailedCurriculum: CurriculumSection[] = [
  {
    category: "はじめに",
    items: [
      "受講前に(5)",
      "ビジネスを始めるうえでの心構えについて(1)",
      "コミュニティ（Discord）への参加(1)",
    ],
  },
  {
    category: "セミナー編",
    subcategories: [
      {
        name: "無料セミナーアーカイブ",
        items: [
          "無料セミナーアーカイブ(44)",
        ],
      },
      {
        name: "会員向けセミナーアーカイブ",
        items: [
          "会員向けセミナーアーカイブ(28)",
        ],
      },
    ],
  },
  {
    category: "AI基礎",
    items: [
      "AI基礎講座（現在作成中）",
      "AIセキュリティー講座（現在作成中）",
      "用語なんでも質問：AIチャットボット(1)",
    ],
  },
  {
    category: "プロンプト編",
    subcategories: [
      {
        name: "プロのAI活用テクニック",
        items: [
          "なべ式 AIメソッド（AIを気軽に、自在に操る本質のテクニック）(9)",
        ],
        detailItems: [
          "0章 はじめにの前に：AIを相棒に「なべ式AIメソッド」",
          "1章 はじめに：なべ式AIメソッドとは",
          "2章 「３行プロンプト」の活用法",
          "２章-2 「３行プロンプト」の実践ワーク",
          "３章 「AI壁打ち」をマスターしよう",
          "３章-2 「AI壁打ち」の実践ワーク",
          "４章 「なべ式プロンプト」の利用方法",
          "４章-2 「なべ式プロンプト」の実践ワーク",
          "５章 まとめ：なべ式AIメソッドを活用した業務効率化の手法",
        ],
      },
    ],
  },
  {
    category: "システム開発の基礎",
    subcategories: [
      {
        name: "GoogleAppsScript（GAS）",
        items: [
          "GAS色々なアプリを作ってみよう(10)",
        ],
        detailItems: [
          "WEBビンゴゲームを作ろう！",
          "席次自動割り当てアプリを作ろう！",
          "シフト管理WEBアプリ作成ガイド",
          "学習塾向け暗記カードWEBアプリ作成ガイド",
          "AIC暴露書を自動作成！Googleサービスだけで作る時短ツール",
          "（まじん式）GASでGoogleスライドで資料を自動生成する方法",
          "X投稿の『〇〇8選or10選』の画像をサクッと作る！",
          "RSSフィードを活用し、最新NEWS情報のリンクを収集して自動投稿",
          "ファイル名をルールに沿ってリネーム修正する",
          "GASで作るWEBアプリ！見積もり作成ツール！",
        ],
      },
      {
        name: "バックエンド Dify基礎",
        items: [
          "Dify概要(3)",
          "APIの基本(1)",
          "5つのアプリケーションタイプ(1)",
          "Difyアプリを作成しよう(5)",
        ],
        detailItems: [
          "［チャットボット］簡単なチャットボットを作成しよう(1)",
          "［チャットボット］RAGチャットボットを作成しよう(3)",
          "［テキストジェネレーター］SNS投稿テキストを作成しよう(1)",
          "［チャットフロー］問合せチャットフローを作成しよう(2)",
          "［ワークフロー］PDFファイルからQA集を自動生成するアプリ(1)",
        ],
      },
      {
        name: "WEBアプリについて知識補充",
        items: [
          "ReactとNext.jsの違い(3)",
          "WEBアプリで知っておくべきこと(8)",
          "Typescriptって何？(1)",
        ],
      },
      {
        name: "Vercel関連",
        items: [
          "Vercelアカウント作成(1)",
        ],
      },
      {
        name: "HP、LP作成",
        items: [
          "様々なWEBサイト作成ツール紹介(1)",
          "Cursor＋github＋V0＋VercelでHPを作成する方法(8)",
        ],
        toggleItemIndex: 1,
        detailItems: [
          "作りたいホームページのイメージを固めよう",
          "Cursorでホームページのモックアップを作ろう",
          "V0で見た目をプロ級にブラッシュアップしよう！",
          "さぁ、デプロイ（公開）してみよう！",
          "Cursorでどんどん修正壁打ちをしよう！",
          "[参考]Cursorのインストール、アカウント作成方法",
          "[参考]Githubのアカウント作成方法",
          "[参考]Vercelのアカウント作成方法",
        ],
      },
      {
        name: "FireBase＋WEBアプリ作成",
        items: [
          "環境準備(3)",
        ],
      },
      {
        name: "Github＋Cursor＋Obsidian",
        items: [
          "Git・Githubの基礎編(2)",
          "Obsidianのインストールと初期設定(4)",
          "Cursorのインストールと初期設定(3)",
          "Web開発プロジェクトの立ち上げStart(7)",
          "仕様書について理解を深めよう(1)",
          "AI活用・仕様駆動型アプリ開発の実践Tips(1)",
        ],
        toggleItems: [
          {
            index: 1,
            details: [
              "Obsidianのインストール",
              "外観の設定",
              "フォントの設定",
              "便利なPluginのインストール",
            ],
          },
          {
            index: 3,
            details: [
              "Webアプリ開発プロジェクトの「立ち上げ」から「計画」まで",
              "プロジェクトのお金の管理「コスト管理」",
              "仕様書を作成する手順",
              "Webアプリのモックアップ作成",
              "アプリケーションの品質を確認する「テスト」の工程",
              "マニュアル作成（その１：ドキュメントタイプ、動画タイプ比較）",
              "マニュアル作成（その２）",
            ],
          },
        ],
      },
      {
        name: "Antigravity",
        items: [
          "Antigravityの概要・特徴・インストール(2)",
        ],
      },
    ],
  },
  {
    category: "スキルアップ編",
    items: [
      "Midjourney基礎講座(16)",
      "GPTs速習講座(4)",
      "Canva基礎講座(22)",
    ],
  },
  {
    category: "チャレンジ企画編",
    items: [
      "魅力的なサムネイル画像作成(4)",
      "Difyアプリ中級チャレンジ(1)",
      "LINE公式＋αチャレンジ(6)",
      "　・LINE 予定管理 秘書bot（LINE×GAS連携）",
      "　・LINE メール管理 AI秘書bot（LINE×GAS連携）",
      "　・cafe飲食店向け LINE公式＋順番待ちBot",
      "　・宅配弁当LINEbot(chatGPT連携)",
      "　・LINEとGASで作る歯科医院予約システムの構築ガイド",
      "　・LINE公式アカウント家計簿アプリ（GAS・Googleスプレッドシート連携）",
    ],
  },
  {
    category: "マーケティング編",
    subcategories: [
      {
        name: "商品開発",
        items: [
          "はじめての商品開発講座(8)",
        ],
      },
      {
        name: "販売サイトの登録方法",
        items: [
          "ストアカ開設講座(10)",
          "ココナラ開設講座(6)",
        ],
      },
      {
        name: "AI活用のSNS発信",
        items: [
          "マーケティングの基礎(1)",
          "AI活用+note活用講座(19)",
          "AI活用＋X運用講座(17)",
          "自己紹介ポートフォリオサイト作成講座(1)",
          "LINE公式アカウントの始め方(32)",
          "便利なchrome拡張(8)",
        ],
      },
    ],
  },
  {
    category: "企画",
    items: [
      "共同noteマガジン - 趣旨の説明(2025.4)(1)",
      "共同noteマガジン参加者向け説明会(1)",
      "伴走型アプリ開発＆販売プログラム概要説明(1)",
    ],
  },
  {
    category: "座学",
    items: [
      "契約関連の知識(6)",
      "特定商品取引法(1)",
      "産業財産権＋著作権法(5)",
      "契約書関係ひな形集＋サポート弁護士紹介(2)",
      "印紙税について(1)",
    ],
  },
  {
    category: "プチ講座編",
    items: [
      "AI漫画（講師：樋口先生）(1)",
      "ビックリマン風シール作成講座（講師：kuru96先生）非公開済(1)",
      "Dify基礎講座（講師：ハッチ先生）(1)",
      "LINEスタンプ作成講座（講師：mai先生）(1)",
    ],
  },
]

export default function CurriculumPage() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                AI実践起業塾 カリキュラム一覧
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
            <div className="space-y-8">
              {detailedCurriculum.map((section, index) => (
                <div
                  key={section.category}
                  className="bg-card p-8 rounded-2xl border border-border"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{section.category}</h3>
                    </div>
                  </div>
                  
                  {/* サブカテゴリーがある場合 */}
                  {'subcategories' in section && section.subcategories ? (
                    <div className="ml-16 space-y-6">
                      {section.subcategories.map((sub, subIndex) => {
                        const circleNumbers = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩']
                        const toggleKey = `${section.category}-${sub.name}`
                        const isExpanded = expandedItems[toggleKey] || false
                        
                        return (
                          <div key={sub.name}>
                            <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                              <span className="text-primary">{circleNumbers[subIndex] || `${subIndex + 1}.`}</span>
                              {sub.name}
                            </h4>
                            <ul className="space-y-3 ml-6">
                              {sub.items.map((item, itemIndex) => {
                                let hasDetails = false
                                let detailsList: string[] = []
                                const itemToggleKey = `${toggleKey}-${itemIndex}`
                                const isItemExpanded = expandedItems[itemToggleKey] || false
                                
                                if (sub.toggleItems && sub.toggleItems.length > 0) {
                                  const toggleConfig = sub.toggleItems.find(t => t.index === itemIndex)
                                  if (toggleConfig) {
                                    hasDetails = true
                                    detailsList = toggleConfig.details
                                  }
                                } else if (sub.detailItems && sub.detailItems.length > 0) {
                                  const targetIndex = sub.toggleItemIndex !== undefined ? sub.toggleItemIndex : 0
                                  if (itemIndex === targetIndex) {
                                    hasDetails = true
                                    detailsList = sub.detailItems
                                  }
                                }
                                
                                if (hasDetails) {
                                  return (
                                    <li key={itemIndex}>
                                      <button
                                        onClick={() => toggleItem(itemToggleKey)}
                                        className="flex items-start gap-3 w-full text-left hover:opacity-80 transition-opacity"
                                      >
                                        {isItemExpanded ? (
                                          <ChevronUp className="w-4 h-4 text-primary mt-1.5 flex-shrink-0" />
                                        ) : (
                                          <ChevronDown className="w-4 h-4 text-primary mt-1.5 flex-shrink-0" />
                                        )}
                                        <span className="text-muted-foreground leading-relaxed flex-1">{item}</span>
                                      </button>
                                      {isItemExpanded && (
                                        <ul className="mt-3 ml-8 space-y-2">
                                          {detailsList.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="flex items-start gap-3">
                                              <span className="text-muted-foreground/50 mt-0.5 flex-shrink-0">-</span>
                                              <span className="text-muted-foreground/80 text-sm leading-relaxed">{detail}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </li>
                                  )
                                }
                                
                                return (
                                  <li key={itemIndex} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    /* 通常のアイテムリスト */
                    <ul className="space-y-3 ml-16">
                      {'items' in section && section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
