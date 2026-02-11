'use client'

import React from 'react'
import Image from 'next/image'

const SERVICES = [
    {
        title: "Product Customization",
        desc: "Customized products that can be used in specialized environments.",
        image: "/hstech/support_services_full.png"
    },
    {
        title: "Technical Support",
        desc: "Technical consultations for the correct operation and maintenance.",
        image: "/hstech/support_services_full.png"
    },
    {
        title: "Calibration & Repair",
        desc: "Quality management of measuring instruments with accurate standard values and repair.",
        image: "/hstech/support_services_full.png"
    },
    {
        title: "Customer Training",
        desc: "For our customers who need specialized knowledge and experience.",
        image: "/hstech/support_services_full.png"
    },
    {
        title: "Spare Parts",
        desc: "Genuine original spare parts of the products which we supply.",
        image: "/hstech/support_services_full.png"
    }
]

export default function SupportPage() {
    return (
        <div className="w-full pb-20">
            {/* 1. Page Title */}
            <div className="bg-white border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-3">
                        고객지원 <span className="text-slate-300 dark:text-slate-600 font-light text-2xl">|</span> <span className="text-teal-600">SUPPORT & SERVICES</span>
                    </h1>
                </div>
            </div>

            {/* Services Grid Section */}
            <div className="w-full px-4 md:px-8 py-10">
                <div className="max-w-[1600px] mx-auto">


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {SERVICES.map((s, idx) => (
                            <div
                                key={idx}
                                className="group bg-teal-500 rounded-lg overflow-hidden flex flex-col h-[400px] md:h-[450px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {/* Top Text Area */}
                                <div className="p-6 text-center h-[120px] flex items-center justify-center">
                                    <h3 className="text-white text-xl font-bold leading-tight group-hover:text-teal-100 transition-colors">
                                        {s.title.split(' ').map((word, i) => (
                                            <span key={i} className="block">{word}</span>
                                        ))}
                                    </h3>
                                </div>

                                {/* Bottom Image Area */}
                                <div className="flex-1 relative bg-white mx-6 mb-6 rounded-lg overflow-hidden flex items-center justify-center">
                                    <Image
                                        src={s.image}
                                        alt={s.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

