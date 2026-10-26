# Registro da LP — o que a ficha decidiu e o que a execução fez

> Preenchido pelo agente **durante a execução**, a partir de `docs/FICHA-LP.md`. Não é um registro de entrevista: a entrevista aconteceu no chat web (`docs/PROMPT-FICHA-LP.md`) e a ficha é a fonte. Este arquivo existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa — e porque `docs/briefing-cliente/` fica fora do git.
>
> Nada aqui é perguntado ao usuário. Se um campo não puder ser preenchido a partir da ficha, a execução para e recusa, em vez de deixar lacuna.

## Origem

| Campo                     | Valor                                                                                                                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ficha de execução         | `docs/FICHA-LP.md` — montada no editor a partir do briefing organizado e da página atual do cliente, por pedido de uma primeira versão publicada (mesmo caminho da LP de locação da Print Master) |
| Data da ficha             | 26/10/2026                                                                                                                                                                                        |
| Versão do padrão na ficha | 2.8.0                                                                                                                                                                                             |
| Validada em               | 26/10/2026 por `npm run ficha`                                                                                                                                                                    |
| Material bruto do cliente | `docs/briefing-cliente/briefing_print_master_impressoras_industriais.md` (fora do git) e a página `printmaster.net.br/lp-impressoras-industriais-markem-imaje/`                                   |
| Briefing de campanha      | não — lista de palavras-chave informada                                                                                                                                                           |
| Fora desta execução       | locação de impressoras Ricoh e outsourcing de impressão (LP de locação da Print Master)                                                                                                           |

## Campanha

| Campo                      | Valor                                                                                                                                                                                                |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Palavra-chave principal    | `impressora industrial` — H1 "Impressoras industriais Markem-Imaje" e title "Impressoras industriais Markem-Imaje para codificação \| Print Master"                                                  |
| Origem                     | informada                                                                                                                                                                                            |
| Área atendida              | **não confirmada** — o endereço em Goiânia/GO não define a área comercial; a página não diz geografia além do rodapé                                                                                 |
| Negativas de oferta        | ausentes                                                                                                                                                                                             |
| Claims proibidos           | ausentes no briefing; "Distribuidor autorizado" e o logo da Markem-Imaje entraram no hero por decisão do usuário no mockup de abertura de 26/10/2026, o mesmo uso da página atual do cliente         |
| Divergência de vocabulário | o cliente diz "impressoras industriais" e "transferência térmica"; a campanha compra também datador, datadeira, codificadora e TTO — o texto da vitrine usa datadores, codificadoras e etiquetadoras |

### Famílias de palavra-chave

| Família            | Termos                                                                                                                        | Bloco que responde | Status                                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------- |
| produto/categoria  | impressora industrial, datador, codificadora industrial, impressora etiquetadora, impressora para embalagem, datadeira        | HERO + `vitrine`   | coberta                                           |
| tecnologia         | jato de tinta contínuo, impressora CIJ, datador inkjet, impressão a laser, impressora TTO, termo transferência, Print & Apply | `vitrine`          | coberta, **menos laser** (sem modelo no material) |
| aplicação/material | impressora para metal, alimentos, garrafas, cabos, fios, lata, papelão, ovos, superfícies                                     | `aplicacoes`       | coberta (4 cards + texto da seção)                |
| marca              | Markem-Imaje                                                                                                                  | HERO + `vitrine`   | coberta, só por extenso                           |
| modelo             | Markem 9450, SmartDate X45                                                                                                    | `vitrine`          | coberta pelo nome; sem tabela técnica             |

### Comitê de compra

Não informado no material. Inferido para a derivação: Produção, Engenharia, Qualidade, Compras.

| Papel      | Argumento de compra                          | Bloco que responde         | Status   |
| ---------- | -------------------------------------------- | -------------------------- | -------- |
| Produção   | equipamento certo para a linha e a embalagem | `vitrine`, `processo`      | inferido |
| Engenharia | tecnologia e integração                      | `vitrine`, `diferenciais`  | inferido |
| Qualidade  | código legível, conformidade regulatória     | `aplicacoes`               | inferido |
| Compras    | suporte da escolha ao pós-venda              | `processo`, `diferenciais` | inferido |

### Conteúdo futuro

| Grupo        | O que oferece              | Por que está fora                       |
| ------------ | -------------------------- | --------------------------------------- |
| hot stamping | tecnologia de hot stamping | palavra-chave pausada na lista recebida |

## Composição

Derivada em: 26/10/2026 · comando aplicado: `npm run compose -- vitrine processo aplicacoes diferenciais`

### Seções que entraram

