'use client'

import React, { Suspense } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Mail, Globe, Download, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DB, GENTOP_MENU } from './data'
import { SparklesCore } from '@/components/ui/sparkles'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { usePathname } from 'next/navigation'

// Premium Components Integration
import { CompanyGreeting } from './components/company/greeting'
import { CompanyIntroduction } from './components/company/introduction'
import { CompanyCiBi } from './components/company/ci-bi'
import { CompanyOrganization } from './components/company/organization'
import { CompanyCertification } from './components/company/certification'
import { CompanyLocation } from './components/company/location'
import { CompanyGlobalNetwork } from './components/company/global-network'
import { BusinessScopeSection } from './components/business/business-scope-section'

function GentopContent() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Resolve Active Tab
    const activeCateParam = searchParams.get('category')
    const activeTabParam = searchParams.get('tab')

    let activeCate = activeCateParam
    let activeTab = activeTabParam

    // Path based resolution fallback (for direct URLs like /en/company/greeting)
    if (!activeTab && pathname.includes('/templates/gentop')) {
        const parts = pathname.split('/').filter(Boolean)
        // Check if it's a pretty URL structure after the language/templates part
        // Format common: /templates/gentop/company/greeting or /en/company/greeting
        // Our middleware rewrites these, but client-side needs to know too

        // Find which part is 'company', 'business', etc based on GENTOP_MENU
        const menuIds = GENTOP_MENU[0].items.map(i => i.id)
        const cateIdx = parts.findIndex(p => menuIds.includes(p))

        if (cateIdx !== -1) {
            activeCate = parts[cateIdx]
            if (parts.length > cateIdx + 1) {
                activeTab = parts[cateIdx + 1]
            }
        }
    }

    // If no tab but category exists, find the first sub-item
    if (!activeTab && activeCate) {
        for (const brand of GENTOP_MENU) {
            const foundCat = brand.items.find(item => item.id === activeCate)
            if (foundCat && foundCat.subs && foundCat.subs.length > 0) {
                activeTab = foundCat.subs[0].id
                break
            }
        }
    }

    // Default fallback
    if (!activeTab) activeTab = 'cover'

    // Premium UI Mapping
    const renderPremiumUI = () => {
        switch (activeTab) {
            case 'greeting':
                return <CompanyGreeting />
            case 'overview':
                return <CompanyIntroduction lang="en" />
            case 'ci':
                return <CompanyCiBi />
            case 'org':
                return <CompanyOrganization />
            case 'cert':
                return <CompanyCertification />
            case 'location':
                return <CompanyLocation />
            case 'global_network':
                return <CompanyGlobalNetwork lang="en" />
            // Business sections
            case 'infra':
            case 'fm':
            case 'pa':
            case 'parking':
            case 'access':
            case 'cctv':
            case 'led':
            case 'eco':
            case 'defense':
                return <BusinessScopeSection categoryId={activeTab} lang="en" />
            default:
                return null
        }
    }

    const premiumUI = renderPremiumUI()

    // 1. Cover Slide
    if (activeTab === 'cover') {
        return (
            <div className="w-full h-full flex items-center justify-center relative bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#6366f1"
                    />
                </div>

                <BackgroundBeams className="opacity-40" />

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-block px-4 py-1.5 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-md text-indigo-400 font-bold tracking-[0.4em] text-[10px] mb-10 uppercase">
                            Smart ICT & Energy Solution
                        </div>
                        <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 leading-none">
                            GENTOP
                        </h1>
                        <p className="text-base md:text-lg text-slate-400 font-medium tracking-[0.2em] max-w-2xl mx-auto uppercase">
                            Providing the Best System & Follow-up Management
                        </p>
                    </motion.div>
                </div>

                {/* Visual Accent */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
            </div>
        )
    }

    // 2. Premium Content UI (If mapped)
    if (premiumUI) {
        return (
            <div className="w-full h-full bg-white overflow-y-auto overflow-x-hidden relative">
                <div className="min-h-full pb-32 pt-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {premiumUI}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        )
    }

    // Get Content with SAFETY FALLBACK for non-premium tabs
    const content = DB[activeTab] || {
        title: 'Page Not Found',
        desc: `Unable to find content for ID: "${activeTab}".\nPlease check data.ts or contact administrator.`,
        image: null,
        isError: true
    }

    // 3. Error Fallback UI
    if (content.isError) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-10 text-center">
                <AlertCircle className="w-16 h-16 mb-4 text-slate-300" />
                <h2 className="text-3xl font-bold text-slate-700 mb-2">{content.title}</h2>
                <p className="max-w-md mx-auto mb-8 whitespace-pre-line">
                    {content.desc}
                </p>
                <button
                    onClick={() => window.history.back()}
                    className="px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-indigo-600 transition-colors"
                >
                    Go Back
                </button>
            </div>
        )
    }

    // 4. Standard Content Slide (Old Slider Style fallback)
    return (
        <div className="w-full h-full flex flex-col md:flex-row bg-white overflow-hidden relative">
            {/* Left: Text Area */}
            <div className="w-full md:w-5/12 h-full flex flex-col justify-center p-12 md:p-16 lg:p-20 bg-white relative z-10 overflow-y-auto border-r border-slate-100">
                <div>
                    <div className="w-12 h-1 bg-indigo-600 mb-8"></div>
                    <div className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4">
                        {activeCate || 'GENTOP'}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8 uppercase break-words">
                        {content.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-light mb-12 whitespace-pre-line">
                        {content.desc}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 bg-slate-900 text-white font-bold text-sm tracking-wider uppercase hover:bg-indigo-600 transition-colors flex items-center gap-2 group">
                            Inquire Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right: Full Height Image Area */}
            <div className="w-full md:w-7/12 h-full relative bg-slate-100">
                {content.image ? (
                    <Image
                        src={content.image}
                        alt={content.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 font-black text-2xl tracking-widest uppercase">
                        {content.title} Image
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10"></div>
            </div>

            {/* Background Deco */}
            <div className="absolute bottom-[-50px] right-[-20px] text-[200px] font-black text-slate-900/[0.03] pointer-events-none select-none leading-none z-0">
                GENTOP
            </div>
        </div>
    )
}

export default function GentopPage() {
    return (
        <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading Gentop Catalog...</div>}>
            <GentopContent />
        </Suspense>
    )
}

