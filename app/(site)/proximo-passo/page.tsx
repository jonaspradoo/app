"use client";

import Image from "next/image";

export default function ProximoPassoPage() {
  return (
    <section className="w-full flex justify-center page-transition">
      <div
        className="
          w-full
          max-w-[420px]
          flex
          flex-col
          items-center
          text-center
          relative
          -top-6
          pb-16
        "
      >
        {/* CONTEXT LABEL */}
        <div className="mb-10">
          <span className="text-sm tracking-tight opacity-45 soft-text">
            Próximo passo
          </span>
        </div>

        {/* TEXTO DE ABERTURA */}
        <p className="text-base leading-relaxed opacity-70 mb-14 soft-text">
          Seguir adiante não exige decisões imediatas.
          <br />
          Às vezes, basta escolher um ponto de contato possível —
          <br />
          e ver o que acontece a partir daí.
        </p>

        {/* CAMINHOS */}
        <div className="w-full flex flex-col gap-10">
          {/* WHATSAPP */}
          <a
            href="https://wa.me/SEUNUMEROAQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              opacity-65
              hover:opacity-100
              transition-opacity
              duration-300
              ease-out
            "
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <Image
                src="/images/whatsapp.svg"
                alt=""
                width={16}
                height={16}
                className="opacity-50"
              />
              <h2 className="text-lg font-medium">
                WhatsApp
              </h2>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Conversa inicial para agendamento de uma avaliação.
            </p>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/SEUUSUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              opacity-65
              hover:opacity-100
              transition-opacity
              duration-300
              ease-out
            "
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <Image
                src="/images/instagram.svg"
                alt=""
                width={16}
                height={16}
                className="opacity-50"
              />
              <h2 className="text-lg font-medium">
                Instagram
              </h2>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Reflexões curtas, fragmentos do cotidiano e provocações silenciosas.
            </p>
          </a>

          {/* YOUTUBE */}
          <a
            href="https://youtube.com/@SEUCANAL"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              opacity-65
              hover:opacity-100
              transition-opacity
              duration-300
              ease-out
            "
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <Image
                src="/images/youtube.svg"
                alt=""
                width={16}
                height={16}
                className="opacity-50"
              />
              <h2 className="text-lg font-medium">
                YouTube
              </h2>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Conteúdos voltados à análise crítica de ideias populares,
              mitos científicos e simplificações excessivas.
            </p>
          </a>
        </div>

        {/* ENCERRAMENTO */}
        <div className="mt-16">
          <p className="text-sm opacity-40 soft-text">
            Não existe pressa.
            <br />
            Apenas continuidade.
          </p>
        </div>
      </div>
    </section>
  );
}