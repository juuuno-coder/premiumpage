'use client'

import React, { Suspense } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Globe, Layers, MousePointer2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EMTMasterpiece } from '@/components/catalog/EMTMasterpiece'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { SparklesCore } from '@/components/ui/sparkles'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { cn } from '@/lib/utils'

export default function PremiumLandingPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground transition-colors duration-300">

      {/* 🚀 Hero Section: Aurora + Sparkles */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 transition-colors duration-300">
          <AuroraBackground className="h-full w-full opacity-50 dark:opacity-100">
            <div className="absolute inset-0 w-full h-full">
              <SparklesCore
                id="hero-particles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="currentColor"
              />
            </div>
            <span className="hidden">Background Animation Layer</span>
          </AuroraBackground>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <div className="mb-8">
            <TextGenerateEffect
              words="THE ART OF DIGITAL CATALOG"
              className="text-5xl md:text-8xl font-black tracking-tighter leading-tight filter drop-shadow-lg dark:drop-shadow-[0_0_30px_rgba(168,85,247,0.3)] text-gray-900 dark:text-white"
            />
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            평범한 PDF를 넘어선 압도적인 인터랙티브 경험. <br />
            글로벌 시장을 매료시키는 전자 카탈로그의 새로운 기준.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
              <Link href="/pdf-converter">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-2 text-lg font-bold text-white backdrop-blur-3xl gap-2 transition-all hover:bg-slate-900">
                  PDF 변환 시작하기 <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </Button>

            <Link href="/quote" className="text-muted-foreground hover:text-foreground transition-all flex items-center gap-3 font-bold bg-secondary/50 px-8 py-4 rounded-full border border-border hover:bg-secondary/80 backdrop-blur-sm">
              무료 견적 요청하기 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-muted-foreground animate-bounce">
          <MousePointer2 className="w-6 h-6" />
        </div>
      </section>

      {/* 💎 3D Masterpiece Preview: 블랙박스 해결을 위해 고정 높이 부여 */}
      <section className="py-32 relative bg-background border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Masterpiece <span className="gradient-text">Edition</span></h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">가장 진보된 Three.js 기술로 구현된 3D 마스터피스 템플릿입니다.</p>
          </div>

          <div className="max-w-6xl mx-auto glass-card p-4 md:p-8 relative min-h-[600px] flex items-center justify-center overflow-hidden">
            <Suspense fallback={<div className="text-muted-foreground animate-pulse font-bold">3D 시뮬레이션 로딩 중...</div>}>
              <div className="w-full h-[600px] md:h-[700px] bg-black rounded-2xl border border-white/10 shadow-inner relative z-0 overflow-hidden">
                <EMTMasterpiece />
              </div>
            </Suspense>
          </div>
        </div>
      </section>

      {/* ✨ Features Grid */}
      <section className="py-40 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Zap className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />}
              title="초고속 웹 변환"
              description="준비된 PDF 파일을 1분 안에 인터랙티브한 웹 뷰어로 변환하여 즉시 배포하세요."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10 text-blue-500 dark:text-blue-400" />}
              title="글로벌 수출 최적화"
              description="다국어 지원은 물론, 해외 어디서나 끊김 없는 초고속 글로벌 CDN 네트워크를 제공합니다."
            />
            <FeatureCard
              icon={<Layers className="w-10 h-10 text-purple-500 dark:text-purple-400" />}
              title="압도적 인터랙션"
              description="스크롤 애니메이션, 3D 모델링 연동 등 하이엔드 에이전시 수준의 UX를 제공합니다."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-black mb-2 gradient-text">Premium Page</div>
          <p className="text-muted-foreground text-sm mb-8 font-medium">© 2026 Premium Page Inc. All rights reserved.</p>
          <div className="flex justify-center gap-10 text-muted-foreground text-sm font-bold">
            <a href="#" className="hover:text-foreground transition-colors">이용약관</a>
            <a href="#" className="hover:text-foreground transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-foreground transition-colors">문의하기</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-12 rounded-[2rem] bg-card border border-border hover:border-primary/20 transition-all group shadow-sm hover:shadow-md dark:shadow-none dark:bg-zinc-900/50 dark:backdrop-blur-sm">
      <div className="mb-10 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-colors font-medium">{description}</p>
    </div>
  )
}
