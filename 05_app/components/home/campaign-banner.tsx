export function CampaignBanner() {
  return (
    <section className="bg-primary text-primary-foreground py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-md bg-primary-foreground/20 text-xs font-semibold">
            期間限定
          </span>
          <p className="text-sm lg:text-base font-medium">
            2026年4月の新年度予算サイクルに向けて、今から準備を開始しましょう
          </p>
        </div>
      </div>
    </section>
  )
}
