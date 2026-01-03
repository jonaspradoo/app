"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface TerapiaFragmentsProps {
  fragments: string[];
  nextRoute?: string;
  prevRoute?: string;

  inlineImage?: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  imageAfterIndex?: number;
}

export default function TerapiaFragments({
  fragments,
  nextRoute,
  prevRoute,
  inlineImage,
  imageAfterIndex = 1,
}: TerapiaFragmentsProps) {
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [offset, setOffset] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const velocityRef = useRef(0);
  const finishTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const STEP = 42;
  const DAMPING = 0.9;
  const MAX_VELOCITY = 36;

  /* SCROLL COM INÉRCIA */
  useEffect(() => {
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
  }, []);

  /* LOOP */
  useEffect(() => {
    let raf: number;

    const animate = () => {
      setOffset((prev) => {
        const containerHeight =
          containerRef.current?.clientHeight ?? 0;
        const contentHeight =
          contentRef.current?.scrollHeight ?? 0;

        const maxOffset = Math.max(
          0,
          contentHeight - containerHeight
        );

        let next = prev + velocityRef.current;
        velocityRef.current *= DAMPING;

        const clamped = Math.min(
          Math.max(next, 0),
          maxOffset
        );

        if (clamped >= maxOffset - 2 && nextRoute) {
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
      if (finishTimeoutRef.current) {
        clearTimeout(finishTimeoutRef.current);
      }
      cancelAnimationFrame(raf);
    };
  }, [nextRoute]);

  /* PROGRESSO GLOBAL */
  const progress = (() => {
    const containerHeight =
      containerRef.current?.clientHeight ?? 0;
    const contentHeight =
      contentRef.current?.scrollHeight ?? 0;
    const maxOffset = Math.max(
      1,
      contentHeight - containerHeight
    );
    return Math.min(offset / maxOffset, 1);
  })();

  /* CURVA VISUAL DA IMAGEM */
  const saturation = 0.55 + progress * 0.6;
  const grayscale = Math.max(0, 1 - progress * 1.2);

  return (
    <div className="w-full flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden text-center"
        style={{
          height: "26rem",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
        }}
      >
        <div
          ref={contentRef}
          className="soft-text"
          style={{
            transform: `translateY(-${offset}px)`,
            transition:
              "transform 900ms cubic-bezier(0.16, 1, 0.3, 1)",
            paddingTop: "3.5rem",
            paddingBottom: "3.5rem",
          }}
        >
          {fragments.map((text, i) => (
            <div key={i}>
              <p
                className="text-base leading-relaxed opacity-85 mb-6"
                style={{ letterSpacing: "0.015em" }}
              >
                {text}
              </p>

              {inlineImage && i === imageAfterIndex && (
                <div className="my-10 flex justify-center">
                  <Image
                    src={inlineImage.src}
                    alt={inlineImage.alt ?? "Ilustração conceitual"}
                    width={inlineImage.width ?? 900}
                    height={inlineImage.height ?? 280}
                    className="rounded-md transition-[filter] duration-700"
                    style={{
                      filter: `
                        saturate(${saturation})
                        grayscale(${grayscale})
                      `,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* AÇÕES FINAIS */}
      <div
        className={`
          mt-10
          flex
          gap-10
          items-center
          transition-opacity duration-500
          ${isFinished ? "opacity-60" : "opacity-0 pointer-events-none"}
        `}
      >
        {prevRoute && (
          <button
            onClick={() => router.push(prevRoute)}
            className="
              text-sm
              tracking-tight
              soft-text
              hover:opacity-80
            "
          >
            voltar
          </button>
        )}

        {nextRoute && (
          <button
            onClick={() => router.push(nextRoute)}
            className="
              text-sm
              tracking-tight
              soft-text
              hover:opacity-80
            "
          >
            continuar
          </button>
        )}
      </div>
    </div>
  );
}