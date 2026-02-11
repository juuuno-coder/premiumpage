'use client'

import React from 'react'
import Image from 'next/image'
import HSTechTabs from '../components/HSTechTabs'
import { motion } from 'framer-motion'

const SECTORS = [
    { title: 'HIGH TECH FACTORY', img: '/downloads/hs-tech/images/dce9649f81d7a.png' }, // Placeholder mappings
    { title: 'BATTERY', img: '/downloads/hs-tech/images/33a1535c2c0e7.png' },
    { title: 'POWER PLANT', img: '/downloads/hs-tech/images/0b98ec3d71c52.png' },
    { title: 'WATER / AIR ANALYSIS', img: '/downloads/hs-tech/images/dce9649f81d7a.png' },
    { title: 'DATA CENTER', img: '/downloads/hs-tech/images/33a1535c2c0e7.png' },
    { title: 'FUEL CELL', img: '/downloads/hs-tech/images/0b98ec3d71c52.png' },
    { title: 'PHARMACEUTICAL', img: '/downloads/hs-tech/images/dce9649f81d7a.png' },
    { title: 'MACHINERY', img: '/downloads/hs-tech/images/33a1535c2c0e7.png' },
]

export default function AboutPage() {
    return (
        <div className="w-full pb-20">
            {/* 1. Page Title */}
            <div className="bg-white border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-3">
                        회사소개 <span className="text-slate-300 dark:text-slate-600 font-light text-2xl">|</span> <span className="text-teal-600">ABOUT US</span>
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 space-y-20">
                {/* 2. CEO Message / Intro Text */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Decorative / Label */}
                    <div className="lg:col-span-3 hidden lg:block">
                        <div className="w-12 h-1 bg-teal-500 mb-6"></div>
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">CEO Message</h2>
                        <span className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                            Smart Sencing<br />Technology
                        </span>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:col-span-9 space-y-8">
                        <div className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed break-keep">
                            <span className="text-teal-600 font-bold">HS TECH 주식회사</span>는 환경센서 전문업체로 <br className="hidden md:block" />
                            온도, 습도, 압력 및 대기 수질 측정장비에 대한 판매, 기술지원, 교정, 설치 및 A/S를 지원하고 있습니다.
                        </div>

                        <div className="text-base text-slate-600 dark:text-slate-400 leading-8 tracking-wide space-y-6 break-keep">
                            <p>
                                HS TECH는 발전적인 미래에 중심 역할을 하는 센서 기반의 전문 업체가 되기 위해 최선을 다하고 있습니다.
                            </p>
                            <p>
                                고객 여러분의 진심 어린 충고와 격려를 바탕으로 모든 분께 감동을 드릴 수 있는 <span className="text-slate-900 dark:text-white font-bold">HS TECH</span>가 될 것을 약속 드립니다.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                            <div className="text-right">
                                <p className="text-sm text-slate-400 mb-1">에이치에스테크 임직원 일동</p>
                                {/* Signature or Name styling */}
                                <div className="text-xl font-black text-slate-900 dark:text-white font-serif italic">
                                    HS TECH Corp.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Business Areas Grid */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            Business Areas
                        </h2>
                        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {SECTORS.map((sector, index) => (
                            <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                {/* Image Layer */}
                                <Image
                                    src={sector.img}
                                    alt={sector.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 group-hover:to-teal-900/80 transition-colors duration-300"></div>

                                {/* Text Label */}
                                <div className="absolute bottom-0 inset-x-0 p-4 transform translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-bold text-sm md:text-base uppercase tracking-wider text-center border-t border-white/20 pt-3">
                                        {sector.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
