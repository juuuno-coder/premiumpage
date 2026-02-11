'use client'

import { TemplatesList } from '@/components/TemplatesList'
import { motion } from 'framer-motion'

export default function TemplatesPage() {
    return (
        <div className="min-h-screen bg-background pt-10">
            <TemplatesList />
        </div>
    )
}
