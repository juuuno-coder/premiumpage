'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface QuoteRequest {
    id: string
    templateId: string
    developmentPlanId: string
    maintenancePlanId: string
    companyName: string | null
    contactName: string
    contactEmail: string
    contactPhone: string
    projectDetails: string
    status: string
    createdAt: string
}

export default function AdminQuotesPage() {
    const [quotes, setQuotes] = useState<QuoteRequest[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchQuotes()
    }, [])

    const fetchQuotes = async () => {
        try {
            const response = await fetch('/api/quotes')
            const data = await response.json()
            setQuotes(data)
        } catch (error) {
            console.error('Failed to fetch quotes:', error)
        } finally {
            setLoading(false)
        }
    }

    const getStatusBadge = (status: string) => {
        const styles = {
            pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
            processing: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
            completed: 'bg-green-500/20 text-green-300 border-green-500/30',
            cancelled: 'bg-red-500/20 text-red-300 border-red-500/30'
        }

        const labels = {
            pending: '대기중',
            processing: '진행중',
            completed: '완료',
            cancelled: '취소'
        }

        return (
            <Badge className={styles[status as keyof typeof styles] || styles.pending}>
                {labels[status as keyof typeof labels] || status}
            </Badge>
        )
    }

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* 배경 효과 */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-yellow-500/15 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <header className="glass-dark border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/admin" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                                PP
                            </div>
                            <span className="font-bold text-xl gradient-text">Admin - 견적 관리</span>
                        </Link>
                        <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800">
                            <Link href="/admin">← 대시보드</Link>
                        </Button>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2 gradient-text">견적 요청 관리</h1>
                    <p className="text-gray-400">총 {quotes.length}개의 견적 요청</p>
                </div>

                {loading ? (
                    <div className="text-center py-12">
                        <p className="text-gray-400">로딩 중...</p>
                    </div>
                ) : quotes.length === 0 ? (
                    <Card className="bg-card/50 backdrop-blur border-white/10">
                        <CardContent className="py-12 text-center">
                            <p className="text-gray-400">아직 견적 요청이 없습니다.</p>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {quotes.map((quote) => (
                            <Card key={quote.id} className="bg-card/50 backdrop-blur border-white/10 hover:border-purple-500/50 transition">
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle className="text-xl mb-2">
                                                {quote.companyName || quote.contactName}
                                            </CardTitle>
                                            <div className="flex gap-2 text-sm text-gray-400">
                                                <span>{quote.contactEmail}</span>
                                                <span>•</span>
                                                <span>{quote.contactPhone}</span>
                                            </div>
                                        </div>
                                        {getStatusBadge(quote.status)}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">템플릿 ID</p>
                                            <p className="text-white">{quote.templateId}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">개발 플랜 ID</p>
                                            <p className="text-white">{quote.developmentPlanId}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">유지보수 플랜 ID</p>
                                            <p className="text-white">{quote.maintenancePlanId}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">요청일</p>
                                            <p className="text-white">{new Date(quote.createdAt).toLocaleString('ko-KR')}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-2">프로젝트 상세</p>
                                        <p className="text-white bg-gray-900/50 p-4 rounded-lg whitespace-pre-wrap">
                                            {quote.projectDetails}
                                        </p>
                                    </div>
                                    <div className="flex gap-2 mt-4">
                                        <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                                            상세보기
                                        </Button>
                                        <Button size="sm" variant="outline" className="border-gray-700 hover:bg-gray-800">
                                            연락하기
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
