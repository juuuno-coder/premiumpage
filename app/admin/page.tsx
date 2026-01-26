'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BarChart3, Users, FileText, TrendingUp } from 'lucide-react'

interface Stats {
    totalQuotes: number
    pendingQuotes: number
    activeProjects: number
    completedProjects: number
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<Stats>({
        totalQuotes: 0,
        pendingQuotes: 0,
        activeProjects: 0,
        completedProjects: 0
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchStats()
    }, [])

    const fetchStats = async () => {
        try {
            const response = await fetch('/api/quotes')
            const quotes = await response.json()

            setStats({
                totalQuotes: quotes.length,
                pendingQuotes: quotes.filter((q: any) => q.status === 'pending').length,
                activeProjects: 0,
                completedProjects: 0
            })
        } catch (error) {
            console.error('Failed to fetch stats:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* 배경 그라디언트 */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-purple-600/20 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-600/20 to-cyan-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px]" />
            </div>

            <header className="glass-dark border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                                PP
                            </div>
                            <span className="font-bold text-xl gradient-text">Admin Dashboard</span>
                        </Link>
                        <div className="flex gap-2">
                            <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800">
                                <Link href="/">← 홈</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2 gradient-text">관리자 대시보드</h1>
                    <p className="text-gray-400">전체 시스템 현황을 한눈에 확인하세요</p>
                </div>

                {/* 통계 카드 */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    <Card className="bg-card/50 backdrop-blur border-white/10 hover:border-purple-500/50 transition">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-400">총 견적 요청</CardTitle>
                            <FileText className="w-4 h-4 text-purple-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-white">{stats.totalQuotes}</div>
                            <p className="text-xs text-gray-400 mt-1">전체 기간</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 backdrop-blur border-white/10 hover:border-yellow-500/50 transition">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-400">대기중 견적</CardTitle>
                            <TrendingUp className="w-4 h-4 text-yellow-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-yellow-400">{stats.pendingQuotes}</div>
                            <p className="text-xs text-gray-400 mt-1">검토 필요</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 backdrop-blur border-white/10 hover:border-blue-500/50 transition">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-400">진행중 프로젝트</CardTitle>
                            <BarChart3 className="w-4 h-4 text-blue-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-blue-400">{stats.activeProjects}</div>
                            <p className="text-xs text-gray-400 mt-1">현재 작업중</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 backdrop-blur border-white/10 hover:border-green-500/50 transition">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-400">완료 프로젝트</CardTitle>
                            <Users className="w-4 h-4 text-green-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-green-400">{stats.completedProjects}</div>
                            <p className="text-xs text-gray-400 mt-1">성공적으로 완료</p>
                        </CardContent>
                    </Card>
                </div>

                {/* 빠른 액션 */}
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur hover:scale-105 transition">
                        <CardHeader>
                            <CardTitle className="text-white">견적 관리</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">새로운 견적 요청을 확인하고 관리하세요</p>
                            <Button asChild className="w-full bg-white text-purple-600 hover:bg-gray-100">
                                <Link href="/admin/quotes">견적 목록 보기</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-500/30 backdrop-blur hover:scale-105 transition">
                        <CardHeader>
                            <CardTitle className="text-white">프로젝트 관리</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">진행 중인 프로젝트를 관리하세요</p>
                            <Button asChild className="w-full bg-white text-blue-600 hover:bg-gray-100">
                                <Link href="/admin/projects">프로젝트 목록</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-500/30 backdrop-blur hover:scale-105 transition">
                        <CardHeader>
                            <CardTitle className="text-white">템플릿 관리</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 mb-4">템플릿을 추가하고 수정하세요</p>
                            <Button asChild className="w-full bg-white text-green-600 hover:bg-gray-100">
                                <Link href="/admin/templates">템플릿 관리</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
