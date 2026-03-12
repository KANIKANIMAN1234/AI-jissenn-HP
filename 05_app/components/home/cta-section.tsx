import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="apply" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight text-balance">
          2025年、AIを単なる流行で終わらせるのか、
          <br className="hidden lg:block" />
          一生モノの資産（武器）にするのか。
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          その答えは、あなたの決断の中にあります。共に未来を切り開きましょう。
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
          >
            <Link href="https://timerex.net/s/kanikaniman1234_00ba/202fa228" target="_blank" rel="noopener noreferrer">
              無料カウンセリングを予約する
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-border hover:bg-card px-8 py-6 text-base"
          >
            <Link href="https://forms.gle/example" target="_blank" rel="noopener noreferrer">
              Googleフォームで申し込む
            </Link>
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          ※無料カウンセリングでは、あなたの目標や現状をお聞きし、最適な学習プランをご提案します
        </p>
      </div>
    </section>
  )
}
