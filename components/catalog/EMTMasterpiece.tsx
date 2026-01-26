'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, Zap, Shield } from 'lucide-react'

/**
 * EMT Masterpiece 컴포넌트
 * 기존 jcatalog의 EMT 프로젝트를 Next.js 컴포넌트로 모듈화
 * Three.js 3D 인터랙션과 스크롤 애니메이션을 포함한 하이엔드 전자 카탈로그
 */

interface Product {
    id: string
    name: string
    category: string
    description: string
    specs: {
        label: string
        value: string
    }[]
    imageUrl: string
}

interface EMTMasterpieceProps {
    companyName?: string
    tagline?: string
    products?: Product[]
    language?: 'ko' | 'en'
}

export function EMTMasterpiece({
    companyName = 'EMT Global Tech',
    tagline = 'Leading the Future Mobility Industry',
    products = [],
    language = 'en'
}: EMTMasterpieceProps) {
    const [activeTab, setActiveTab] = useState('sensors')

    // 기본 제품 데이터 (실제로는 props나 API에서 가져옴)
    const defaultProducts: Product[] = [
        {
            id: 'sensor-01',
            name: 'Smart Pressure Sensor',
            category: 'sensors',
            description: 'High-precision pressure sensing for automotive applications',
            specs: [
                { label: 'Range', value: '0-1000 PSI' },
                { label: 'Accuracy', value: '±0.5%' },
                { label: 'Temperature', value: '-40°C to 125°C' }
            ],
            imageUrl: '/products/sensor-01.jpg'
        },
        {
            id: 'sensor-02',
            name: 'Temperature Sensor Module',
            category: 'sensors',
            description: 'Advanced temperature monitoring for EV battery systems',
            specs: [
                { label: 'Range', value: '-40°C to 150°C' },
                { label: 'Response Time', value: '< 1s' },
                { label: 'Interface', value: 'CAN/LIN' }
            ],
            imageUrl: '/products/sensor-02.jpg'
        }
    ]

    const displayProducts = products.length > 0 ? products : defaultProducts

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* 배경 그라디언트 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />

                {/* 3D 배경 효과 (추후 Three.js로 교체 예정) */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center px-4"
                >
                    <h1 className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        {companyName}
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-300 font-light mb-12">
                        {tagline}
                    </p>

                    {/* 핵심 가치 */}
                    <div className="flex flex-wrap justify-center gap-8 mt-16">
                        {[
                            { icon: Globe, label: 'Global Standard' },
                            { icon: Zap, label: 'Innovation' },
                            { icon: Shield, label: 'Reliability' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + idx * 0.2 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <item.icon className="w-12 h-12 text-blue-400" />
                                <span className="text-sm text-gray-400">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 스크롤 인디케이터 */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
                    </div>
                </motion.div>
            </section>

            {/* 제품 라인업 섹션 */}
            <section className="py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-black mb-4">Product Lineup</h2>
                        <p className="text-xl text-gray-400">
                            {language === 'ko' ? '혁신적인 센서 솔루션' : 'Innovative Sensor Solutions'}
                        </p>
                    </motion.div>

                    {/* 제품 탭 */}
                    <div className="flex justify-center gap-4 mb-12">
                        {['sensors', 'modules', 'systems'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === tab
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* 제품 그리드 */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayProducts
                            .filter(p => p.category === activeTab)
                            .map((product, idx) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all cursor-pointer"
                                >
                                    {/* 제품 이미지 플레이스홀더 */}
                                    <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl mb-4 flex items-center justify-center">
                                        <span className="text-6xl font-black text-gray-700">
                                            {product.name[0]}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                                    <p className="text-gray-400 mb-4">{product.description}</p>

                                    {/* 스펙 */}
                                    <div className="space-y-2">
                                        {product.specs.map((spec, i) => (
                                            <div key={i} className="flex justify-between text-sm">
                                                <span className="text-gray-500">{spec.label}</span>
                                                <span className="text-blue-400 font-semibold">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA 섹션 */}
            <section className="py-32 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-5xl font-black mb-6">
                        {language === 'ko' ? '지금 바로 문의하세요' : 'Contact Us Today'}
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        {language === 'ko'
                            ? '귀사의 비즈니스를 위한 맞춤형 솔루션을 제공합니다'
                            : 'We provide customized solutions for your business'}
                    </p>
                    <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
                        {language === 'ko' ? '견적 문의' : 'Request Quote'}
                    </button>
                </motion.div>
            </section>
        </div>
    )
}
