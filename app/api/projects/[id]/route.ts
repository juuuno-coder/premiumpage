import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET: 특정 프로젝트 조회
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params

        const project = await prisma.project.findUnique({
            where: { id },
            include: {
                quoteRequest: true,
                messages: {
                    orderBy: { createdAt: 'desc' },
                    take: 50
                },
                milestones: {
                    orderBy: { createdAt: 'asc' }
                }
            }
        })

        if (!project) {
            return NextResponse.json(
                { error: '프로젝트를 찾을 수 없습니다.' },
                { status: 404 }
            )
        }

        return NextResponse.json(project)
    } catch (error) {
        console.error('Get project error:', error)
        return NextResponse.json(
            { error: '프로젝트 조회 중 오류가 발생했습니다.' },
            { status: 500 }
        )
    }
}

// PATCH: 프로젝트 업데이트
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const body = await request.json()

        const project = await prisma.project.update({
            where: { id },
            data: body
        })

        return NextResponse.json(project)
    } catch (error) {
        console.error('Update project error:', error)
        return NextResponse.json(
            { error: '프로젝트 업데이트 중 오류가 발생했습니다.' },
            { status: 500 }
        )
    }
}
