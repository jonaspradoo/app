import Image from "next/image";

interface TerapiaHeroProps {
  src: string;
  alt?: string;
}

export default function TerapiaHero({
  src,
  alt = "TRI",
}: TerapiaHeroProps) {
  return (
    <div
      className="
        relative
        w-36 h-36 md:w-40 md:h-40
        flex items-center justify-center
        pointer-events-none
      "
    >
      <Image
        src={src}
        alt={alt}
        width={160}
        height={160}
        priority
        className="opacity-80"
      />
    </div>
  );
}