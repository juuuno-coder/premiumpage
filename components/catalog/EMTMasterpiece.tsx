'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Zap, Shield, Plus, X } from 'lucide-react'
import { ThreeBackground } from './ThreeBackground'
import { EMT_PRODUCTS, Product } from '@/lib/constants/emt-products'

/**
 * EMT Masterpiece 컴포넌트
 * 기존 jcatalog의 EMT 프로젝트를 Next.js 컴포넌트로 모듈화
 * Three.js 3D 인터랙션과 스크롤 애니메이션을 포함한 하이엔드 전자 카탈로그
 */

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
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    const displayProducts = products.length > 0 ? products : EMT_PRODUCTS

    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* 3D 배경 효과 */}
                <div className="absolute inset-0 z-0">
                    <ThreeBackground className="w-full h-full opacity-60" />
                </div>

                {/* 배경 그라디언트 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-1" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-9xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] tracking-tighter">
                            {companyName}
                        </h1>
                    </motion.div>

                    <p className="text-2xl md:text-3xl text-gray-400 font-light mb-12 tracking-widest uppercase">
                        {tagline}
                    </p>

                    {/* 핵심 가치 */}
                    <div className="flex flex-wrap justify-center gap-12 mt-16">
                        {[
                            { icon: Globe, label: 'Global Standard', labelKo: '글로벌 표준' },
                            { icon: Zap, label: 'Innovation', labelKo: '혁신 기술' },
                            { icon: Shield, label: 'Reliability', labelKo: '신뢰성' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + idx * 0.2 }}
                                className="flex flex-col items-center gap-4 group"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500 rotate-3 group-hover:rotate-0">
                                    <item.icon className="w-10 h-10 text-blue-400" />
                                </div>
                                <span className="text-xs font-black text-gray-500 tracking-[0.3em] uppercase group-hover:text-blue-400 transition-colors">
                                    {language === 'ko' ? item.labelKo : item.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 스크롤 인디케이터 */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
                >
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-50" />
                </motion.div>
            </section>

            {/* Overview & Mission Section */}
            <section className="py-40 px-4 relative overflow-hidden bg-zinc-950/50">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-blue-500 font-black tracking-widest uppercase block mb-4">About the Company</span>
                            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                                {language === 'ko'
                                    ? '전동화와 지능화를 통해\n미래를 설계합니다'
                                    : 'Reshaping the Future\nthrough Intelligence'}
                            </h2>
                            <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                                {language === 'ko'
                                    ? 'EMT는 글로벌 Tier-1 고객사들에게 스마트 센서와 액추에이터를 공급해온 기술력을 바탕으로, 고품질 신뢰성과 가격 경쟁력을 갖춘 모빌리티 솔루션을 제공합니다.'
                                    : 'Based on our technology supplying smart sensors to global Tier-1 customers, EMT provides mobility solutions with high reliability and cost competitiveness.'}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8">
                                {[
                                    { value: '100+', label: 'R&D Exp.', labelKo: '연구 경력' },
                                    { value: '30+', label: 'Global Clients', labelKo: '글로벌 고객' },
                                    { value: '50+', label: 'Patents', labelKo: '보유 특허' }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-4xl font-black text-blue-500 mb-2">{stat.value}</div>
                                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                                            {language === 'ko' ? stat.labelKo : stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 group">
                                <img
                                    src="/assets/overview_robot.jpg"
                                    alt="Overview"
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="text-xs font-black text-blue-500 uppercase tracking-widest mb-2">Our Vision 2035</div>
                                    <div className="text-3xl font-black text-white leading-tight">
                                        Global Top-Tier Partner<br />in Core Mobility Solutions
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px]" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 제품 라인업 섹션 */}
            <section className="py-40 px-4 relative">
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-zinc-950/50 to-transparent" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-6xl md:text-7xl font-black mb-8">
                            Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Lineup</span>
                        </h2>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-transparent mx-auto rounded-full mb-10" />
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
                            {language === 'ko' ? '정밀 제어 기술의 정점, EMT의 혁신적인 제품군을 소개합니다.' : 'Explore our innovative products, the pinnacle of precision control technology.'}
                        </p>
                    </motion.div>

                    {/* 제품 탭 */}
                    <div className="flex flex-wrap justify-center gap-4 mb-20">
                        {['sensors', 'actuators', 'controllers'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-10 py-4 rounded-2xl font-black text-sm tracking-widest transition-all duration-500 border ${activeTab === tab
                                    ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] scale-105'
                                    : 'bg-zinc-900/50 border-white/5 text-zinc-500 hover:text-zinc-300 hover:border-white/10'
                                    }`}
                            >
                                {tab.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* 제품 그리드 */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayProducts
                            .filter(p => p.category === activeTab)
                            .map((product, idx) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -10 }}
                                    onClick={() => setSelectedProduct(product)}
                                    className="group bg-zinc-900/30 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-500 cursor-pointer relative"
                                >
                                    <div className="aspect-square bg-white/5 rounded-3xl mb-8 flex items-center justify-center p-8 group-hover:bg-blue-500/10 transition-colors duration-500">
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="max-w-full max-h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/18181b/ffffff?text=' + product.name
                                            }}
                                        />
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="text-xl font-black mb-3 group-hover:text-blue-400 transition-colors">
                                            {language === 'ko' && product.nameKo ? product.nameKo : product.name}
                                        </h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                                            {language === 'ko' && product.descriptionKo ? product.descriptionKo : product.description}
                                        </p>

                                        <div className="flex items-center text-xs font-black text-blue-500 tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-all font-sans">
                                            View Details <Plus className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Solutions & Industry Section */}
            <section className="py-40 px-4 relative overflow-hidden bg-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <span className="text-blue-500 font-extrabold tracking-[0.4em] uppercase block mb-4 text-xs">Innovation Fields</span>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Solutions & <span className="text-zinc-600">Industry</span></h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
                            {language === 'ko' ? '초정밀 제어 기술이 적용되는 미래 산업 분야를 소개합니다.' : 'Introducing future industrial fields where precision control technology is applied.'}
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-4">
                            {[
                                {
                                    id: 'agv',
                                    title: 'AGV / AMR Navigation',
                                    titleKo: 'AGV / AMR 자율 주행',
                                    desc: 'AI-based SLAM and path planning for efficient logistics robots.',
                                    descKo: 'AI 기반 SLAM 기술과 경로 최적화 알고리즘을 통한 고효율 물류 로봇 제어 솔루션입니다.',
                                    image: '/assets/agv.jpg'
                                },
                                {
                                    id: 'ai',
                                    title: 'Physical AI',
                                    titleKo: '피지컬 AI 시스템',
                                    desc: 'Integrating AI with physical hardware for autonomous perception and action.',
                                    descKo: '물리 기기에 AI 알고리즘을 통합하여 실시간 환경 인지 및 자율 판단을 실현합니다.',
                                    image: '/assets/physical_ai.png'
                                },
                                {
                                    id: 'mobility',
                                    title: 'Personal Mobility',
                                    titleKo: '퍼스널 모빌리티',
                                    desc: 'Advanced control for future e-mobility and assistive technology.',
                                    descKo: '마이크로 모빌리티와 보조 기술을 위한 지능형 모터 및 전력 제어 기술입니다.',
                                    image: '/assets/industry-05.png'
                                }
                            ].map((sol, i) => (
                                <motion.div
                                    key={sol.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    onMouseEnter={() => setActiveTab(sol.id)}
                                    className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${activeTab === sol.id
                                        ? 'bg-blue-600 border-blue-500 shadow-[0_20px_40px_rgba(37,99,235,0.2)]'
                                        : 'bg-zinc-900 border-white/5 hover:border-white/20'}`}
                                >
                                    <h3 className={`text-2xl font-black mb-2 ${activeTab === sol.id ? 'text-white' : 'text-zinc-300'}`}>
                                        {language === 'ko' ? sol.titleKo : sol.title}
                                    </h3>
                                    <p className={`text-sm ${activeTab === sol.id ? 'text-blue-100' : 'text-zinc-500'}`}>
                                        {language === 'ko' ? sol.descKo : sol.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 group">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeTab}
                                    src={activeTab === 'agv' ? '/assets/agv.jpg' : activeTab === 'ai' ? '/assets/physical_ai.png' : '/assets/industry-05.png'}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobility Diagram Section */}
            <section className="py-60 px-4 relative overflow-hidden bg-zinc-950">
                <div className="max-w-7xl mx-auto text-center mb-24 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black mb-8">Mobility <span className="text-blue-500">Integration</span></h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        {language === 'ko' ? 'EMT의 핵심 부품들이 차량의 어느 위치에서 주행 성능과 안전을 책임지는지 확인하세요.' : 'See where EMT\'s core components are located in the vehicle to ensure performance and safety.'}
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Central Diagram Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative z-0"
                    >
                        <img src="/assets/car_diagram.png" alt="Car Diagram" className="w-full h-auto opacity-40 filter drop-shadow-[0_0_50px_rgba(59,130,246,0.2)]" />
                    </motion.div>

                    {/* Diagram Points */}
                    <div className="absolute inset-0">
                        {[
                            { id: 'p1', x: '15%', y: '25%', label: 'PTC Heater', labelKo: 'PTC 히터', side: 'left' },
                            { id: 'p2', x: '25%', y: '70%', label: 'Resolver Sensor', labelKo: '레졸버 센서', side: 'left' },
                            { id: 'p3', x: '75%', y: '30%', label: 'Hidden Door Handle', labelKo: '히든 도어 핸들', side: 'right' },
                            { id: 'p4', x: '80%', y: '65%', label: 'CU / TCU Module', labelKo: '제어 모듈', side: 'right' }
                        ].map((point, i) => (
                            <motion.div
                                key={point.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.2 }}
                                className={`absolute flex items-center gap-4 group ${point.side === 'right' ? 'flex-row-reverse' : ''}`}
                                style={{ left: point.x, top: point.y }}
                            >
                                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] relative">
                                    <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
                                </div>
                                <div className={`px-5 py-3 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-white/10 group-hover:border-blue-500/50 transition-all ${point.side === 'right' ? 'translate-x-4' : '-translate-x-4'}`}>
                                    <span className="text-sm font-black text-white whitespace-nowrap">
                                        {language === 'ko' ? point.labelKo : point.label}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sustainability & ESG Section */}
            <section className="py-40 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <span className="text-green-500 font-extrabold tracking-[0.4em] uppercase block mb-4 text-xs">For Sustainable Future</span>
                        <h2 className="text-5xl md:text-6xl font-black mb-8">ESG <span className="text-zinc-600">Management</span></h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
                            {language === 'ko' ? '투명한 경영과 친환경 기술로 다음 세대를 위한 지속 가능한 가치를 창출합니다.' : 'Creating sustainable value for the next generation through transparent management and eco-friendly technology.'}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Environmental',
                                titleKo: '환경 경영',
                                color: 'text-green-400',
                                bg: 'bg-green-500/5',
                                img: '/assets/esg-01.png',
                                items: language === 'ko' ? ['저전력 하드웨어', '경량화 설계', '유해물질 절감'] : ['Low-power hardware', 'Lightweight design', 'Hazardous reduction']
                            },
                            {
                                title: 'Social',
                                titleKo: '사회적 책임',
                                color: 'text-blue-400',
                                bg: 'bg-blue-500/5',
                                img: '/assets/esg-02.png',
                                items: language === 'ko' ? ['임직원 복지 증진', '다양성 및 포용성', '지역사회 기여'] : ['Employee welfare', 'Diversity & Inclusion', 'Community contribution']
                            },
                            {
                                title: 'Governance',
                                titleKo: '지배 구조',
                                color: 'text-purple-400',
                                bg: 'bg-purple-500/5',
                                img: '/assets/esg-03.png',
                                items: language === 'ko' ? ['이사회의 독립성', '투명한 윤리 경영', '주주 권익 보호'] : ['Board independence', 'Ethical management', 'Shareholder rights']
                            }
                        ].map((esg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`rounded-[3rem] overflow-hidden border border-white/5 ${esg.bg} p-10 hover:border-white/20 transition-all duration-500`}
                            >
                                <div className="aspect-video rounded-3xl overflow-hidden mb-10">
                                    <img src={esg.img} alt={esg.title} className="w-full h-full object-cover mix-blend-overlay opacity-60" />
                                </div>
                                <h3 className={`text-3xl font-black mb-8 ${esg.color}`}>
                                    {language === 'ko' ? esg.titleKo : esg.title}
                                </h3>
                                <ul className="space-y-4">
                                    {esg.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-400 font-medium tracking-tight">
                                            <div className={`w-1.5 h-1.5 rounded-full ${esg.color.replace('text', 'bg')}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-40 px-4 relative bg-zinc-950/30">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <span className="text-blue-500 font-extrabold tracking-[0.4em] uppercase block mb-4 text-xs">Global Collaboration</span>
                        <h2 className="text-5xl md:text-6xl font-black mb-8">Our <span className="text-zinc-500">Trust</span> Partners</h2>
                        <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
                            {language === 'ko' ? '세계 유수의 기업들과 함께 미래 모빌리티의 가치를 만들어갑니다.' : 'Creating the value of future mobility together with world-leading companies.'}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20].map((num) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (num % 5) * 0.05 }}
                                className="aspect-[3/2] bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center justify-center p-8 grayscale hover:grayscale-0 hover:bg-white/5 transition-all duration-500 group"
                            >
                                <img
                                    src={`/assets/logo_${num.toString().padStart(2, '0')}.svg`}
                                    alt={`Partner ${num}`}
                                    className="max-w-full max-h-full object-contain opacity-30 group-hover:opacity-100 transition-opacity"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA 섹션 */}
            <section className="py-48 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center relative z-10"
                >
                    <h2 className="text-6xl md:text-8xl font-black mb-12 leading-none tracking-tighter">
                        {language === 'ko' ? '지속 가능한 성장을\n위한 선택' : 'Choice for\nSustainable Growth'}
                    </h2>
                    <p className="text-2xl text-zinc-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        {language === 'ko'
                            ? '귀사의 시스템에 가장 완벽한 스마트 솔루션을 더하세요.'
                            : 'Add the most perfect smart solutions to your systems.'}
                    </p>
                    <button className="px-16 py-6 bg-blue-600 text-white rounded-full font-black text-xl hover:bg-blue-700 transition-all duration-300 shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:shadow-blue-600/50 hover:scale-105 active:scale-95">
                        {language === 'ko' ? '지금 문의하기' : 'Connect Now'}
                    </button>
                </motion.div>
            </section>

            {/* Product Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="fixed inset-0 bg-black/95 backdrop-blur-2xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-6xl bg-zinc-900/50 border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-y-auto max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-10 right-10 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="grid lg:grid-cols-2 h-full min-h-[600px]">
                                <div className="p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                                    <div className="aspect-square bg-white/5 rounded-[2rem] p-12 flex items-center justify-center">
                                        <img
                                            src={selectedProduct.imageUrl}
                                            alt={selectedProduct.name}
                                            className="max-w-full max-h-full object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                                        />
                                    </div>
                                </div>

                                <div className="p-12 lg:p-20 flex flex-col justify-center">
                                    <span className="text-blue-500 font-extrabold tracking-widest uppercase mb-4 block text-sm">Product Detail</span>
                                    <h2 className="text-5xl font-black mb-8 leading-tight">
                                        {language === 'ko' && selectedProduct.nameKo ? selectedProduct.nameKo : selectedProduct.name}
                                    </h2>
                                    <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                                        {language === 'ko' && selectedProduct.descriptionKo ? selectedProduct.descriptionKo : selectedProduct.description}
                                    </p>

                                    <div className="space-y-4 font-sans">
                                        {selectedProduct.specs.map((spec, i) => (
                                            <div key={i} className="flex justify-between items-center py-5 border-b border-white/5 group hover:border-blue-500/50 transition-colors">
                                                <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">{spec.label}</span>
                                                <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="mt-16 w-full py-6 bg-white text-black rounded-2xl font-black text-lg hover:bg-blue-500 hover:text-white transition-all duration-500">
                                        Request Quote
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}
