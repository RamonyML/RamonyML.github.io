export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  demoUrl?: string;
  repoUrl?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Gerador de O.S.",
    description:
      "Plataforma operacional com 37 formulários e 170 variantes de Ordem de Serviço, usada diariamente pela equipe de suporte técnico da MZ NET. Integração completa com o ERP MK Solutions via 8 endpoints REST — autenticação, busca de cliente por CPF/CNPJ, criação de protocolo e de O.S. Reduziu o tempo de atendimento de 10–15 minutos para menos de 2 minutos.",
    tags: ["React 19", "TypeScript", "Firebase", "Cloud Functions", "REST API"],
    status: "Em produção desde dez. 2023 · v4.0.1",
    note: "Sistema interno da empresa — repositório privado, código-fonte não disponível publicamente.",
  },
  {
    title: "Eterno Dia",
    description:
      "SaaS que reúne, em tempo real, as fotos e vídeos que os convidados de um evento registram — num álbum colaborativo acessado por link ou QR Code, sem app. Pagamentos via Stripe (Payment Element, Apple Pay, Google Pay, webhooks) em 3 planos, crop de imagem no navegador, download do álbum em ZIP e sistema de moderação.",
    tags: ["React 19", "Vite", "Tailwind CSS 4", "Firebase", "Stripe"],
    status: "SaaS próprio · Em produção",
    demoUrl: "https://eternodia.com",
    note: "Produto proprietário — código-fonte não disponível publicamente.",
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
    title: "Landing Page Premium",
    description:
      "Template de landing page para negócios locais, com sistema de 4 paletas de cor prontas, FAQ acessível sem JS e formulário que integra direto com WhatsApp. Construído para venda como produto.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Produto à venda · pronto",
    demoUrl: "/demos/landing-premium/index.html",
  },
];
