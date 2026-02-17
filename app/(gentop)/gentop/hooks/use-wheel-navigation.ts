"use client";

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface WheelNavigationOptions {
  nextPage: string | null;
  prevPage?: string | null;
  isEnabled?: boolean;
  threshold?: number;
  isFullScreenPage?: boolean;
}

interface WheelNavigationState {
  isAtBottom: boolean;
  isAtTop: boolean;
  isReadyToNavigate: boolean;
  isReadyToPrev: boolean;
  scrollProgress: number;
  scrollUpProgress: number;
}

export function useWheelNavigation({
  nextPage,
  prevPage = null,
  isEnabled = true,
  threshold = 80,
  isFullScreenPage = false
}: WheelNavigationOptions): WheelNavigationState {
  const router = useRouter();
  const [isAtBottom, setIsAtBottom] = useState(isFullScreenPage);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollUpProgress, setScrollUpProgress] = useState(0);

  const downAccumulator = useRef(0);
  const upAccumulator = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const isNavigating = useRef(false);

  const isReadyToNavigate = scrollProgress > 0.2;
  const isReadyToPrev = scrollUpProgress > 0.2;

  useEffect(() => {
    if (!isEnabled) return;

    const handleWheel = (e: WheelEvent) => {
      if (isNavigating.current) return;

      const now = Date.now();
      const timeDiff = now - lastScrollTime.current;

      if (timeDiff > 300) {
        downAccumulator.current = 0;
        upAccumulator.current = 0;
        setScrollProgress(0);
        setScrollUpProgress(0);
      }

      lastScrollTime.current = now;

      let atBottom = isFullScreenPage;
      let atTop = isFullScreenPage;

      if (!isFullScreenPage) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        atBottom = scrollTop + clientHeight >= scrollHeight - 10;
        atTop = scrollTop <= 2;
      }

      setIsAtBottom(atBottom);
      setIsAtTop(atTop);

      const normalizedDelta = Math.abs(e.deltaY);

      if (e.deltaY > 0) {
        upAccumulator.current = 0;
        setScrollUpProgress(0);

        if (atBottom && nextPage) {
          downAccumulator.current += normalizedDelta;
          const progress = Math.min(downAccumulator.current / threshold, 1);
          setScrollProgress(progress);

          if (downAccumulator.current >= threshold) {
            isNavigating.current = true;
            downAccumulator.current = 0;
            setScrollProgress(0);
            router.push(nextPage);
            setTimeout(() => { isNavigating.current = false; }, 1000);
          }
        } else {
          downAccumulator.current = 0;
          setScrollProgress(0);
        }
      } else if (e.deltaY < 0) {
        downAccumulator.current = 0;
        setScrollProgress(0);

        if (atTop && prevPage) {
          upAccumulator.current += normalizedDelta;
          const progress = Math.min(upAccumulator.current / threshold, 1);
          setScrollUpProgress(progress);

          if (upAccumulator.current >= threshold) {
            isNavigating.current = true;
            upAccumulator.current = 0;
            setScrollUpProgress(0);
            router.push(prevPage);
            setTimeout(() => { isNavigating.current = false; }, 1000);
          }
        } else {
          upAccumulator.current = 0;
          setScrollUpProgress(0);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isEnabled, nextPage, prevPage, threshold, router, isFullScreenPage]);

  return {
    isAtBottom,
    isAtTop,
    isReadyToNavigate,
    isReadyToPrev,
    scrollProgress,
    scrollUpProgress,
  };
}
