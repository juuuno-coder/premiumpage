'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Sparkles } from 'lucide-react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const portfolioItems = [
    {
        id: 1,
        title: 'EMT Global Masterpiece',
        category: 'Masterpiece 3D',
        description: '산업용 제품군을 위한 압도적 비주얼의 3D 인터랙티브 전자 카탈로그 (Flagship Piece)',
        image: '/portfolio/emt-masterpiece.jpg',
        tags: ['Three.js', 'High-end', 'Multilingual'],
        link: '/portfolio/emt-global'
    },
    {
        id: 2,
        title: 'Z-Tech Solutions Leaflet',
        category: 'Basic Viewer',
        description: '기존 종이 리플렛 PDF를 디지털 웹뷰어로 즉시 변환하여 배포한 사례',
        image: '/portfolio/viewer-case.jpg',
        tags: ['PDF to Web', 'Quick Setup', 'QR Distribution'],
        link: '#'
    },
    {
        id: 3,
        title: 'Nexus Industrial Catalog',
        category: 'Standard Interactive',
        description: '글로벌 제조사를 위한 반응형 다국어 제품 카탈로그 제작',
        image: '/portfolio/standard-case.jpg',
        tags: ['Interactive UI', 'Global Export', 'Product Search'],
        link: '/portfolio/nexus-industrial'
    },
    {
        id: 4,
        title: 'Prime Medical Equipment',
        category: 'Standard Interactive',
        description: '의료 기기 상세 설명과 영상을 결합한 전문 전자 카탈로그',
        image: '/portfolio/medical-catalog.jpg',
        tags: ['Video Integration', 'Detail View', 'Security'],
        link: '#'
    },
    {
        id: 5,
        title: 'Aura Luxury Brochure',
        category: 'Masterpiece 3D',
        description: '럭셔리 브랜드의 제품 가치를 높여주는 고품격 3D 브로슈어',
        image: '/portfolio/luxury-3d.jpg',
        tags: ['3D Visualization', 'Luxury UX', 'Animation'],
        link: '#'
    }
]

const categories = ['All', 'Basic Viewer', 'Standard Interactive', 'Masterpiece 3D']

export function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

    const filteredItems = selectedCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === selectedCategory)

    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-4">
                {/* 헤더 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Sparkles className="w-12 h-12 text-purple-400" />
                        <h2 className="text-6xl md:text-8xl font-black gradient-text">포트폴리오</h2>
                    </div>
                    <p className="text-2xl text-gray-400 font-light max-w-3xl mx-auto">
                        우리가 만든 성공적인 프로젝트들을 확인해보세요
                    </p>
                </motion.div>

                {/* 카테고리 필터 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-bold transition-all ${selectedCategory === category
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* 포트폴리오 그리드 */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <Card
                                    className="group bg-card/30 backdrop-blur-xl border-2 border-white/10 hover:border-purple-500/50 transition-all overflow-hidden cursor-pointer h-full"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    {/* 이미지 */}
                                    <div className="aspect-video relative overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* 호버 오버레이 */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border-2 border-white/40">
                                                <ExternalLink className="w-8 h-8 text-white" />
                                            </div>
                                        </div>

                                        {/* 카테고리 배지 */}
                                        <div className="absolute top-4 right-4">
                                            <Badge className="bg-purple-500/80 text-white border-0 font-bold backdrop-blur-sm">
                                                {item.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* 콘텐츠 */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 mb-4 line-clamp-2">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag, i) => (
                                                <Badge
                                                    key={i}
                                                    variant="secondary"
                                                    className="bg-gray-800 text-gray-300 text-xs"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* 라이트박스 모달 */}
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/30 rounded-2xl overflow-hidden"
                            >
                                {/* 헤더 */}
                                <div className="flex items-center justify-between p-6 border-b border-white/10">
                                    <div>
                                        <h3 className="text-3xl font-black gradient-text">{selectedItem.title}</h3>
                                        <Badge className="mt-2 bg-purple-500/20 text-purple-300 border-purple-500/30">
                                            {selectedItem.category}
                                        </Badge>
                                    </div>
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="p-2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* 이미지 */}
                                <div className="aspect-video relative">
                                    <Image
                                        src={selectedItem.image}
                                        alt={selectedItem.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* 콘텐츠 */}
                                <div className="p-6">
                                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                        {selectedItem.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedItem.tags.map((tag, i) => (
                                            <Badge
                                                key={i}
                                                className="bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
                                    >
                                        <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-5 h-5 mr-2" />
                                            프로젝트 보기
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
