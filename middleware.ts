import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl
    const hostname = request.headers.get('host') || ''

    // 1. hangseong.vercel.app 도메인 처리
    if (hostname.includes('hangseong.vercel.app')) {
        // 루트(/) 경로로 접속한 경우 /templates/hangseong으로 내부 rewrite
        if (url.pathname === '/') {
            return NextResponse.rewrite(new URL('/templates/hangseong', request.url))
        }
    }

    return NextResponse.next()
}

// 미들웨어가 적용될 경로 설정
export const config = {
    matcher: [
        /*
         * 다음으로 시작하는 경로를 제외한 모든 요청 경로와 일치:
         * - api (API 라우트)
         * - _next/static (정적 파일)
         * - _next/image (이미지 최적화 파일)
         * - favicon.ico (파비콘 파일)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
