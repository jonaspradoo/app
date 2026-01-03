"use client";

import Link from "next/link";
import TerapiaFragments from "../TerapiaFragments";
import fragments from "./fragments";

export default function Page() {
  return (
    <section className="w-full flex justify-center page-transition">
      <div
        className="
          w-full
          max-w-[520px]
          flex
          flex-col
          items-center
          relative
          -top-6
        "
      >
        <TerapiaFragments fragments={fragments} />

        <div className="mt-1 flex flex-col items-center gap-1">

          <Link
            href="/proximo-passo"
            className="
              text-sm
              tracking-tight
              soft-text
              hover:opacity-80
              transition-opacity
            "
          >
            próximo passo
          </Link>

          <Link
            href="/terapia/1"
            className="
              text-sm
              tracking-tight
              soft-text
              opacity-45
              hover:opacity-70
              transition-opacity
            "
          >
            recomeçar
          </Link>
        </div>
      </div>
    </section>
  );
}