'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { templates, developmentPlans, maintenancePlans } from '@/lib/data'
import { formatPrice } from '@/lib/data-utils'
import { ArrowLeft, ArrowRight, Check, Sparkles, Rocket, Mail, Phone, Building2, FileText, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { FileUpload } from '@/components/FileUpload'

interface FormData {
    templateId: string
    developmentPlanId: string
    maintenancePlanId: string
    companyName: string
    contactName: string
    contactEmail: string
    contactPhone: string
    projectDetails: string
    files: File[]
}

export default function QuotePageEnhanced() {
    const [step, setStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        templateId: '',
        developmentPlanId: '',
        maintenancePlanId: '',
        companyName: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        projectDetails: '',
        files: []
    })

    // 자동 저장 (로컬 스토리지)
    useEffect(() => {
        const savedData = localStorage.getItem('quoteFormData')
        if (savedData) {
            const parsed = JSON.parse(savedData)
            setFormData({ ...parsed, files: [] }) // 파일은 제외
            setStep(parseInt(localStorage.getItem('quoteFormStep') || '1'))
        }
    }, [])

    useEffect(() => {
        const { files, ...dataToSave } = formData
        localStorage.setItem('quoteFormData', JSON.stringify(dataToSave))
        localStorage.setItem('quoteFormStep', step.toString())
    }, [formData, step])

    const selectedTemplate = templates.find(t => t.id === formData.templateId)
    const selectedDevPlan = developmentPlans.find(p => p.id === formData.developmentPlanId)
    const selectedMaintPlan = maintenancePlans.find(p => p.id === formData.maintenancePlanId)

    const progress = (step / 4) * 100

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // FormData 생성 (파일 포함)
            const submitData = new FormData()
            submitData.append('templateId', formData.templateId)
            submitData.append('developmentPlanId', formData.developmentPlanId)
            submitData.append('maintenancePlanId', formData.maintenancePlanId)
            submitData.append('companyName', formData.companyName)
            submitData.append('contactName', formData.contactName)
            submitData.append('contactEmail', formData.contactEmail)
            submitData.append('contactPhone', formData.contactPhone)
            submitData.append('projectDetails', formData.projectDetails)

            formData.files.forEach((file, index) => {
                submitData.append(`file${index}`, file)
            })

            const response = await fetch('/api/quotes', {
                method: 'POST',
                body: submitData
            })

            const data = await response.json()

            if (response.ok) {
                // 로컬 스토리지 클리어
                localStorage.removeItem('quoteFormData')
                localStorage.removeItem('quoteFormStep')

                // 성공 페이지로 리다이렉트
                window.location.href = `/quote/success?id=${data.quoteId}`
            } else {
                alert(`❌ ${data.error}`)
            }
        } catch (error) {
            console.error('Submit error:', error)
            alert('❌ 견적 요청 제출 중 오류가 발생했습니다. 다시 시도해주세요.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const validateStep = (currentStep: number): boolean => {
        switch (currentStep) {
            case 1:
                return !!formData.templateId
            case 2:
                return !!formData.developmentPlanId && !!formData.maintenancePlanId
            case 3:
                return !!(
                    formData.contactName &&
                    formData.contactEmail &&
                    formData.contactPhone &&
                    formData.projectDetails
                )
            default:
                return true
        }
    }

    const nextStep = () => {
        if (validateStep(step)) {
            setStep(step + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const prevStep = () => {
        setStep(step - 1)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* 배경 효과 */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
            </div>

            {/* 헤더 */}
            <header className="glass-dark border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/" className="flex items-center gap-3 w-fit hover:opacity-80 transition">
                        <ArrowLeft className="w-5 h-5 text-gray-400" />
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                                PP
                            </div>
                            <span className="font-bold text-xl gradient-text">Premium Page</span>
                        </div>
                    </Link>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12 max-w-5xl relative z-10">
                {/* 진행률 표시 */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-2xl font-bold text-white">견적 요청</h2>
                            <span className="text-sm text-gray-400">단계 {step}/4</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                    </div>

                    {/* 단계 표시 */}
                    <div className="flex items-center justify-between">
                        {[
                            { num: 1, label: '템플릿', icon: Sparkles },
                            { num: 2, label: '요금제', icon: Check },
                            { num: 3, label: '정보 입력', icon: FileText },
                            { num: 4, label: '확인', icon: Rocket }
                        ].map((s, idx) => (
                            <div key={s.num} className="flex items-center flex-1">
                                <div className="flex flex-col items-center gap-2">
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            scale: step >= s.num ? 1 : 0.9,
                                            backgroundColor: step >= s.num ? 'rgb(168, 85, 247)' : 'rgb(31, 41, 55)'
                                        }}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${step >= s.num
                                                ? 'text-white shadow-lg shadow-purple-500/50'
                                                : 'text-gray-500 border-2 border-gray-700'
                                            }`}
                                    >
                                        <s.icon className="w-6 h-6" />
                                    </motion.div>
                                    <span className={`text-xs font-medium ${step >= s.num ? 'text-purple-400' : 'text-gray-500'}`}>
                                        {s.label}
                                    </span>
                                </div>
                                {idx < 3 && (
                                    <div className={`flex-1 h-1 mx-2 transition-all ${step > s.num ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-800'}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                        {/* 1단계: 템플릿 선택 */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="bg-card/50 backdrop-blur border-white/10">
                                    <CardHeader>
                                        <CardTitle className="text-4xl font-black gradient-text">템플릿을 선택하세요</CardTitle>
                                        <CardDescription className="text-lg">23개의 전문 템플릿 중 업종에 맞는 디자인을 선택하세요</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                            {templates.map((template) => (
                                                <motion.button
                                                    key={template.id}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, templateId: template.id })}
                                                    whileHover={{ scale: 1.02, y: -5 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`text-left p-4 rounded-xl border-2 transition-all ${formData.templateId === template.id
                                                            ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/30'
                                                            : 'border-gray-700 hover:border-purple-500/50 bg-gray-900/50'
                                                        }`}
                                                >
                                                    <div className="flex items-start justify-between mb-2">
                                                        <h3 className="font-bold text-white text-lg">{template.name}</h3>
                                                        {formData.templateId === template.id && (
                                                            <Check className="w-5 h-5 text-purple-400" />
                                                        )}
                                                    </div>
                                                    <Badge variant="secondary" className="mb-2 bg-gray-800 text-gray-300">
                                                        {template.category}
                                                    </Badge>
                                                    <p className="text-sm text-gray-400 line-clamp-2">{template.description}</p>
                                                </motion.button>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            type="button"
                                            onClick={nextStep}
                                            disabled={!formData.templateId}
                                            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 text-lg py-6 font-bold"
                                        >
                                            다음 단계
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        )}

                        {/* 2단계: 요금제 선택 */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="bg-card/50 backdrop-blur border-white/10">
                                    <CardHeader>
                                        <CardTitle className="text-4xl font-black gradient-text">요금제를 선택하세요</CardTitle>
                                        <CardDescription className="text-lg">개발비와 유지보수 요금제를 선택하세요</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-8">
                                        {/* 개발 요금제 */}
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                                                <Sparkles className="w-6 h-6 text-purple-400" />
                                                개발 요금제
                                            </h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                {developmentPlans.map((plan) => (
                                                    <motion.button
                                                        key={plan.id}
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, developmentPlanId: plan.id })}
                                                        whileHover={{ scale: 1.05, y: -5 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className={`text-left p-6 rounded-xl border-2 transition-all ${formData.developmentPlanId === plan.id
                                                                ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/30'
                                                                : 'border-gray-700 hover:border-purple-500/50 bg-gray-900/50'
                                                            }`}
                                                    >
                                                        <div className="flex items-start justify-between mb-3">
                                                            <h4 className="font-bold text-white text-xl">{plan.name}</h4>
                                                            {formData.developmentPlanId === plan.id && (
                                                                <Check className="w-5 h-5 text-purple-400" />
                                                            )}
                                                        </div>
                                                        <p className="text-3xl font-black mb-4 gradient-text">{formatPrice(plan.price)}</p>
                                                        <ul className="space-y-2">
                                                            {plan.features.slice(0, 4).map((feature, i) => (
                                                                <li key={i} className="text-sm flex items-start gap-2 text-gray-400">
                                                                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                                    <span>{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* 유지보수 요금제 */}
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                                                <Rocket className="w-6 h-6 text-pink-400" />
                                                유지보수 요금제
                                            </h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                {maintenancePlans.map((plan) => (
                                                    <motion.button
                                                        key={plan.id}
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, maintenancePlanId: plan.id })}
                                                        whileHover={{ scale: 1.05, y: -5 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className={`text-left p-6 rounded-xl border-2 transition-all ${formData.maintenancePlanId === plan.id
                                                                ? 'border-pink-500 bg-pink-500/20 shadow-lg shadow-pink-500/30'
                                                                : 'border-gray-700 hover:border-pink-500/50 bg-gray-900/50'
                                                            }`}
                                                    >
                                                        <div className="flex items-start justify-between mb-3">
                                                            <h4 className="font-bold text-white text-xl">{plan.name}</h4>
                                                            {formData.maintenancePlanId === plan.id && (
                                                                <Check className="w-5 h-5 text-pink-400" />
                                                            )}
                                                        </div>
                                                        <div className="mb-4">
                                                            <p className="text-3xl font-black gradient-text inline">{formatPrice(plan.price)}</p>
                                                            <span className="text-gray-400 text-lg">/월</span>
                                                        </div>
                                                        <ul className="space-y-2">
                                                            {plan.features.slice(0, 4).map((feature, i) => (
                                                                <li key={i} className="text-sm flex items-start gap-2 text-gray-400">
                                                                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                                    <span>{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex gap-4">
                                        <Button
                                            type="button"
                                            onClick={prevStep}
                                            variant="outline"
                                            className="flex-1 border-gray-700 hover:bg-gray-800 py-6"
                                        >
                                            <ArrowLeft className="w-5 h-5 mr-2" />
                                            이전
                                        </Button>
                                        <Button
                                            type="button"
                                            onClick={nextStep}
                                            disabled={!formData.developmentPlanId || !formData.maintenancePlanId}
                                            className="flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 py-6 font-bold"
                                        >
                                            다음 단계
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        )}

                        {/* 3단계: 정보 입력 */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="bg-card/50 backdrop-blur border-white/10">
                                    <CardHeader>
                                        <CardTitle className="text-4xl font-black gradient-text">연락처 정보를 입력하세요</CardTitle>
                                        <CardDescription className="text-lg">프로젝트 진행을 위한 정보를 입력해주세요</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center gap-2">
                                                    <Building2 className="w-4 h-4" />
                                                    회사명 (선택)
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.companyName}
                                                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all"
                                                    placeholder="회사명을 입력하세요"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold mb-2 text-gray-300">
                                                    담당자명 <span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.contactName}
                                                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all"
                                                    placeholder="이름을 입력하세요"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center gap-2">
                                                    <Mail className="w-4 h-4" />
                                                    이메일 <span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    value={formData.contactEmail}
                                                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all"
                                                    placeholder="email@example.com"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center gap-2">
                                                    <Phone className="w-4 h-4" />
                                                    전화번호 <span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    value={formData.contactPhone}
                                                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all"
                                                    placeholder="010-1234-5678"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center gap-2">
                                                <FileText className="w-4 h-4" />
                                                프로젝트 상세 내용 <span className="text-red-400">*</span>
                                            </label>
                                            <textarea
                                                value={formData.projectDetails}
                                                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent h-40 text-white transition-all resize-none"
                                                placeholder="프로젝트에 대해 자세히 설명해주세요...&#10;&#10;예시:&#10;- 원하는 기능&#10;- 참고 사이트&#10;- 예상 일정&#10;- 기타 요구사항"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold mb-3 text-gray-300">
                                                참고 자료 첨부 (선택)
                                            </label>
                                            <FileUpload
                                                onFilesChange={(files) => setFormData({ ...formData, files })}
                                                maxFiles={5}
                                                maxSize={5}
                                            />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex gap-4">
                                        <Button
                                            type="button"
                                            onClick={prevStep}
                                            variant="outline"
                                            className="flex-1 border-gray-700 hover:bg-gray-800 py-6"
                                        >
                                            <ArrowLeft className="w-5 h-5 mr-2" />
                                            이전
                                        </Button>
                                        <Button
                                            type="button"
                                            onClick={nextStep}
                                            disabled={!validateStep(3)}
                                            className="flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 py-6 font-bold"
                                        >
                                            다음 단계
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        )}

                        {/* 4단계: 확인 및 제출 */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="bg-card/50 backdrop-blur border-white/10">
                                    <CardHeader>
                                        <CardTitle className="text-4xl font-black gradient-text">견적 요청 확인</CardTitle>
                                        <CardDescription className="text-lg">제출 전 내용을 확인해주세요</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
                                            <h3 className="font-bold mb-3 text-purple-300 text-lg flex items-center gap-2">
                                                <Sparkles className="w-5 h-5" />
                                                선택한 템플릿
                                            </h3>
                                            <p className="text-2xl font-bold text-white mb-1">{selectedTemplate?.name}</p>
                                            <p className="text-gray-400">{selectedTemplate?.category}</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                                                <h3 className="font-bold mb-3 text-purple-400 flex items-center gap-2">
                                                    <Check className="w-5 h-5" />
                                                    개발 요금제
                                                </h3>
                                                <p className="text-xl font-bold text-white mb-1">{selectedDevPlan?.name}</p>
                                                <p className="text-3xl font-black gradient-text">{selectedDevPlan && formatPrice(selectedDevPlan.price)}</p>
                                            </div>

                                            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                                                <h3 className="font-bold mb-3 text-pink-400 flex items-center gap-2">
                                                    <Rocket className="w-5 h-5" />
                                                    유지보수 요금제
                                                </h3>
                                                <p className="text-xl font-bold text-white mb-1">{selectedMaintPlan?.name}</p>
                                                <p className="text-3xl font-black gradient-text">{selectedMaintPlan && formatPrice(selectedMaintPlan.price)}/월</p>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                                            <h3 className="font-bold mb-3 text-cyan-400 flex items-center gap-2">
                                                <Mail className="w-5 h-5" />
                                                연락처 정보
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-3 text-gray-300">
                                                {formData.companyName && <p><span className="text-gray-500">회사:</span> {formData.companyName}</p>}
                                                <p><span className="text-gray-500">담당자:</span> {formData.contactName}</p>
                                                <p><span className="text-gray-500">이메일:</span> {formData.contactEmail}</p>
                                                <p><span className="text-gray-500">전화:</span> {formData.contactPhone}</p>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                                            <h3 className="font-bold mb-3 text-green-400 flex items-center gap-2">
                                                <FileText className="w-5 h-5" />
                                                프로젝트 상세
                                            </h3>
                                            <p className="whitespace-pre-wrap text-gray-300 leading-relaxed">{formData.projectDetails}</p>
                                        </div>

                                        {formData.files.length > 0 && (
                                            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                                                <h3 className="font-bold mb-3 text-yellow-400">첨부 파일 ({formData.files.length}개)</h3>
                                                <ul className="space-y-2">
                                                    {formData.files.map((file, idx) => (
                                                        <li key={idx} className="text-sm text-gray-400">
                                                            • {file.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </CardContent>
                                    <CardFooter className="flex gap-4">
                                        <Button
                                            type="button"
                                            onClick={prevStep}
                                            variant="outline"
                                            className="flex-1 border-gray-700 hover:bg-gray-800 py-6"
                                            disabled={isSubmitting}
                                        >
                                            <ArrowLeft className="w-5 h-5 mr-2" />
                                            이전
                                        </Button>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 py-6 font-bold text-lg"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    제출 중...
                                                </>
                                            ) : (
                                                <>
                                                    <Rocket className="w-5 h-5 mr-2" />
                                                    견적 요청 제출
                                                </>
                                            )}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </div>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #a855f7, #ec4899);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #9333ea, #db2777);
        }
      `}</style>
        </div>
    )
}
