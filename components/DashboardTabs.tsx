"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

type Language = "pt" | "en";

const labels: Record<Language, { label: string; route: string }[]> = {
  pt: [
    { label: "Sobre", route: "/sobre" },
    { label: "A Terapia", route: "/terapia" },
    { label: "Blog", route: "/blog" },
    { label: "Próximo passo", route: "/proximo-passo" },
  ],
  en: [
    { label: "About", route: "/sobre" },
    { label: "Therapy", route: "/terapia" },
    { label: "Blog", route: "/blog" },
    { label: "Next step", route: "/proximo-passo" },
  ],
};

export default function DashboardTabs() {
  const router = useRouter();
  const { language } = useLanguage();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
    const t = setTimeout(() => setIsFading(false), 420);
    return () => clearTimeout(t);
  }, [language]);

  const handleNavigate = (route: string, index: number) => {
    setPressedIndex(index);
    setIsLeaving(true);

    setTimeout(() => {
      router.push(route);
    }, 260);
  };

  const items = labels[language];

  return (
    <div
      className={`
        flex flex-col
        gap-5 md:gap-7
        w-full max-w-[240px] md:max-w-[260px]
        text-center
        transition-opacity duration-[420ms] ease-out
        ${isFading ? "opacity-60" : "opacity-100"}
        ${isLeaving ? "opacity-40" : ""}
      `}
      onMouseLeave={() => setActiveIndex(null)}
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const isPressed = index === pressedIndex;

        return (
          <button
            key={item.label}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setPressedIndex(null)}
            onClick={() => handleNavigate(item.route, index)}
            className={`
              text-3xl md:text-4xl
              tracking-tight soft-text
              transition-opacity duration-200
              ${isActive ? "font-medium opacity-100" : "font-light opacity-70"}
              ${isPressed ? "opacity-60" : ""}
            `}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}