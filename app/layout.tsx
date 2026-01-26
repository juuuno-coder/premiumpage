import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from 'next/link' // Added Link import

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Premium Page | 전자 카탈로그 전문 서비스",
  description: "고품격 디자인과 인터랙티브 기술이 결합된 전자 카탈로그 솔루션",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global Navigation Bar */}
          <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-background/50 backdrop-blur-xl">
            <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex items-center gap-8">
                <Link href="/" className="text-2xl font-black gradient-text">
                  Premium Page
                </Link>
                <div className="items-center hidden gap-6 md:flex">
                  <Link href="/pdf-converter" className="text-sm font-medium transition-colors hover:text-primary-500">
                    PDF 변환
                  </Link>
                  <Link href="/quote" className="text-sm font-medium transition-colors hover:text-primary-500">
                    제작 의뢰
                  </Link>
                  <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-primary-500">
                    포트폴리오
                  </Link>
                  <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary-500">
                    대시보드
                  </Link>
                  <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary-500">
                    서비스 소개
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link href="/login" className="text-sm font-medium transition-colors hover:text-primary-500">
                  로그인
                </Link>
                <Link
                  href="/quote"
                  className="px-5 py-2 text-sm font-bold text-black transition-all bg-white rounded-full hover:bg-gray-200 active:scale-95"
                >
                  시작하기
                </Link>
              </div>
            </div>
          </nav>
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
