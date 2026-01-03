"use client";

import ArticleLayout from "@/components/ArticleLayout";

export default function ArticleSono() {
  return (
    <ArticleLayout title="Sono, saúde mental e a ilusão das regras universais">
      <p>
        Dormir mal é uma das queixas mais comuns quando falamos de saúde mental.
        Ainda assim, poucas experiências humanas são tão atravessadas por mitos,
        regras rígidas e prescrições universais quanto o sono. Fala-se em higiene
        do sono, em dormir oito horas, em pessoas que funcionam bem dormindo pouco.
        Mas o que, de fato, a ciência sustenta — e onde começam as simplificações?
      </p>

      <p>
        Este texto propõe um olhar mais cuidadoso: não para negar a importância do
        sono, mas para compreendê-lo com menos dogma e mais contexto.
      </p>

      <h2 className="text-lg font-medium opacity-85">
        Higiene do sono: útil, mas longe de ser suficiente
      </h2>

      <p>
        O termo higiene do sono refere-se a um conjunto de práticas comportamentais
        e ambientais que favorecem o adormecer e a manutenção do sono. Entre as
        recomendações mais conhecidas estão manter horários regulares, reduzir a
        exposição à luz intensa à noite, evitar estimulantes e associar a cama ao
        descanso.
      </p>

      <p>
        Essas orientações têm respaldo científico e costumam ser indicadas como
        primeiro passo, especialmente em quadros leves de insônia. Ainda assim,
        estudos apontam que a higiene do sono, isoladamente, raramente resolve
        dificuldades persistentes, sobretudo quando fatores emocionais ou
        cognitivos estão envolvidos.
      </p>

      <p className="text-sm opacity-65">
        🔗{" "}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/12760571/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Stepanski & Wyatt (2003) — Use of Sleep Hygiene in the Treatment of Insomnia
        </a>
      </p>

      <h2 className="text-lg font-medium opacity-85">
        O mito das oito horas: média não é regra
      </h2>

      <p>
        A ideia de que todos precisamos dormir exatamente oito horas por noite é
        baseada em médias populacionais, não em necessidades individuais. Estudos
        em cronobiologia mostram que a duração ideal do sono varia amplamente entre
        pessoas, influenciada por genética, idade e fase da vida.
      </p>

      <p>
        Revisões amplas indicam que tanto a duração quanto a arquitetura do sono
        apresentam grande variabilidade individual, o que torna inadequado tratar
        um número fixo como regra universal.
      </p>

      <p className="text-sm opacity-65">
        🔗{" "}
        <a
          href="https://www.nature.com/articles/nrn.2015.1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Nature Reviews Neuroscience — Sleep and its functions
        </a>
      </p>

      <p>
        Paradoxalmente, a tentativa de atingir uma “meta ideal” de horas pode
        aumentar a ansiedade relacionada ao sono e dificultar ainda mais o
        adormecer.
      </p>

      <h2 className="text-lg font-medium opacity-85">
        Pessoas que dormem pouco e se sentem bem
      </h2>

      <p>
        É comum ouvir relatos de pessoas que dormem cinco ou seis horas por noite
        e afirmam sentir-se bem. A ciência reconhece que existem diferenças
        individuais reais na necessidade de sono, incluindo uma pequena parcela
        da população que apresenta menor necessidade sem prejuízos aparentes.
      </p>

      <p>
        No entanto, estudos longitudinais mostram que muitas pessoas que relatam
        “funcionar bem” dormindo pouco apresentam, ao longo do tempo, déficits
        sutis — como maior reatividade emocional ou redução da atenção — que nem
        sempre são percebidos conscientemente.
      </p>

      <p className="text-sm opacity-65">
        🔗{" "}
        <a
          href="https://academic.oup.com/sleep/article/26/2/117/2696644"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Sleep Journal — Subjective alertness vs. objective performance under sleep deprivation
        </a>
      </p>

      <h2 className="text-lg font-medium opacity-85">
        O sono como processo, não como desempenho
      </h2>

      <p>
        Um dos maiores equívocos contemporâneos é tratar o sono como algo a ser
        otimizado, medido e controlado. Aplicativos e métricas podem ajudar na
        observação, mas também podem transformar o descanso em mais uma tarefa a
        ser executada corretamente.
      </p>

      <p>
        A literatura em saúde mental sugere que a relação da pessoa com o sono é
        tão importante quanto o sono em si. Ansiedade, controle excessivo e medo
        de não dormir frequentemente perpetuam a própria dificuldade de dormir.
      </p>

      <h2 className="text-lg font-medium opacity-85">
        Conclusão — uma provocação
      </h2>

      <p>
        Dormir bem não é seguir regras rígidas, nem alcançar números ideais. Entre
        a obsessão e a negligência, existe um espaço mais fértil: o da escuta.
      </p>

      <p className="font-medium opacity-85">
        “Como está a minha relação com o descanso — e o que ela revela sobre a
        forma como vivo?”
      </p>

      <p>
        A ciência oferece dados e tendências, mas o sono, assim como a saúde
        mental, continua sendo profundamente individual.
      </p>
    </ArticleLayout>
  );
}