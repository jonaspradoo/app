"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* =========================
   POSTS
   ========================= */
const posts = [
  {
    slug: "redessociais",
    title: "Expostos demais, conectados de menos",
    excerpt:
      "Nunca fomos tão vistos, comparados e avaliados — e isso cobra um preço silencioso.",
    date: "2024-01-20",
    views: 320,
    cover: "/images/blog/redessociais/cover.jpg",
  },
  {
    slug: "sono",
    title: "Dormir não é desligar",
    excerpt:
      "Durante o sono, o sistema nervoso continua trabalhando — muitas vezes mais do que quando estamos acordados.",
    date: "2024-02-02",
    views: 280,
    cover: "/images/blog/sono/cover.jpg",
  },
  {
    slug: "conflito",
    title: "Quando evitar parece a única saída",
    excerpt:
      "O alívio imediato da fuga costuma custar caro no longo prazo.",
    date: "2024-02-10",
    views: 190,
    cover: "/images/blog/conflito/cover.jpg",
  },
  {
    slug: "fobiasocial",
    title: "O medo de existir diante do outro",
    excerpt:
      "Há um momento em que não é mais timidez — é o corpo tentando se proteger do olhar alheio.",
    date: "2024-02-18",
    views: 160,
    cover: "/images/blog/fobiasocial/cover.jpg",
  },
  {
    slug: "ansiedade",
    title: "Ansiedade não é excesso de futuro",
    excerpt:
      "Em muitos casos, a ansiedade não começa como pensamento, mas como uma resposta corporal antecipatória.",
    date: "2024-02-22",
    views: 140,
    cover: "/images/blog/ansiedade/cover.jpg",
  },
  {
    slug: "hipervigilancia",
    title: "Hipervigilância — quando o corpo nunca desliga",
    excerpt:
      "O corpo permanece em alerta contínuo, mesmo quando não há ameaça aparente.",
    date: "2024-02-25",
    views: 130,
    cover: "/images/blog/hipervigilancia/cover.jpg",
  },
];

/* =========================
   ORDENAÇÃO
   ========================= */
function sortPosts(type: "relevancia" | "recentes") {
  const cloned = [...posts];

  if (type === "relevancia") {
    return cloned.sort((a, b) => b.views - a.views);
  }

  return cloned.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}

