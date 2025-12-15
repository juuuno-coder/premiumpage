'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { templates } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Check, ExternalLink, Eye, GitCompare, Sparkles } from 'lucide-react'
import { TemplatePreview } from '@/components/TemplatePreview'
import { TemplateComparison } from '@/components/TemplateComparison'
import { RelatedTemplates } from '@/components/RelatedTemplates'

export async function generateStaticParams() {
    return templates.map((template) => ({
        slug: template.slug,
    }))
}

interface TemplateDetailPageProps {
    params: Promise<{ slug: string }>
}

export default function TemplateDetailPage({ params }: TemplateDetailPageProps) {
    const [activeTab, setActiveTab] = useState<'preview' | 'features' | 'compare'>('preview')

    // params를 동기적으로 사용
    const [slug, setSlug] = useState<string | null>(null)
    const [template, setTemplate] = useState<typeof templates[0] | null>(null)

    // useEffect 대신 직접 처리
    if (!slug) {
        params.then(p => {
            setSlug(p.slug)
            const found = templates.find((t) => t.slug === p.slug)
            if (found) {
                setTemplate(found)
            }
        })
        return <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-white">로딩 중...</div>
        </div>
    }

    if (!template) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* 배경 장식 */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/20 to-pink-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/15 to-purple-500/15 rounded-full blur-[100px]" />
            </div>

            {/* 헤더 */}
            <header className="glass-dark border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
                            <ArrowLeft className="w-5 h-5 text-gray-400" />
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                                    PP
                                </div>
                                <span className="font-bold text-xl gradient-text">Premium Page</span>
                            </div>
                        </Link>
                        <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                            <Link href="/quote">견적 요청하기</Link>
                        </Button>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* 템플릿 정보 */}
                <div className="mb-12">
                    <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30 text-base px-4 py-1">
                        {template.category}
                    </Badge>
                    <h1 className="text-6xl font-black mb-6 gradient-text">{template.name}</h1>
                    <p className="text-2xl text-gray-400 mb-8 max-w-3xl">{template.description}</p>

                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 text-lg px-8 py-6 font-bold">
                            <Link href="/quote">
                                <Sparkles className="w-5 h-5 mr-2" />
                                이 템플릿으로 시작하기
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 text-lg px-8 py-6">
                            <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-5 h-5 mr-2" />
                                데모 보기
                            </a>
                        </Button>
                    </div>
                </div>

                {/* 탭 네비게이션 */}
                <div className="mb-8">
                    <div className="flex gap-2 border-b border-white/10">
                        <button
                            onClick={() => setActiveTab('preview')}
                            className={`px-6 py-3 font-semibold transition-all ${activeTab === 'preview'
                                    ? 'text-purple-400 border-b-2 border-purple-500'
                                    : 'text-gray-400 hover:text-gray-300'
                                }`}
                        >
                            <Eye className="w-5 h-5 inline mr-2" />
                            라이브 프리뷰
                        </button>
                        <button
                            onClick={() => setActiveTab('features')}
                            className={`px-6 py-3 font-semibold transition-all ${activeTab === 'features'
                                    ? 'text-purple-400 border-b-2 border-purple-500'
                                    : 'text-gray-400 hover:text-gray-300'
                                }`}
                        >
                            <Check className="w-5 h-5 inline mr-2" />
                            기능 상세
                        </button>
                        <button
                            onClick={() => setActiveTab('compare')}
                            className={`px-6 py-3 font-semibold transition-all ${activeTab === 'compare'
                                    ? 'text-purple-400 border-b-2 border-purple-500'
                                    : 'text-gray-400 hover:text-gray-300'
                                }`}
                        >
                            <GitCompare className="w-5 h-5 inline mr-2" />
                            템플릿 비교
                        </button>
                    </div>
                </div>

                {/* 탭 컨텐츠 */}
                <div className="mb-16">
                    {activeTab === 'preview' && (
                        <TemplatePreview demoUrl={template.demoUrl} templateName={template.name} />
                    )}

                    {activeTab === 'features' && (
                        <div className="space-y-8">
                            {/* 템플릿 미리보기 이미지 */}
                            <Card className="bg-card/50 backdrop-blur border-white/10 overflow-hidden">
                                <div className="relative aspect-video bg-gray-900">
                                    <Image
                                        src={template.imageUrl}
                                        alt={template.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </Card>

                            {/* 기능 목록 */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <Card className="bg-card/50 backdrop-blur border-white/10">
                                    <CardHeader>
                                        <CardTitle className="text-3xl font-black gradient-text">주요 기능</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-4">
                                            {template.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-lg">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="bg-card/50 backdrop-blur border-white/10">
                                    <CardHeader>
                                        <CardTitle className="text-3xl font-black gradient-text">포함 사항</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-4">
                                            {[
                                                '반응형 디자인 (모바일/태블릿/데스크톱)',
                                                'SEO 최적화',
                                                '빠른 로딩 속도',
                                                '크로스 브라우저 호환',
                                                '접근성 준수',
                                                '무료 SSL 인증서',
                                                '1년 무료 도메인',
                                                '기술 지원'
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-lg">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}

                    {activeTab === 'compare' && (
                        <TemplateComparison templates={templates} maxTemplates={3} />
                    )}
                </div>

                {/* 관련 템플릿 */}
                <div className="mb-16">
                    <RelatedTemplates
                        currentTemplate={template}
                        allTemplates={templates}
                        maxTemplates={3}
                    />
                </div>

                {/* CTA */}
                <Card className="relative overflow-hidden bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20" />
                    <div className="relative z-10 p-12 text-center">
                        <h2 className="text-5xl font-black mb-6 text-white text-glow">
                            {template.name}로 시작할 준비가 되셨나요?
                        </h2>
                        <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                            지금 무료 견적을 받아보세요. 빠르고 쉽게 프로젝트를 시작할 수 있습니다.
                        </p>
                        <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-12 py-8 font-black shadow-2xl">
                            <Link href="/quote">
                                무료 견적 받기
                                <ArrowLeft className="w-6 h-6 ml-3 rotate-180" />
                            </Link>
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}
