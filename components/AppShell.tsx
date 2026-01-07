"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/logo/LogoMark";
import LanguageSwitcher from "@/components/language/LanguageSwitcher";

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) setTheme(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isHome) {
      const t = setTimeout(() => setLogoVisible(true), 80);
      return () => clearTimeout(t);
    }
  }, [isHome]);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen relative flex flex-col transition-colors duration-300 ${
        isDark
          ? "dark bg-[#0F0F12] text-[#EDEDED]"
          : "bg-[#F5F5F7] text-[#0A0A0A]"
      }`}
    >
      {/* LANGUAGE SWITCHER — HOME (DESKTOP ONLY) */}
      {isHome && (
        <div className="absolute top-6 left-6 z-50 hidden md:flex">
          <LanguageSwitcher />
        </div>
      )}

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
              isDark ? "translate-x-5 md:translate-x-6 bg-white" : "bg-black"
            }`}
          />
        </button>
      </div>

      {/* LOGO — HOME */}
      {isHome && (
        <div
          className={`
            absolute
            top-[12%] md:top-[18%]
            left-1/2 -translate-x-1/2
            z-10 select-none
            transition-all duration-[1200ms]
            [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
            ${logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.96]"}
          `}
        >
          <LogoMark
            className="
              h-20 w-20
              md:h-28 md:w-28
              text-black/60 dark:text-white/60
            "
          />
        </div>
      )}

      {/* HEADER — INTERNAS */}
      {!isHome && (
        <header className="flex items-center px-6 py-5">
          <Link href="/" className="opacity-80 hover:opacity-100 transition">
            <LogoMark className="h-9 w-9 text-black/55 dark:text-white/55" />
          </Link>
        </header>
      )}

      {/* CONTEÚDO */}
      <main
        className={`
          flex-1 px-6
          ${
            isHome
              ? "flex items-center justify-center mt-24 md:mt-32"
              : "md:flex md:items-center md:justify-center"
          }
        `}
      >
        {children}
      </main>

      {/* FOOTER */}
      <footer className="pb-8 pt-4 flex justify-center">
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
  );
}