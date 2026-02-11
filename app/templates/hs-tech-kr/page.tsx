'use client'

import React, { useRef } from 'react'
import { ArrowRight, FileText, Download, ChevronRight, ChevronLeft, Home, Search, Globe, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { DB, CATEGORY_INFO, SUB_CATEGORIES, BRANDS } from './data'
import { cn } from '@/lib/utils'
import ProductDetailModal from './components/ProductDetailModal'
import ProductSpecs from './components/ProductSpecs'
import CoverView from './components/CoverView'

// Premium UI Components
import { Spotlight } from './components/ui/Spotlight'
import { BentoGrid, BentoGridItem } from './components/ui/BentoGrid'
import { BackgroundGradient } from './components/ui/background-gradient'
import { TracingBeam } from './components/ui/TracingBeam'
import { HoverEffect } from './components/ui/card-hover-effect'
import { CardContainer, CardBody, CardItem } from './components/ui/3d-card'

const PAGE_FLOW = [
    { id: 'cover', label: '홈' },
    { id: 'about', label: '회사소개' },
    { id: 'business', label: '사업분야' },
    { id: 'products', label: '제품' },
    { id: 'contact', label: '문의' }
]

// Helper to find product in DB
const findProduct = (id: string, category: string) => {
    // Try to find in specific category first
    if (DB[category]) {
        const found = DB[category].find(p => p.id === id)
        if (found) return found
    }
    // Fallback: search all
    for (const cat in DB) {
        const found = DB[cat].find(p => p.id === id)
        if (found) return found
    }
    return null
}

// Catalog Page Wrapper
const CatalogPage = ({
    title,
    children,
    currentTab,
    breadcrumb,
    hideUI
}: {
    title: string,
    children: React.ReactNode,
    currentTab: string,
    breadcrumb?: { label: string, href: string },
    hideUI?: boolean
}) => {
    // Find index in main flow
    const currentIndex = PAGE_FLOW.findIndex(p => p.id === currentTab)
    const isMainTab = currentIndex !== -1

    const safeIndex = isMainTab ? currentIndex : 0
    const prevPage = isMainTab && safeIndex > 0 ? PAGE_FLOW[safeIndex - 1] : null
    const nextPage = isMainTab && safeIndex < PAGE_FLOW.length - 1 ? PAGE_FLOW[safeIndex + 1] : null

    return (
        <div className="min-h-screen w-full dark:bg-neutral-950 bg-white antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.02] relative overflow-hidden dark:text-slate-300 text-slate-700 pt-24 pb-24 transition-colors duration-300">
            {/* Sub Visual / Breadcrumb Area */}
            <div className={cn(
                "fixed top-20 left-0 right-0 z-40 px-6 md:px-12 py-4 pointer-events-none transition-opacity duration-300",
                hideUI ? "opacity-0" : "opacity-100"
            )}>
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase dark:text-slate-500 text-slate-400 pointer-events-auto">
                    <Link href="/templates/hs-tech-kr?tab=cover" className="hover:text-cyan-400 transition-colors">홈</Link>
                    <ChevronRight className="w-3 h-3" />
                    {breadcrumb && (
                        <>
                            <Link href={breadcrumb.href} className="hover:text-cyan-400 transition-colors">{breadcrumb.label}</Link>
                            <ChevronRight className="w-3 h-3" />
                        </>
                    )}
                    {!breadcrumb && currentTab === 'products' && (
                        <>
                            <span className="text-cyan-500 font-bold">제품</span>
                        </>
                    )}
                    {!breadcrumb && currentTab !== 'products' && (
                        <span className="text-cyan-500 font-bold">{title}</span>
                    )}
                    {breadcrumb && (
                        <span className="text-cyan-500 font-bold">{title}</span>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <main className="relative z-10 w-full min-h-screen">
                {children}
            </main>

            {/* Smart Floating Dock Navigator (Only visible on Main Tabs) */}
            {isMainTab && !hideUI && (
                <div className="fixed bottom-8 right-8 z-[50] flex items-center gap-4">
                    <div className="hidden md:flex bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-slate-400 shadow-2xl">
                        <span className="text-cyan-400 mr-2">{String(safeIndex + 1).padStart(2, '0')}</span>
                        <span className="opacity-30">/</span>
                        <span className="ml-2">{String(PAGE_FLOW.length).padStart(2, '0')}</span>
                    </div>

                    <div className="flex bg-black/50 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-2xl gap-1">
                        <Link
                            href={prevPage ? `/templates/hs-tech-kr?tab=${prevPage.id}` : '#'}
                            className={cn(
                                "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-400 border border-transparent hover:border-cyan-500/50",
                                !prevPage && "opacity-20 pointer-events-none"
                            )}
                            aria-label="Previous Page"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Link>
                        <Link
                            href={nextPage ? `/templates/hs-tech-kr?tab=${nextPage.id}` : '#'}
                            className={cn(
                                "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-400 border border-transparent hover:border-cyan-500/50",
                                !nextPage && "opacity-20 pointer-events-none"
                            )}
                            aria-label="Next Page"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function HSTechViewerPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const activeTab = searchParams.get('tab') || 'cover'

    // Data Logic
    const categoryInfo = CATEGORY_INFO[activeTab]
    const brandData = BRANDS[activeTab as keyof typeof BRANDS]
    const isBrandView = brandData && !categoryInfo

    const productId = searchParams.get('product')
    const selectedProduct = productId ? findProduct(productId, searchParams.get('category') || activeTab) : null

    const onCloseModal = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.delete('product')
        router.push(`/templates/hs-tech-kr?${params.toString()}`, { scroll: false })
    }

    let productInfo: any = null
    let productCategory = ''

    if (!categoryInfo && !isBrandView && !['cover', 'about', 'business', 'products', 'contact'].includes(activeTab)) {
        for (const [catId, products] of Object.entries(DB)) {
            if (!products) continue
            const found = products.find(p => p.id === activeTab)
            if (found) {
                productInfo = found
                productCategory = catId
                break
            }
        }
    }

    // --- VIEW 1: COVER ---
    if (activeTab === 'cover') {
        return <CoverView />
    }

    // --- VIEW 2: ABOUT ---
    if (activeTab === 'about') {
        const items = [
            {
                title: "Global Partnership",
                description: "2005년부터 이어온 Vaisala & Knick 공식 대리점.",
                header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />,
                icon: <Globe className="h-4 w-4 text-neutral-500" />,
                className: "md:col-span-2",
            },
            {
                title: "Technical Expertise",
                description: "전문적인 교정 및 유지보수 서비스 제공.",
                header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-cyan-900 to-neutral-900" />,
                icon: <CheckCircle2 className="h-4 w-4 text-neutral-500" />,
                className: "md:col-span-1",
            },
            {
                title: "Semiconductor",
                description: "클린룸을 위한 특화된 솔루션.",
                header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />,
                icon: <PhonewithGradientIcon />,
                className: "md:col-span-1",
            },
            {
                title: "Our Philosophy",
                description: "정확성, 신뢰성, 그리고 혁신.",
                header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />,
                icon: <ArrowRight className="h-4 w-4 text-neutral-500" />,
                className: "md:col-span-2",
            },
        ];

        return (
            <CatalogPage title="About Us" currentTab="about">
                <div className="py-20 px-6">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-neutral-900 mb-6">HS TECH 소개</h2>
                        <p className="dark:text-neutral-400 text-neutral-600 leading-relaxed text-lg">
                            세계 최정상급 측정 장비를 통해 고객의 산업 공정 품질을 최고 수준으로 유지할 수 있도록 지원합니다.
                        </p>
                    </div>
                    <BentoGrid className="max-w-4xl mx-auto">
                        {items.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                className={item.className}
                            />
                        ))}
                    </BentoGrid>
                </div>
            </CatalogPage>
        )
    }

    // --- VIEW 3: BUSINESS (Applications) ---
    if (activeTab === 'business') {
        const APPLICATIONS = [
            { id: 'semicon', title: '반도체', desc: '클린룸 모니터링 솔루션.' },
            { id: 'battery', title: '배터리', desc: '드라이룸 이슬점 관리.' },
            { id: 'plant', title: '산업 플랜트', desc: '발전소 및 화학 플랜트 센싱.' },
            { id: 'hvac_solution', title: '공조 설비 (HVAC)', desc: '빌딩 자동화 시스템.' },
            { id: 'automotive', title: '자동차', desc: '엔진 테스트 및 생산 라인.' },
            { id: 'power', title: '전력 및 에너지', desc: 'SF6 가스 및 변압기 모니터링.' },
        ]

        const selectedAppId = searchParams.get('category')
        const selectedApp = APPLICATIONS.find(app => app.id === selectedAppId)

        if (selectedApp) {
            return (
                <CatalogPage title={selectedApp.title} currentTab="business" breadcrumb={{ label: '사업 분야', href: '/templates/hs-tech-kr?tab=business' }}>
                    <div className="py-20 px-6 max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold dark:text-white text-neutral-900 mb-6 border-l-4 border-cyan-500 pl-6">{selectedApp.title}</h1>
                        <p className="text-xl dark:text-neutral-400 text-neutral-600 mb-12">{selectedApp.desc}</p>
                        <div className="dark:bg-neutral-900/50 bg-neutral-100 p-8 rounded-2xl border dark:border-white/5 border-neutral-200">
                            <h3 className="text-xl font-bold dark:text-white text-neutral-900 mb-4">주요 적용 사례</h3>
                            <ul className="list-disc list-inside dark:text-neutral-400 text-neutral-600 space-y-2">
                                <li>상세 적용 사례 데이터가 준비 중입니다.</li>
                                <li>관련 제품 문의는 고객센터로 연락 바랍니다.</li>
                            </ul>
                        </div>
                    </div>
                </CatalogPage>
            )
        }

        return (
            <CatalogPage title="Business" currentTab="business">
                <div className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-6">사업 분야</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {APPLICATIONS.map((area, idx) => (
                                <Link key={idx} href={`/templates/hs-tech-kr?tab=business&category=${area.id}`}>
                                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-neutral-900 h-full">
                                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                                            {area.title}
                                        </p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            {area.desc}
                                        </p>
                                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-neutral-800">
                                            <span>솔루션 보기</span>
                                            <span className="bg-neutral-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                                &rarr;
                                            </span>
                                        </button>
                                    </BackgroundGradient>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </CatalogPage>
        )
    }

    // --- VIEW 4: PRODUCT (Brand List) ---
    if (activeTab === 'products') {
        const portfolioItems = Object.entries(BRANDS).map(([key, data]: [string, any]) => ({
            title: data.label,
            description: data.desc,
            link: `/templates/hs-tech-kr?tab=${key}`,
            image: data.logo, // Pass the logo path to HoverEffect
        }))

        return (
            <CatalogPage title="Product" currentTab="products">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="max-w-2xl mx-auto text-center mb-0 mt-12">
                        <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-neutral-900 mb-4">공식 파트너</h2>
                        <p className="dark:text-neutral-400 text-neutral-600">세계 최정상급 센서 브랜드의 공식 대리점입니다.</p>
                    </div>
                    <HoverEffect items={portfolioItems} />
                </div>
            </CatalogPage>
        )
    }

    // --- VIEW 5: BRAND LANDING (Vaisala) ---
    if (isBrandView && brandData) {
        const catKeys = brandData.categories || []
        return (
            <CatalogPage title={brandData.label} currentTab={activeTab} breadcrumb={{ label: '제품', href: '/templates/hs-tech-kr?tab=products' }}>
                <div className="py-20 px-6 max-w-6xl mx-auto">
                    <div className="mb-12 border-l-4 border-cyan-500 pl-6">
                        <h1 className="text-4xl font-black dark:text-white text-neutral-900 mb-2">{brandData.label}</h1>
                        <p className="text-xl dark:text-neutral-400 text-neutral-600">{brandData.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {catKeys.map((key: string) => {
                            const cat = CATEGORY_INFO[key]
                            const firstImg = cat?.images?.[0] || null

                            if (!cat) return null
                            return (
                                <Link key={key} href={`/templates/hs-tech-kr?category=${key}&tab=${key}`}>
                                    <BackgroundGradient className="rounded-[22px] dark:bg-neutral-900 bg-neutral-50 border-none p-0 h-full flex flex-col items-start hover:shadow-cyan-500/10 overflow-hidden group">
                                        {firstImg && (
                                            <div className="w-full h-48 bg-white/5 p-6 flex items-center justify-center relative border-b border-white/5">
                                                <Image
                                                    src={firstImg}
                                                    alt={cat.title}
                                                    fill
                                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6 w-full flex-grow flex flex-col">
                                            <h3 className="text-xl font-bold dark:text-white text-neutral-900 mb-2">{cat.title}</h3>
                                            <p className="text-sm dark:text-neutral-400 text-neutral-600 mb-4 flex-grow">{cat.desc}</p>
                                            <span className="text-xs font-mono dark:text-cyan-400 text-cyan-600 border border-cyan-500/30 px-2 py-1 rounded w-fit">시리즈 보기 &rarr;</span>
                                        </div>
                                    </BackgroundGradient>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </CatalogPage>
        )
    }

    // --- VIEW 6: CATEGORY OVERVIEW (Sub-Category Groups with Image Cards) ---
    if (categoryInfo) {
        const subCats = SUB_CATEGORIES[activeTab] || []
        // Breadcrumb logic
        let parentBrand = 'products'
        let parentLabel = '제품'
        for (const [bKey, bData] of Object.entries(BRANDS)) {
            if (bData.categories.includes(activeTab)) {
                parentBrand = bKey
                parentLabel = bData.label
                break
            }
        }

        return (
            <CatalogPage
                title={categoryInfo.title}
                currentTab={activeTab}
                breadcrumb={{ label: parentLabel, href: `/templates/hs-tech-kr?tab=${parentBrand}` }}
                hideUI={!!selectedProduct}
            >
                <div className="py-20 px-6 max-w-7xl mx-auto">
                    <p className="text-xl dark:text-neutral-400 text-neutral-600 mb-12 max-w-3xl border-l-2 border-cyan-500 pl-6">{categoryInfo.desc}</p>

                    {subCats.length > 0 ? (
                        <div className="space-y-16">
                            {subCats.map((sub: any) => (
                                <div key={sub.id} className="relative">
                                    <div className="flex items-end gap-4 mb-6 pb-2 border-b border-white/10">
                                        <h3 className="text-2xl font-bold text-white">{sub.title}</h3>
                                        <span className="text-sm text-neutral-500 mb-1 hidden sm:block">{sub.desc}</span>
                                    </div>

                                    {/* Product Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {sub.items?.map((item: any) => {
                                            // Resolve Product Data for Image/Subtitle
                                            const pData = findProduct(item.id, activeTab)
                                            const imgSrc = pData?.image || '/hstech/HS-TECH_files/289587707561d.png'
                                            const subtitle = pData?.subtitle || item.label

                                            return (
                                                <Link
                                                    key={item.id}
                                                    href={`/templates/hs-tech-kr?category=${activeTab}&tab=${activeTab}&product=${item.id}`}
                                                    scroll={false}
                                                    className="group block relative bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                                                >
                                                    {/* Image Container */}
                                                    <div className="aspect-square w-full bg-white/5 p-6 relative flex items-center justify-center overflow-hidden">
                                                        <Image
                                                            src={imgSrc}
                                                            alt={item.label}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                        {/* Hover Overlay */}
                                                        <div className="absolute inset-0 bg-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                            <div className="bg-black/50 p-2 rounded-full backdrop-blur-sm">
                                                                <ArrowRight className="w-5 h-5 text-white" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Info Container */}
                                                    <div className="p-4 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-white/5">
                                                        <h4 className="text-lg font-bold dark:text-white text-neutral-900 group-hover:text-cyan-400 transition-colors mb-1 truncate">{item.label}</h4>
                                                        <p className="text-xs dark:text-neutral-500 text-neutral-400 truncate group-hover:text-neutral-400">{subtitle}</p>
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-10 text-center text-neutral-500">
                            상단에서 특정 제품군을 선택해주세요.
                        </div>
                    )}

                    <AnimatePresence>
                        {selectedProduct && (
                            <ProductDetailModal
                                product={selectedProduct}
                                onClose={onCloseModal}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </CatalogPage>
        )
    }

    // --- VIEW 7: PRODUCT DETAIL ---
    if (productInfo) {
        return (
            <CatalogPage title={productInfo.title} currentTab={activeTab} breadcrumb={{ label: CATEGORY_INFO[productCategory]?.title || 'Category', href: `/templates/hs-tech-kr?category=${productCategory}&tab=${productCategory}` }}>
                <TracingBeam className="px-6">
                    <div className="max-w-4xl mx-auto antialiased pt-4 pb-20 relative">
                        <div className="mb-12">
                            <h1 className="text-4xl md:text-6xl font-black dark:text-white text-neutral-900 mb-4 tracking-tight">{productInfo.title}</h1>
                            <h2 className="text-xl md:text-2xl text-cyan-500 font-mono mb-8">{productInfo.subtitle}</h2>
                        </div>
                        <div className="mb-16 flex justify-center">
                            <CardContainer className="inter-var">
                                <CardBody className="bg-neutral-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                        {productInfo.title}
                                    </CardItem>
                                    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                        {productInfo.subtitle}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <Image
                                            src={productInfo.image || "/hstech/HS-TECH_files/289587707561d.png"} // Fallback
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl bg-white/5 p-4"
                                            alt={productInfo.title}
                                        />
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </div>
                        <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
                            <p className="text-lg dark:text-neutral-300 text-neutral-600 leading-relaxed whitespace-pre-line">
                                {productInfo.desc}
                            </p>
                        </div>

                        {/* DETAILED SPECS FROM HTML */}
                        <div className="mb-16 border-t dark:border-white/5 border-neutral-200 pt-12">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="h-6 w-1 bg-cyan-500 rounded-full"></div>
                                <h3 className="text-2xl font-bold dark:text-white text-neutral-900">기술 데이터</h3>
                            </div>
                            <ProductSpecs product={productInfo} />
                        </div>
                        {productInfo.specs && (
                            <div className="dark:bg-neutral-900/50 bg-neutral-50 border dark:border-neutral-800 border-neutral-200 rounded-2xl overflow-hidden backdrop-blur-sm">
                                <div className="p-6 border-b dark:border-neutral-800 border-neutral-200 dark:bg-neutral-900 bg-neutral-100">
                                    <h3 className="text-lg font-bold dark:text-white text-neutral-900 flex items-center gap-2">
                                        <FileText className="w-5 h-5 text-cyan-500" /> 기술 사양
                                    </h3>
                                </div>
                                <div className="divide-y dark:divide-neutral-800 divide-neutral-200">
                                    {productInfo.specs.map((spec: any, idx: number) => (
                                        <div key={idx} className="flex flex-col md:flex-row p-4 dark:hover:bg-neutral-800/50 hover:bg-neutral-100 transition-colors">
                                            <span className="w-full md:w-1/3 text-neutral-500 text-sm font-medium uppercase tracking-wide mb-1 md:mb-0">{spec.label}</span>
                                            <span className="w-full md:w-2/3 dark:text-neutral-200 text-neutral-800 text-sm font-mono">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* PRODUCT GALLERY (Narrative) */}
                        {productInfo.gallery && productInfo.gallery.length > 0 && (
                            <div className="mt-16">
                                <h3 className="text-2xl font-bold dark:text-white text-neutral-900 mb-8 border-l-4 border-cyan-500 pl-4">제품 갤러리</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {productInfo.gallery.map((img: string, idx: number) => (
                                        <div key={idx} className="relative group rounded-2xl overflow-hidden border dark:border-white/5 border-neutral-200 dark:bg-neutral-900 bg-neutral-50">
                                            <div className="aspect-video w-full relative">
                                                <Image
                                                    src={img}
                                                    alt={`${productInfo.title} image ${idx + 1}`}
                                                    fill
                                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-12 flex gap-4">
                            <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2">
                                <Download className="w-4 h-4" /> 데이터시트
                            </button>
                            <Link href="/templates/hs-tech-kr?tab=contact" className="px-8 py-3 border dark:border-neutral-700 border-neutral-200 dark:text-neutral-300 text-neutral-600 dark:hover:bg-neutral-800 hover:bg-neutral-100 font-bold rounded-lg transition-all">
                                견적 문의
                            </Link>
                        </div>
                    </div>
                </TracingBeam>
            </CatalogPage>
        )
    }

    // Fallback View 8 Contact/Default
    if (activeTab === 'contact') {
        return (
            <CatalogPage title="Contact" currentTab="contact">
                <div className="py-20 px-6">
                    <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                        <h2 className="text-4xl md:text-6xl font-black dark:text-white text-neutral-900 mb-6">함께 하세요</h2>
                        <p className="text-xl dark:text-neutral-400 text-neutral-600 mb-12 max-w-2xl">
                            견적 및 기술 지원 문의를 환영합니다.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                            <div className="dark:bg-neutral-900/50 bg-neutral-50 p-8 rounded-2xl border dark:border-neutral-800 border-neutral-200 hover:border-cyan-500/50 transition-colors group">
                                <Phone className="w-8 h-8 text-cyan-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-bold dark:text-white text-neutral-900 mb-2">전화</h3>
                                <p className="dark:text-neutral-400 text-neutral-600">070-4346-1844</p>
                            </div>
                            <div className="dark:bg-neutral-900/50 bg-neutral-50 p-8 rounded-2xl border dark:border-neutral-800 border-neutral-200 hover:border-cyan-500/50 transition-colors group">
                                <Mail className="w-8 h-8 text-cyan-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-bold dark:text-white text-neutral-900 mb-2">이메일</h3>
                                <p className="dark:text-neutral-400 text-neutral-600">hs-tech@hs-tech.co.kr</p>
                            </div>
                            <div className="dark:bg-neutral-900/50 bg-neutral-50 p-8 rounded-2xl border dark:border-neutral-800 border-neutral-200 hover:border-cyan-500/50 transition-colors group">
                                <MapPin className="w-8 h-8 text-cyan-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-bold dark:text-white text-neutral-900 mb-2">위치</h3>
                                <p className="dark:text-neutral-400 text-neutral-600">경기 성남시 분당구 대왕판교로 670 유스페이스2 D-410</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CatalogPage>
        )
    }

    return (
        <CatalogPage title="Page Not Found" currentTab="cover">
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-white">Page Not Found</h1>
            </div>
        </CatalogPage>
    )
}

const PhonewithGradientIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 text-neutral-500"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
        </svg>
    )
}
