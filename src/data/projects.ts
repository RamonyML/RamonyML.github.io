export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  demoUrl?: string;
  repoUrl?: string;
  note?: string;
};

export type FeaturedProjectStat = {
  label: string;
  value: string;
};

export type FeaturedProjectData = {
  title: string;
  description: string;
  quote: string;
  stats: FeaturedProjectStat[];
  tags: string[];
  status: string;
  demoUrl?: string;
  note?: string;
};

export const featuredProject: FeaturedProjectData = {
  title: "Eterno Dia",
  description:
    "SaaS que reúne, em tempo real, as fotos e vídeos que os convidados de um evento registram, num álbum colaborativo acessado por link ou QR Code, sem precisar instalar nada. Checkout com Stripe e Asaas, crop de imagem direto no navegador, download do álbum completo em ZIP e um painel de moderação para o organizador.",
  quote:
    "Foi o primeiro produto que tirei do zero sozinho, cobrando de verdade: modelei o banco, integrei os pagamentos, resolvi bug de madrugada antes de casamento de cliente. É o projeto que mais me orgulha.",
  stats: [
    { label: "Planos", value: "3" },
    { label: "Pagamentos", value: "Stripe + Asaas" },
    { label: "Álbum", value: "Tempo real" },
  ],
  tags: ["React 19", "Vite", "Tailwind CSS 4", "Firebase", "Stripe", "Asaas"],
  status: "SaaS próprio · Em produção",
  demoUrl: "https://eternodia.com",
  note: "Produto proprietário, código-fonte não disponível publicamente.",
};

export const projects: Project[] = [
  {
    title: "Gerador de O.S.",
    description:
      "Plataforma operacional com 37 formulários e 170 variantes de Ordem de Serviço, usada diariamente pela equipe de suporte técnico da MZ NET. Integração completa com o ERP MK Solutions via 8 endpoints REST, incluindo autenticação, busca de cliente por CPF/CNPJ, criação de protocolo e de O.S. Reduziu o tempo de atendimento de 10–15 minutos para menos de 2 minutos.",
    tags: ["React 19", "TypeScript", "Firebase", "Cloud Functions", "REST API"],
    status: "Em produção desde dez. 2023 · v4.0.1",
    note: "Sistema interno da empresa, repositório privado, código-fonte não disponível publicamente.",
  },
  {
    title: "OSLine",
    description:
      "Produto SaaS white-label para provedores regionais de internet, generalizando os conceitos operacionais do Gerador de O.S. (chamados, escala, chat interno) para atender múltiplos provedores-clientes. Arquitetura multi-tenant no Firestore, com isolamento de dados por tenant em ~24 coleções e permissões por setor e hierarquia.",
    tags: ["React 19", "TypeScript", "Firestore Multi-Tenant", "Firebase"],
    status: "Em desenvolvimento ativo",
    note: "Produto ainda não lançado publicamente.",
  },
  {
    title: "Belaroids",
    description:
      "Landing page para a Belaroids, marca de fotografia instantânea com câmera Instax. Estética de álbum de memórias artesanal: textura de papel, doodles kawaii desenhados à mão, polaroids com rotação aleatória, scroll reveal e parallax de mouse nos elementos decorativos.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Em produção",
    demoUrl: "https://belaroids.vercel.app/",
    repoUrl: "https://github.com/RamonyML/belaroids",
  },
  {
    title: "Belle Studio",
    description:
      "Landing page para salão de beleza, com hero animado, catálogo de serviços, galeria, planos e depoimentos. Construída como modelo de site institucional para negócios locais.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Projeto de demonstração",
    demoUrl: "/demos/landing-premium/index.html",
  },
  {
    title: "Studio Nova",
    description:
      "Sistema de landing page multi-nicho, construído para venda como produto: 4 paletas de cor prontas (Índigo, Esmeralda, Rosé, Grafite), FAQ acessível sem JS e formulário integrado com WhatsApp, um único código-base cobrindo vários segmentos de negócio.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Produto à venda · pronto",
    demoUrl: "/demos/studio-nova/index.html",
  },
  {
    title: "Exata Contábil",
    description:
      "Landing page para escritórios de contabilidade, construída do zero com identidade própria: predominância branca com detalhes em azul, ícones Lucide e fundos fotográficos com efeito parallax intercalados entre as seções.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "Lucide Icons"],
    status: "Produto à venda · pronto",
    demoUrl: "/demos/contabilidade/index.html",
  },
  {
    title: "Obscura",
    description:
      "Landing page premium para fotógrafos, com identidade editorial (preto + dourado champagne). Cursor customizado, scroll horizontal pinado na galeria de trabalhos, lightbox em tela cheia e fundos com parallax.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Produto à venda · pronto",
    demoUrl: "/demos/fotografia/index.html",
  },
];
