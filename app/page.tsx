'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { templates, developmentPlans } from '@/lib/data'
import { formatPrice } from '@/lib/data-utils'
import {
  ArrowRight, Check, Sparkles, Zap, Shield, Headphones,
  Code2, Palette, Globe, ChevronRight
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 - 아임웹 스타일 */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="imweb-container">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl">Premium Page</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="imweb-body hover:text-blue-600 transition">기능</a>
              <a href="#templates" className="imweb-body hover:text-blue-600 transition">템플릿</a>
              <a href="#pricing" className="imweb-body hover:text-blue-600 transition">요금제</a>
              <Link href="/login" className="imweb-body hover:text-blue-600 transition">로그인</Link>
              <Link href="/quote" className="imweb-btn imweb-btn-primary">
                시작하기
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 - 아임웹 스타일 */}
      <section className="imweb-section">
        <div className="imweb-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* 왼쪽: 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="imweb-badge imweb-badge-primary mb-6">
                <Sparkles className="w-4 h-4" />
                <span>23개의 프리미엄 템플릿</span>
              </div>

              <h1 className="imweb-heading-1 mb-6">
                비즈니스를 위한
                <br />
                <span className="text-blue-600">프리미엄 웹사이트</span>
              </h1>

              <p className="imweb-body-lg mb-8">
                전문가가 디자인한 템플릿으로 빠르고 쉽게 시작하세요.
                코딩 없이 나만의 웹사이트를 만들 수 있습니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="imweb-btn imweb-btn-primary imweb-btn-lg">
                  무료 견적 받기
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#templates" className="imweb-btn imweb-btn-secondary imweb-btn-lg">
                  템플릿 보기
                </a>
              </div>

              {/* 통계 */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t">
                <div>
                  <div className="imweb-heading-3">500+</div>
                  <div className="imweb-body-sm mt-1">만족한 고객</div>
                </div>
                <div>
                  <div className="imweb-heading-3">99%</div>
                  <div className="imweb-body-sm mt-1">고객 만족도</div>
                </div>
                <div>
                  <div className="imweb-heading-3">24/7</div>
                  <div className="imweb-body-sm mt-1">고객 지원</div>
                </div>
              </div>
            </motion.div>

            {/* 오른쪽: 이미지 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-clean.png"
                  alt="Premium Website Builder"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 기능 섹션 - 아임웹 스타일 */}
      <section id="features" className="imweb-section imweb-section-gray">
        <div className="imweb-container">
          <div className="text-center mb-16">
            <h2 className="imweb-heading-2 mb-4">
              왜 Premium Page인가요?
            </h2>
            <p className="imweb-body-lg">
              전문적인 웹사이트 제작을 위한 모든 것이 준비되어 있습니다
            </p>
          </div>

          <div className="imweb-grid imweb-grid-3">
            {[
              {
                icon: Code2,
                title: '코딩 불필요',
                description: '드래그 앤 드롭으로 쉽게 웹사이트를 만들 수 있습니다'
              },
              {
                icon: Palette,
                title: '프리미엄 디자인',
                description: '전문 디자이너가 만든 아름다운 템플릿을 제공합니다'
              },
              {
                icon: Zap,
                title: '빠른 속도',
                description: '최적화된 성능으로 빠르게 로딩되는 웹사이트'
              },
              {
                icon: Shield,
                title: '안전한 호스팅',
                description: 'SSL 인증서와 보안 호스팅이 기본으로 제공됩니다'
              },
              {
                icon: Globe,
                title: '반응형 디자인',
                description: '모든 기기에서 완벽하게 작동하는 반응형 웹사이트'
              },
              {
                icon: Headphones,
                title: '24/7 지원',
                description: '언제든지 도움을 받을 수 있는 고객 지원 서비스'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="imweb-card"
              >
                <div className="imweb-icon-box mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="imweb-heading-4 mb-3">{feature.title}</h3>
                <p className="imweb-body">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 템플릿 섹션 */}
      <section id="templates" className="imweb-section">
        <div className="imweb-container">
          <div className="text-center mb-16">
            <h2 className="imweb-heading-2 mb-4">
              프리미엄 템플릿
            </h2>
            <p className="imweb-body-lg">
              다양한 업종에 맞는 전문적인 템플릿을 선택하세요
            </p>
          </div>

          <div className="imweb-grid imweb-grid-3">
            {templates.slice(0, 6).map((template, i) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/templates/${template.slug}`} className="block">
                  <div className="imweb-card group">
                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-4 flex items-center justify-center">
                      <Globe className="w-12 h-12 text-blue-200" />
                    </div>
                    <div className="imweb-badge mb-3">{template.category}</div>
                    <h3 className="imweb-heading-4 mb-2">{template.name}</h3>
                    <p className="imweb-body-sm line-clamp-2">{template.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/templates" className="imweb-btn imweb-btn-secondary imweb-btn-lg">
              모든 템플릿 보기
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 요금제 섹션 */}
      <section id="pricing" className="imweb-section imweb-section-gray">
        <div className="imweb-container">
          <div className="text-center mb-16">
            <h2 className="imweb-heading-2 mb-4">
              합리적인 요금제
            </h2>
            <p className="imweb-body-lg">
              비즈니스 규모에 맞는 요금제를 선택하세요
            </p>
          </div>

          <div className="imweb-grid imweb-grid-3 max-w-5xl mx-auto">
            {developmentPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`imweb-card ${plan.popular ? 'border-2 border-blue-600' : ''}`}
              >
                {plan.popular && (
                  <div className="imweb-badge imweb-badge-primary mb-4">인기</div>
                )}
                <h3 className="imweb-heading-3 mb-2">{plan.name}</h3>
                <div className="imweb-heading-2 text-blue-600 mb-6">
                  {formatPrice(plan.price)}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="imweb-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className={`imweb-btn w-full ${plan.popular ? 'imweb-btn-primary' : 'imweb-btn-secondary'}`}
                >
                  선택하기
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="imweb-section bg-blue-600 text-white">
        <div className="imweb-container-sm text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-10 opacity-90">
            무료 견적을 받고 전문가와 상담하세요. 24시간 이내에 답변드립니다.
          </p>
          <Link href="/quote" className="imweb-btn bg-white text-blue-600 hover:bg-gray-100 imweb-btn-lg">
            무료 견적 받기
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="imweb-section-sm bg-gray-900 text-gray-400">
        <div className="imweb-container">
          <div className="imweb-grid imweb-grid-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="font-bold text-white">Premium Page</span>
              </div>
              <p className="imweb-body-sm">프리미엄 웹사이트 제작 플랫폼</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">제품</h4>
              <ul className="space-y-2 imweb-body-sm">
                <li><a href="#templates" className="hover:text-white transition">템플릿</a></li>
                <li><a href="#pricing" className="hover:text-white transition">요금제</a></li>
                <li><a href="#features" className="hover:text-white transition">기능</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">지원</h4>
              <ul className="space-y-2 imweb-body-sm">
                <li><a href="#" className="hover:text-white transition">고객센터</a></li>
                <li><a href="#" className="hover:text-white transition">가이드</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">회사</h4>
              <ul className="space-y-2 imweb-body-sm">
                <li><a href="#" className="hover:text-white transition">소개</a></li>
                <li><a href="#" className="hover:text-white transition">블로그</a></li>
                <li><a href="#" className="hover:text-white transition">채용</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 imweb-body-sm">
            <p>© 2024 Premium Page. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">이용약관</a>
              <a href="#" className="hover:text-white transition">개인정보처리방침</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
