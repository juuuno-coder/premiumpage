import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const projectSchema = z.object({
    name: z.string().min(1),
    components: z.any(), // JSON
    description: z.string().optional(),
})

export async function GET(req: Request) {
    try {
        const session = await auth()

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const projects = await prisma.project.findMany({
            where: {
                userId: session.user.id,
            },
            orderBy: {
                updatedAt: 'desc',
            },
            select: {
                id: true,
                name: true,
                description: true,
                updatedAt: true,
                thumbnail: true,
            }
        })

        return NextResponse.json(projects)
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const session = await auth()

        if (!session?.user?.id) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await req.json()
        const { name, components, description } = projectSchema.parse(body)

        const project = await prisma.project.create({
            data: {
                name,
                components: JSON.stringify(components),
                description,
                userId: session.user.id,
            },
        })

        return NextResponse.json(project)
    } catch (error) {
        if (error instanceof z.ZodError) {
            // @ts-ignore
            return NextResponse.json({ error: error.errors }, { status: 400 })
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
