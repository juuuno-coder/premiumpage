import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl
    const hostname = request.headers.get('host') || ''

    // 1. 항성산업사 (Hangseong) 도메인 처리
    if (hostname.includes('hangseong.premiumpage.kr') || hostname.includes('hangseong.vercel.app')) {
        if (url.pathname === '/') {
            const response = NextResponse.rewrite(new URL('/templates/hangseong', request.url))
            response.headers.set('x-template-page', 'true')
            return response
        }
    }

    // 2. HS-TECH (영문) 도메인 처리
    if (hostname.includes('hstech.premiumpage.kr')) {
        if (url.pathname === '/') {
            const response = NextResponse.rewrite(new URL('/templates/hs-tech', request.url))
            response.headers.set('x-template-page', 'true')
            return response
        }
    }

    // 3. HS-TECH (국문) 도메인 처리
    if (hostname.includes('hstech-kr.premiumpage.kr')) {
        if (url.pathname === '/') {
            const response = NextResponse.rewrite(new URL('/templates/hs-tech-kr', request.url))
            response.headers.set('x-template-page', 'true')
            return response
        }
    }

    // 4. GENTOP 도메인 처리
    if (hostname.includes('gentop.premiumpage.kr')) {
        if (url.pathname === '/') {
            const response = NextResponse.rewrite(new URL('/templates/gentop', request.url))
            response.headers.set('x-template-page', 'true')
            return response
        }
    }

    // 5. EMT (영문) 도메인 처리
    if (hostname.includes('emt.premiumpage.kr')) {
        if (url.pathname === '/') {
            const response = NextResponse.rewrite(new URL('/templates/emt-en', request.url))
            response.headers.set('x-template-page', 'true')
            return response
        }
    }

    // 6. EMT (국문) 도메인 처리
    if (hostname.includes('emt-ko.premiumpage.kr')) {
        if (url.pathname === '/') {
            const response = NextResponse.rewrite(new URL('/templates/emt-ko', request.url))
            response.headers.set('x-template-page', 'true')
            return response
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
