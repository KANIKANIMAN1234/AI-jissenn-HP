import Link from "next/link"
import { ArrowUpRight, BookOpen, Code, Users, Trophy, Sparkles, HelpCircle, Wallet, Calendar } from "lucide-react"

const quickLinks = [
  {
    href: "/features",
    icon: Sparkles,
    title: "特徴",
    description: "なぜ今AI実装スキルが必要なのか、AI実践起業塾の4つの特徴",
  },
  {
    href: "/curriculum",
    icon: BookOpen,
    title: "カリキュラム",
    description: "300超の動画コンテンツ、11のカテゴリーで実務スキルを習得",
  },
  {
    href: "/seminar",
    icon: Calendar,
    title: "セミナー",
    description: "毎週開催の定期セミナー、67回分のアーカイブ動画",
  },
  {
    href: "/success",
    icon: Trophy,
    title: "実績",
    description: "ノンプログラマーから独立・高単価案件受注までの成功事例",
  },
  {
    href: "/founder",
    icon: Users,
    title: "発起人",
    description: "AI実践起業塾を立ち上げた理由、共同発起人の紹介",
  },
  {
    href: "/pricing",
    icon: Wallet,
    title: "料金",
    description: "永年参加権5万円、300超の動画コンテンツに永年アクセス",
  },
  {
    href: "/faq",
    icon: HelpCircle,
    title: "FAQ",
    description: "よくある質問と回答、入塾前の不安を解消",
  },
  {
    href: "#apply",
    icon: Code,
    title: "アプリ開発支援",
    description: "伴走型でアイデアを形に。チームで開発・販売まで全面サポート",
  },
]

export function QuickLinksSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Learn More
          </h2>
          <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
            AI実践起業塾で学べること
          </p>
          <p className="mt-4 text-muted-foreground">
            各ページで詳しくご紹介しています
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <link.icon className="h-6 w-6 text-primary" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{link.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
