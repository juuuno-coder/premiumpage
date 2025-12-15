'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useBuilderStore } from '@/lib/builder-store'
import { Save, FolderOpen, Trash2, Eye, Download, Home } from 'lucide-react'

export function Toolbar() {
    const { components, clearAll, loadComponents } = useBuilderStore()
    const [showSaveDialog, setShowSaveDialog] = useState(false)
    const [showLoadDialog, setShowLoadDialog] = useState(false)

    const handleSave = () => {
        const data = JSON.stringify(components, null, 2)
        localStorage.setItem('builder-components', data)

        // 다운로드
        const blob = new Blob([data], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `website-${Date.now()}.json`
        a.click()
        URL.revokeObjectURL(url)

        setShowSaveDialog(true)
        setTimeout(() => setShowSaveDialog(false), 2000)
    }

    const handleLoad = () => {
        const data = localStorage.getItem('builder-components')
        if (data) {
            const parsed = JSON.parse(data)
            loadComponents(parsed)
            setShowLoadDialog(true)
            setTimeout(() => setShowLoadDialog(false), 2000)
        }
    }

    const handleLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target?.result as string)
                    loadComponents(data)
                    setShowLoadDialog(true)
                    setTimeout(() => setShowLoadDialog(false), 2000)
                } catch (error) {
                    alert('파일을 불러올 수 없습니다')
                }
            }
            reader.readAsText(file)
        }
    }

    const handlePreview = () => {
        const data = JSON.stringify(components)
        localStorage.setItem('builder-preview', data)
        window.open('/builder/preview', '_blank')
    }

    const handleClear = () => {
        if (confirm('모든 컴포넌트를 삭제하시겠습니까?')) {
            clearAll()
        }
    }

    return (
        <header className="bg-white border-b px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <Home className="w-5 h-5" />
                        <span className="font-bold">Premium Page</span>
                    </Link>
                    <span className="text-gray-300">|</span>
                    <h1 className="imweb-heading-4">웹사이트 빌더</h1>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleSave}
                        className="imweb-btn imweb-btn-secondary flex items-center gap-2"
                    >
                        <Save className="w-4 h-4" />
                        저장
                    </button>

                    <button
                        onClick={handleLoad}
                        className="imweb-btn imweb-btn-secondary flex items-center gap-2"
                    >
                        <FolderOpen className="w-4 h-4" />
                        불러오기
                    </button>

                    <label className="imweb-btn imweb-btn-secondary flex items-center gap-2 cursor-pointer">
                        <Download className="w-4 h-4" />
                        파일 열기
                        <input
                            type="file"
                            accept=".json"
                            onChange={handleLoadFile}
                            className="hidden"
                        />
                    </label>

                    <button
                        onClick={handlePreview}
                        className="imweb-btn imweb-btn-primary flex items-center gap-2"
                    >
                        <Eye className="w-4 h-4" />
                        미리보기
                    </button>

                    <button
                        onClick={handleClear}
                        className="imweb-btn imweb-btn-ghost flex items-center gap-2 text-red-600"
                    >
                        <Trash2 className="w-4 h-4" />
                        전체 삭제
                    </button>
                </div>
            </div>

            {/* 저장 알림 */}
            {showSaveDialog && (
                <div className="fixed top-20 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                    ✓ 저장되었습니다!
                </div>
            )}

            {/* 불러오기 알림 */}
            {showLoadDialog && (
                <div className="fixed top-20 right-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg">
                    ✓ 불러왔습니다!
                </div>
            )}
        </header>
    )
}
