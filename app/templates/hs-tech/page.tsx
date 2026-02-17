'use client'

import React, { Suspense, useState, useEffect, useRef, useMemo } from 'react'
import { ChevronRight, ChevronLeft, Phone, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { DB, CATEGORY_INFO, SUB_CATEGORIES, BRANDS } from './data'
import { cn } from '@/lib/utils'
import ProductSpecs from './components/ProductSpecs'
import CoverView from './components/CoverView'
import ProductIntro from './components/ProductIntro'

// Premium UI Components
import { BentoGrid, BentoGridItem } from './components/ui/BentoGrid'
import { BackgroundGradient } from './components/ui/background-gradient'
import { HoverEffect } from './components/ui/card-hover-effect'

// 1. MASTER BROCHURE FLOW (~27 pages, slightly more than 24)
const useMasterFlow = () => {
    return useMemo(() => {
        const flow: { tab: string, category?: string, product?: string, label: string }[] = [
            { tab: 'cover', label: 'HOME' },
            { tab: 'about', label: 'ABOUT US' },
            { tab: 'business', label: 'BUSINESS' },
            { tab: 'products', label: 'BRANDS' },
        ];

        // Brand overview pages
        Object.entries(BRANDS).forEach(([id, data]: [string, any]) => {
            flow.push({ tab: id, label: data.label });
        });

        // VAISALA: all category pages + 1 featured product for key categories
        const vaisalaFeatured: Record<string, string> = {
            humidity: 'hmt330',
            dewpoint: 'dmp1',
            co2: 'gmw90',
            weather: 'wxt530',
        };

        (BRANDS.vaisala.categories || []).forEach((catKey: string) => {
            const catInfo = CATEGORY_INFO[catKey];
            if (!catInfo) return;
            flow.push({ tab: catKey, category: catKey, label: catInfo.title });
            // Add one featured product for select categories
            const featuredId = vaisalaFeatured[catKey];
            if (featuredId) {
                const catDb = DB[catKey] || [];
                const product = catDb.find((p: any) => p.id === featuredId);
                if (product) {
                    flow.push({ tab: catKey, category: catKey, product: featuredId, label: product.title });
                }
            }
        });

        // SETRA: 3 featured products
        const setraFeatured = ['setra_lite', 'model_mrc', 'model_axd'];
        setraFeatured.forEach(id => {
            const catDb = DB['setra'] || [];
            const product = catDb.find((p: any) => p.id === id);
            if (product) {
                flow.push({ tab: 'setra', category: 'setra', product: id, label: product.title });
            }
        });

        // JUMO: 2 featured products
        const jumoFeatured = ['ph_trans', 'recording'];
        jumoFeatured.forEach(id => {
            const catDb = DB['jumo'] || [];
            const product = catDb.find((p: any) => p.id === id);
            if (product) {
                flow.push({ tab: 'jumo', category: 'jumo', product: id, label: product.title });
            }
        });

        // KNICK: 1 featured product
        const knickDb = DB['knick'] || [];
        const stratosProduct = knickDb.find((p: any) => p.id === 'stratos');
        if (stratosProduct) {
            flow.push({ tab: 'knick', category: 'knick', product: 'stratos', label: stratosProduct.title });
        }

        flow.push({ tab: 'contact', label: 'CONTACT' });
        return flow;
    }, []);
};

// Helper: Find product in DB
const findProduct = (id: string, category: string) => {
    if (DB[category]) {
        const found = DB[category].find(p => p.id === id)
        if (found) return found
    }
    for (const cat in DB) {
        const found = DB[cat].find(p => p.id === id)
        if (found) return found
    }
    return null
}

// Catalog Page Wrapper with Master Sequential Flow
const CatalogPage = ({ title, children, currentTab, breadcrumb, hideUI }: {
    title: string,
    children: React.ReactNode,
    currentTab: string,
    breadcrumb?: { label: string, href: string },
    hideUI?: boolean
}) => {
    const searchParams = useSearchParams()
    const masterFlow = useMasterFlow()
    const productId = searchParams.get('product')
    const categoryId = searchParams.get('category')

    // Find current index in the master sequential flow
    const currentIndex = useMemo(() => {
        return masterFlow.findIndex(p => {
            if (productId) return p.product === productId && p.category === categoryId;
            if (categoryId) return p.category === categoryId && !p.product;
            return p.tab === currentTab && !p.category && !p.product;
        });
    }, [masterFlow, currentTab, categoryId, productId]);

    const safeIndex = currentIndex !== -1 ? currentIndex : 0
    const totalPages = masterFlow.length

    const getPath = (index: number) => {
        const item = masterFlow[index]
        if (!item) return '#'
        let url = `/templates/hs-tech?tab=${item.tab}`
        if (item.category) url += `&category=${item.category}`
        if (item.product) url += `&product=${item.product}`
        return url
    }

    const prevPath = safeIndex > 0 ? getPath(safeIndex - 1) : null
    const nextPath = safeIndex < totalPages - 1 ? getPath(safeIndex + 1) : null

    const [direction, setDirection] = useState(0)
    const prevIndexRef = useRef(safeIndex)

    useEffect(() => {
        if (safeIndex > prevIndexRef.current) setDirection(1)
        else if (safeIndex < prevIndexRef.current) setDirection(-1)
        prevIndexRef.current = safeIndex
    }, [safeIndex])

    const variants = {
        enter: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (direction: number) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0 })
    }

    return (
        <div className="w-full dark:bg-neutral-950 bg-white antialiased relative overflow-x-hidden dark:text-slate-300 text-slate-700 transition-colors duration-500">
            {/* Main Sequential Flow Content */}
            <main className="relative z-10 w-full min-h-screen">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                    <motion.div
                        key={currentTab + (productId || '') + (categoryId || '')}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ x: { type: "spring", stiffness: 260, damping: 28 }, opacity: { duration: 0.3 } }}
                        className="w-full min-h-screen"
                    >
                        {children}
                        {/* FOOTER is now part of the scrolling content to avoid overlap with floating nav */}
                        {!hideUI && (
                            <footer className="hidden w-full pt-32 pb-48 px-6 bg-neutral-950 border-t border-white/5">
                                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
                                    <div className="md:col-span-2 space-y-8">
                                        <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase">HS TECH</h3>
                                        <p className="text-sm text-slate-500 max-w-sm leading-relaxed font-medium capitalize">authorized sensor distributor providing world-class measurement standards since 2005.</p>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-[10px] font-black uppercase text-cyan-500 tracking-[0.4em]">Inquiry</h4>
                                        <div className="space-y-3 text-sm font-mono text-slate-400">
                                            <p className="flex items-center gap-3"><Phone className="w-4 h-4" /> 070-4346-1844</p>
                                            <p className="flex items-center gap-3"><Mail className="w-4 h-4" /> hs-tech@hs-tech.co.kr</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6 text-sm text-slate-500 font-medium">
                                        <h4 className="text-[10px] font-black uppercase text-cyan-500 tracking-[0.4em]">Office</h4>
                                        <p>Seongnam-si, Gyeonggi-do, Korea</p>
                                    </div>
                                </div>
                            </footer>
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* 3. PAGE NAVIGATOR */}
            {!hideUI && (
                <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[150] flex items-center">
                    <div className="flex items-center bg-black/80 backdrop-blur-3xl border border-white/10 rounded-2xl py-3 px-5 md:py-4 md:px-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] gap-5 md:gap-8 font-black font-mono">
                        {/* Prev Arrow */}
                        <Link
                            href={prevPath || '#'}
                            className={cn("text-white/30 hover:text-cyan-400 transition-all transform hover:scale-125", !prevPath && "opacity-10 pointer-events-none")}
                            onClick={() => setDirection(-1)}
                        >
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                        </Link>

                        {/* Page Numbers */}
                        <div className="flex items-baseline gap-2 md:gap-3">
                            <span className="text-2xl md:text-4xl text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                                {String(safeIndex + 1).padStart(2, '0')}
                            </span>
                            <span className="text-white/10 text-lg">/</span>
                            <span className="text-lg md:text-xl text-white/40">
                                {String(totalPages).padStart(2, '0')}
                            </span>
                        </div>

                        {/* Next Arrow */}
                        <Link
                            href={nextPath || '#'}
                            className={cn("text-white/30 hover:text-cyan-400 transition-all transform hover:scale-125", !nextPath && "opacity-10 pointer-events-none")}
                            onClick={() => setDirection(1)}
                        >
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

function HSTechContent() {
    const searchParams = useSearchParams()
    const activeTab = searchParams.get('tab') || 'cover'
    const productId = searchParams.get('product')
    const categoryId = searchParams.get('category') || activeTab

    const categoryInfo = CATEGORY_INFO[activeTab] || CATEGORY_INFO[categoryId]
    const brandData = BRANDS[activeTab as keyof typeof BRANDS]
    const selectedProduct = productId ? findProduct(productId, categoryId) : null

    // VIEW: PRODUCT DETAIL
    if (productId && selectedProduct) {
        return (
            <CatalogPage title={selectedProduct.title.toUpperCase()} currentTab={activeTab} breadcrumb={{ label: 'Back', href: `/templates/hs-tech?tab=${categoryId}` }}>
                <div className="pt-6 pb-16">
                    <ProductIntro title={selectedProduct.title} subtitle={selectedProduct.subtitle || ''} image={selectedProduct.image} specs={selectedProduct.specs || []} datasheet={selectedProduct.datasheet} />
                    <div className="max-w-6xl mx-auto px-6 mt-16 border-t border-white/5 pt-20">
                        <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-12 underline decoration-cyan-500/30 underline-offset-8">Specifications</h3>
                        <ProductSpecs product={selectedProduct} />
                    </div>
                </div>
            </CatalogPage>
        )
    }

    // VIEW: COVER
    if (activeTab === 'cover') return <CatalogPage title="HOME" currentTab="cover"><CoverView /></CatalogPage>

    // VIEW: ABOUT
    if (activeTab === 'about') return (
        <CatalogPage title="ABOUT US" currentTab="about">
            <div className="pt-8 pb-20 px-6 max-w-5xl mx-auto">
                <h4 className="text-[10px] font-black text-cyan-500 tracking-[0.5em] mb-4">ESTABLISHED 2016 · PANGYO TECHNO VALLEY</h4>
                <h2 className="text-5xl md:text-9xl font-black text-white mb-12 tracking-tighter uppercase italic leading-none">Environmental<br /><span className="text-cyan-500">Sensor.</span></h2>
                <BentoGrid>
                    <BentoGridItem title="Authorized Distributor" description="Certified distributor of Vaisala, Setra, JUMO, and KNICK — world-class environmental and industrial sensor brands." header={<div className="h-48 bg-neutral-900 rounded-2xl border border-white/5" />} icon={<Globe className="w-4 h-4 text-cyan-500" />} className="md:col-span-2" />
                    <BentoGridItem title="Technical Consultancy" description="Proactive pre- and post-sales technical support, calibration, and maintenance services." header={<div className="h-48 bg-neutral-900 rounded-2xl border border-white/5 shadow-inner" />} icon={<CheckCircle2 className="w-4 h-4 text-cyan-500" />} className="md:col-span-1" />
                    <BentoGridItem title="HS TECH Co., Ltd." description="주식회사 HS TECH — 환경센서 전문 기업. 반도체, 플랜트, 제약, 생명과학 분야의 정밀 측정 솔루션을 제공합니다." header={<div className="h-48 bg-neutral-900 rounded-2xl border border-white/5" />} icon={<MapPin className="w-4 h-4 text-cyan-500" />} className="md:col-span-1" />
                    <BentoGridItem title="Business Reg." description="144-81-08640 · Pangyo Techno Valley, Seongnam-si, Gyeonggi-do" header={<div className="h-48 bg-neutral-900 rounded-2xl border border-white/5" />} icon={<CheckCircle2 className="w-4 h-4 text-cyan-500" />} className="md:col-span-2" />
                </BentoGrid>
            </div>
        </CatalogPage>
    )

    // VIEW: BUSINESS
    if (activeTab === 'business') return (
        <CatalogPage title="BUSINESS" currentTab="business">
            <div className="pt-8 pb-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-6xl md:text-9xl font-black text-white mb-20 tracking-tighter uppercase italic leading-none">Market<br />Scopes.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { name: 'Semiconductor', desc: 'Ultra-precise humidity & dewpoint monitoring for wafer fabrication and cleanroom environments.' },
                        { name: 'Plant & Process', desc: 'Robust pressure, temperature, and gas sensors for oil & gas, chemical, and power plant operations.' },
                        { name: 'Automotive', desc: 'Environmental sensors for EV battery manufacturing, paint booths, and automotive testing facilities.' },
                        { name: 'Marine', desc: 'Weather stations and corrosion-resistant sensors designed for offshore and onboard applications.' },
                        { name: 'Agriculture', desc: 'Soil moisture and microclimate monitoring to optimize crop yield and greenhouse conditions.' },
                        { name: 'Power Industry', desc: 'SF6 gas monitoring and transformer oil sensors for electrical infrastructure reliability.' },
                        { name: 'HVAC & Buildings', desc: 'Room pressure, CO2, and IAQ transmitters for smart buildings, hospitals, and data centers.' },
                        { name: 'Life Science', desc: 'GMP-compliant humidity and temperature monitoring for pharmaceutical and biotech facilities.' },
                    ].map((b, i) => (
                        <BackgroundGradient key={i} className="p-10 rounded-[35px] bg-neutral-900 border border-white/5">
                            <h3 className="text-xl font-black text-white mb-4 italic tracking-tighter uppercase">{b.name}</h3>
                            <p className="text-xs text-slate-400 font-medium leading-relaxed">{b.desc}</p>
                        </BackgroundGradient>
                    ))}
                </div>
            </div>
        </CatalogPage>
    )

    // VIEW: BRAND LIST
    if (activeTab === 'products') return (
        <CatalogPage title="BRANDS" currentTab="products">
            <div className="max-w-6xl mx-auto px-8 pt-8 pb-20">
                <h2 className="text-6xl md:text-9xl font-black text-white text-center mb-20 tracking-tighter uppercase italic">Strategic<br />Partners.</h2>
                <HoverEffect items={Object.entries(BRANDS).map(([key, data]: [string, any]) => ({ title: data.label, description: data.desc, link: `/templates/hs-tech?tab=${key}`, image: data.logo }))} />
            </div>
        </CatalogPage>
    )

    // VIEW: BRAND / CATEGORY LANDING
    if (brandData || categoryInfo) {
        const title = brandData?.label || categoryInfo?.title
        const items = categoryInfo ? (SUB_CATEGORIES[activeTab as keyof typeof SUB_CATEGORIES] || SUB_CATEGORIES[categoryId as keyof typeof SUB_CATEGORIES] || []) : (brandData?.categories || [])
        return (
            <CatalogPage title={title.toUpperCase()} currentTab={activeTab}>
                <div className="pt-8 pb-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-lg dark:text-slate-400 text-slate-600 max-w-3xl mx-auto"
                    >
                        {brandData?.desc || categoryInfo?.desc || `Professional ${title} solutions by HS TECH.`}
                    </motion.p>
                </div>
                <div className="pb-32 px-6 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {items.map((item: any) => {
                            const id = typeof item === 'string' ? item : item.id
                            const cat = CATEGORY_INFO[id] || item
                            return (
                                <Link key={id} href={`/templates/hs-tech?category=${id}&tab=${id}`} className="group">
                                    <BackgroundGradient className="p-10 rounded-[35px] bg-neutral-900 group-hover:shadow-cyan-500/30 transition-all border border-white/5 h-full">
                                        <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter group-hover:text-cyan-500 transition-colors leading-tight">{cat.title || cat.label}</h3>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed group-hover:text-slate-400">{cat.desc}</p>
                                    </BackgroundGradient>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </CatalogPage>
        )
    }

    // VIEW: CONTACT
    if (activeTab === 'contact') return (
        <CatalogPage title="CONTACT" currentTab="contact">
            <div className="pt-8 pb-20 px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
                <h2 className="text-6xl md:text-9xl font-black text-white mb-16 tracking-tighter uppercase italic leading-none">Reach<br /><span className="text-cyan-500">Out.</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl font-mono">
                    <div className="p-10 border border-white/10 rounded-[40px] bg-neutral-900 group shadow-2xl hover:border-cyan-500/50 transition-all">
                        <Phone className="w-10 h-10 text-cyan-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">견적문의</p>
                        <p className="text-lg font-black text-white tracking-tighter">070-4346-1844</p>
                    </div>
                    <div className="p-10 border border-white/10 rounded-[40px] bg-neutral-900 group shadow-2xl hover:border-cyan-500/50 transition-all">
                        <Phone className="w-10 h-10 text-cyan-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">FAX</p>
                        <p className="text-lg font-black text-white tracking-tighter">031-8016-3510</p>
                    </div>
                    <div className="p-10 border border-white/10 rounded-[40px] bg-neutral-900 group shadow-2xl hover:border-cyan-500/50 transition-all">
                        <Mail className="w-10 h-10 text-cyan-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">기술문의</p>
                        <p className="text-sm font-black text-white tracking-tighter break-all">hs-tech@hs-tech.co.kr</p>
                    </div>
                    <div className="p-10 border border-white/10 rounded-[40px] bg-neutral-900 group shadow-2xl hover:border-cyan-500/50 transition-all">
                        <MapPin className="w-10 h-10 text-cyan-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">주소</p>
                        <p className="text-sm font-black text-white leading-relaxed">판교테크노밸리<br />유스페이스2 B동 4층 410호</p>
                    </div>
                </div>
                <p className="mt-10 text-xs text-slate-600 font-mono tracking-widest uppercase">13494 경기도 성남시 분당구 대왕판교로 670</p>
            </div>
        </CatalogPage>
    )

    return <CatalogPage title="HOME" currentTab="cover" hideUI><CoverView /></CatalogPage>
}

export default function HSTechViewerPage() {
    return (
        <Suspense fallback={<div className="h-screen w-screen bg-neutral-950 flex items-center justify-center text-white font-black tracking-widest uppercase italic text-4xl">Loading...</div>}>
            <HSTechContent />
        </Suspense>
    )
}
