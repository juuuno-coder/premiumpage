'use client'
import React, { useEffect, useState } from 'react'

export default function ProductSpecs({ product }: { product: any }) {
    const [specHtml, setSpecHtml] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (product?.image) {
            setLoading(true)
            try {
                const parts = product.image.split('/hstech/')
                if (parts.length > 1) {
                    const folder = parts[1].split('/')[0]
                    const fname = folder.replace('_files', '') + '.html'

                    fetch(`/hstech/specs/${fname}`)
                        .then(res => res.ok ? res.text() : '')
                        .then(html => {
                            setSpecHtml(html)
                            setLoading(false)
                        })
                        .catch(() => setLoading(false))
                } else {
                    setLoading(false)
                }
            } catch (e) {
                setLoading(false)
            }
        }
    }, [product])

    if (loading) return <div className="animate-pulse flex space-y-4 flex-col">
        <div className="h-4 bg-white/5 rounded w-3/4"></div>
        <div className="h-4 bg-white/5 rounded"></div>
        <div className="h-4 bg-white/5 rounded w-5/6"></div>
    </div>

    if (!specHtml) return null

    return (
        <div className="prose prose-invert max-w-none 
                        prose-p:text-neutral-300 prose-p:leading-relaxed
                        prose-headings:text-white prose-headings:font-bold
                        prose-strong:text-cyan-400
                        prose-ul:text-neutral-300 prose-li:marker:text-cyan-500
                        
                        /* Table Styles for Dark Mode */
                        [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:text-sm md:[&_table]:text-base
                        [&_th]:bg-neutral-800 [&_th]:text-white [&_th]:font-semibold [&_th]:p-4 [&_th]:text-left [&_th]:border-b [&_th]:border-cyan-500/30
                        [&_td]:p-4 [&_td]:border-b [&_td]:border-neutral-800 [&_td]:text-neutral-300
                        [&_tr:hover_td]:bg-white/5 [&_tr:hover_td]:text-white transition-colors
                        
                        /* Image handling */
                        [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:bg-white/5 [&_img]:p-2
                        
                        /* Clean up layout */
                        [&_div]:bg-transparent
                        "
            dangerouslySetInnerHTML={{ __html: specHtml }}
        />
    )
}
