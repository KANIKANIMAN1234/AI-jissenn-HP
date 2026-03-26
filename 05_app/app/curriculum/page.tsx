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
  toggleItems?: ToggleItem[]
}

const detailedCurriculum: CurriculumSection[] = [
  {
    category: "はじめに",
    items: [
      "受講前に(5)",
      "ビジネスを始めるうえでの心構えについて",
      "コミュニティ（Discord）への参加",
    ],
    toggleItems: [
      {
        index: 0,
        details: [
          "AI実践塾で目指したい姿",
          "仕事循環モデルについて",
          "仕事循環モデルについてルールについて",
          "Zoomの使い方",
          "エキスパのヘルプについて",
        ],
      },
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
        detailItems: [
          "第1回『商品開発の第一歩』⇒第17回を視聴してください",
          "第2回『お金を稼ぐということ』⇒第18回を視聴して下さい。",
          "第3回『商品開発の第一歩』～得意を深掘りしてビジネスにつなげよう～",
          "第4回『1回で3度おいしいSNSコンテンツ活用』",
          "第5回『noteが伸びる人、伸びない人』⇒第23回を視聴ください。",
          "第6回『リサーチするってどういうこと？』⇒第24回を視聴ください。",
          "第7回『効率が３倍になる文章AIの使い方』",
          "第8回『AI業界の稼ぎ方・業界マップ』⇒第26回を視聴して下さい。",
          "第9回『商品販売で失敗しないファネルとは』⇒第27回を視聴",
          "第10回『売れる行動心理学』⇒第28回を視聴してください。",
          "第11回『ブランディングの教科書』⇒第29回を視聴",
          "第12回『プロンプトってなぁに？』ChatGPTとの向き合い方・使い",
          "第13回『AI実践起業塾の目指したい姿』",
          "第14回『AI実践起業塾の目指したい姿・講座説明』",
          "第15回『AI実践塾で得られる姿』",
          "第16回『AIｘココナラで成果を上げる方法-未経験からの66万へ』",
          "第17回『商品開発の第一歩、自分の得意を見つけよう』",
          "第18回『安定的・継続的にお金を稼ぐ方法』",
          "第19回『LPの基本、SaiponでLPを作ろう！』",
          "第20回『nootebookLMの基礎と活用』",
          "不動産で新しくマネタイズする方法（説明会アーカイブ）",
          "第21回『AIを活用してサクッと資料を作成する方法』  ※felo、Gamma以外でサクッとサクサク♪",
          "第22回『特定のメールアドレスからの受信をLINEに自動通知する方法』 ハンズオンで設定しながらやってみよう(^^♪",
          "第23回『noteが伸びる人、伸びない人』",
          "第24回『リサーチするってどういうこと？』",
          "第25回『法人向けビジネスのトレンド情報』幕張メッセ展示会のシェア会",
          "第26回『AI業界の稼ぎ方・業界マップ』（※第8回の更新版です）",
          "第27回 商品販売で必須のファネル〜お客様と出会う3ステップ〜（※第9回の更新版です）",
          "第28回 売れる行動心理学",
          "第29回 ブランディングの基礎",
          "第30回 『プロンプト不要？、たった３行でAIを操るコツ』",
          "第31回 『AIエンジニアのためのClaude 4.5ファミリー徹底比較と活用戦略』",
          "第32回 『AIエージェントをきちんと理解しておこう』",
          "第33回 2025年振り返り、2026年告知！",
          "第34回 理想の１年を手に入れる「32マスの地図」",
          "第35回 AIを学んでも稼げない本当の理由とは？",
          "第3６回AIエンジニアになる方法＆塾のご案内",
          "第37回AIセキュリティ、実は9割の人が知らない「本当に怖いこと」",
          "第38回マジDEすごい！NotebookLM！",
          "第39回AIでプレゼン資料作成（その２）",
          "第40回 『AIエディターの種類について』",
          "第41回 『ManusAIを触ってみよう！』",
          "第42回 『Cursor超入門セミナー！　2026年必須ツールCursorを学ぶ』",
          "第43回 『Cursor超入門セミナー！　2026年必須ツールCursorを学ぶ』",
        ],
      },
      {
        name: "会員向けセミナーアーカイブ",
        items: [
          "会員向けセミナーアーカイブ(28)",
        ],
        detailItems: [
          "第1回 2025.07.17　グループコンサル",
          "第2回 2025.07.31　グループコンサル",
          "第3回 2025.08.21　グループワーク",
          "第４回 2025.09.03　まじん式プロンプト、GAS資料作成！",
          "ゲリラZoom バイブコーディング疑似体験しよう。2025.09.07",
          "第5回『WEBサイトをAI活用でサクッと作る』2025.09.10",
          "第6回会員向けセミナー2025.09.17『ロードマップを作成しよう』",
          "第7回会員向けセミナー　2025.10.01 n8n自動化のはじめかたセミナー",
          "第8回会員向けセミナー　2025.10.09 AI時代を勝ち抜く個人の生存戦略",
          "第9回会員向けセミナー2025.10.15 『最も効率的にAIを使う方法ーAIツールと最新プロンプト』",
          "第10回会員向けセミナー2025.10.22『Gas,firebaseとかWEBアプリ周りの基本について』",
          "第11回2025.10.29『webhook、APIの理解を深めよう』",
          "第12回2025.11.05『売り上げを上げるための「自己分析」を一緒にやろう』",
          "第13回2025.11.12『最近増えてる？MVPの話 ＋最近人気のポジションPdM！PMとは違うの？』",
          "第14回2025.11.26『データベースの活用を1時間で学ぶ』",
          "第15回2025.12.03『GoogleAIStudioで、サクッとアプリ開発をしよう』",
          "第16回2025.12.10『データベースの基礎、マスタとトランザクションをしっかり理解しよう』",
          "第17回会員向けセミナー『60分で学べる！BMCの基礎』",
          "第1８回会員向けセミナー『目標設定セミナー』",
          "第19回会員向けセミナー『obsidian＋Cursorのインストールと活用』",
          "第20回会員向けセミナー『AIマーケの終焉→エンジニアになろう＆支払い方法切り替えについて』",
          "第21回会員向けセミナー『AIセキュリティのキモ」』",
          "第22回会員向けセミナー『AIをプレゼン資料術・極力課金しない方法』",
          "第23回 会員向けセミナー『AIでプレゼン資料術（その２）』",
          "第24回 会員向けセミナー『2026年AIアプリ開発の黄金ルート』",
          "第25回 会員限定『座談会』",
          "第26回 Cursor超実践セミナー",
          "第27回 Cursor×Obsidianで第二の脳を構築する（塾内セミナー）",
        ],
      },
    ],
  },
  {
    category: "AI基礎",
    items: [
      "AI基礎講座（現在作成中）",
      "AIセキュリティー講座（現在作成中）",
      "用語なんでも質問：AIチャットボット",
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
          "Difyの概要",
          "APIの基本",
          "5つのアプリケーションタイプ",
          "アプリを作ってみよう",
        ],
        toggleItemIndex: 3,
        detailItems: [
          "［チャットボット］簡単なチャットボットを作成しよう",
          "［チャットボット］RAGチャットボットを作成しよう(3)",
          "［テキストジェネレーター］SNS投稿テキストを作成しよう",
          "［チャットフロー］問合せチャットフローを作成しよう(2)",
          "［ワークフロー］PDFファイルからQA集を自動生成するアプリ",
        ],
      },
      {
        name: "WEBアプリについて知識補充",
        items: [
          "ReactとNext.jsの違い(3)",
          "WEBアプリで知っておくべきこと(8)",
          "Typescriptって何？",
        ],
      },
      {
        name: "Vercel関連",
        items: [
          "Vercelアカウント作成",
        ],
      },
      {
        name: "HP、LP作成",
        items: [
          "様々なWEBサイト作成ツール紹介",
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
          "仕様書について理解を深めよう",
          "AI活用・仕様駆動型アプリ開発の実践Tips",
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
      "Difyアプリ中級チャレンジ",
      "LINE公式＋αチャレンジ(6)",
    ],
    toggleItems: [
      {
        index: 0,
        details: [
          "サムネイル作成の流れ",
          "YAML出力GPTs配布",
          "サムネイル作成（サンプル集）",
          "チラシ作成（サンプル集）",
        ],
      },
      {
        index: 2,
        details: [
          "LINE 予定管理 秘書bot（LINE×GAS連携）",
          "LINE メール管理 AI秘書bot（LINE×GAS連携）",
          "cafe飲食店向け LINE公式＋順番待ちBot",
          "宅配弁当LINEbot(chatGPT連携)",
          "LINEとGASで作る歯科医院予約システムの構築ガイド",
          "LINE公式アカウント家計簿アプリ（GAS・Googleスプレッドシート連携）",
        ],
      },
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
        detailItems: [
          "はじめに・概要",
          "STEP1:自分の「武器」を発見する",
          "STEP1-2:自分の「武器」を発見する（実践ワーク）",
          "STEP2:リサーチでニーズを確認する",
          "STEP2-2:リサーチでニーズを確認する(実践ワーク)",
          "STEP3:これが欲しいと思わせる商品設計（コンセプト・価値）",
          "STEP4:販売準備（商品を世に出す）",
          "まとめ",
        ],
      },
      {
        name: "販売サイトの登録方法",
        items: [
          "ストアカ開設講座(10)",
          "ココナラ開設講座(6)",
        ],
        toggleItems: [
          {
            index: 0,
            details: [
              "０概要-ストアカセミナーを効率的に開催する",
              "１ 基礎固め＆本人確認申請",
              "２ リサーチ＆ページ作成 概要と競合リサーチ",
              "３ STEP2:商品ページ作成",
              "４ STEP2-サムネイルの作成方法",
              "５ STEP3 先生ページの作成",
              "６ 仕上げ　【概要　と　STEP1日程の設定】",
              "７ 自己集客URL　と　クーポン発行",
              "８ STEP3　最終チェックと公開確認",
              "９ まとめと特典",
            ],
          },
          {
            index: 1,
            details: [
              "ステップ0：AI×ココナラで収益化。最短で商品を作る方法",
              "ステップ1：知る・決めるー自分と市場を知り、最初の一歩を決める",
              "ステップ2：作るーあなたのアイデアをお客様が喜ぶ価値に変える",
              "ステップ3：整えるーあなたのサービスを魅力的に見せるお店を作る",
              "ステップ4：届ける・育てるーあなたの価値を届け、最初の実績を手に入れる",
              "ステップ５：まとめ＆ネクストステップーすぐに行動に移すために",
            ],
          },
        ],
      },
      {
        name: "AI活用のSNS発信",
        items: [
          "マーケティングの基礎",
          "AI活用+note活用講座(19)",
          "AI活用＋X運用講座(17)",
          "自己紹介ポートフォリオサイト作成講座",
          "LINE公式アカウントの始め方(32)",
          "便利なchrome拡張(8)",
        ],
        toggleItems: [
          {
            index: 1,
            details: [
              "本講座の全体概要",
              "この講座を作った背景",
              "楽しみながら長期的に書き続ける方法",
              "なぜ書くのか",
              "多くの人に最後まで読まれるnote記事の書き方（前半）",
              "多くの人に最後まで読まれるnote記事の書き方（後編）",
              "有料記事が2倍、3倍読まれる方法",
              "記事を多くの人に届けて収益拡大する方法",
              "自己紹介note記事を書こう",
              "自己紹介note記事作成：実践編GPTs",
              "記事を爆速で量産する方法(note)",
              "記事を爆速で量産する方法(note)：実践編GPTS",
              "記事を爆速で量産する方法(youtube)",
              "記事を爆速で量産する方法(youtube)：実践編GPTS",
              "有料記事の書き方",
              "有料記事の書き方：実践編GPTs",
              "番外編",
              "その他：note記事を読む人の気持ちになってみて",
              "note競合リサーチ方法（スプレッドシート＋GAS連携）",
            ],
          },
          {
            index: 2,
            details: [
              "講座（前半）",
              "講座（後半）",
              "Xヘッダー作成",
              "Xアルゴリズムについて",
              "垢バン、シャドウバンについて",
              "目標設定編",
              "テクニック編①フォロワー、インプレッションの稼ぎ方",
              "Xリストの作成方法とメンバーの登録方法",
              "リスト登録した仲間のオリジナルポストだけを表示する方法",
              "Xコマンドについて（以下note　非公開記事参照）",
              "スペースの入り方",
              "セルフリポストやり方",
              "FF値について（以下note記事参照）",
              "X投稿を効率化するGPTs集",
              "長文ストーリーポストのPOINT",
              "他の人がUPしている動画をDownloadする方法",
              "Ⅹでの行動を無料で自動化する方法",
            ],
          },
          {
            index: 4,
            details: [
              "このコースの全体像と学べる事",
              "運用目的の明確化",
              "アカウントタイプについて",
              "開設できない業種",
              "プランについて",
              "開設方法について",
              "プレミアムIDについて",
              "Management画面の説明",
              "プロフィールの重要性について",
              "プロフィール設定をしてみよう",
              "権限管理について",
              "応答設定について",
              "友達追加方法について",
              "挨拶メッセージの概要説明・メッセージ文章の作成について",
              "一括配信メッセージについて",
              "ステップ配信メッセージについて",
              "コーチ・コンサル系ステップ配信メッセージについて",
              "エステ・サロン系ステップ配信メッセージについて",
              "ステップ配信メッセージ5つの成功POINT",
              "ステップ配信メッセージのワークシート",
              "ステップ配信メッセージの設定",
              "リッチメッセージ設定方法",
              "リッチビデオメッセージ設定方法",
              "カードタイプメッセージ設定方法",
              "リッチメニューについて",
              "Canvaを使ってリッチメニュー画像を作成する方法",
              "リッチメニュー設定方法",
              "クーポンの設定方法",
              "ショップカードの設定方法",
              "リサーチ機能の設定方法",
              "LINEで使える売れる行動心理学",
              "アカウント凍結の原因と対策",
            ],
          },
        ],
      },
    ],
  },
  {
    category: "企画",
    items: [
      "共同noteマガジン - 趣旨の説明(2025.4)",
      "共同noteマガジン参加者向け説明会",
      "伴走型アプリ開発＆販売プログラム概要説明",
    ],
  },
  {
    category: "座学",
    items: [
      "契約関連の知識(6)",
      "特定商品取引法",
      "産業財産権＋著作権法(5)",
      "契約書関係ひな形集＋サポート弁護士紹介(2)",
      "印紙税について",
    ],
  },
  {
    category: "プチ講座編",
    items: [
      "AI漫画（講師：樋口先生）",
      "ビックリマン風シール作成講座（講師：kuru96先生）非公開済",
      "Dify基礎講座（講師：ハッチ先生）",
      "LINEスタンプ作成講座（講師：mai先生）",
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
                                        <span className="w-4 flex-shrink-0 flex items-start mt-1.5">
                                          {isItemExpanded ? (
                                            <ChevronUp className="w-4 h-4 text-primary" />
                                          ) : (
                                            <ChevronDown className="w-4 h-4 text-primary" />
                                          )}
                                        </span>
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
                                    <span className="w-4 flex-shrink-0"></span>
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
                    <ul className="space-y-3 ml-[5.5rem]">
                      {'items' in section && section.items && section.items.map((item, itemIndex) => {
                        const toggleKey = `${section.category}-${itemIndex}`
                        const isExpanded = expandedItems[toggleKey] || false
                        let hasDetails = false
                        let detailsList: string[] = []
                        
                        if (section.toggleItems && section.toggleItems.length > 0) {
                          const toggleConfig = section.toggleItems.find(t => t.index === itemIndex)
                          if (toggleConfig) {
                            hasDetails = true
                            detailsList = toggleConfig.details
                          }
                        }
                        
                        if (hasDetails) {
                          return (
                            <li key={itemIndex}>
                              <button
                                onClick={() => toggleItem(toggleKey)}
                                className="flex items-start gap-3 w-full text-left hover:opacity-80 transition-opacity"
                              >
                                <span className="w-4 flex-shrink-0 flex items-start mt-1.5">
                                  {isExpanded ? (
                                    <ChevronUp className="w-4 h-4 text-primary" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4 text-primary" />
                                  )}
                                </span>
                                <span className="text-muted-foreground leading-relaxed flex-1">{item}</span>
                              </button>
                              {isExpanded && (
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
                            <span className="w-4 flex-shrink-0"></span>
                            <span className="text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        )
                      })}
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
