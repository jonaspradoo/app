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
          prevRoute="/terapia/3"
          nextRoute="/terapia/5"
        />
      </div>
    </section>
  );
}