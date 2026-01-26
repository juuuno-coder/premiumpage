'use client'

import { EMTMasterpiece } from '@/components/catalog/EMTMasterpiece'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function EMTGlobalPortfolioPage() {
    return (
        <div className="relative min-h-screen bg-black">
            {/* 뒤로가기 버튼 */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="fixed top-24 left-8 z-50"
            >
                <Link
                    href="/portfolio"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>포트폴리오 목록</span>
                </Link>
            </motion.div>

            <EMTMasterpiece
                companyName="EMT Global Tech"
                tagline="Innovation in Mobility Industry"
                language="ko"
            />
        </div>
    )
}
