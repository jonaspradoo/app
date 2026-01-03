"use client";

import ArticleLayout from "@/components/ArticleLayout";

export default function ArticleRedesSociais() {
  return (
    <ArticleLayout title="Redes sociais e saúde mental — duas visões, uma reflexão">
      <p>
        As redes sociais transformaram em poucos anos a forma como nos
        relacionamos, informamos e comparamos. Não é surpresa que perguntas
        sobre seus efeitos na saúde mental se tornem quase onipresentes.
      </p>

      <h2 className="text-lg font-medium opacity-85">
        1. Redes sociais fazem mal — o que a evidência mostra
      </h2>

      <p>
        Estudos observacionais encontraram associações entre uso intenso de
        redes sociais e sintomas de solidão, depressão e ansiedade. Em adultos
        jovens, níveis elevados de uso se associaram a maior sensação de
        isolamento social, mesmo após ajustes sociodemográficos.
      </p>

      <p className="text-sm opacity-65">
        🔗{" "}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/28279545/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          PubMed — Association Between Social Media Use and Social Isolation
        </a>
      </p>

      <p>
        Em adolescentes, pesquisas longitudinais também observaram que o
        aumento do uso de redes acompanha elevação em indicadores de
        infelicidade ao longo do tempo.
      </p>

      <p className="text-sm opacity-65">
        🔗{" "}
        <a
          href="https://journals.sagepub.com/doi/abs/10.1177/2167702617723376"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Sage Journals — Associations Between Screen Time and Well-Being
        </a>
      </p>

      <h2 className="text-lg font-medium opacity-85">
        2. A visão contrária — efeitos modestos e complexos
      </h2>

      <p>
        Meta-análises sugerem que os efeitos médios das redes sociais sobre o
        bem-estar geral são pequenos, explicando apenas uma fração mínima da
        variação observada, especialmente em grandes amostras.
      </p>

      <p className="text-sm opacity-65">
        🔗{" "}
        <a
          href="https://www.nature.com/articles/s41562-018-0506-1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Nature Human Behaviour — The Association Between Digital Technology Use and Well-Being
        </a>
      </p>

      <p>
        Outros trabalhos indicam que o impacto depende mais do tipo de uso —
        passivo, comparativo ou noturno — do que do tempo total de exposição.
      </p>

      <p className="text-sm opacity-65">
        🔗{" "}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/28622031/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          PubMed — Passive Social Media Use and Well-Being
        </a>
      </p>

      <h2 className="text-lg font-medium opacity-85">
        Conclusão — uma provocação
      </h2>

      <p>
        A pergunta não é simplesmente se as redes sociais fazem mal, mas em que
        contexto, com que propósito e em quais momentos elas entram na nossa
        vida.
      </p>

      <p className="font-medium opacity-85">
        “Como eu uso as redes — e o que isso produz em mim?”
      </p>

      <p>
        Não se trata de respostas fechadas, mas de uma reflexão aberta, situada
        e honesta.
      </p>
    </ArticleLayout>
  );
}