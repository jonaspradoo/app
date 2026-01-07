"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import fragments from "./fragments";

export default function SobreFragments() {
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [offset, setOffset] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showMobileEnd, setShowMobileEnd] = useState(false);

  const velocityRef = useRef(0);
  const finishTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const STEP = 42;
  const DAMPING = 0.88;
  const MAX_VELOCITY = 36;

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  /* =========================
     DELAY MOBILE (800ms)
     ========================= */
  useEffect(() => {
    if (!isMobile) return;

    const t = setTimeout(() => {
      setShowMobileEnd(true);
    }, 800);

    return () => clearTimeout(t);
  }, [isMobile]);

  /* =========================
     SCROLL ARTIFICIAL — DESKTOP
     ========================= */
  useEffect(() => {
    if (isMobile) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      velocityRef.current += direction * STEP;
      velocityRef.current = Math.max(
        Math.min(velocityRef.current, MAX_VELOCITY),
        -MAX_VELOCITY
      );
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    let raf: number;

    const animate = () => {
      setOffset((prev) => {
        const containerHeight = containerRef.current?.clientHeight ?? 0;
        const contentHeight = contentRef.current?.scrollHeight ?? 0;
        const maxOffset = Math.max(0, contentHeight - containerHeight);

        let next = prev + velocityRef.current;
        velocityRef.current *= DAMPING;

        if (Math.abs(velocityRef.current) < 0.1) {
          velocityRef.current = 0;
        }

        const clamped = Math.min(Math.max(next, 0), maxOffset);

        if (clamped >= maxOffset - 2) {
          if (!finishTimeoutRef.current) {
            finishTimeoutRef.current = setTimeout(() => {
              setIsFinished(true);
            }, 1000);
          }
        } else {
          if (finishTimeoutRef.current) {
            clearTimeout(finishTimeoutRef.current);
            finishTimeoutRef.current = null;
          }
          setIsFinished(false);
        }

        return clamped;
      });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);
      cancelAnimationFrame(raf);
    };
  }, [isMobile]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* TEXTO */}
      <div
        ref={containerRef}
        className={`relative w-full text-center ${
          isMobile ? "overflow-visible" : "overflow-hidden"
        }`}
        style={{
          maxHeight: isMobile ? "none" : "15.5rem",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        }}
      >
        <div
          ref={contentRef}
          className="soft-text"
          style={{
            transform: isMobile ? "none" : `translateY(-${offset}px)`,
            transition: isMobile
              ? "none"
              : "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)",
            paddingTop: "3.5rem",
            paddingBottom: "3.5rem",
          }}
        >
          {fragments.map((text, i) => (
            <p
              key={i}
              className="text-base leading-relaxed opacity-85 mb-6"
              style={{ letterSpacing: "0.015em" }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* ENCERRAMENTO */}
      <div
        className={`
          mt-8
          transition-opacity duration-500 ease-out
          ${
            isMobile
              ? showMobileEnd
                ? "opacity-60"
                : "opacity-0 pointer-events-none"
              : isFinished
              ? "opacity-60"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <button
          onClick={() => router.push("/")}
          className="text-base tracking-tight soft-text hover:opacity-80"
        >
          início
        </button>
      </div>
    </div>
  );
}