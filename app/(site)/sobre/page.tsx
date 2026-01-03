"use client";

import SobreHero from "./SobreHero";
import SobreFragments from "./SobreFragments";

export default function Page() {
  return (
    <section className="w-full flex justify-center page-transition">
      <div
        className="
          w-full
          max-w-[420px]
          flex
          flex-col
          items-center
          relative
          -top-12
        "
      >
        <div className="mt-2 mb-12 relative -top-12">
          <SobreHero />
        </div>

        <SobreFragments />
      </div>
    </section>
  );
}