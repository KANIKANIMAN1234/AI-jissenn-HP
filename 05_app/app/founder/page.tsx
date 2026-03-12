import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Target, Users, Wallet, Rocket, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "発起人 | AI実践起業塾",
  description: "AI実践起業塾の発起人 - 塾を立ち上げた理由と共同発起人の紹介",
}

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

const founders = [
  {
    initial: "井",
    name: "井上 剛聡",
    role: "共同発起人",
    handle: "タケさん @ X集客UP+AI活用！",
    twitter: "https://twitter.com/AI____japan",
    note: "https://note.com/take_by_place",
    description: "X集客のプロ。10億規模オフィス移転コンサル経験。AI活用とビジネス戦略の融合を推進。",
  },
  {
    initial: "渡",
    name: "渡邉 裕司",
    role: "共同発起人",
    handle: "渡邉ゆうじ @ AI活用アドバイザー｜GPTs開発",
    twitter: "https://twitter.com/YuNabe_ai",
    note: "https://note.com/yunabe_ai",
    description: "AI活用の専門家。SE・YouTubeディレクター経験。GPTs開発を得意とし、最新AI技術の実装を推進。",
  },
]

export default function FounderPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight">
                発起人
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                AI実践起業塾を立ち上げた理由と、共に歩む仲間たち
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-32 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">なぜAI実践起業塾を立ち上げたのか</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl text-foreground font-medium">「作る技術を持つ者が最強である」</p>
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
        </section>

        {/* Philosophy */}
        <section className="py-20 lg:py-32 bg-background">
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

        {/* Founders */}
        <section className="py-20 lg:py-32 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Team</h2>
              <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                共同発起人
              </p>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                AI実践起業塾は、AI技術とビジネスの最前線で活躍する専門家たちによって運営されています。
              </p>
            </div>

            {/* Founders Image */}
            <div className="flex justify-center mb-16">
              <Image
                src="/images/founders.png"
                alt="共同発起人 - たけさん（井上 剛聡）× なべさん（渡邉 裕司）"
                width={600}
                height={400}
                className="w-full max-w-lg h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="bg-card p-8 rounded-2xl border border-border"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">{founder.initial}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{founder.name}</h3>
                      <p className="text-sm text-primary font-medium">{founder.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{founder.handle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{founder.description}</p>
                  <div className="flex items-center gap-4">
                    <Link
                      href={founder.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      X (Twitter)
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                    <Link
                      href={founder.note}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      note
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">私たちのビジョン</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              2026年、AI補助金時代の到来により、市場価値を爆発させる最大のチャンスが訪れます。AI実践起業塾は、あなたがこのチャンスを確実に掴み、次世代の「AIエンジニア」として飛躍するための最短ルートを提供します。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              今はまだ、AIを仕組みとして構築できる人材は稀少です。だからこそ、今この瞬間に動くことに最大の戦略的価値があります。共に未来を切り開きましょう。
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
