import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { ImageDialog } from "@/components/image-dialog"
import { Handshake, Lightbulb, Rocket, Target, Users, Wallet } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "はじめに | AI実践起業塾",
  description: "AI実践起業塾について - AIを活用して自分のビジネスを形にし、実際に収益を生み出すことを目的としています。",
}

const values = [
  {
    icon: Handshake,
    title: "横のつながり",
    description: "教える・教わるだけでなく、お互いに学び合い、協力し合うコミュニティ",
  },
  {
    icon: Lightbulb,
    title: "実践重視",
    description: "学ぶだけでなく、実際に収益を生み出すビジネスを形にする",
  },
  {
    icon: Rocket,
    title: "まず動く",
    description: "完璧じゃなくていい。小さな一歩を踏み出すことを大切にする",
  },
]

const philosophy = [
  {
    icon: Target,
    title: "実務直結",
    description: "理論だけでなく、実際に動くものを作る。すぐに使えるスキルを習得する。",
  },
  {
    icon: Users,
    title: "伴走型サポート",
    description: "一人で悩まず、チーム全体で支援。技術的な壁を一緒に乗り越える。",
  },
  {
    icon: Wallet,
    title: "稼げる技術",
    description: "学習だけでなく、高単価案件を受注できる市場価値を獲得する。",
  },
  {
    icon: Rocket,
    title: "先行者利益",
    description: "今この瞬間に動くことで、2026年のAI補助金時代の先行者となる。",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                はじめに
              </h1>
            </div>
          </div>
        </section>

        {/* Message */}
        <section className="py-16 lg:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="flex-1 prose prose-lg max-w-none space-y-6 text-muted-foreground lg:pr-8">
                <p>
                  AI実践起業塾は、単に「AIを学ぶ場」ではなく、
                  <strong className="text-foreground">AIを活用して自分のビジネスを形にし、実際に収益を生み出すこと</strong>
                  を目的としています。
                </p>
                <p>
                  ここでは、教える人と教わる人という縦の関係だけでなく、
                  <strong className="text-foreground">お互いに学び合い、協力し合う"横のつながり"</strong>
                  を大切にしています。
                </p>
                <p>
                  <strong className="text-foreground">参加者一人ひとりが主役</strong>
                  であり、共通の目標に向かって切磋琢磨する仲間。
                </p>
                <p>
                  今はまだ不安なことがあっても大丈夫。
                  <br />
                  小さな一歩を仲間と共に踏み出すことで、気づけば自分の商品を持ち、マネタイズできる道が見えてきます。
                </p>
                <p>
                  この塾で大切なのは
                  <strong className="text-foreground">「完璧じゃなくていいから、まず動く」</strong>
                  こと。
                  <br />
                  ここでの出会いが、あなたの可能性を大きく広げるきっかけになります。
                </p>
                <p className="text-xl text-primary font-medium">
                  一緒に学び、支え合いながら、一歩ずつ前へ進んでいきましょう。
                </p>
              </div>
              <div className="flex-shrink-0 lg:w-[420px] lg:mt-0 mt-8">
                <Image
                  src="/images/mission-vision-value.png"
                  alt="AI実践起業塾のミッション・ビジョン・バリュー"
                  width={960}
                  height={720}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Values</h2>
              <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                AI実践起業塾の3つの価値観
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-8 bg-card rounded-lg border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">「作る技術を持つ者が最強である」</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  この信念のもと、AI実践起業塾は誕生しました。2025年から2026年にかけて、日本の労働市場は「生存レベルの分断」という劇的な転換期を迎えます。政府のリスキリング補助金による教育フェーズは終わり、2026年からは「AI補助金」という、実務への直接的な実装・導入を支援するフェーズへと移行します。
                </p>
                <p>
                  この変化の中で、AIを単に使うだけの「ユーザー」と、ビジネスの仕組みそのものを構築する「AIエンジニア」との間には、圧倒的な市場価値の差が生まれます。後者は2026年において、既存の給料より「0が1つ、2つ多い」案件を受注できる最強の市場価値を持つことになります。
                </p>
                <p>
                  しかし、多くの人がこのチャンスに気づいていません。あるいは、気づいていても「どこから始めればいいのか分からない」という壁に直面しています。
                </p>
                <p>
                  AI実践起業塾は、プログラミング未経験からでもAIエンジニアとして自立できる環境を提供し、あなたが新しい時代の「AIエンジニア」として成長し、共に稼げる仲間となるための伴走者であることを約束します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Philosophy</h2>
              <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                私たちの理念
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {philosophy.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Model */}
        <section className="py-16 lg:py-24 bg-muted border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Business Model</h2>
              <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
                AI実践 × 仕事循環モデル
              </p>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                入門コースからビジネスパートナーコースまで、あなたのステージに合わせた成長プログラム
              </p>
            </div>
            
            <div className="flex justify-center">
              <Image
                src="/images/business-model.png"
                alt="AI実践×仕事循環モデル - 入門コースからビジネスパートナーコースまでの成長プログラム"
                width={1200}
                height={800}
                className="w-full max-w-5xl h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
