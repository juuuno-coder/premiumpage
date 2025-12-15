import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// POST: 새 메시지 생성
export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const body = await request.json()

        const { senderName, senderType, message } = body

        if (!senderName || !senderType || !message) {
            return NextResponse.json(
                { error: '필수 항목을 입력해주세요.' },
                { status: 400 }
            )
        }

        const projectMessage = await prisma.projectMessage.create({
            data: {
                projectId: id,
                senderName,
                senderType,
                message
            }
        })

        return NextResponse.json(projectMessage)
    } catch (error) {
        console.error('Create message error:', error)
        return NextResponse.json(
            { error: '메시지 전송 중 오류가 발생했습니다.' },
            { status: 500 }
        )
    }
}
