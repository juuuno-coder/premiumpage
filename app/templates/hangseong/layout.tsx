'use client'

import React, { useState, useEffect, useCallback, useRef, useMemo, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, ChevronLeft, Globe, Grid, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HANGSEONG_MENU } from './data'

function HangseongLayoutContent({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const mainRef = useRef<HTMLElement>(null)
    const [isAtBottom, setIsAtBottom] = useState(true)
    const [hasScroll, setHasScroll] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Set meta tags for SEO and Open Graph
    useEffect(() => {
        // Update document title
        document.title = '항성산업사 (hangseong)'

        // Helper function to set or update meta tags
        const setMetaTag = (property: string, content: string, isProperty = true) => {
            const attr = isProperty ? 'property' : 'name'
            let meta = document.querySelector(`meta[${attr}="${property}"]`)
            if (!meta) {
                meta = document.createElement('meta')
                meta.setAttribute(attr, property)
                document.head.appendChild(meta)
            }
            meta.setAttribute('content', content)
        }

        // Basic SEO
        setMetaTag('description', 'Challenging To The Future', false)
        setMetaTag('keywords', '항성산업사, Hangseong, 자동차 부품, HVAC Motor, Blower Motor', false)

        // Open Graph
        setMetaTag('og:title', '항성산업사 (hangseong)')
        setMetaTag('og:description', 'Challenging To The Future')
        setMetaTag('og:image', 'https://hangseong.premiumpage.kr/templates/hangseong/images/slider_01.PNG')
        setMetaTag('og:url', 'https://hangseong.premiumpage.kr')
        setMetaTag('og:type', 'website')
        setMetaTag('og:site_name', 'Hangseong Industrial')

        // Twitter Card
        setMetaTag('twitter:card', 'summary_large_image', false)
        setMetaTag('twitter:title', '항성산업사 (hangseong)', false)
        setMetaTag('twitter:description', 'Challenging To The Future', false)
        setMetaTag('twitter:image', 'https://hangseong.premiumpage.kr/templates/hangseong/images/slider_01.PNG', false)
    }, [])

    // Dynamic Slide Generation
    const SLIDES = useMemo(() => {
        const slides: { catId: string; id: string; label: string; href: string }[] = []
        // Cover Slide
        slides.push({ catId: 'cover', id: 'cover', label: 'HOME', href: '/templates/hangseong?tab=cover' })

        HANGSEONG_MENU.forEach(brand => {
            brand.items.forEach(item => {
                if (item.subs && item.subs.length > 0) {
                    // Special: 'products' category page acts as a slide itself (e.g. Page 8)
                    if (item.id === 'products') {
                        slides.push({
                            catId: item.id,
                            id: item.id,
                            label: item.label,
                            href: item.href
                        })
                    }

                    item.subs.forEach(sub => {
                        slides.push({
                            catId: item.id,
                            id: sub.id,
                            label: sub.label,
                            href: `/templates/hangseong?category=${item.id}&tab=${sub.id}`
                        })
                    })
                } else {
                    slides.push({
                        catId: item.id,
                        id: item.id,
                        label: item.label,
                        href: item.href
                    })
                }
            })
        })
        return slides
    }, [])

    // Current State
    const activeCate = searchParams.get('category')
    const activeTab = searchParams.get('tab')

    const activeSlideIndex = useMemo(() => {
        if (!activeTab || activeTab === 'cover') return 0
        const idx = SLIDES.findIndex(s => s.id === activeTab)
        return idx === -1 ? 0 : idx
    }, [activeTab, SLIDES])

    const currentSlide = SLIDES[activeSlideIndex]
    const totalSlides = SLIDES.length

    // Scroll Detection
    const checkScroll = useCallback(() => {
        if (!mainRef.current) return
        const { scrollTop, scrollHeight, clientHeight } = mainRef.current

        // Check if content is scrollable
        const scrollable = scrollHeight > clientHeight + 10
        setHasScroll(scrollable)

        // If scrollable, check if at bottom
        if (scrollable) {
            const atBottom = scrollTop + clientHeight >= scrollHeight - 50 // 50px threshold
            setIsAtBottom(atBottom)
        } else {
            setIsAtBottom(true) // Always show if no scroll
        }
    }, [])

    useEffect(() => {
        const main = mainRef.current
        if (main) {
            main.addEventListener('scroll', checkScroll)
            // Initial check
            checkScroll()

            // Re-check when children change (e.g. page transition)
            const observer = new ResizeObserver(checkScroll)
            observer.observe(main)

            return () => {
                main.removeEventListener('scroll', checkScroll)
                observer.disconnect()
            }
        }
    }, [checkScroll, children])

    const navigateTo = useCallback((index: number) => {
        if (index < 0 || index >= totalSlides) return
        const target = SLIDES[index]
        router.push(target.href)
        // Reset scroll position on navigation
        if (mainRef.current) mainRef.current.scrollTop = 0
    }, [router, totalSlides, SLIDES])

    if (SLIDES.length === 0) return null

    return (
        <div className="h-screen w-screen overflow-hidden bg-slate-900 text-slate-900 font-sans selection:bg-blue-500 selection:text-white relative flex">

            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-[110] p-3 bg-slate-950/95 backdrop-blur-md border border-slate-800 rounded-xl text-white hover:bg-slate-900 transition-colors shadow-xl"
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Sidebar - Desktop: Always visible, Mobile: Overlay when open */}
            <AnimatePresence>
                {(isMobileMenuOpen || true) && (
                    <motion.aside
                        initial={{ x: -260 }}
                        animate={{ x: 0 }}
                        exit={{ x: -260 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={cn(
                            "w-[260px] h-full bg-slate-950/95 backdrop-blur-md border-r border-slate-800 flex flex-col z-[100] flex-shrink-0 relative shadow-2xl",
                            "lg:relative lg:translate-x-0",
                            "fixed lg:flex",
                            !isMobileMenuOpen && "hidden lg:flex"
                        )}
                    >
                        <div className="p-8 pb-8 pt-10 flex-shrink-0">
                            <Link href="/" className="block hover:opacity-80 transition-opacity">
                                <div className="bg-white p-3 rounded-xl w-full">
                                    <img src="/templates/hangseong/images/logo.png" alt="HANGSEONG" className="w-full h-auto object-contain" />
                                </div>
                            </Link>
                        </div>

                        <nav className="flex-1 overflow-y-auto px-6 py-4 space-y-8 scrollbar-hide pb-20">
                            <div>
                                <Link
                                    href="/"
                                    className={cn(
                                        "text-sm font-bold uppercase tracking-wider block transition-colors py-2",
                                        (!activeTab || activeTab === 'cover') ? "text-blue-400" : "text-slate-500 hover:text-white"
                                    )}
                                >
                                    HOME
                                </Link>
                            </div>

                            {HANGSEONG_MENU.map(brand => brand.items.map(item => (
                                <div key={item.id}>
                                    <Link
                                        href={(item.subs && item.subs.length > 0 && item.id !== 'products') ? `/templates/hangseong?category=${item.id}&tab=${item.subs[0].id}` : item.href}
                                        className={cn(
                                            "block text-xs font-black uppercase tracking-[0.2em] mb-3 hover:text-blue-400 transition-colors cursor-pointer",
                                            (activeCate === item.id || (activeTab === item.id && !activeCate)) ? "text-blue-500" : "text-slate-600"
                                        )}
                                    >
                                        {item.label}
                                    </Link>

                                    <div className="space-y-1 pl-1 border-l border-slate-800">
                                        {item.subs ? item.subs.map(sub => (
                                            <Link
                                                key={sub.id}
                                                href={`/templates/hangseong?category=${item.id}&tab=${sub.id}`}
                                                className={cn(
                                                    "block text-sm py-1.5 pl-4 border-l-2 transition-all",
                                                    activeTab === sub.id
                                                        ? "border-blue-500 text-white font-bold bg-white/5 rounded-r"
                                                        : "border-transparent text-slate-400 hover:text-white"
                                                )}
                                                scroll={false}
                                            >
                                                {sub.label}
                                            </Link>
                                        )) : null}
                                    </div>
                                </div>
                            )))}
                        </nav>

                        <div className="p-6 border-t border-slate-800 text-[10px] text-slate-600 flex-shrink-0 bg-slate-950">
                            © 2026 Hangseong Ind.<br />All rights reserved.
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-[90]"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Main Content */}
            <main
                ref={mainRef}
                className="flex-1 h-full relative bg-white dark:bg-slate-950 overflow-y-auto z-10 scroll-smooth"
            >
                <div className="absolute top-6 right-6 z-50 flex gap-3 pointer-events-auto">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur shadow-sm border border-slate-200 text-xs font-bold hover:bg-slate-900 hover:text-white transition-all">
                        <Globe className="w-3.5 h-3.5" /> EN
                    </button>
                </div>

                {children}

                {/* Navigator UI (Arrows & Progress) */}
                <AnimatePresence>
                    {isAtBottom && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="fixed bottom-0 left-[260px] right-0 z-40 p-8 flex items-end justify-between pointer-events-none bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 h-40"
                        >
                            {/* Page Info */}
                            <div className="flex flex-col gap-1 pointer-events-auto">
                                <div className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                                    {currentSlide?.label}
                                </div>
                                <div className="text-3xl font-black text-slate-900 dark:text-white leading-none">
                                    {(activeSlideIndex + 1).toString().padStart(2, '0')}
                                    <span className="text-sm text-slate-400 dark:text-slate-500 ml-1 font-medium italic">/ {totalSlides.toString().padStart(2, '0')}</span>
                                </div>
                            </div>

                            {/* Center Progress */}
                            <div className="w-1/3 h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden mb-2 hidden md:block border border-slate-200/50 dark:border-white/5">
                                <motion.div
                                    className="h-full bg-blue-600 dark:bg-blue-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((activeSlideIndex + 1) / totalSlides) * 100}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pointer-events-auto">
                                <button
                                    onClick={() => navigateTo(activeSlideIndex - 1)}
                                    disabled={activeSlideIndex === 0}
                                    className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-blue-600 hover:text-white hover:border-blue-600 disabled:opacity-0 disabled:pointer-events-none transition-all"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => navigateTo(activeSlideIndex + 1)}
                                    disabled={activeSlideIndex === totalSlides - 1}
                                    className="p-4 rounded-2xl bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.4)] border border-blue-500 text-white hover:bg-blue-700 disabled:opacity-0 disabled:pointer-events-none transition-all group"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-black uppercase tracking-widest ml-2 hidden sm:block">Next Page</span>
                                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    )
}

export default function HangseongViewerLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div className="h-screen w-screen bg-slate-900 flex items-center justify-center text-white">Loading Layout...</div>}>
            <HangseongLayoutContent>{children}</HangseongLayoutContent>
        </Suspense>
    )
}
