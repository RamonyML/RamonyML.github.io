export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  demoUrl?: string;
  repoUrl?: string;
  note?: string;
  stage: "producao" | "desenvolvimento" | "venda";
  tier?: "generico" | "premium";
  /** Preço do arquivo do template (autoinstalável). Ajuste aqui pra mudar no site inteiro. */
  price?: string;
  /** Preço do serviço sob medida: aplicar a identidade do cliente e publicar. */
  customPrice?: string;
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
    "Foi o primeiro produto que tirei do zero sozinho, cobrando de verdade: modelei o banco, integrei os pagamentos, pensei em cada detalhe sabendo que ia rodar no dia mais importante da vida de alguém. É o projeto que mais me orgulho.",
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
    stage: "producao",
  },
  {
    title: "OSLine",
    description:
      "Produto SaaS white-label para provedores regionais de internet, generalizando os conceitos operacionais do Gerador de O.S. (chamados, escala, chat interno) para atender múltiplos provedores-clientes. Arquitetura multi-tenant no Firestore, com isolamento de dados por tenant em ~24 coleções e permissões por setor e hierarquia.",
    tags: ["React 19", "TypeScript", "Firestore Multi-Tenant", "Firebase"],
    status: "Em desenvolvimento ativo",
    note: "Produto ainda não lançado publicamente.",
    stage: "desenvolvimento",
  },
  {
    title: "Belaroids",
    description:
      "Landing page para a Belaroids, marca de fotografia instantânea com câmera Instax. Estética de álbum de memórias artesanal: textura de papel, doodles kawaii desenhados à mão, polaroids com rotação aleatória, scroll reveal e parallax de mouse nos elementos decorativos.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Em produção",
    demoUrl: "https://belaroids.vercel.app/",
    repoUrl: "https://github.com/RamonyML/belaroids",
    stage: "producao",
  },
  {
    title: "Belle Studio",
    description:
      "Landing page para salão de beleza, com hero animado, catálogo de serviços, galeria, planos e depoimentos. Construída como modelo de site institucional para negócios locais.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Produto à venda · pronto",
    demoUrl: "/demos/landing-premium/index.html",
    stage: "venda",
    tier: "generico",
    price: "R$ 897",
    customPrice: "R$ 2.000",
  },
  {
    title: "Studio Nova",
    description:
      "Sistema de landing page multi-nicho, construído para venda como produto: 4 paletas de cor prontas (Índigo, Esmeralda, Rosé, Grafite), FAQ acessível sem JS e formulário integrado com WhatsApp, um único código-base cobrindo vários segmentos de negócio.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Produto à venda · pronto",
    demoUrl: "/demos/studio-nova/index.html",
    stage: "venda",
    tier: "generico",
    price: "R$ 897",
    customPrice: "R$ 2.000",
  },
  {
    title: "Exata Contábil",
    description:
      "Landing page para escritórios de contabilidade, construída do zero com identidade própria: predominância branca com detalhes em azul, ícones Lucide e fundos fotográficos com efeito parallax intercalados entre as seções.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "Lucide Icons"],
    status: "Produto à venda · pronto",
    demoUrl: "/demos/contabilidade/index.html",
    stage: "venda",
    tier: "generico",
    price: "R$ 897",
    customPrice: "R$ 2.000",
  },
  {
    title: "Obscura",
    description:
      "Landing page premium para fotógrafos, com identidade editorial (preto + dourado champagne). Cursor customizado, scroll horizontal pinado na galeria de trabalhos, lightbox em tela cheia e fundos com parallax.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Produto à venda · pronto",
    demoUrl: "/demos/fotografia/index.html",
    stage: "venda",
    tier: "premium",
    price: "R$ 1.800",
    customPrice: "R$ 2.500",
  },
  {
    title: "Jogaê",
    description:
      "Landing page para comunidade gamer de matchmaking, com identidade neon (verde + roxo sobre preto). Cursor em formato de mira, glitch RGB no título, piso holográfico animado, contadores e countdown de torneio, easter egg com código Konami e efeitos sonoros 8-bit opcionais.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Produto à venda · pronto",
    demoUrl: "/demos/jogae/index.html",
    stage: "venda",
    tier: "premium",
    price: "R$ 1.800",
    customPrice: "R$ 2.500",
  },
  {
    title: "Apetite",
    description:
      "Landing page para restaurantes e delivery, com identidade editorial em carvão quente e terracota. Slider de pratos com arraste e indicadores, cardápio em abas no estilo de menu impresso, galeria de ambiente e pedido direto pelo WhatsApp.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Produto à venda · pronto",
    demoUrl: "/demos/apetite/index.html",
    stage: "venda",
    tier: "premium",
    price: "R$ 1.800",
    customPrice: "R$ 2.500",
  },
  {
    title: "Vigor",
    description:
      "Landing page para academias e personal trainers, com identidade em preto fosco e vermelho intenso. Contador de resultados animado, cardápio de planos com destaque, galeria de estrutura e agendamento de aula experimental pelo WhatsApp.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Produto à venda · pronto",
    demoUrl: "/demos/vigor/index.html",
    stage: "venda",
    tier: "premium",
    price: "R$ 1.800",
    customPrice: "R$ 2.500",
  },
  {
    title: "HT Glow Fit",
    description:
      "Loja completa para uma marca real de moda fitness feminina, com domínio próprio. Carrinho com reserva de estoque server-side (transação no Firestore evita vender a mesma peça duas vezes), checkout convidado com pagamento PIX pela Asaas e frete calculado por CEP na SuperFrete. Pedido pago dispara e-mail para a loja via Resend. Login de cliente (e-mail/senha e Google) e painel administrativo em rota oculta, com dashboard de vendas, controle de estoque e gestão de pedidos.",
    tags: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Asaas (PIX)",
      "SuperFrete",
      "Vercel",
    ],
    status: "Em produção · Cliente real",
    demoUrl: "https://htglowfit.com",
    stage: "producao",
  },
  {
    title: "Escala de Louvor",
    description:
      "Sistema para igrejas organizarem a escala do ministério de louvor. A escala pública sincroniza em tempo real via Firestore, então o que o admin edita aparece na hora pra quem está com a página aberta, sem refresh. Geração automática de cultos por domingo do mês, exportação da escala como imagem em dois formatos e componentes de interface construídos do zero, sem biblioteca pronta.",
    tags: ["React 19", "TypeScript", "Vite", "Firestore", "html2canvas"],
    status: "Em produção",
    demoUrl: "https://memorial-louvor.web.app",
    repoUrl: "https://github.com/RamonyML/memorial-louvor",
    stage: "producao",
  },
];
