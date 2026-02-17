'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CoverView() {
    return (
        <div className="min-h-screen w-full bg-white antialiased relative overflow-hidden flex items-center justify-center">
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

            {/* Content */}
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">Global Measurement Leader</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-4xl md:text-7xl font-black text-neutral-900 mt-2 mb-8 tracking-tighter uppercase leading-tight"
                    >
                        THE STANDARD<br />
                        OF PRECISION.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mt-4 font-bold text-base text-cyan-600 max-w-lg mx-auto mb-12 tracking-wide uppercase"
                    >
                        Authorized Partner for <br />
                        VAISALA, SETRA, JUMO, KNICK
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Link
                            href="/templates/hs-tech?tab=products"
                            className="px-8 py-3 rounded-lg bg-cyan-600 text-white font-black text-sm hover:bg-cyan-500 transition-colors uppercase tracking-wide"
                        >
                            View Products
                        </Link>
                        <Link
                            href="/templates/hs-tech?tab=contact"
                            className="px-8 py-3 rounded-lg border-2 border-neutral-200 text-neutral-900 font-black text-sm hover:border-neutral-400 hover:bg-neutral-50 transition-all uppercase tracking-wide"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
