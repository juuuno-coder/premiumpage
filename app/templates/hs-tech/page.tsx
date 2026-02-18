'use client'

import React, { Suspense, useState, useEffect, useMemo } from 'react'
import {
    ChevronRight, ChevronLeft, Phone, Mail, MapPin, Globe,
    CheckCircle2, X, ExternalLink, Cpu, Factory, Car, Ship,
    Leaf, Zap, Building2, FlaskConical
} from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { DB, CATEGORY_INFO, BRANDS } from './data'
import { cn } from '@/lib/utils'
import CoverView from './components/CoverView'

// ─── Helper ──────────────────────────────────────────────────────────────────
const findProduct = (id: string): any => {
    for (const cat in DB) {
        const found = (DB[cat] as any[]).find((p: any) => p.id === id)
        if (found) return found
    }
    return null
}

// ─── 24-Page Brochure Flow ───────────────────────────────────────────────────
const BROCHURE_FLOW = [
    { tab: 'cover',         label: 'HOME' },
    { tab: 'about',         label: 'ABOUT US' },
    { tab: 'business',      label: 'BUSINESS' },
    { tab: 'products',      label: 'BRANDS' },
    // VAISALA
    { tab: 'vaisala',       label: 'VAISALA' },
    { tab: 'humidity',      label: 'HUMIDITY' },
    { tab: 'dewpoint',      label: 'DEWPOINT' },
    { tab: 'co2',           label: 'CO₂' },
    { tab: 'oil',           label: 'OIL MOISTURE' },
    { tab: 'barometer',     label: 'BAROMETER' },
    { tab: 'weather',       label: 'WEATHER' },
    { tab: 'h2o2',          label: 'H₂O₂' },
    { tab: 'cms',           label: 'DATA LOGGER' },
    { tab: 'cms_standalone', label: 'STANDALONE' },
    { tab: 'cms_network',    label: 'NETWORK / SW' },
    // SETRA
    { tab: 'setra',         label: 'SETRA' },
    { tab: 'setra_visual',  label: 'DP VISUAL' },
    { tab: 'setra_sensor',  label: 'DP SENSOR' },
    { tab: 'setra_ind',     label: 'IND. PRESSURE' },
    // JUMO
    { tab: 'jumo',          label: 'JUMO' },
    { tab: 'jumo_liquid',   label: 'LIQUID ANALYSIS' },
    { tab: 'jumo_control',  label: 'CTRL & REC' },
    // KNICK
    { tab: 'knick',         label: 'KNICK' },
    // Contact
    { tab: 'contact',       label: 'CONTACT' },
]

const ALL_TABS = BROCHURE_FLOW.map(p => p.tab)

