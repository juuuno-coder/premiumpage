import Image from 'next/image'

interface SpecItem {
    label: string
    value: string
}

interface ProductIntroProps {
    title: string
    subtitle: string
    image: string
    specs: SpecItem[]
}

export default function ProductIntro({ title, subtitle, image, specs }: ProductIntroProps) {
    return (
        <div className="w-full max-w-5xl mx-auto p-4 bg-white dark:bg-slate-900">
            {/* Image */}
            <div className="w-full mb-8 flex justify-center">
                <div className="relative w-full aspect-[2.8/1] min-h-[200px]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#0070bc] border-b-2 border-[#0070bc] pb-2 mb-8 uppercase">
                {title}
            </h2>

            {/* Subtitle Bar */}
            <div className="w-full bg-[#e6e7e8] dark:bg-slate-800 text-[#0070bc] dark:text-blue-400 font-bold text-center py-3 text-lg md:text-xl mb-8">
                {subtitle}
            </div>

            {/* Specs Table */}
            <div className="w-full border-t-2 border-black dark:border-white">
                {specs.map((spec, index) => (
                    <div key={index} className="flex border-b border-gray-300 dark:border-slate-700 min-h-[100px]">
                        {/* Label */}
                        <div className="w-[120px] md:w-[180px] p-4 font-bold flex items-center justify-center text-center text-gray-800 dark:text-gray-200 border-r border-gray-200 dark:border-slate-700 shrink-0 bg-transparent">
                            {spec.label}
                        </div>
                        {/* Value */}
                        <div className="flex-grow p-4 text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed flex items-center">
                            {spec.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
