'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { label: '템플릿', href: '#templates' },
        { label: '요금제', href: '#pricing' },
        { label: '기능', href: '#features' },
        { label: '로그인', href: '/login' }
    ]

    return (
        <div className="md:hidden">
            {/* 햄버거 버튼 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-300 hover:text-white transition-colors"
                aria-label="메뉴 열기"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* 모바일 메뉴 */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* 오버레이 */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                        />

                        {/* 메뉴 패널 */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-br from-gray-900 via-black to-gray-900 border-l border-white/10 z-50 overflow-y-auto"
                        >
                            {/* 헤더 */}
                            <div className="flex items-center justify-between p-6 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                                        PP
                                    </div>
                                    <span className="font-bold text-xl gradient-text">Premium Page</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-gray-400 hover:text-white transition-colors"
                                    aria-label="메뉴 닫기"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* 메뉴 아이템 */}
                            <nav className="p-6 space-y-2">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-between p-4 rounded-xl text-gray-300 hover:text-white hover:bg-purple-500/10 transition-all group"
                                        >
                                            <span className="text-lg font-semibold">{item.label}</span>
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* CTA 버튼 */}
                            <div className="p-6 border-t border-white/10">
                                <Button
                                    asChild
                                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:opacity-90 text-lg py-6 font-bold"
                                >
                                    <Link href="/quote" onClick={() => setIsOpen(false)}>
                                        시작하기
                                        <ChevronRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                            </div>

                            {/* 장식 요소 */}
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