export default function BlogPage() {
  const [order, setOrder] =
    useState<"relevancia" | "recentes">("relevancia");

  const ordered = sortPosts(order);
  const destaque = ordered.slice(0, 3);
  const restante = ordered.filter(
    (post) => !destaque.some((d) => d.slug === post.slug)
  );

  /* =========================
     CONTINUIDADE · SCROLL
     ========================= */
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const velocityRef = useRef(0);
  const targetScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const endTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [showReturn, setShowReturn] = useState(false);

  const STEP = 42;
  const DAMPING = 0.92;
  const MAX_VELOCITY = 30;

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  useEffect(() => {
    if (isMobile) return;

    const onWheel = (e: WheelEvent) => {
      if (!scrollRef.current) return;

      const bounds = scrollRef.current.getBoundingClientRect();
      const inside =
        e.clientY >= bounds.top &&
        e.clientY <= bounds.bottom;

      if (!inside) return;

      e.preventDefault();

      const dir = e.deltaY > 0 ? 1 : -1;
      velocityRef.current += dir * STEP;

      velocityRef.current = Math.max(
        Math.min(velocityRef.current, MAX_VELOCITY),
        -MAX_VELOCITY
      );
    };

    window.addEventListener("wheel", onWheel, {
      passive: false,
    });

    return () =>
      window.removeEventListener("wheel", onWheel);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const animate = () => {
      if (!scrollRef.current || !contentRef.current) return;

      const container = scrollRef.current;
      const content = contentRef.current;

      const max =
        content.scrollHeight - container.clientHeight;

      targetScrollRef.current += velocityRef.current;
      targetScrollRef.current = Math.min(
        Math.max(targetScrollRef.current, 0),
        max
      );

      container.scrollTop +=
        (targetScrollRef.current - container.scrollTop) *
        0.12;

      velocityRef.current *= DAMPING;

      const distanceToEnd =
        max - container.scrollTop;

      const atEnd = distanceToEnd < 24;

      if (atEnd) {
        if (!endTimerRef.current && !showReturn) {
          endTimerRef.current = setTimeout(() => {
            setShowReturn(true);
          }, 1000);
        }
      } else {
        if (endTimerRef.current) {
          clearTimeout(endTimerRef.current);
          endTimerRef.current = null;
        }
        setShowReturn(false);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current)
        cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, showReturn]);

  return (
    <section className="w-full flex justify-center page-transition">
      <div className="w-full flex flex-col items-center">

        {/* CONTEXT */}
        <div className="mb-12 text-center">
          <span className="text-sm tracking-tight opacity-45 soft-text">
            Blog
          </span>
        </div>

        {/* DESTAQUES */}
        <div className="w-full max-w-[720px] px-6 mb-12">
          <div className="flex justify-center gap-6 mb-8 text-sm">
            {["relevancia", "recentes"].map((key) => (
              <button
                key={key}
                onClick={() =>
                  setOrder(
                    key as "relevancia" | "recentes"
                  )
                }
                className={`soft-text transition-opacity ${
                  order === key
                    ? "opacity-90 font-medium"
                    : "opacity-45 hover:opacity-70"
                }`}
              >
                {key === "relevancia"
                  ? "Relevância"
                  : "Recentes"}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href={`/blog/${destaque[0].slug}`}
              className="md:row-span-2 rounded-xl overflow-hidden relative group"
            >
              <img
                src={destaque[0].cover}
                alt=""
                className="
                  absolute inset-0 w-full h-full object-cover
                  grayscale brightness-[0.65] contrast-[0.9]
                  transition-all duration-[900ms]
                  group-hover:grayscale-0
                  group-hover:brightness-[0.72]
                "
              />
              <div className="relative p-6 h-full flex flex-col justify-end text-[#F5F5F7]">
                <h2 className="text-base font-medium mb-2 opacity-90">
                  {destaque[0].title}
                </h2>
                <p className="text-xs opacity-75 leading-relaxed">
                  {destaque[0].excerpt}
                </p>
              </div>
            </Link>

            {destaque.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-xl overflow-hidden relative group"
              >
                <img
                  src={post.cover}
                  alt=""
                  className="
                    absolute inset-0 w-full h-full object-cover
                    grayscale brightness-[0.65] contrast-[0.9]
                    transition-all duration-[900ms]
                    group-hover:grayscale-0
                    group-hover:brightness-[0.72]
                  "
                />
                <div className="relative p-5 h-full flex flex-col justify-end text-[#F5F5F7]">
                  <h3 className="text-xs font-medium mb-1 opacity-90">
                    {post.title}
                  </h3>
                  <p className="text-xs opacity-70 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CONTINUIDADE */}
        <div className="w-full max-w-[420px]">
          <div
            ref={scrollRef}
            className="relative overflow-hidden"
            style={{
              height: "22rem",
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
                paddingTop: "2.5rem",
                paddingBottom: "3.5rem",
              }}
            >
              {restante.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="
                    flex gap-4 items-center mb-6 p-4
                    rounded-lg
                    border border-black/5
                    bg-black/[0.015]
                    transition
                    hover:bg-black/[0.03]
                  "
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-black/10">
                    <img
                      src={post.cover}
                      alt=""
                      className="
                        w-full h-full object-cover
                        grayscale brightness-[0.6] contrast-[0.9]
                      "
                    />
                  </div>

                  <div className="text-left">
                    <h2 className="text-sm font-medium mb-1 opacity-85">
                      {post.title}
                    </h2>
                    <p className="text-xs opacity-55 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}

              {/* LINK DE RETORNO */}
              <div
                className={`
                  mt-6 text-center transition-all duration-300
                  ${showReturn ? "opacity-50 translate-y-0" : "opacity-0 translate-y-2"}
                `}
              >
                <Link
                  href="/"
                  className="text-sm soft-text hover:opacity-80"
                >
                  Início
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}