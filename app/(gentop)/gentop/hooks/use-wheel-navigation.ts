"use client";

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface WheelNavigationOptions {
  nextPage: string | null;
  isEnabled?: boolean;
  threshold?: number; // Scroll threshold in pixels to trigger ready state
  isFullScreenPage?: boolean; // For pages with no scroll (like intro)
}

interface WheelNavigationState {
  isAtBottom: boolean;
  isReadyToNavigate: boolean;
  scrollProgress: number; // 0-1 value representing scroll threshold progress
}

export function useWheelNavigation({
  nextPage,
  isEnabled = true,
  threshold = 50, // Reduced from 80 for trackpad friendliness
  isFullScreenPage = false
}: WheelNavigationOptions): WheelNavigationState {
  const router = useRouter();
  const [isAtBottom, setIsAtBottom] = useState(isFullScreenPage); // Full screen pages are always "at bottom"
  const [isReadyToNavigate, setIsReadyToNavigate] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const readyStateTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isEnabled || !nextPage) return;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      const timeDiff = now - lastScrollTime.current;

      // Reset accumulator if too much time has passed (user stopped scrolling)
      if (timeDiff > 200) {
        scrollAccumulator.current = 0;
        setScrollProgress(0);
        setIsReadyToNavigate(false);
      }

      lastScrollTime.current = now;

      // Check if at bottom of page (or full screen page)
      let atBottom = isFullScreenPage;
      if (!isFullScreenPage) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        atBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px tolerance
      }

      setIsAtBottom(atBottom);

      // Only accumulate scroll when at bottom and scrolling down
      // For trackpad: accept smaller deltaY values
      if (atBottom && e.deltaY > 0) {
        // Normalize deltaY for both mouse wheel and trackpad
        // Mouse wheel typically gives ~100, trackpad gives ~1-10
        const normalizedDelta = Math.abs(e.deltaY);
        scrollAccumulator.current += normalizedDelta;

        // Calculate progress (0-1)
        const progress = Math.min(scrollAccumulator.current / threshold, 1);
        setScrollProgress(progress);

        // Check if we've reached the threshold
        if (scrollAccumulator.current >= threshold) {
          if (!isReadyToNavigate) {
            // First threshold reached - enter "ready to navigate" state
            setIsReadyToNavigate(true);
            scrollAccumulator.current = 0; // Reset for next phase
            setScrollProgress(0);

            // Clear any existing timeout
            if (readyStateTimeout.current) {
              clearTimeout(readyStateTimeout.current);
            }

            // Auto-reset ready state after 3 seconds of no activity
            readyStateTimeout.current = setTimeout(() => {
              setIsReadyToNavigate(false);
              setScrollProgress(0);
            }, 3000);
          } else {
            // Already in ready state, second threshold reached - navigate!
            router.push(nextPage);

            // Reset state
            scrollAccumulator.current = 0;
            setIsReadyToNavigate(false);
            setScrollProgress(0);

            if (readyStateTimeout.current) {
              clearTimeout(readyStateTimeout.current);
            }
          }
        }
      } else if (e.deltaY < 0) {
        // Scrolling up - reset accumulator (but keep ready state if already ready)
        if (!isReadyToNavigate) {
          scrollAccumulator.current = 0;
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    // For debugging - remove after testing
    if (typeof window !== 'undefined') {
      (window as any).__wheelNavDebug = {
        getAccumulator: () => scrollAccumulator.current,
        getProgress: () => scrollProgress,
        getReadyState: () => isReadyToNavigate,
        getAtBottom: () => isAtBottom
      };
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (readyStateTimeout.current) {
        clearTimeout(readyStateTimeout.current);
      }
      if (typeof window !== 'undefined') {
        delete (window as any).__wheelNavDebug;
      }
    };
  }, [isEnabled, nextPage, threshold, router, isReadyToNavigate, isFullScreenPage, scrollProgress, isAtBottom]);

  return {
    isAtBottom,
    isReadyToNavigate,
    scrollProgress
  };
}
