import Image from "next/image";

export default function SobreHero() {
  return (
    <div
      className="
        relative
        w-32 h-32 md:w-36 md:h-36
        rounded-full
        overflow-hidden
        grayscale
        opacity-80
      "
    >
      <Image
        src="/images/avatar.jpg"
        alt="Jonas Prado"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}