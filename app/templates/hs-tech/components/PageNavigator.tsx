'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { getNavigationContext, getBreadcrumb, type PageMeta } from '../page-structure';

interface PageNavigatorProps {
    currentPageId: string;
    className?: string;
}

export const PageNavigator = ({ currentPageId, className = '' }: PageNavigatorProps) => {
    const navContext = getNavigationContext(currentPageId);
    const breadcrumb = getBreadcrumb(currentPageId);

    if (!navContext.currentPage) {
        return null;
    }

    const { prevPage, nextPage, currentPosition, totalPages } = navContext;

    return (
        <div className={`page-navigator ${className}`}>
            {/* Breadcrumb */}
            <nav className="breadcrumb mb-4 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Link href="/templates/hs-tech" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                    <Home size={16} />
                </Link>
                {breadcrumb.map((page, index) => (
                    <div key={page.id} className="flex items-center gap-2">
                        <span>/</span>
                        {index === breadcrumb.length - 1 ? (
                            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                                {page.title}
                            </span>
                        ) : (
                            <Link
                                href={page.path}
                                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                            >
                                {page.title}
                            </Link>
                        )}
                    </div>
                ))}
            </nav>

            {/* Navigation Controls */}
            <div className="navigator-controls flex items-center justify-between py-4 px-6 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
                {/* Previous Button */}
                <div className="flex-1">
                    {prevPage ? (
                        <Link
                            href={prevPage.path}
                            className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
                        >
                            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <div className="flex flex-col items-start">
                                <span className="text-xs text-neutral-500">Previous</span>
                                <span className="font-medium">{prevPage.title}</span>
                            </div>
                        </Link>
                    ) : (
                        <div className="opacity-30 cursor-not-allowed flex items-center gap-2">
                            <ChevronLeft size={20} />
                            <span className="text-sm">Start</span>
                        </div>
                    )}
                </div>

                {/* Page Counter */}
                <div className="flex-shrink-0 px-8 text-center">
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                                {currentPosition}
                            </span>
                            <span className="text-xs text-neutral-500 uppercase tracking-wide">
                                of {totalPages}
                            </span>
                        </div>
                        <div className="w-px h-12 bg-neutral-300 dark:bg-neutral-700" />
                        <div className="flex flex-col text-left">
                            <span className="text-xs text-neutral-500 uppercase">Level</span>
                            <span className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                                {navContext.currentPage.level === 1 && 'Brand'}
                                {navContext.currentPage.level === 2 && 'Category'}
                                {navContext.currentPage.level === 3 && 'Series'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <div className="flex-1 flex justify-end">
                    {nextPage ? (
                        <Link
                            href={nextPage.path}
                            className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
                        >
                            <div className="flex flex-col items-end">
                                <span className="text-xs text-neutral-500">Next</span>
                                <span className="font-medium">{nextPage.title}</span>
                            </div>
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <div className="opacity-30 cursor-not-allowed flex items-center gap-2">
                            <span className="text-sm">End</span>
                            <ChevronRight size={20} />
                        </div>
                    )}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar mt-4">
                <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
                        style={{ width: `${(currentPosition / totalPages) * 100}%` }}
                    />
                </div>
                <div className="flex justify-between mt-2 text-xs text-neutral-500">
                    <span>Start</span>
                    <span>{Math.round((currentPosition / totalPages) * 100)}% Complete</span>
                    <span>End</span>
                </div>
            </div>
        </div>
    );
};
