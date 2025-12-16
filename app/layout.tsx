import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansKr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
})

export const metadata: Metadata = {
  title: 'Premium Page - 고품격 웹사이트 제작',
  description: '당신의 비즈니스를 위한 최고의 웹사이트를 만드세요.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} ${notoSansKr.variable} font-sans antialiased text-gray-900 bg-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
