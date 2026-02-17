'use client'

import React, { Suspense, useState, useEffect, useRef, useMemo } from 'react'
import { ChevronRight, ChevronLeft, Phone, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { DB, CATEGORY_INFO, SUB_CATEGORIES, BRANDS } from './data'
import { cn } from '@/lib/utils'
import ProductSpecs from './components/ProductSpecs'
import CoverView from './components/CoverView'
import ProductIntro from './components/ProductIntro'

// 1. MASTER BROCHURE FLOW (~27 pages)
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

// Catalog Page Wrapper
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

    return (
        <div className="w-full bg-white antialiased relative overflow-x-hidden text-slate-800">
            {/* Main Content */}
            <main className="relative z-10 w-full min-h-screen">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={currentTab + (productId || '') + (categoryId || '')}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full min-h-screen"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Page Navigator */}
            {!hideUI && (
                <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[150] flex items-center">
                    <div className="flex items-center bg-white border border-neutral-200 rounded-lg py-2 px-4 md:py-3 md:px-6 shadow-md gap-4 md:gap-6 font-mono">
                        {/* Prev Arrow */}
                        <Link
                            href={prevPath || '#'}
                            className={cn("text-neutral-300 hover:text-cyan-600 transition-colors", !prevPath && "opacity-20 pointer-events-none")}
                            onClick={() => setDirection(-1)}
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </Link>

                        {/* Page Numbers */}
                        <div className="flex items-baseline gap-1 md:gap-2">
                            <span className="text-lg md:text-2xl font-black text-cyan-600">
                                {String(safeIndex + 1).padStart(2, '0')}
                            </span>
                            <span className="text-neutral-300 text-sm">/</span>
                            <span className="text-sm md:text-base text-neutral-400 font-bold">
                                {String(totalPages).padStart(2, '0')}
                            </span>
                        </div>

                        {/* Next Arrow */}
                        <Link
                            href={nextPath || '#'}
                            className={cn("text-neutral-300 hover:text-cyan-600 transition-colors", !nextPath && "opacity-20 pointer-events-none")}
                            onClick={() => setDirection(1)}
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
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
                    <div className="max-w-6xl mx-auto px-6 mt-12 border-t border-neutral-200 pt-12">
                        <h3 className="text-2xl font-black text-neutral-900 tracking-tight uppercase mb-8">Specifications</h3>
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
                <p className="text-xs font-bold text-cyan-600 tracking-[0.5em] mb-4 uppercase">Established 2016 · Pangyo Techno Valley</p>
                <h2 className="text-4xl md:text-7xl font-black text-neutral-900 mb-12 tracking-tighter uppercase leading-none">Environmental<br /><span className="text-cyan-600">Sensor.</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 p-8 border border-neutral-200 rounded-xl bg-white">
                        <Globe className="w-5 h-5 text-cyan-600 mb-4" />
                        <h4 className="font-bold text-neutral-900 mb-2 uppercase tracking-wide text-sm">Authorized Distributor</h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">Certified distributor of Vaisala, Setra, JUMO, and KNICK — world-class environmental and industrial sensor brands.</p>
                    </div>
                    <div className="p-8 border border-neutral-200 rounded-xl bg-white">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mb-4" />
                        <h4 className="font-bold text-neutral-900 mb-2 uppercase tracking-wide text-sm">Technical Consultancy</h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">Pre- and post-sales technical support, calibration, and maintenance services.</p>
                    </div>
                    <div className="p-8 border border-neutral-200 rounded-xl bg-white">
                        <MapPin className="w-5 h-5 text-cyan-600 mb-4" />
                        <h4 className="font-bold text-neutral-900 mb-2 uppercase tracking-wide text-sm">HS TECH Co., Ltd.</h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">주식회사 HS TECH — 환경센서 전문 기업. 반도체, 플랜트, 제약, 생명과학 분야의 정밀 측정 솔루션.</p>
                    </div>
                    <div className="p-8 border border-neutral-200 rounded-xl bg-white">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mb-4" />
                        <h4 className="font-bold text-neutral-900 mb-2 uppercase tracking-wide text-sm">Business Reg.</h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">144-81-08640 · Pangyo Techno Valley, Seongnam-si, Gyeonggi-do</p>
                    </div>
                    <div className="p-8 border border-neutral-200 rounded-xl bg-neutral-50">
                        <h4 className="font-bold text-neutral-900 mb-3 uppercase tracking-wide text-sm">Contact</h4>
                        <div className="space-y-2 text-sm text-neutral-600">
                            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-neutral-400" /> 070-4346-1844</p>
                            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-neutral-400" /> hs-tech@hs-tech.co.kr</p>
                        </div>
                    </div>
                </div>
            </div>
        </CatalogPage>
    )

    // VIEW: BUSINESS
    if (activeTab === 'business') return (
        <CatalogPage title="BUSINESS" currentTab="business">
            <div className="pt-8 pb-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-black text-neutral-900 mb-16 tracking-tighter uppercase leading-none">Market<br />Scopes.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                        <div key={i} className="p-6 border border-neutral-200 rounded-xl bg-white hover:border-cyan-500/40 transition-colors">
                            <h3 className="text-base font-black text-neutral-900 mb-3 uppercase tracking-tight">{b.name}</h3>
                            <p className="text-xs text-neutral-500 leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </CatalogPage>
    )

    // VIEW: BRAND LIST
    if (activeTab === 'products') return (
        <CatalogPage title="BRANDS" currentTab="products">
            <div className="max-w-6xl mx-auto px-8 pt-8 pb-20">
                <h2 className="text-4xl md:text-7xl font-black text-neutral-900 text-center mb-16 tracking-tighter uppercase">Strategic<br />Partners.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(BRANDS).map(([key, data]: [string, any]) => (
                        <Link
                            key={key}
                            href={`/templates/hs-tech?tab=${key}`}
                            className="group block p-8 border border-neutral-200 rounded-xl bg-white hover:border-cyan-500 hover:shadow-sm transition-all"
                        >
                            {data.logo && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={data.logo} alt={data.label} className="h-10 object-contain mb-6 grayscale group-hover:grayscale-0 transition-all" />
                            )}
                            <h3 className="text-xl font-black text-neutral-900 mb-2 uppercase tracking-tight group-hover:text-cyan-600 transition-colors">{data.label}</h3>
                            <p className="text-xs text-neutral-500 leading-relaxed">{data.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </CatalogPage>
    )

    // VIEW: BRAND / CATEGORY LANDING
    if (brandData || categoryInfo) {
        const title = brandData?.label || categoryInfo?.title
        const items = categoryInfo ? (SUB_CATEGORIES[activeTab as keyof typeof SUB_CATEGORIES] || SUB_CATEGORIES[categoryId as keyof typeof SUB_CATEGORIES] || []) : (brandData?.categories || [])
        return (
            <CatalogPage title={title.toUpperCase()} currentTab={activeTab}>
                <div className="pt-8 pb-8 px-6 max-w-6xl mx-auto border-b border-neutral-100 mb-8">
                    <h1 className="text-3xl md:text-5xl font-black text-neutral-900 mb-3 tracking-tight uppercase">
                        {title}
                    </h1>
                    <p className="text-base text-neutral-500 max-w-2xl">
                        {brandData?.desc || categoryInfo?.desc || `Professional ${title} solutions by HS TECH.`}
                    </p>
                </div>
                <div className="pb-24 px-6 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {items.map((item: any) => {
                            const id = typeof item === 'string' ? item : item.id
                            const cat = CATEGORY_INFO[id] || item
                            return (
                                <Link key={id} href={`/templates/hs-tech?category=${id}&tab=${id}`} className="group block p-6 border border-neutral-200 rounded-xl bg-white hover:border-cyan-500 hover:shadow-sm transition-all">
                                    <h3 className="text-lg font-black text-neutral-900 mb-2 uppercase tracking-tight group-hover:text-cyan-600 transition-colors leading-tight">{cat.title || cat.label}</h3>
                                    <p className="text-xs text-neutral-500 leading-relaxed">{cat.desc}</p>
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
                <h2 className="text-4xl md:text-7xl font-black text-neutral-900 mb-16 tracking-tighter uppercase leading-none">Reach<br /><span className="text-cyan-600">Out.</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
                    <div className="p-8 border border-neutral-200 rounded-xl bg-white hover:border-cyan-500/40 transition-colors">
                        <Phone className="w-8 h-8 text-cyan-600 mx-auto mb-4" />
                        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">견적문의</p>
                        <p className="text-base font-black text-neutral-900 tracking-tighter">070-4346-1844</p>
                    </div>
                    <div className="p-8 border border-neutral-200 rounded-xl bg-white hover:border-cyan-500/40 transition-colors">
                        <Phone className="w-8 h-8 text-cyan-600 mx-auto mb-4" />
                        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">FAX</p>
                        <p className="text-base font-black text-neutral-900 tracking-tighter">031-8016-3510</p>
                    </div>
                    <div className="p-8 border border-neutral-200 rounded-xl bg-white hover:border-cyan-500/40 transition-colors">
                        <Mail className="w-8 h-8 text-cyan-600 mx-auto mb-4" />
                        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">기술문의</p>
                        <p className="text-sm font-black text-neutral-900 tracking-tighter break-all">hs-tech@hs-tech.co.kr</p>
                    </div>
                    <div className="p-8 border border-neutral-200 rounded-xl bg-white hover:border-cyan-500/40 transition-colors">
                        <MapPin className="w-8 h-8 text-cyan-600 mx-auto mb-4" />
                        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">주소</p>
                        <p className="text-sm font-black text-neutral-900 leading-relaxed">판교테크노밸리<br />유스페이스2 B동 4층 410호</p>
                    </div>
                </div>
                <p className="mt-8 text-xs text-neutral-400 tracking-widest uppercase">13494 경기도 성남시 분당구 대왕판교로 670</p>
            </div>
        </CatalogPage>
    )

    return <CatalogPage title="HOME" currentTab="cover" hideUI><CoverView /></CatalogPage>
}

export default function HSTechViewerPage() {
    return (
        <Suspense fallback={<div className="h-screen w-screen bg-white flex items-center justify-center text-neutral-900 font-black tracking-widest uppercase text-2xl">Loading...</div>}>
            <HSTechContent />
        </Suspense>
    )
}
