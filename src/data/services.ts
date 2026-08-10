export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Aplicações Web",
    description:
      "Sites institucionais, landing pages e sistemas web completos, do design à publicação.",
  },
  {
    title: "SaaS & Pagamentos",
    description:
      "Produtos com assinatura, cobrança recorrente e integração com Stripe ou outros gateways.",
  },
  {
    title: "Plataformas Operacionais",
    description:
      "Sistemas internos com formulários complexos, regras de negócio e integração com APIs externas.",
  },
  {
    title: "Consultoria Técnica",
    description:
      "Revisão de arquitetura, code review e definição de stack para times e founders técnicos.",
  },
];
