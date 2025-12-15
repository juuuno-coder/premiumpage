import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PP - Premium Page | 프리미엄 웹사이트 제작",
  description: "아티스트, 소상공인, 중소기업을 위한 프리미엄 웹사이트 제작 서비스. 23개의 전문 템플릿과 완벽한 관리 서비스를 제공합니다.",
  keywords: ["웹사이트 제작", "홈페이지 제작", "프리미엄 디자인", "템플릿", "웹 개발"],
  authors: [{ name: "Premium Page" }],
  openGraph: {
    title: "PP - Premium Page | 프리미엄 웹사이트 제작",
    description: "아티스트, 소상공인, 중소기업을 위한 프리미엄 웹사이트 제작 서비스",
    url: "https://premiumpage.com",
    siteName: "Premium Page",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PP - Premium Page | 프리미엄 웹사이트 제작",
    description: "아티스트, 소상공인, 중소기업을 위한 프리미엄 웹사이트 제작 서비스",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
