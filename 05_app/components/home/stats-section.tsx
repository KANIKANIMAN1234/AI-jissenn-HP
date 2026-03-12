const stats = [
  {
    number: "01",
    title: "初心者でも安心",
    description: "プログラミング未経験からでもAIエンジニアとして自立できる環境を提供",
  },
  {
    number: "02",
    title: "実務直結のカリキュラム",
    description: "要件定義から実装まで、実際に動くものを作る経験を積み上げる",
  },
  {
    number: "03",
    title: "永年参加権",
    description: "一度入塾すれば、300超の動画コンテンツに永年アクセス可能",
  },
  {
    number: "04",
    title: "最新技術を網羅",
    description: "ManusAI、BananaNL、GAS連携など、最先端のAI技術を習得",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Features
          </h2>
          <p className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
            AI実践起業塾の4つの特徴
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="bg-card p-8 lg:p-12 group hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-start gap-6">
                <span className="text-5xl lg:text-6xl font-serif font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {stat.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{stat.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
