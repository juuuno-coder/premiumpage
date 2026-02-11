'use client'

import React, { Suspense } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import HSTechTabs from '../components/HSTechTabs'

function ContactContent() {
    return (
        <div className="w-full pb-20">
            {/* 1. Page Title */}
            <div className="bg-white border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-3">
                        오시는 길 <span className="text-slate-300 dark:text-slate-600 font-light text-2xl">|</span> <span className="text-teal-600">CONTACT</span>
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    {/* Info Section */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                                <h2 className="text-xl font-bold text-slate-800">HS TECH 본사</h2>
                            </div>

                            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">HS TECH Co.,Ltd</h3>
                                    <p>에이치에스테크 주식회사</p>
                                </div>

                                <div className="space-y-1">
                                    <p className="font-bold text-slate-900">주소</p>
                                    <p>13493 경기도 성남시 분당구 대왕판교로 670</p>
                                    <p>판교테크노밸리 유스페이스2 B동 4층 410호</p>
                                </div>

                                <div className="space-y-1">
                                    <p><span className="font-bold text-slate-900 inline-block w-20">대표번호</span> 070-4346-1844</p>
                                    <p><span className="font-bold text-slate-900 inline-block w-20">FAX</span> 031-8016-3510</p>
                                    <p><span className="font-bold text-slate-900 inline-block w-20">E-mail</span> hs-tech@hs-tech.co.kr</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="flex-1 h-[400px] w-full bg-slate-100 border border-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.316828574169!2d127.1044453763781!3d37.40268897207863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca275e7a9c8b1%3A0xe549045b05a74df6!2z경기도 성남시 분당구 삼평동 670!5e0!3m2!1sko!2skr!4v1706970000000!5m2!1sko!2skr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ContactPage() {
    return (
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading Contact...</div>}>
            <ContactContent />
        </Suspense>
    )
}
