# Plano: domínio próprio + migração do portfólio pra Vercel

Levantado em 23/08/2026. Executar quando der, sem pressa: nada aqui é
urgente e o site atual continua no ar o tempo todo.

## Por que

**Não é por proteção de template.** Isso foi investigado e a premissa não
se sustenta: cada demo em `public/demos/` é um `index.html` autocontido,
o mesmo arquivo que qualquer pessoa pega com Ctrl+U na demo ao vivo.
Repo privado não protegeria nada, porque o arquivo escondido seria o
mesmo arquivo servido publicamente. Proteção de template se resolve pelo
lado do produto (ver a seção final), não do host.

Os motivos reais:

1. **Analytics.** Hoje não existe nenhum. Saber quantas pessoas abrem
   cada demo e quantas chegam no "pedir orçamento" vale mais que qualquer
   outra coisa desta lista.
2. **Domínio próprio.** `ramonylima.com.br` num orçamento de R$ 3.500
   passa outra impressão que `ramonyml.github.io`, e desacopla o endereço
   do host pra sempre.
3. **Uma plataforma a menos.** GlowFit e Belaroids já vivem na Vercel.
4. **Some a pipeline do GitHub Actions** (checkout, setup-node, npm ci,
   build, upload-artifact, deploy). Na Vercel é push e pronto.

---

## Fase 0: decidir (15 min, só cabeça)

- [ ] **Escolher o domínio.**
  - `ramonylima.com.br`: mais confiança pro cliente freelance brasileiro,
    ~R$ 40/ano, exige CPF. Registro.br.
  - `ramonylima.dev`: sinal mais técnico, bom pra recrutador, ~R$ 70/ano.
  - Dá pra ter os dois, um redirecionando pro outro. Se for escolher um
    só, o público que paga a conta hoje é o cliente freelance.
