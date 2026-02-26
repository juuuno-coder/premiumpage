'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface CoverViewProps {
    onStart: () => void
}

export default function CoverView({ onStart }: CoverViewProps) {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#0a0f1e] flex items-center justify-center">
            {/* Background hero image */}
            <div className="absolute inset-0">
                <Image
                    src="/templates/air-hstech/images/hero-1.jpg"
                    alt="HS TECH"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                {/* Tech grid overlay */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/80 via-transparent to-[#0a0f1e]/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* GENWISH brand tag */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 mb-8"
                >
                    <div className="h-[1px] w-12 bg-[#00d4ff]" />
                    <span className="text-[#00d4ff] text-sm font-mono tracking-[0.3em] uppercase">GENWISH</span>
                    <div className="h-[1px] w-12 bg-[#00d4ff]" />
                </motion.div>

                {/* Main title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
                >
                    HS TECH
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-[#00d4ff] text-lg md:text-2xl font-mono tracking-widest mb-6"
                >
                    DC ENGINE-OFF AIR CONDITIONER
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    As a leader in DC Non-Starting technology, HS TECH develops cooling and heating systems
                    suitable for any vehicle — without engine idling.
                </motion.p>

                {/* Key stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex items-center justify-center gap-8 mb-12"
                >
                    {[
                        { value: '10+', label: 'Products' },
                        { value: '3', label: 'Applications' },
                        { value: '40%', label: 'Energy Savings' },
                        { value: 'ISO', label: '9001 / IATF' },
                    ].map(stat => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-[#00d4ff] font-mono">{stat.value}</div>
                            <div className="text-xs text-gray-400 tracking-wider uppercase mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    onClick={onStart}
                    className="group relative px-8 py-4 border border-[#00d4ff] text-[#00d4ff] font-mono text-sm tracking-[0.2em] uppercase hover:bg-[#00d4ff] hover:text-[#0a0f1e] transition-all duration-300"
                >
                    VIEW CATALOG
                    <span className="ml-3 group-hover:translate-x-1 inline-block transition-transform">→</span>
                </motion.button>
            </div>

            {/* Bottom scan line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent" />

            {/* Corner brackets */}
            <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-[#00d4ff]/40" />
            <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-[#00d4ff]/40" />
            <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-[#00d4ff]/40" />
            <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-[#00d4ff]/40" />
        </div>
    )
}
