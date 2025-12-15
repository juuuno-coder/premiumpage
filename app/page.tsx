'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { templates, developmentPlans } from '@/lib/data'
import { formatPrice } from '@/lib/data-utils'
import {
  ArrowRight, Check, Sparkles, Zap, Shield, Headphones,
  Code2, Palette, Globe, ChevronRight, Star, Users, Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 - 클린 */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Premium Page</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition">기능</a>
              <a href="#templates" className="text-gray-600 hover:text-gray-900 font-medium transition">템플릿</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition">요금제</a>
              <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium transition">로그인</Link>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                <Link href="/quote">시작하기</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 - 좌우 분할 */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* 왼쪽: 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="font-semibold">23개의 프리미엄 템플릿</span>
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                비즈니스를 위한
                <br />
                <span className="text-blue-600">프리미엄 웹사이트</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                전문가가 디자인한 템플릿으로 빠르고 쉽게 시작하세요.
                코딩 없이 나만의 웹사이트를 만들 수 있습니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  <Link href="/quote">
                    무료 견적 받기
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 px-8 py-6 text-lg">
                  <a href="#templates">템플릿 보기</a>
                </Button>
              </div>

              {/* 통계 */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600 mt-1">만족한 고객</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600 mt-1">고객 만족도</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600 mt-1">고객 지원</div>
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-clean.png"
                  alt="Premium Website Builder"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* 플로팅 카드 */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">빠른 제작</div>
                    <div className="text-sm text-gray-600">24시간 내 완성</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 기능 섹션 - 카드 그리드 */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              왜 Premium Page인가요?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              전문적인 웹사이트 제작을 위한 모든 것이 준비되어 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: '코딩 불필요',
                description: '드래그 앤 드롭으로 쉽게 웹사이트를 만들 수 있습니다',
                color: 'blue'
              },
              {
                icon: Palette,
                title: '프리미엄 디자인',
                description: '전문 디자이너가 만든 아름다운 템플릿을 제공합니다',
                color: 'purple'
              },
              {
                icon: Zap,
                title: '빠른 속도',
                description: '최적화된 성능으로 빠르게 로딩되는 웹사이트',
                color: 'yellow'
              },
              {
                icon: Shield,
                title: '안전한 호스팅',
                description: 'SSL 인증서와 보안 호스팅이 기본으로 제공됩니다',
                color: 'green'
              },
              {
                icon: Globe,
                title: '반응형 디자인',
                description: '모든 기기에서 완벽하게 작동하는 반응형 웹사이트',
                color: 'indigo'
              },
              {
                icon: Headphones,
                title: '24/7 지원',
                description: '언제든지 도움을 받을 수 있는 고객 지원 서비스',
                color: 'pink'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-xl bg-${feature.color}-100 flex items-center justify-center mb-6`}>
                      <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 템플릿 섹션 */}
      <section id="templates" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              프리미엄 템플릿
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              다양한 업종에 맞는 전문적인 템플릿을 선택하세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.slice(0, 6).map((template, i) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/templates/${template.slug}`}>
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Globe className="w-16 h-16 text-blue-200" />
                      </div>
                    </div>
                    <CardHeader className="p-6">
                      <Badge className="w-fit mb-3 bg-blue-50 text-blue-700 border-0">
                        {template.category}
                      </Badge>
                      <CardTitle className="text-lg mb-2">{template.name}</CardTitle>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {template.description}
                      </p>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2">
              <Link href="/templates">
                모든 템플릿 보기
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 요금제 섹션 */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              합리적인 요금제
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              비즈니스 규모에 맞는 요금제를 선택하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {developmentPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`relative ${plan.popular ? 'border-2 border-blue-600 shadow-xl' : 'border-0 shadow-lg'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white px-4 py-1">인기</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-6">
                      {formatPrice(plan.price)}
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                      <Link href="/quote">선택하기</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            무료 견적을 받고 전문가와 상담하세요. 24시간 이내에 답변드립니다.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
            <Link href="/quote">
              무료 견적 받기
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-16 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="font-bold text-white">Premium Page</span>
              </div>
              <p className="text-sm">프리미엄 웹사이트 제작 플랫폼</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">제품</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#templates" className="hover:text-white transition">템플릿</a></li>
                <li><a href="#pricing" className="hover:text-white transition">요금제</a></li>
                <li><a href="#features" className="hover:text-white transition">기능</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">지원</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">고객센터</a></li>
                <li><a href="#" className="hover:text-white transition">가이드</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">회사</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">소개</a></li>
                <li><a href="#" className="hover:text-white transition">블로그</a></li>
                <li><a href="#" className="hover:text-white transition">채용</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
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
