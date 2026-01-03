"use client";

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
        <TerapiaFragments
          fragments={fragments}
          prevRoute="/terapia/1"
          nextRoute="/terapia/3"
          inlineImage={{
            src: "/images/a_terapia/2/cover.jpg",
            alt: "Cargas afetivas ao longo da vida",
            width: 900,
            height: 280,
          }}
          imageAfterIndex={1}
        />
      </div>
    </section>
  );
}