'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Facebook, Instagram, Youtube, ArrowRight, ChevronRight, Phone, MapPin, Mail, Sun, Moon, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { ThemeProvider } from '@/components/theme-provider'

function HSTechLayoutContent({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const searchParams = useSearchParams()

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
        setIsMenuOpen(false)
    }, [searchParams])

    const currentTheme = theme === 'system' ? resolvedTheme : theme

    const toggleTheme = () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark')
    }

    const switchLanguage = () => {
        const newPath = '/templates/hs-tech-kr' // Switch to Korean
        const query = searchParams.toString()
        const url = query ? `${newPath}?${query}` : newPath
        window.location.href = url
    }

    const activeTab = searchParams.get('tab') || 'cover'

    const MAIN_MENU = [
        { label: 'Home', href: '/templates/hs-tech?tab=cover', tab: 'cover', desc: 'Main Page' },
        { label: 'About', href: '/templates/hs-tech?tab=about', tab: 'about', desc: 'Company Overview' },
        { label: 'Business', href: '/templates/hs-tech?tab=business', tab: 'business', desc: 'Solutions' },
        { label: 'Products', href: '/templates/hs-tech?tab=products', tab: 'products', desc: 'Product Lines' },
        { label: 'Contact', href: '/templates/hs-tech?tab=contact', tab: 'contact', desc: 'Get in Touch' },
    ]

    const BRAND_MENU = [
        { label: 'VAISALA', href: '/templates/hs-tech?tab=vaisala', desc: 'Humidity, Dewpoint, CO2, Oil' },
        { label: 'SETRA', href: '/templates/hs-tech?tab=setra', desc: 'Differential & Industrial Pressure' },
        { label: 'JUMO', href: '/templates/hs-tech?tab=jumo', desc: 'Liquid Analysis & Control' },
        { label: 'KNICK', href: '/templates/hs-tech?tab=knick', desc: 'Interface & Analysis' },
    ]

    return (
        <div className="min-h-screen dark:bg-neutral-950 bg-white dark:text-slate-200 text-slate-900 font-sans selection:bg-cyan-500 selection:text-white relative transition-colors duration-300">

            {/* 1. Header (Fixed, Dark) - Z-Index 100 */}
            <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 h-20 dark:bg-neutral-950/90 bg-neutral-950/90 backdrop-blur-md border-b dark:border-white/5 border-white/5 transition-all">
                {/* Logo */}
                <Link href="/templates/hs-tech?tab=cover" className="flex items-center group shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/hstech/HS-TECH_files/logo-white.png" alt="HS TECH" width={110} className="h-auto object-contain group-hover:opacity-70 transition-opacity" />
                </Link>

                {/* Desktop Menu - centered between logo and right edge */}
                <nav className="hidden md:flex items-center gap-10">
                    {MAIN_MENU.map((item) => {
                        const isActive = activeTab === item.tab ||
                            (item.tab === 'products' && ['vaisala', 'setra', 'jumo', 'knick', 'humidity', 'dewpoint', 'co2', 'oil', 'barometer', 'weather', 'h2o2', 'cms'].includes(activeTab))
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-xs font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-cyan-400' : 'text-white/50 hover:text-white'}`}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Right spacer (balances layout) */}
                <div className="hidden md:block w-[110px]" />
            </header>

            {/* 2. Hamburger Button (Standalone Fixed) - Z-Index 200 */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="fixed top-4 right-6 md:right-12 z-[200] p-2 mt-2 hover:bg-white/10 rounded-full transition-colors group md:hidden"
                aria-label="Toggle Menu"
            >
                <div className="relative w-8 h-8">
                    <div className={cn("absolute inset-0 flex items-center justify-center transition-all duration-300", isMenuOpen ? "rotate-90 opacity-0" : "opacity-100 rotate-0")}>
                        <Menu className="w-8 h-8 dark:text-white text-neutral-900 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{ opacity: isMenuOpen ? 1 : 0, transform: isMenuOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                        <X className="w-8 h-8 dark:text-white text-neutral-900 group-hover:text-cyan-400 transition-colors" />
                    </div>
                </div>
            </button>

            {/* 3. Full Screen Overlay Menu - Z-Index 101 */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[101] bg-neutral-950 flex flex-col md:flex-row text-white"
                    >
                        {/* Left: Decorative / Info Area (Desktop Only) */}
                        <div className="hidden md:flex w-1/3 bg-neutral-900 border-r border-white/5 p-16 flex-col justify-between relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900 to-neutral-900"></div>

                            <div className="relative z-10">
                                <h3 className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4">HS TECH Corp.</h3>
                                <p className="text-4xl font-black leading-tight tracking-tight text-white">
                                    Smart Sensing<br />
                                    Solution Provider
                                </p>
                            </div>

                            <div className="relative z-10 space-y-8 text-sm text-neutral-400">
                                <div>
                                    <strong className="text-white block mb-2 font-bold uppercase tracking-wider text-xs flex items-center gap-2"><MapPin className="w-3 h-3" /> Address</strong>
                                    D-410, 670 Daewangpangyo-ro,<br />Bundang-gu, Seongnam-si, Korea
                                </div>
                                <div>
                                    <strong className="text-white block mb-2 font-bold uppercase tracking-wider text-xs flex items-center gap-2"><Phone className="w-3 h-3" /> Contact</strong>
                                    070-4346-1844
                                </div>
                                <div className="flex gap-6 pt-4 border-t border-white/10">
                                    <Facebook className="w-5 h-5 hover:text-cyan-400 cursor-pointer transition-colors" />
                                    <Instagram className="w-5 h-5 hover:text-cyan-400 cursor-pointer transition-colors" />
                                    <Youtube className="w-5 h-5 hover:text-cyan-400 cursor-pointer transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* Right: Menu Links */}
                        <div className="flex-1 p-8 md:p-24 bg-neutral-950 relative overflow-y-auto w-full">
                            <div className="max-w-5xl mx-auto h-full flex flex-col justify-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                                    {/* Column 1: Main Menu */}
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Menu</h3>
                                        <nav className="space-y-4 md:space-y-6">
                                            {MAIN_MENU.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ x: 20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                                                >
                                                    <Link
                                                        href={item.href}
                                                        className="group block"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-neutral-300 group-hover:text-white transition-colors">
                                                            {item.label}
                                                        </h2>
                                                        <p className="text-sm text-neutral-500 font-light group-hover:text-cyan-400 transition-colors pl-1">
                                                            {item.desc}
                                                        </p>
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </nav>
                                    </div>

                                    {/* Column 2: Brands */}
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Official Partners</h3>
                                        <nav className="space-y-3">
                                            {BRAND_MENU.map((brand, idx) => (
                                                <motion.div
                                                    key={brand.label}
                                                    initial={{ x: 20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.3 + (0.05 * idx), duration: 0.5 }}
                                                >
                                                    <Link
                                                        href={brand.href}
                                                        className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-neutral-800 transition-all duration-300 border border-white/5 hover:border-cyan-500/30 overflow-hidden"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <div className="flex flex-col">
                                                            <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">{brand.label}</h4>
                                                            <span className="text-[10px] text-neutral-500 group-hover:text-neutral-400 uppercase tracking-wider">{brand.desc}</span>
                                                        </div>
                                                        <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-cyan-500 transition-colors" />
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </nav>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 4. Main Content */}
            <main className="relative pt-20">
                {children}
            </main>

        </div>
    )
}

export default function HSTechViewerLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
        >
            <Suspense fallback={<div className="h-screen w-screen bg-neutral-950 flex items-center justify-center text-white">Loading Layout...</div>}>
                <HSTechLayoutContent>{children}</HSTechLayoutContent>
            </Suspense>
        </ThemeProvider>
    )
}
