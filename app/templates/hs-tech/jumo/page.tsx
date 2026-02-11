'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function JumoPage() {
    return (
        <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <div className="inline-block mb-6 p-4 bg-slate-50 rounded-2xl">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight text-red-700">JUMO</h1>
                </div>
                <p className="text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                    Your System Solution Provider.
                </p>
            </motion.div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl"
                >
                    <Image
                        src="/hstech/Module_Probe_files/47644de215289.jpg"
                        alt="Jumo Tech"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <span className="text-white font-bold text-lg">Temperature & Automation</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">JUMO GmbH & Co. KG</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            JUMO is a leading manufacturer of industrial sensor and automation technology. Our innovative product range includes the entire measuring chain from sensors to automation solutions for temperature, pressure, liquid analysis, flow rate, filling level and humidity.
                        </p>
                    </div>

                    <ul className="space-y-4">
                        {['Temperature Measurement', 'Liquid Analysis', 'Pressure Measurement', 'Control & Automation'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-red-600" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Link href="/templates/hs-tech/products/jumo_temp">
                        <button className="flex items-center gap-2 text-red-700 font-bold hover:gap-4 transition-all mt-4">
                            Explore Products <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
