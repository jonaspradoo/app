"use client";

import TerapiaFragments from "../TerapiaFragments";
import fragments from "./fragments";

export default function Page() {
  return (
    <div
      className="
        w-full
        max-w-[560px]
        flex
        flex-col
        items-center
        relative
      "
    >
      <TerapiaFragments
        fragments={fragments}
        nextRoute="/terapia/2"
      />
    </div>
  );
}