// ─── Product Modal ───────────────────────────────────────────────────────────
function ProductModal({ product, onClose }: { product: any; onClose: () => void }) {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [onClose])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 md:p-6"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl w-full md:w-[80vw] max-h-[92vh] overflow-y-auto shadow-2xl border border-neutral-200 flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-start justify-between px-6 md:px-10 py-5 border-b border-neutral-100 shrink-0">
                    <div>
                        <p className="text-[10px] text-cyan-600 font-black uppercase tracking-[0.3em] mb-1">{product.subtitle}</p>
                        <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">{product.title}</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-lg transition-colors ml-6 shrink-0 mt-1">
                        <X className="w-6 h-6 text-neutral-400" />
                    </button>
                </div>

                {/* Body — 모바일: 위아래 / PC: 좌이미지 우스펙 2단 */}
                <div className="px-6 md:px-10 py-6 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-10">
                    {/* Image */}
                    <div className="bg-neutral-50 rounded-2xl p-6 md:p-10 flex items-center justify-center min-h-56 md:min-h-72 border border-neutral-100">
                        {product.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={product.image} alt={product.title} className="max-h-56 md:max-h-80 w-full object-contain" />
                        ) : (
                            <div className="text-neutral-300 text-xl font-black tracking-tighter text-center uppercase">{product.title}</div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-5">
                        {product.desc && (
                            <p className="text-sm text-neutral-600 leading-relaxed">{product.desc}</p>
                        )}
                        {product.specs?.length > 0 && (
                            <div className="border border-neutral-200 rounded-xl overflow-hidden">
                                <div className="bg-neutral-900 px-4 py-2">
                                    <span className="text-[10px] text-neutral-400 font-black uppercase tracking-[0.2em]">Specifications</span>
                                </div>
                                <table className="w-full text-sm">
                                    <tbody>
                                        {product.specs.map((spec: any, i: number) => (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                                                <td className="py-3 px-4 text-neutral-500 font-bold uppercase tracking-wide text-xs w-[38%] border-r border-neutral-100 align-top pt-3">{spec.label}</td>
                                                <td className="py-3 px-4 text-neutral-800 font-medium whitespace-pre-line leading-relaxed">{spec.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {product.datasheet && (
                            <a href={product.datasheet} target="_blank" rel="noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-black text-white bg-cyan-600 hover:bg-cyan-700 uppercase tracking-widest rounded-lg px-5 py-3 transition-all self-start shadow-sm">
                                <ExternalLink className="w-3.5 h-3.5" />
                                Download Datasheet
                            </a>
                        )}
                    </div>
                </div>

                {/* Gallery */}
                {product.gallery?.length > 1 && (
                    <div className="px-6 md:px-10 pb-8 flex gap-3 overflow-x-auto">
                        {product.gallery.map((img: string, i: number) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img key={i} src={img} alt="" className="h-20 w-20 object-contain rounded-xl border border-neutral-200 bg-neutral-50 p-2 shrink-0 hover:border-cyan-400 transition-colors cursor-pointer" />
                        ))}
                    </div>
                )}
            </motion.div>
        </motion.div>
    )
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, onOpen }: { product: any; onOpen: () => void }) {
    return (
        <button
            onClick={onOpen}
            className="group text-left border border-neutral-200 rounded-xl bg-white hover:border-cyan-500 hover:shadow-lg transition-all w-full overflow-hidden"
        >
            {/* Image area */}
            <div className="bg-neutral-50 p-4 aspect-[4/3] flex items-center justify-center overflow-hidden border-b border-neutral-100 relative">
                {product.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={product.image} alt={product.title} className="max-h-24 object-contain group-hover:scale-105 transition-transform duration-300" />
                ) : (
                    <div className="text-neutral-200 text-[10px] font-black uppercase tracking-widest text-center leading-tight">{product.title}</div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-600 text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <ExternalLink className="w-2.5 h-2.5" /> View Details
                    </span>
                </div>
            </div>
            {/* Info area */}
            <div className="p-3">
                <p className="text-[9px] text-cyan-600 font-black uppercase tracking-[0.25em] mb-0.5 line-clamp-1">{product.subtitle || ''}</p>
                <h3 className="text-sm font-black text-neutral-800 group-hover:text-cyan-600 transition-colors leading-tight line-clamp-2 mb-2">{product.title}</h3>
                <div className="flex items-center gap-1 text-[9px] text-neutral-400 font-bold uppercase tracking-widest group-hover:text-cyan-500 transition-colors">
                    <span>Specifications</span>
                    <ChevronRight className="w-2.5 h-2.5" />
                </div>
            </div>
        </button>
    )
}

// ─── Catalog Page Wrapper ─────────────────────────────────────────────────────
function CatalogPage({ children, currentTab }: {
    children: React.ReactNode
    currentTab: string
}) {
    const idx = BROCHURE_FLOW.findIndex(p => p.tab === currentTab)
    const safeIdx = idx !== -1 ? idx : 0
    const total = BROCHURE_FLOW.length
    const prevTab = safeIdx > 0 ? BROCHURE_FLOW[safeIdx - 1].tab : null
    const nextTab = safeIdx < total - 1 ? BROCHURE_FLOW[safeIdx + 1].tab : null

    return (
        <div className="w-full bg-white antialiased relative overflow-x-hidden text-slate-800">
            {/* Ambient */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-cyan-100 opacity-50 blur-[90px] mix-blend-multiply" />
                <div className="absolute -top-10 -right-20 w-[400px] h-[300px] rounded-full bg-sky-100 opacity-40 blur-[70px] mix-blend-multiply" />
            </div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent z-10" />

            <main className="relative z-10 w-full min-h-screen">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={currentTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="w-full min-h-screen"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Navigator */}
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[150]">
                <div className="flex items-center bg-white border border-neutral-200 rounded-lg py-2 px-4 md:py-3 md:px-6 shadow-md gap-4 md:gap-6 font-mono">
                    <Link href={prevTab ? `/templates/hs-tech?tab=${prevTab}` : '#'}
                        className={cn("text-neutral-300 hover:text-cyan-600 transition-colors", !prevTab && "opacity-20 pointer-events-none")}>
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                    </Link>
                    <div className="flex items-baseline gap-1">
                        <span className="text-lg md:text-2xl font-black text-cyan-600">{String(safeIdx + 1).padStart(2, '0')}</span>
                        <span className="text-neutral-300 text-sm">/</span>
                        <span className="text-sm md:text-base text-neutral-400 font-bold">{String(total).padStart(2, '0')}</span>
                    </div>
                    <Link href={nextTab ? `/templates/hs-tech?tab=${nextTab}` : '#'}
                        className={cn("text-neutral-300 hover:text-cyan-600 transition-colors", !nextTab && "opacity-20 pointer-events-none")}>
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

// ─── Category Products Layout ─────────────────────────────────────────────────
function CategoryPage({
    tab, title, desc, products, parentBrand, onOpen
}: {
    tab: string; title: string; desc: string
    products: any[]; parentBrand?: string; onOpen: (p: any) => void
}) {
    const PARENT_LABEL_MAP: Record<string, string> = { cms: 'DATA LOGGER' }
    const parentLabel = parentBrand ? (BRANDS[parentBrand as keyof typeof BRANDS]?.label || PARENT_LABEL_MAP[parentBrand] || parentBrand.toUpperCase()) : null
    return (
        <CatalogPage currentTab={tab}>
            <div className="pt-8 px-6 max-w-6xl mx-auto">
                {parentLabel && (
                    <Link href={`/templates/hs-tech?tab=${parentBrand}`}
                        className="text-[10px] text-cyan-600 font-black uppercase tracking-[0.3em] mb-3 block hover:text-cyan-700">
                        ← {parentLabel}
                    </Link>
                )}
                <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-2 tracking-tighter uppercase">{title}</h2>
                <p className="text-sm text-neutral-500 mb-8 max-w-2xl">{desc}</p>
            </div>
            <div className="px-6 pb-28 max-w-6xl mx-auto">
                {products.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                        {products.map((product: any) => (
                            <ProductCard key={product.id} product={product} onOpen={() => onOpen(product)} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-neutral-300 font-bold uppercase tracking-widest text-sm">No products listed</div>
                )}
            </div>
        </CatalogPage>
    )
}

// ─── Brand Overview Layout ────────────────────────────────────────────────────
function BrandPage({
    tab, brandKey, headline, sub, desc, logo, categories, onOpen
}: {
    tab: string; brandKey: string; headline: string; sub: string; desc: string
    logo: string; categories: { tab: string; title: string; desc: string; count: number }[]
    onOpen?: (p: any) => void
}) {
    return (
        <CatalogPage currentTab={tab}>
            <div className="pt-8 pb-28 px-6 max-w-6xl mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt={brandKey} className="h-10 object-contain mb-8" />
                <h2 className="text-4xl md:text-7xl font-black text-neutral-900 mb-4 tracking-tighter uppercase leading-none">
                    {headline}<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-400">{sub}</span>
                </h2>
                <p className="text-sm text-neutral-500 mb-12 max-w-2xl">{desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categories.map(cat => (
                        <Link key={cat.tab} href={`/templates/hs-tech?tab=${cat.tab}`}
                            className="group p-6 border border-neutral-200 rounded-xl bg-white hover:border-cyan-500 hover:shadow-sm transition-all">
                            <h3 className="text-sm font-black text-neutral-900 group-hover:text-cyan-600 transition-colors uppercase tracking-tight mb-2 leading-tight">{cat.title}</h3>
                            <p className="text-xs text-neutral-400 leading-relaxed mb-3">{cat.desc}</p>
                            <p className="text-[10px] text-neutral-300 font-bold uppercase tracking-widest">{cat.count} product{cat.count !== 1 ? 's' : ''}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </CatalogPage>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────
function HSTechContent() {
    const searchParams = useSearchParams()
    const activeTab = searchParams.get('tab') || 'cover'
    const [modalProduct, setModalProduct] = useState<any>(null)

    const open = (p: any) => setModalProduct(p)
    const close = () => setModalProduct(null)

    // Backward compat: if URL has ?product=xxx, auto-open modal
    const urlProductId = searchParams.get('product')
    useEffect(() => {
        if (urlProductId) {
            const found = findProduct(urlProductId)
            if (found) setModalProduct(found)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlProductId])

    // Category products helpers
    const setraVisual = useMemo(() => (DB.setra as any[] || []).filter((p: any) => p.category === 'diff_ind'), [])
    const setraSensor = useMemo(() => (DB.setra as any[] || []).filter((p: any) => p.category === 'diff_sen'), [])
    const setraInd    = useMemo(() => (DB.setra as any[] || []).filter((p: any) => p.category === 'industrial'), [])
    const jumoLiquid  = useMemo(() => (DB.jumo  as any[] || []).filter((p: any) => p.category === 'liquid'), [])
    const jumoControl = useMemo(() => (DB.jumo  as any[] || []).filter((p: any) => p.category === 'control'), [])

    return (
        <>
            {/* Modal */}
            <AnimatePresence>
                {modalProduct && <ProductModal product={modalProduct} onClose={close} />}
            </AnimatePresence>

            {/* ── 01. Cover ── */}
            {activeTab === 'cover' && (
                <CatalogPage currentTab="cover">
                    <CoverView />
                </CatalogPage>
            )}

            {/* ── 02. About ── */}
            {activeTab === 'about' && (
                <CatalogPage currentTab="about">
                    <div className="pt-8 pb-28 px-6 max-w-5xl mx-auto">
                        {/* Headline */}
                        <p className="text-[10px] font-black text-cyan-600 tracking-[0.4em] mb-4 uppercase">Established 2016 · Pangyo Techno Valley, Korea</p>
                        <h2 className="text-4xl md:text-7xl font-black text-neutral-900 mb-10 tracking-tighter uppercase leading-none">
                            About<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-400">HS TECH.</span>
                        </h2>

                        {/* Company Description — imweb 원문 */}
                        <div className="mb-10 space-y-5 border-l-2 border-cyan-500 pl-6">
                            <p className="text-base text-neutral-700 leading-relaxed">
                                HS TECH Co., Ltd. is an official distributor with rights to sell in <strong className="text-neutral-900">Korea and Vietnam</strong> by <strong className="text-neutral-900">VAISALA of Finland</strong>, which specializes in environmental sensors. We support sales, technical support, calibration, installation, and A/S for all VAISALA products.
                            </p>
                            <p className="text-base text-neutral-700 leading-relaxed">
                                We are also an agent of <strong className="text-neutral-900">JUMO</strong>, which provides stable measurement, control and monitoring systems for temperature and water quality and pressure. To efficiently manage simple tasks in the industry, <strong className="text-neutral-900">WECON</strong> provides effective management measures by supplying HMI and PLC of WECON.
                            </p>
                            <p className="text-base text-neutral-700 leading-relaxed italic">
                                "HS TECH is committed to becoming a sensor-based professional company that plays a central role in the future of development. Based on your sincere advice and encouragement, we promise to be HS TECH to impress everyone."
                            </p>
                        </div>

                        {/* Service Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                            {[
                                { label: 'Sales', desc: 'Authorized product sales for Korea & Vietnam' },
                                { label: 'Technical Support', desc: 'Expert consultation & application guidance' },
                                { label: 'Calibration', desc: 'On-site & lab calibration services' },
                                { label: 'Installation & A/S', desc: 'Full installation and after-sales support' },
                            ].map((s, i) => (
                                <div key={i} className="p-5 border border-neutral-200 rounded-xl bg-neutral-50">
                                    <p className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-1.5">{s.label}</p>
                                    <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="md:col-span-2 p-8 border border-neutral-200 rounded-xl bg-white">
                                <Globe className="w-5 h-5 text-cyan-600 mb-4" />
                                <h4 className="font-black text-neutral-900 mb-3 uppercase tracking-wide text-sm">Official Partner Brands</h4>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    {[
                                        { brand: 'VAISALA', region: 'Korea & Vietnam', type: 'Environmental Sensors' },
                                        { brand: 'SETRA', region: 'Korea', type: 'Pressure Transducers' },
                                        { brand: 'JUMO', region: 'Korea', type: 'Measurement & Control' },
                                        { brand: 'KNICK', region: 'Korea', type: 'Process Analysis' },
                                    ].map((p, i) => (
                                        <div key={i} className="border border-neutral-100 rounded-lg p-3 bg-neutral-50">
                                            <p className="font-black text-neutral-900 text-xs tracking-wide">{p.brand}</p>
                                            <p className="text-[10px] text-cyan-600 mt-0.5">{p.type}</p>
                                            <p className="text-[10px] text-neutral-400 mt-0.5">{p.region}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="p-6 border border-neutral-200 rounded-xl bg-white flex-1">
                                    <MapPin className="w-4 h-4 text-cyan-600 mb-3" />
                                    <h4 className="font-black text-neutral-900 mb-2 uppercase tracking-wide text-xs">Address</h4>
                                    <p className="text-xs text-neutral-600 leading-relaxed">#410, U-Space2 B,<br />670 Daewangpangyo-ro,<br />Bundang-Gu, Seongnam-Si,<br />Gyeonggi-Do, Korea</p>
                                </div>
                                <div className="p-6 border border-neutral-200 rounded-xl bg-white flex-1">
                                    <Phone className="w-4 h-4 text-cyan-600 mb-3" />
                                    <h4 className="font-black text-neutral-900 mb-2 uppercase tracking-wide text-xs">Contact</h4>
                                    <div className="space-y-1 text-xs text-neutral-600">
                                        <p>Tel: 070-4346-1844</p>
                                        <p>Fax: 031-8016-3510</p>
                                        <p>hs-tech@hs-tech.co.kr</p>
                                        <p className="text-neutral-400 pt-1">Reg. No. 144-81-08640</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CatalogPage>
            )}

            {/* ── 03. Business ── */}
            {activeTab === 'business' && (
                <CatalogPage currentTab="business">
                    <div className="pt-8 pb-28 px-6 max-w-6xl mx-auto">
                        <p className="text-[10px] font-black text-cyan-600 tracking-[0.4em] mb-4 uppercase">Support & Services</p>
                        <h2 className="text-4xl md:text-7xl font-black text-neutral-900 mb-10 tracking-tighter uppercase leading-none">
                            What We<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-400">Provide.</span>
                        </h2>

                        {/* 5 Service Cards — imweb 레이아웃 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {[
                                {
                                    title: 'Product\nCustomization',
                                    img: '/templates/hs-tech/images/products/biz_card1.png',
                                    icon: Cpu,
                                    desc: 'Tailored sensor solutions configured to your exact process requirements and application environment.',
                                },
                                {
                                    title: 'Technical\nSupport',
                                    img: '/templates/hs-tech/images/products/biz_card2.png',
                                    icon: CheckCircle2,
                                    desc: 'Expert pre- and post-sales technical consultation, product selection, and system integration guidance.',
                                },
                                {
                                    title: 'Calibration\n& Repair',
                                    img: '/templates/hs-tech/images/products/biz_card3.jpg',
                                    icon: FlaskConical,
                                    desc: 'Accredited on-site and in-lab calibration services to maintain measurement accuracy and traceability.',
                                },
                                {
                                    title: 'Customer\nTraining',
                                    img: '',
                                    icon: Globe,
                                    desc: 'Hands-on product training and application workshops designed for engineers and technicians.',
                                },
                                {
                                    title: 'Spare\nParts',
                                    img: '',
                                    icon: Zap,
                                    desc: 'Genuine spare parts and replacement probes to minimize downtime and maintain peak performance.',
                                },
                            ].map((s, i) => (
                                <div key={i} className="group flex flex-col rounded-2xl overflow-hidden border border-neutral-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300">
                                    {/* Cyan header */}
                                    <div className="bg-gradient-to-br from-cyan-500 to-sky-600 px-5 pt-6 pb-4">
                                        <h3 className="text-white font-black text-base leading-tight whitespace-pre-line tracking-tight">{s.title}</h3>
                                    </div>
                                    {/* Photo or icon area */}
                                    <div className="bg-gradient-to-br from-cyan-400/20 to-sky-500/10 flex-1 flex items-center justify-center min-h-44 relative overflow-hidden">
                                        {s.img ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={s.img}
                                                alt={s.title}
                                                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center p-6 gap-3">
                                                <s.icon className="w-12 h-12 text-cyan-400/60" />
                                            </div>
                                        )}
                                    </div>
                                    {/* Description */}
                                    <div className="p-4 bg-white">
                                        <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CatalogPage>
            )}

            {/* ── 04. Brands ── */}
            {activeTab === 'products' && (
                <CatalogPage currentTab="products">
                    <div className="max-w-6xl mx-auto px-6 pt-8 pb-28">
                        <h2 className="text-4xl md:text-7xl font-black text-neutral-900 mb-4 tracking-tighter uppercase leading-none text-center">
                            Strategic<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-400">Partners.</span>
                        </h2>
                        <p className="text-sm text-neutral-500 text-center mb-16 max-w-xl mx-auto">Official authorized distributor of four world-class precision measurement brands.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {Object.entries(BRANDS).map(([key, data]: [string, any]) => (
                                <Link key={key} href={`/templates/hs-tech?tab=${key}`}
                                    className="group block p-8 border border-neutral-200 rounded-xl bg-white hover:border-cyan-500 hover:shadow-sm transition-all">
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
            )}

            {/* ── 05. VAISALA Brand ── */}
            {activeTab === 'vaisala' && (
                <BrandPage
                    tab="vaisala" brandKey="VAISALA"
                    headline="World Leader in" sub="Measurement."
                    desc="Vaisala has been a pioneer in environmental and industrial measurement for over 80 years, delivering reliable data across 8 core sensing disciplines including humidity, dewpoint, CO2, pressure, and weather."
                    logo="/templates/hs-tech/images/brands/vaisala.svg"
                    categories={(BRANDS.vaisala.categories || []).map((catKey: string) => ({
                        tab: catKey,
                        title: CATEGORY_INFO[catKey]?.title || catKey,
                        desc: CATEGORY_INFO[catKey]?.desc || '',
                        count: (DB[catKey] as any[] || []).length,
                    }))}
                    onOpen={open}
                />
            )}

            {/* ── 06-13. VAISALA Categories ── */}
            {activeTab === 'humidity' && (
                <CategoryPage tab="humidity" title="Humidity" parentBrand="vaisala" onOpen={open}
                    desc="Best-in-class humidity measurement instruments for industrial, HVAC, handheld, and OEM applications."
                    products={DB.humidity as any[] || []} />
            )}
            {activeTab === 'dewpoint' && (
                <CategoryPage tab="dewpoint" title="Dewpoint" parentBrand="vaisala" onOpen={open}
                    desc="Reliable dewpoint measurement for compressed air dryers, cleanrooms, and industrial gas drying applications."
                    products={DB.dewpoint as any[] || []} />
            )}
            {activeTab === 'co2' && (
                <CategoryPage tab="co2" title="Carbon Dioxide" parentBrand="vaisala" onOpen={open}
                    desc="Accurate CO2 monitoring for indoor air quality, HVAC systems, incubators, and industrial processes."
                    products={DB.co2 as any[] || []} />
            )}
            {activeTab === 'oil' && (
                <CategoryPage tab="oil" title="Moisture in Oil" parentBrand="vaisala" onOpen={open}
                    desc="Transformer oil moisture and hydrogen gas monitoring for power industry asset protection."
                    products={DB.oil as any[] || []} />
            )}
            {activeTab === 'barometer' && (
                <CategoryPage tab="barometer" title="Barometric Pressure" parentBrand="vaisala" onOpen={open}
                    desc="High-accuracy digital barometers for meteorological, aviation, and industrial pressure measurement."
                    products={DB.barometer as any[] || []} />
            )}
            {activeTab === 'weather' && (
                <CategoryPage tab="weather" title="Weather" parentBrand="vaisala" onOpen={open}
                    desc="All-in-one weather stations and individual meteorological sensors for outdoor environmental monitoring."
                    products={DB.weather as any[] || []} />
            )}
            {activeTab === 'h2o2' && (
                <CategoryPage tab="h2o2" title="H₂O₂ Monitoring" parentBrand="vaisala" onOpen={open}
                    desc="Hydrogen peroxide vapor concentration measurement for bio-decontamination processes in pharmaceutical and healthcare."
                    products={DB.h2o2 as any[] || []} />
            )}
            {activeTab === 'cms' && (
                <BrandPage
                    tab="cms" brandKey="VAISALA"
                    headline="Continuous" sub="Monitoring."
                    desc="Vaisala's data logger and CMS portfolio delivers GxP-compliant environmental monitoring from standalone loggers to fully networked facility-wide systems."
                    logo="/templates/hs-tech/images/brands/vaisala.svg"
                    categories={[
                        { tab: 'cms_standalone', title: 'Standalone Data Loggers', desc: 'DL2000 / DL4000 / DL1700 — independent loggers with display.', count: (DB.cms as any[]).filter((p: any) => p.category === 'data_logger').length },
                        { tab: 'cms_network',    title: 'Network Loggers & Software', desc: 'DL1000/1400, vNET Wireless, POE Logger, CMS Software.', count: (DB.cms as any[]).filter((p: any) => p.category !== 'data_logger').length },
                    ]}
                    onOpen={open}
                />
            )}
            {activeTab === 'cms_standalone' && (
                <CategoryPage tab="cms_standalone" title="Standalone Data Loggers" parentBrand="cms" onOpen={open}
                    desc="Self-contained data loggers with built-in displays for independent environmental monitoring in cleanrooms, labs, and warehouses."
                    products={(DB.cms as any[]).filter((p: any) => p.category === 'data_logger')} />
            )}
            {activeTab === 'cms_network' && (
                <CategoryPage tab="cms_network" title="Network Loggers & Software" parentBrand="cms" onOpen={open}
                    desc="LAN/PoE/wireless networked loggers and centralized CMS software for facility-wide GMP/GxP-compliant continuous monitoring."
                    products={(DB.cms as any[]).filter((p: any) => p.category !== 'data_logger')} />
            )}

            {/* ── 14. SETRA Brand ── */}
            {activeTab === 'setra' && (
                <BrandPage
                    tab="setra" brandKey="SETRA"
                    headline="Premium" sub="Pressure."
                    desc="SETRA Systems delivers precision pressure transducers and room pressure monitoring solutions for cleanrooms, hospitals, and industrial facilities."
                    logo="/templates/hs-tech/images/brands/setra.svg"
                    categories={[
                        { tab: 'setra_visual', title: 'Differential Pressure (Visual)', desc: 'LED and touchscreen room pressure monitors.', count: setraVisual.length },
                        { tab: 'setra_sensor', title: 'Differential Pressure (Sensor)', desc: 'High-accuracy DP sensors for HVAC and filtration.', count: setraSensor.length },
                        { tab: 'setra_ind',    title: 'Industrial Pressure', desc: 'Rugged stainless steel industrial transducers.', count: setraInd.length },
                    ]}
                    onOpen={open}
                />
            )}

            {/* ── 15-17. SETRA Categories ── */}
            {activeTab === 'setra_visual' && (
                <CategoryPage tab="setra_visual" title="Differential Pressure (Visual)" parentBrand="setra" onOpen={open}
                    desc="LED-based and touchscreen room pressure monitors for cleanrooms, operating rooms, and isolation suites."
                    products={setraVisual} />
            )}
            {activeTab === 'setra_sensor' && (
                <CategoryPage tab="setra_sensor" title="Differential Pressure (Sensor)" parentBrand="setra" onOpen={open}
                    desc="Precision differential pressure sensors and transmitters for HVAC, filter monitoring, and building management systems."
                    products={setraSensor} />
            )}
            {activeTab === 'setra_ind' && (
                <CategoryPage tab="setra_ind" title="Industrial Pressure" parentBrand="setra" onOpen={open}
                    desc="High-performance stainless steel pressure transducers for harsh industrial and process environments."
                    products={setraInd} />
            )}

            {/* ── 18. JUMO Brand ── */}
            {activeTab === 'jumo' && (
                <BrandPage
                    tab="jumo" brandKey="JUMO"
                    headline="Liquid" sub="Analysis."
                    desc="JUMO specializes in innovative sensors and automation solutions for temperature, pH, conductivity, and process control across chemical, water treatment, and food industries."
                    logo="/templates/hs-tech/images/brands/jumo.svg"
                    categories={[
                        { tab: 'jumo_liquid',  title: 'Liquid Analysis', desc: 'pH electrodes, transmitters, and conductivity sensors.', count: jumoLiquid.length },
                        { tab: 'jumo_control', title: 'Control & Recording', desc: 'PID controllers and paperless recorders.', count: jumoControl.length },
                    ]}
                    onOpen={open}
                />
            )}

            {/* ── 19-20. JUMO Categories ── */}
            {activeTab === 'jumo_liquid' && (
                <CategoryPage tab="jumo_liquid" title="Liquid Analysis" parentBrand="jumo" onOpen={open}
                    desc="pH electrodes, transmitters, and conductivity sensors for water treatment, chemical, and food & beverage industries."
                    products={jumoLiquid} />
            )}
            {activeTab === 'jumo_control' && (
                <CategoryPage tab="jumo_control" title="Control & Recording" parentBrand="jumo" onOpen={open}
                    desc="PID temperature controllers and touchscreen paperless recorders for comprehensive industrial process automation."
                    products={jumoControl} />
            )}

            {/* ── 21. KNICK Brand ── */}
            {activeTab === 'knick' && (
                <CatalogPage currentTab="knick">
                    <div className="pt-8 pb-28 px-6 max-w-6xl mx-auto">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/templates/hs-tech/images/brands/knick.svg" alt="KNICK" className="h-10 object-contain mb-8" />
                        <h2 className="text-4xl md:text-7xl font-black text-neutral-900 mb-4 tracking-tighter uppercase leading-none">
                            Process<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-400">Analysis.</span>
                        </h2>
                        <p className="text-sm text-neutral-500 mb-12 max-w-2xl">KNICK delivers high-quality interface modules and process analyzers for chemical, pharmaceutical, and hazardous environments — featuring intrinsic safety (Ex Zone 1) certification.</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {(DB.knick as any[] || []).map((product: any) => (
                                <ProductCard key={product.id} product={product} onOpen={() => open(product)} />
                            ))}
                        </div>
                    </div>
                </CatalogPage>
            )}

            {/* ── 22. Contact ── */}
            {activeTab === 'contact' && (
                <CatalogPage currentTab="contact">
                    <div className="pt-8 pb-28 px-6 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-7xl font-black text-neutral-900 mb-4 tracking-tighter uppercase leading-none text-center">
                            Reach<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-400">Out.</span>
                        </h2>
                        <p className="text-sm text-neutral-500 mb-12 max-w-sm mx-auto text-center">Get in touch for product inquiries, technical consultations, and pricing information.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-8 border border-neutral-200 rounded-xl bg-white">
                                <Phone className="w-6 h-6 text-cyan-600 mb-4" />
                                <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Phone</p>
                                <p className="text-xl font-black text-neutral-900">070-4346-1844</p>
                            </div>
                            <div className="p-8 border border-neutral-200 rounded-xl bg-white">
                                <Phone className="w-6 h-6 text-cyan-600 mb-4" />
                                <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Fax</p>
                                <p className="text-xl font-black text-neutral-900">031-8016-3510</p>
                            </div>
                            <div className="p-8 border border-neutral-200 rounded-xl bg-white">
                                <Mail className="w-6 h-6 text-cyan-600 mb-4" />
                                <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Email</p>
                                <p className="text-base font-black text-neutral-900">hs-tech@hs-tech.co.kr</p>
                            </div>
                            <div className="p-8 border border-neutral-200 rounded-xl bg-white">
                                <MapPin className="w-6 h-6 text-cyan-600 mb-4" />
                                <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Address</p>
                                <p className="text-sm font-bold text-neutral-900 leading-relaxed">D-410, 670 Daewangpangyo-ro,<br />Bundang-gu, Seongnam-si,<br />Gyeonggi-do, Korea 13494</p>
                            </div>
                        </div>
                        <div className="mt-8 p-6 border border-neutral-100 rounded-xl bg-neutral-50 text-center">
                            <p className="text-xs text-neutral-400 uppercase tracking-widest">HS TECH Co., Ltd. · Business Reg. 144-81-08640 · Pangyo Techno Valley</p>
                        </div>
                    </div>
                </CatalogPage>
            )}

            {/* Fallback */}
            {!ALL_TABS.includes(activeTab) && (
                <CatalogPage currentTab="cover">
                    <CoverView />
                </CatalogPage>
            )}
        </>
    )
}

export default function HSTechViewerPage() {
    return (
        <Suspense fallback={<div className="h-screen w-screen bg-white flex items-center justify-center text-neutral-900 font-black tracking-widest uppercase text-2xl">Loading...</div>}>
            <HSTechContent />
        </Suspense>
    )
}