| Fase       | Seção          | Fundo     | Respiro         | Veredicto na ficha | Famílias que responde                        |
| ---------- | -------------- | --------- | --------------- | ------------------ | -------------------------------------------- |
| oferta     | `vitrine`      | branco    | `open`          | completo           | produto/categoria, tecnologia, marca, modelo |
| apoio      | `processo`     | branco    | `panel-lead`    | completo (navy)    | produto/categoria                            |
| prova      | `aplicacoes`   | cinza-100 | `centered-lead` | completo           | aplicação/material                           |
| autoridade | `diferenciais` | cinza-100 | `overlap`       | completo (navy)    | produto/categoria, tecnologia                |

### Blocos que ficaram fora

| Bloco            | Veredicto     | O que falta para entrar                                                                                                  |
| ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `linhas`         | insuficiente  | chip, características e foto para as 4 linhas (jato de tinta, laser, etiquetagem, codificação térmica); laser sem modelo |
| `especificacoes` | insuficiente  | especificações comparáveis por modelo (3 a 5 colunas, 4 a 10 linhas) e o modelo mais vendido                             |
| `identificar`    | insuficiente  | os 6 dados que o comercial pede para dimensionar e cotar um equipamento                                                  |
| `situacoes`      | insuficiente  | os gatilhos de contato mais comuns                                                                                       |
| `segmentos`      | insuficiente  | 7 setores com descrição, 3 equipamentos ou processos por setor e fotos de contexto                                       |
| `clientes`       | insuficiente  | logos autorizadas de clientes e 3 números com fonte identificável                                                        |
| `perguntas`      | insuficiente  | a lista real de dúvidas do comercial, com respostas aprovadas                                                            |
| `escopo`         | não se aplica | a oferta não é consolidação de compras de itens diferentes                                                               |

## Entradas do núcleo

