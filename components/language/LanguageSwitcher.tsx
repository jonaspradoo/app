"use client";

export default function LanguageSwitcher() {
  return (
    <div className="flex gap-4 text-sm tracking-tight select-none">
      <span
        className="
          opacity-100
          font-medium
          cursor-default
        "
        aria-label="Idioma atual: Português"
      >
        PT
      </span>

      <span
        className="
          opacity-40
          cursor-default
        "
        aria-label="Idioma alternativo: Inglês (indisponível)"
      >
        EN
      </span>
    </div>
  );
}