'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Spotlight } from './ui/Spotlight'

export default function CoverView() {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="min-h-screen w-full dark:bg-neutral-950 bg-white antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.02] relative overflow-hidden flex items-center justify-center transition-colors duration-300">
            {/* Interactive Mouse-Following Background */}
            <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`
                }}
            />
            <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.1), transparent 50%)`
                }}
            />
            <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                    background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(8, 145, 178, 0.05), transparent 60%)`
                }}
            />

            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 italic">Global Measurement Leader</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mt-4 mb-8 tracking-tighter uppercase italic"
                    >
                        THE STANDARD<br />
                        OF PRECISION.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-4 font-bold text-lg dark:text-cyan-400 text-cyan-600 max-w-lg mx-auto mb-12 tracking-wide uppercase"
                    >
                        Authorized Partner for <br />
                        VAISALA, SETRA, JUMO, KNICK
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Link
                            href="/templates/hs-tech?tab=products"
                            className="px-10 py-4 rounded-full bg-cyan-500 text-white font-black text-sm hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] uppercase"
                        >
                            View Products
                        </Link>
                        <Link
                            href="/templates/hs-tech?tab=contact"
                            className="px-10 py-4 rounded-full border-2 border-white/10 dark:text-white text-neutral-900 font-black text-sm hover:bg-white/5 transition-all uppercase"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