| #   | Entrada                 | Valor                                                                               | Origem                                      |
| --- | ----------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------- |
| 1   | MARCA                   | Print Master                                                                        | briefing                                    |
| 2   | MARCA_CURTA             | Print Master                                                                        | briefing                                    |
| 3   | PRODUTO_PRINCIPAL       | Impressoras industriais Markem-Imaje                                                | briefing                                    |
| 4   | CONTEXTO_DE_USO         | linhas de produção                                                                  | briefing                                    |
| 5   | PUBLICO                 | Produção, Engenharia, Qualidade, Compras                                            | **inferido**                                |
| 6   | HERO                    | codificação e rastreabilidade, alta performance, suporte especializado              | briefing                                    |
| 7   | MARCAS_ATENDIDAS        | Markem-Imaje: logo no selo do hero, por extenso no resto                            | decisão do usuário (mockup de 26/10/2026)   |
| 8   | SELOS_DE_CONFIANCA      | tecnologia de ponta, conformidade regulatória, suporte da escolha ao pós-venda      | briefing                                    |
| 9   | ENDERECO                | Rua C56 nº 65, Qd. 103, Lt. 05, Setor Sudoeste, Goiânia/GO, CEP 74.305-350          | briefing                                    |
| 10  | URL_FINAL + PRIVACIDADE | `https://printmaster.net.br/lp-impressoras-industriais-markem-imaje/`; sem política | **inferido** — URL da página atual          |
| 11  | SHORTCODES              | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`          | default do plugin                           |
| 12  | WHATSAPP                | vazio — sem botão flutuante                                                         | ausente no material                         |
| 13  | STACK + PUBLICACAO      | Astro, `main` → `wp-build`; prévia na Vercel                                        | default do padrão                           |
| 14  | TOKENS_DE_COR + FONTE   | verdes da marca (#064337, #027653, #61e5a9); Manrope servida pelo site              | LP de locação aprovada pelo cliente (26/10) |
| 15  | CAMPANHA                | `impressora industrial`                                                             | lista informada                             |

## Assets

> Nenhum asset ficou em `assets.pendentes`: todos os slots receberam imagens da página atual do cliente. Os que estão marcados **provisório** passam no `check:lp`, mas precisam ser trocados pelo material definitivo, mantendo o nome do arquivo.

| Asset          | Arquivo esperado           | Especificação                               | Status                                                                                                                                              |
| -------------- | -------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logo           | `src/assets/LOGO.png`      | logotipo recortado (1040×240), transparente | entregue — logotipo do site, na caixa branca do header (`width={260} height={60}`)                                                                  |
| Banner do hero | `src/assets/heroBg.png`    | 1981×900, equipamento no centro (50%)       | **provisório** — montagem do mockup de 26/10/2026: 9410 e 9750 recortados do site, lado a lado, com halo, feixes de luz e reflexo sobre fundo verde |
| Selo da marca  | `src/assets/heroMarca.png` | logo Markem-Imaje recortado                 | entregue — logo da página atual do cliente                                                                                                          |

| Asset                    | Arquivo esperado                          | Especificação               | Status                                                                                           |
| ------------------------ | ----------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------ |
| Produtos da vitrine (12) | `src/assets/vitrine/produto-1…12.png`     | 800×600, fundo transparente | entregue — fotos do site, recortadas e centralizadas (9018 e 9450 tinham fundo branco, removido) |
| Fotos das aplicações (4) | `src/assets/aplicacoes/aplicacao-1…4.jpg` | 1200×900 (4:3)              | **provisório** — faixas de 442 a 631 px do site em quadro 4:3 de 600×450, com fundo desfocado    |
| Cenário                  | `src/assets/diferenciais/cenario.jpg`     | 1600×900                    | **provisório** — garrafa de vidro codificada, da página atual                                    |
| Pessoa                   | `src/assets/diferenciais/pessoa.png`      | 1220×1000, recortada        | **provisório** — três equipamentos recortados (9410, Cimpak, SmartDate X45) no lugar da pessoa   |

## Desvios locais do padrão

| Arquivo                                                                                             | O que mudou                                                                                                                                                                                                                                            | Por quê                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/styles/global.css`                                                                             | tokens com os verdes da marca; Manrope de `@fontsource-variable/manrope` com reserva de métricas Arial                                                                                                                                                 | entrada 14; a troca tardia do Google Fonts estourou o CLS no Lighthouse CI da LP de locação                                                                                                                                                                                                                                                                                                                                                                                                            |
| `src/layouts/Layout.astro`                                                                          | preload do woff2 latino no lugar dos links do Google Fonts                                                                                                                                                                                             | idem                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `src/components/Header.astro`                                                                       | mockup de abertura (26/10/2026): barra verde-escura com fio menta, logo em caixa branca dentro da barra, tagline "Impressoras industriais" e CTA verde arredondado com seta                                                                            | pedido do usuário; ordem logo · tagline · CTA mantida                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `src/components/Hero.astro`, `src/data/content.ts`                                                  | 2º mockup de abertura (26/10/2026): eyebrow "Print Master                                                                                                                                                                                              | Distribuidor autorizado", H1 em três linhas com "Markem-Imaje" em menta, pontos sem caixa, botão em pílula com WhatsApp e link "Conheça os equipamentos" (âncora `#vitrine`, `data-cta="hero-secondary"`), selo Markem-Imaje sobre o 9410 e o 9750, banner ancorado pelo centro da coluna 2 (texto 440px · janela · chat 300px); fora do WordPress o shortcode cru do chat vira a prévia do widget (CTAs `hero-chat-codificadoras`, `-consumiveis`, `-pecas`, `-manutencao`) antes da primeira pintura | pedido do usuário; grid de três colunas e coluna de 300px do chat mantidos; o botão flutuante de WhatsApp do mockup espera o número comercial |
| `src/components/sections/ProductShowcase.astro`, `src/data/sections/vitrine.ts`, `lp.manifest.json` | variante local do mockup da vitrine (26/10/2026): grupos em abas acessíveis com a contagem de modelos, cards com foto grande e painel verde-escuro (marca, modelo em destaque, "Ver equipamento"), faixa "Precisa de ajuda…" com o CTA `vitrine-ajuda` | pedido do usuário; **o `compose` sobrescreve o componente** — reaplicar após recompor                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `scripts/check-lp.mjs`                                                                              | assinaturas A8 do Header e do Hero repinadas, com comentário datado                                                                                                                                                                                    | o redesenho do mockup trocou as classes que o check conferia                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `src/components/sections/ProcessSteps.astro`, `WhyBrand.astro`                                      | brilho do botão em `rgba(2,118,83,0.6)` no lugar do laranja fixo                                                                                                                                                                                       | idem; **o `compose` sobrescreve estes dois** — reaplicar após recompor                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `src/components/BrandCarousel.astro`, `src/data/brands.ts`, `src/assets/brands/`                    | removidos                                                                                                                                                                                                                                              | nenhuma seção da composição usa o carrossel (regra 12)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Conflitos com o padrão

Nenhum.

## Dados não aplicados

- Locação de impressoras Ricoh e outsourcing de impressão (outra oferta, já atendida pela LP de locação).
- Termo "hot stamping", pausado na lista de palavras-chave.
- "Desde 2003" — sem fonte e aprovação para virar prova nesta LP.
- CNPJ — dado legal, sem bloco previsto no footer padrão.
- Aplicações excedentes (vidro, filmes flexíveis, garrafas plásticas, latas e tampas, peças de metal e plástico, plásticos extrudados, tampas) — citadas no texto de `aplicacoes`.

## Estado da entrega

- [x] Primeira versão de pé (`npm run check:lp:rascunho` passa) em: 26/10/2026
- [ ] Todos os assets reais entregues (banner, fotos de aplicação, cenário e pessoa são provisórios)
- [x] `npm run verify` passa inteiro em: 26/10/2026 — com os provisórios no lugar
- [x] Padrão B2 versão: `2.8.0`
