"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import LogoMark from "@/components/logo/LogoMark";
import LanguageSwitcher from "@/components/language/LanguageSwitcher";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) setTheme(saved);
    setMounted(true);

    const t = setTimeout(() => setLogoVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <LanguageProvider>
      <div
       className={`relative flex flex-col transition-colors duration-300 md:min-h-screen ${
          isDark
            ? "dark bg-[#0F0F12] text-[#EDEDED]"
            : "bg-[#F5F5F7] text-[#0A0A0A]"
        }`}
      >
        {/* LANGUAGE SWITCHER — DESKTOP */}
        <div className="absolute top-6 left-6 z-50 hidden md:flex">
          <LanguageSwitcher />
        </div>

        {/* TOGGLE DARKMODE */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50">
          <button
            onClick={() => {
              const next = isDark ? "light" : "dark";
              setTheme(next);
              localStorage.setItem("theme", next);
            }}
            className="relative w-12 h-7 md:w-14 md:h-8 rounded-full bg-black/10 dark:bg-white/10"
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 md:w-6 md:h-6 rounded-full transition-transform duration-300 ${
                isDark
                  ? "translate-x-5 md:translate-x-6 bg-white"
                  : "bg-black"
              }`}
            />
          </button>
        </div>

        {/* LOGO */}
        <div
          className={`
            pt-14 md:pt-0
            flex justify-center
            md:absolute md:top-[18%] md:left-1/2 md:-translate-x-1/2
            transition-opacity transition-transform
            duration-[5000ms]
            [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
            ${logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.96]"}
          `}
        >
          <LogoMark className="h-18 w-18 md:h-28 md:w-28 text-black/60 dark:text-white/60" />
        </div>

        {/* CONTEÚDO */}
        <main
          className="
            px-6
            pt-12
            md:pt-[260px]
            md:flex-1
            md:flex
            md:items-center
            md:justify-center
          "
        >
          {children}
        </main>

        {/* FOOTER */}
        <footer className="mt-auto pb-8 pt-6 flex justify-center">
          <div className="text-center">
            <p className="text-sm opacity-50">
              Jonas Prado · Psicoterapeuta
            </p>
            <p className="text-xs opacity-40 mt-1">
              Do conflito interno à expressão da sua autonomia.
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}