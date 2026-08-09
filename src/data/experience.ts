export type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "ago. 2023 — jul. 2026",
    title: "Suporte Técnico N3 · Desenvolvedor Full-Stack",
    place: "MZ NET Fibra Óptica — Uberlândia, MG",
    description:
      "Desenvolveu e mantém o Gerador de O.S. (v4.0.1), plataforma operacional usada diariamente por toda a equipe de suporte da empresa. Integrou a plataforma ao ERP MK Solutions via API REST, automatizando protocolo, comentários e O.S. com Cloud Functions e Secret Manager. Suporte técnico N3: GPON/XPON, provisionamento de ONT/ONU, gerenciamento de OLTs, redirecionamento de portas.",
  },
  {
    period: "out. 2021 — jul. 2023",
    title: "Supervisor de Atendimento e NOC",
    place: "TSJ Telemarketing (PRODEPA) — Belém, PA",
    description:
      "Supervisão da Central de Atendimento PRODEPA: avaliações de desempenho e treinamentos. Monitoramento de redes estaduais (infovias, enlaces ópticos e rádio) via Zabbix.",
  },
  {
    period: "mar. 2019 — out. 2021",
    title: "Analista de Relacionamento | NOC",
    place: "TSJ Telemarketing (PRODEPA) — Belém, PA",
    description:
      "Monitoramento de infraestrutura lógica do Estado do Pará via Zabbix. Registro e tratamento de incidentes em enlaces de fibra e rádio.",
  },
];

export type EducationItem = {
  period: string;
  title: string;
  place: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    period: "2019 — 2023",
    title: "Análise e Desenvolvimento de Sistemas",
    place: "Uninter — Uberlândia, MG",
    description:
      "Formação com base em engenharia de software: levantamento e documentação de requisitos, modelagem de sistemas (UML), banco de dados, arquitetura de software, testes e ciclo de vida de desenvolvimento. Especialização pessoal em engenharia de software e elaboração de documentação técnica de sistemas.",
  },
];
