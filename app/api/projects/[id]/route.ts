import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const projectUpdateSchema = z.object({
    name: z.string().min(1).optional(),
    components: z.any().optional(),
    description: z.string().optional(),
})

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth()
        if (!session?.user?.id) return new NextResponse('Unauthorized', { status: 401 })

        const { id } = await params
        const project = await prisma.project.findUnique({
            where: {
                id,
                userId: session.user.id,
            },
        })

        if (!project) return new NextResponse('Not Found', { status: 404 })

        return NextResponse.json({
            ...project,
            components: JSON.parse(project.components),
        })
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth()
        if (!session?.user?.id) return new NextResponse('Unauthorized', { status: 401 })

        const { id } = await params
        const body = await req.json()
        const { name, components, description } = projectUpdateSchema.parse(body)

        const project = await prisma.project.update({
            where: {
                id,
                userId: session.user.id,
            },
            data: {
                name,
                components: components ? JSON.stringify(components) : undefined,
                description,
            },
        })

        return NextResponse.json(project)
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth()
        if (!session?.user?.id) return new NextResponse('Unauthorized', { status: 401 })

        const { id } = await params
        await prisma.project.delete({
            where: {
                id,
                userId: session.user.id,
            },
        })

        return new NextResponse(null, { status: 204 })
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}
