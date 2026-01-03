"use client";

import { useEffect } from "react";

export default function TerapiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <section className="w-full flex justify-center page-transition">
      <div className="w-full flex flex-col items-center">

        {/* CONTEXTO — IGUAL AO BLOG */}
        <div className="mt-12 mb-10 text-center">
          <span className="text-sm tracking-tight opacity-45 soft-text">
            A Terapia
          </span>
        </div>

        {children}
      </div>
    </section>
  );
}