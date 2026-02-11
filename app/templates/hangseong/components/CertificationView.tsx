'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, FileText, Globe, Zap, Cpu, Search, CheckCircle2, Star, BadgeCheck } from 'lucide-react'

const QUALITY_DATA = [
    { title: 'IATF 16949:2016', desc: 'Automotive Global Quality System', date: '2018.11', icon: <Globe className="w-8 h-8" /> },
    { title: 'ISO 9001:2015', desc: 'International Quality Management', date: '2015.06', icon: <Award className="w-8 h-8" /> },
    { title: 'ISO 14001', desc: 'Environmental Control System', date: '2015.06', icon: <ShieldCheck className="w-8 h-8" /> },
    { title: 'SQ Certificate', desc: 'Supplier Quality Tier-2 Certified', date: 'Certified', icon: <BadgeCheck className="w-8 h-8" /> }
]

export default function CertificationView() {
    return (
        <div className="py-20 px-6 lg:px-12 bg-white dark:bg-slate-950 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                {/* Standardized Header */}
                <div className="mb-12 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black dark:text-white text-slate-900 mb-4 tracking-tight"
                    >
                        Quality Credentials
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-lg dark:text-slate-400 text-slate-600 max-w-3xl mx-auto"
                    >
                        Hangseong Industrial's excellence is proven through top-tier global certifications and recognized manufacturing standards.
                    </motion.p>
                </div>

                {/* 1. Quality Standards - Original Image Display */}
                <div className="pb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-[4rem] overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-8 md:p-12 lg:p-20 flex justify-center"
                    >
                        <div className="relative max-w-5xl w-full">
                            <img
                                src="/templates/hangseong/images/certification.png"
                                alt="Certifications"
                                className="w-full h-auto rounded-2xl shadow-lg dark:brightness-90 hover:brightness-100 transition-all duration-500"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
