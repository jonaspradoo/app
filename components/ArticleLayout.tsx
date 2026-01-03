"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ArticleLayoutProps {
  title: string;
  children: ReactNode;
}

export default function ArticleLayout({
  title,
  children,
}: ArticleLayoutProps) {
  return (
    <section className="w-full flex justify-center page-transition">
      <div
        className="
          w-full
          max-w-[720px]
          flex
          flex-col
          items-start
          text-left
          relative
          -top-6
          pb-16
        "
      >
        {/* CONTEXT LABEL */}
        <div className="mb-8">
          <span className="text-sm tracking-tight opacity-45 soft-text">
            Blog
          </span>
        </div>

        {/* TÍTULO */}
        <h1 className="text-2xl font-medium tracking-tight opacity-90 mb-10">
          {title}
        </h1>

        {/* CONTEÚDO */}
        <article className="w-full text-base leading-relaxed soft-text space-y-7 opacity-80">
          {children}
        </article>

        {/* VOLTAR */}
        <div className="mt-14">
          <Link
            href="/blog"
            className="text-base tracking-tight soft-text hover:opacity-80"
          >
            ← voltar ao blog
          </Link>
        </div>
      </div>
    </section>
  );
}