"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqCategories = [
  {
    title: "入塾について",
    items: [
      {
        question: "プログラミング未経験でも大丈夫ですか？",
        answer: "はい、大丈夫です。AI実践起業塾は、プログラミング未経験からでもAIエンジニアとして自立できる環境を提供しています。実際に、塾生のエレンさんもプログラミング経験ゼロから独立し、高単価案件を受注しています。",
      },
      {
        question: "どのくらいの学習時間が必要ですか？",
        answer: "個人差はありますが、週5〜10時間程度の学習時間を確保できれば、3ヶ月程度で基礎的なスキルを習得できます。ただし、永年アクセス可能なので、自分のペースで学習を進めることができます。",
      },
      {
        question: "入塾後、すぐに稼げるようになりますか？",
        answer: "学習の進捗や個人の努力によりますが、GASブートキャンプを修了し、実際に動くアプリを作れるようになれば、クライアントワークを受注できる可能性が高まります。塾生の中には、3ヶ月程度で初案件を受注した方もいます。",
      },
    ],
  },
  {
    title: "料金・支払いについて",
    items: [
      {
        question: "永年参加権とは何ですか？",
        answer: "一度お支払いいただければ、その後は追加料金なしで、永年にわたって全てのコンテンツにアクセスできる権利です。月額課金はありません。また、今後追加されるコンテンツも、追加料金なしで視聴できます。",
      },
      {
        question: "分割払いはできますか？",
        answer: "クレジットカード決済（Square）をご利用の場合、お使いのクレジットカード会社の分割払いサービスをご利用いただけます。詳しくは、カード会社にお問い合わせください。",
      },
      {
        question: "返金保証はありますか？",
        answer: "デジタルコンテンツの性質上、原則として返金は承っておりません。入塾前に無料カウンセリングで内容をご確認いただくことをおすすめします。",
      },
    ],
  },
  {
    title: "学習内容について",
    items: [
      {
        question: "どのようなスキルが身につきますか？",
        answer: "GAS（Google Apps Script）によるアプリ開発、ManusAIを使った自律型エージェント活用、BananaNLによるデザイン資料作成、API連携による業務自動化など、実務で即戦力となるスキルが身につきます。",
      },
      {
        question: "セミナーに参加できない場合はどうなりますか？",
        answer: "全てのセミナーは録画され、アーカイブとして保存されます。リアルタイムで参加できなくても、後日いつでも視聴可能です。",
      },
      {
        question: "コンテンツは今後も追加されますか？",
        answer: "はい、継続的に最新のAI技術やビジネス戦略に関するコンテンツを追加していきます。永年参加権をお持ちの方は、追加料金なしで全ての新コンテンツにアクセスできます。",
      },
    ],
  },
  {
    title: "サポートについて",
    items: [
      {
        question: "質問や相談はできますか？",
        answer: "はい、塾生コミュニティ内で質問や相談が可能です。また、毎週開催されるセミナーでも直接質問できます。講師や他の塾生が、あなたの疑問や課題に答えます。",
      },
      {
        question: "アプリ開発の支援はどこまでしてもらえますか？",
        answer: "アイデアの整理から要件定義、仕様書作成、実装、そしてアプリストアへの公開まで、一気通貫でサポートします。チーム全体で伴走するので、技術的な壁に直面しても安心です。",
      },
      {
        question: "コミュニティはどのように運営されていますか？",
        answer: "オンラインコミュニティ（Slack等）で運営されています。塾生同士の情報交換、質問・相談、セミナーの告知などが行われます。活発なコミュニティで、常に最新の情報がシェアされています。",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                よくある質問
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                入塾前の不安や疑問を解消します
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category) => (
                <div key={category.title}>
                  <h2 className="text-xl font-bold text-foreground mb-6">{category.title}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.items.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.title}-${index}`}
                        className="bg-background border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-6">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* More Questions */}
            <div className="mt-16 p-8 bg-muted rounded-lg text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">その他のご質問は？</h3>
              <p className="text-muted-foreground mb-6">
                ここに掲載されていない質問や、個別の相談がある場合は、無料カウンセリングでお気軽にお尋ねください。
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="https://timerex.net/s/kanikaniman1234_00ba/202fa228" target="_blank" rel="noopener noreferrer">無料カウンセリングを予約</Link>
              </Button>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
