"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "pt" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  // Persistência simples (opcional, mas correta)
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved) setLanguage(saved);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook seguro
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used inside a <LanguageProvider />"
    );
  }
  return context;
}