'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { MessageSquare, Calendar, CheckCircle, Clock } from 'lucide-react'

interface Project {
    id: string
    name: string
    status: string
    progress: number
    quoteRequest: any
    messages: any[]
    milestones: any[]
}

export default function CustomerDashboard() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // 실제로는 로그인한 사용자의 프로젝트만 가져와야 함
        // 지금은 데모용으로 모든 프로젝트 표시
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        try {
            // 임시: 견적 요청에서 프로젝트가 있는 것만 필터링
            const response = await fetch('/api/quotes')
            const quotes = await response.json()

            // 프로젝트가 있는 견적만 표시 (실제로는 별도 API 필요)
            setProjects([])
        } catch (error) {
            console.error('Failed to fetch projects:', error)
        } finally {
            setLoading(false)
        }
    }

    const getStatusBadge = (status: string) => {
        const styles = {
            in_progress: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
            completed: 'bg-green-500/20 text-green-300 border-green-500/30',
            cancelled: 'bg-red-500/20 text-red-300 border-red-500/30'
        }

        const labels = {
            in_progress: '진행중',
            completed: '완료',
            cancelled: '취소'
        }

        return (
            <Badge className={styles[status as keyof typeof styles] || styles.in_progress}>
                {labels[status as keyof typeof labels] || status}
            </Badge>
        )
    }

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* 배경 애니메이션 */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px]" />
            </div>

            <header className="glass-dark border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                                PP
                            </div>
                            <span className="font-bold text-xl gradient-text">내 대시보드</span>
                        </Link>
                        <div className="flex gap-2">
                            <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800">
                                <Link href="/">← 홈</Link>
                            </Button>
                            <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                                <Link href="/quote">새 프로젝트</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2 gradient-text">내 프로젝트</h1>
                    <p className="text-gray-400">진행 중인 프로젝트를 관리하고 진행 상황을 확인하세요</p>
                </div>

                {loading ? (
                    <div className="text-center py-12">
                        <p className="text-gray-400">로딩 중...</p>
                    </div>
                ) : projects.length === 0 ? (
                    <Card className="bg-card/50 backdrop-blur border-white/10">
                        <CardContent className="py-12 text-center">
                            <p className="text-gray-400 mb-4">아직 진행 중인 프로젝트가 없습니다.</p>
                            <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                                <Link href="/quote">첫 프로젝트 시작하기</Link>
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="space-y-6">
                        {projects.map((project) => (
                            <Card key={project.id} className="bg-card/50 backdrop-blur border-white/10 hover:border-purple-500/50 transition">
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <CardTitle className="text-2xl mb-2">{project.name}</CardTitle>
                                            <CardDescription>프로젝트 ID: {project.id}</CardDescription>
                                        </div>
                                        {getStatusBadge(project.status)}
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-400">진행률</span>
                                            <span className="text-white font-bold">{project.progress}%</span>
                                        </div>
                                        <Progress value={project.progress} className="h-2" />
                                    </div>
                                </CardHeader>

                                <CardContent>
                                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                <MessageSquare className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400">메시지</p>
                                                <p className="text-white font-bold">{project.messages?.length || 0}개</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                                                <CheckCircle className="w-5 h-5 text-green-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400">완료된 마일스톤</p>
                                                <p className="text-white font-bold">
                                                    {project.milestones?.filter((m: any) => m.status === 'completed').length || 0} / {project.milestones?.length || 0}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                                <Clock className="w-5 h-5 text-purple-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400">시작일</p>
                                                <p className="text-white font-bold">
                                                    {new Date(project.quoteRequest?.createdAt).toLocaleDateString('ko-KR')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                                            프로젝트 상세보기
                                        </Button>
                                        <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                                            <MessageSquare className="w-4 h-4 mr-2" />
                                            메시지 보내기
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                {/* 견적 요청 현황 */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 text-white">견적 요청 현황</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="bg-card/50 backdrop-blur border-white/10">
                            <CardHeader>
                                <CardTitle className="text-yellow-400">대기중</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold text-white">0</p>
                                <p className="text-sm text-gray-400 mt-2">검토 대기 중인 견적</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 backdrop-blur border-white/10">
                            <CardHeader>
                                <CardTitle className="text-blue-400">진행중</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold text-white">0</p>
                                <p className="text-sm text-gray-400 mt-2">현재 진행 중인 프로젝트</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 backdrop-blur border-white/10">
                            <CardHeader>
                                <CardTitle className="text-green-400">완료</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold text-white">0</p>
                                <p className="text-sm text-gray-400 mt-2">완료된 프로젝트</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
