'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        // 테스트용 간단한 로그인
        if (email === 'admin@pp.com' && password === 'admin') {
            router.push('/admin')
        } else if (email === 'customer@pp.com' && password === 'customer') {
            router.push('/dashboard')
        } else {
            alert('이메일 또는 비밀번호가 올바르지 않습니다.\n\n테스트 계정:\n- 관리자: admin@pp.com / admin\n- 고객: customer@pp.com / customer')
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[120px]" />

            <Card className="w-full max-w-md bg-card/50 backdrop-blur border-white/10 relative z-10">
                <CardHeader className="text-center">
                    <Link href="/" className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl animate-glow">
                            PP
                        </div>
                    </Link>
                    <CardTitle className="text-3xl gradient-text">로그인</CardTitle>
                    <CardDescription>Premium Page에 오신 것을 환영합니다</CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <Label htmlFor="email" className="text-gray-300">이메일</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="이메일을 입력하세요"
                                className="mt-1 bg-gray-900/50 border-gray-700 text-white"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="password" className="text-gray-300">비밀번호</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="비밀번호를 입력하세요"
                                className="mt-1 bg-gray-900/50 border-gray-700 text-white"
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-lg py-6">
                            로그인
                        </Button>
                    </form>

                    <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                        <p className="text-sm text-gray-400 mb-2">테스트 계정:</p>
                        <div className="space-y-1 text-xs text-gray-500">
                            <p>관리자: admin@pp.com / admin</p>
                            <p>고객: customer@pp.com / customer</p>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <Link href="/" className="text-sm text-purple-400 hover:text-purple-300">
                            ← 홈으로 돌아가기
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
