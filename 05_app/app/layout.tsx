import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['400', '500', '600', '700'],
})

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'AI実践起業塾 | 次世代のAIエンジニアとして稼ぐための実践的スクール',
  description: 'AI実践起業塾 - 次世代のAIエンジニアとして稼ぐための実践的スクール。2026年のAI補助金時代に向けて、今すぐスキルを習得しましょう。300超の動画コンテンツ、永年参加権5万円。',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#38B6FF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
