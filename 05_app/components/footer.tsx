import Link from "next/link"

const footerLinks = {
  content: [
    { href: "/features", label: "特徴" },
    { href: "/curriculum", label: "カリキュラム" },
    { href: "/success", label: "実績" },
    { href: "/pricing", label: "料金" },
  ],
  support: [
    { href: "/about", label: "はじめに" },
    { href: "/privacy", label: "プライバシーポリシー" },
    { href: "/terms", label: "利用規約" },
    { href: "/company", label: "運営者情報" },
  ],
  apply: [
    { href: "#apply", label: "無料カウンセリング" },
    { href: "/pricing", label: "料金プラン" },
  ],
}

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#00275C' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="text-xl font-bold tracking-tight">AI実践起業塾</h3>
            </Link>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              次世代の「AIエンジニア」として稼ぐための実践的スクール
            </p>
          </div>

          {/* Content Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              コンテンツ
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.content.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              サポート
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              お申し込み
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.apply.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm text-white/60 text-center">
            &copy; {new Date().getFullYear()} AI実践起業塾. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