- [ ] **Decidir se o repo do portfólio vira privado.**
  - Lembrar do trade-off: o portfólio mira cliente **e** recrutador. Repo
    público é um sinal a favor pro recrutador ("vê meu código sem me
    pedir nada").
  - Como o repo público não expõe o produto empacotado (README e LICENSE
    dos templates moram em `templates-venda/`, fora dele), **a sugestão é
    manter público**. Se fechar, garantir que Belaroids, Escala de Louvor
    e Bolão MZ NET continuem públicos pra segurar esse sinal.

---

## Fase 1: comprar e apontar o domínio (~1h, com espera de DNS)

- [ ] Comprar no Registro.br (`.com.br`) ou em qualquer registrar (`.dev`).
- [ ] Criar o projeto na Vercel importando `RamonyML/RamonyML.github.io`.
  - Framework preset: **Vite**
  - Build: `npm run build`
  - Output: `dist`
  - Time: `ramonyml1` (o mesmo do GlowFit)
- [ ] Conferir que o deploy da Vercel sobe verde **antes** de mexer em DNS.
      A URL `*.vercel.app` já serve pra validar tudo.
- [ ] Adicionar o domínio em Settings → Domains e configurar o DNS.
  - Padrão que já funcionou no GlowFit: `A @ → 216.198.79.1` e
    `CNAME www → <hash>.vercel-dns-017.com.`
  - A Vercel mostra os valores exatos na tela. Usar os dela, não estes.
- [ ] Esperar propagar (minutos a algumas horas) e conferir HTTPS.

---

## Fase 2: verificar antes de virar a chave (~30 min)

Fazer tudo isso na URL da Vercel, com o site antigo ainda no ar.

- [ ] **As 7 demos abrem?** `/demos/landing-premium/`, `/studio-nova/`,
      `/contabilidade/`, `/fotografia/`, `/jogae/`, `/apetite/`, `/vigor/`.
      Este é o ponto de maior risco da migração: existe um gotcha do Vite
      em que link pra diretório dentro de `public/` cai no fallback de SPA
      em vez de servir o `index.html` de dentro. No GitHub Pages o
      comportamento é outro. **Testar uma por uma**, desktop e mobile.
- [ ] A faixa legal preta aparece no topo das 7 demos, sem sobrepor a
      navbar do template.
- [ ] O botão "voltar ao portfólio" da faixa funciona (vai precisar de
      atualização de URL, ver Fase 4).
- [ ] `robots.txt` e `sitemap.xml` respondem.
- [ ] Prévia de compartilhamento: colar o link no WhatsApp e ver se sai
      com a `og-image.jpg`.
- [ ] Efeitos: typewriter, scroll reveal, foto quadrada com clique que
      trava a cor, botão de voltar ao topo.
- [ ] Mobile: capas dos projetos em cores (sem grayscale), menu.

---

## Fase 3: redirecionar o endereço antigo (~20 min)

O link `ramonyml.github.io` está no README do perfil do GitHub e
provavelmente em currículo e LinkedIn já enviados. Não dá pra recuperar
esses.

- [ ] Numa branch nova do repo `RamonyML.github.io`, **substituir o site
      por um `index.html` único** que redireciona:
  - `<meta http-equiv="refresh" content="0; url=https://SEU-DOMINIO">`
  - `<link rel="canonical" href="https://SEU-DOMINIO">`
  - Um redirect por JS também, e um link visível de fallback ("Clique
    aqui se não for redirecionado").
  - GitHub Pages não faz 301 de verdade; meta refresh com delay 0 é o
    que dá, e o Google trata como equivalente.
- [ ] Só fazer isso **depois** que a Fase 2 estiver 100%.
- [ ] Manter o repo público: preserva o link antigo e a presença no
      GitHub.

> Alternativa: manter o site completo nos dois endereços por algumas
> semanas e só depois transformar o antigo em redirect. Mais seguro, mas
> exige lembrar de voltar nele.

---

## Fase 4: atualizar onde a URL antiga aparece (~30 min)

- [ ] **README do perfil** (`RamonyML/RamonyML`): link do portfólio.
- [ ] **Faixa legal das 7 demos**: o botão "voltar ao portfólio" aponta
      hoje pra `https://ramonyml.github.io/`. São 7 arquivos em
      `public/demos/*/index.html`. Editar com `re.sub` (search-and-insert
      contra a string atual), **não** com índice calculado antes de
      mutar a string, que já deu problema uma vez.
- [ ] `index.html` do portfólio: Open Graph e canonical.
- [ ] `public/sitemap.xml`: trocar o domínio de todas as entradas.
- [ ] LinkedIn.
- [ ] Descrição dos repos no GitHub (`gh repo edit`).
- [ ] Assinatura do e-mail, se tiver.

---

## Fase 5: analytics (~15 min, o item de maior retorno)

- [ ] `npm i @vercel/analytics`
- [ ] Montar o `<Analytics />` no `App.tsx` (ou equivalente).
- [ ] Habilitar Web Analytics no painel da Vercel.
- [ ] Depois de uma semana, olhar: quais demos abrem mais, quanto tempo
      ficam, quantos chegam no `#contato`. **Isso deve guiar quais
      templates você prioriza daqui pra frente.**

---

## Fase 6 (opcional): proteger o produto de verdade

Nada disso é sobre host. É sobre produto.

- [ ] **Demo incompleta**: mostrar 4 seções e entregar 8. Vende igual e
      quem copiar leva metade.
- [ ] **Marca d'água discreta** na demo, ausente na versão paga.
- [ ] Manter o aviso da Lei 9.610/98 com seu nome. É o que te dá recurso
      real, se um dia precisar. O bloqueio de clique direito é teatro
      (Ctrl+U, devtools e curl passam por cima), mas não custa nada.
- [ ] Lembrar do enquadramento: **sob medida vale R$ 2.000–3.500 contra
      R$ 897–1.800 do arquivo.** Seu produto mais valioso é o serviço, e
      serviço não se copia.

---

## Rollback

Enquanto a Fase 3 não for feita, o GitHub Pages continua servindo o site
inteiro. Reverter é só apontar o DNS de volta ou parar de divulgar a URL
nova. Depois da Fase 3, reverter exige restaurar o repo antigo pelo git,
que continua tendo todo o histórico.

## Ordem sugerida se o tempo for curto

Fase 5 (analytics) dá pra fazer **hoje, sem migrar nada**, direto no
GitHub Pages? Não: Vercel Analytics exige Vercel. Mas se quiser o ganho
antes da migração, dá pra colocar um analytics de terceiro no site atual.
Se for migrar de qualquer forma, não vale o trabalho duplicado.

Fases 0 e 1 num dia, 2 e 3 noutro, 4 e 5 no terceiro. Nenhuma delas
precisa ser feita de uma vez.
