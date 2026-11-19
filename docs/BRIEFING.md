# Registro da LP — o que a ficha decidiu e o que a execução fez

> Preenchido pelo agente **durante a execução**, a partir de `docs/FICHA-LP.md`. Este arquivo existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa.

## Origem

| Campo               | Valor                                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Ficha de execução   | `docs/FICHA-LP.md`                                                                                                                     |
| Data da ficha       | 19/11/2026                                                                                                                             |
| Versão do padrão    | 2.8.0                                                                                                                                  |
| Validada em         | 19/11/2026 por `npm run ficha`                                                                                                         |
| Base                | LP Print Master de locação de impressoras (primeiro commit deste repositório), com a mesma estrutura de seções                         |
| Material do cliente | dois posts da campanha: Black Friday "Alugue seu notebook Lenovo" (ThinkPad T490) e "Sua equipe cresceu? Alugue notebooks"             |
| Pedido              | usar a estrutura pronta, mudar cores e design com base nos posts, e colocar os posts em destaque na LP; publicar no GitHub e na Vercel |

## Campanha

| Campo                   | Valor                                                                            |
| ----------------------- | -------------------------------------------------------------------------------- |
| Palavra-chave principal | `locação de notebooks` — no H1 ("Locação de notebooks para empresas") e no title |
| Origem                  | **inferida** do produto; confirmar com a campanha real                           |
| Área atendida           | Goiânia/GO, confirmada pelo endereço: meta description e selo na cotação         |
| Negativas / proibidos   | nenhum                                                                           |

## Composição

| Fase       | Seção          | Fundo | Respiro         | Observação                                                        |
| ---------- | -------------- | ----- | --------------- | ----------------------------------------------------------------- |
| oferta     | `ofertas`      | light | `open`          | **seção local**, fora da biblioteca B2: os dois posts em destaque |
| oferta     | `linhas`       | light | `even`          | 3 cards                                                           |
| apoio      | `processo`     | light | `panel-lead`    | bloco "navy" da primeira metade (os 4 cards)                      |
| prova      | `aplicacoes`   | gray  | `centered-lead` | artes neon no lugar de fotos                                      |
| autoridade | `diferenciais` | gray  | `overlap`       | bloco "navy" da segunda metade                                    |

`ofertas` foi acrescentada à mão em `lp.manifest.json` e em `src/pages/index.astro` (o `compose` não a conhece). O `npm run ficha` deriva só as quatro da biblioteca — é esperado. Os respiros conferem: 104 px entre `ofertas` e `linhas`, 124 px entre `linhas` e `processo`.

## Design — de onde veio cada decisão

Tudo saiu dos dois posts de referência:

| Elemento dos posts                               | Onde entrou na LP                                                                                          |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Fundo quase preto esverdeado (`#000`, `#02140f`) | tokens `night-950…600`; os tons "light"/"gray" da composição viraram os dois fundos escuros (`rhythm.mjs`) |
| Verde neon e brilho atrás dos notebooks          | cor de ação `neon` `#3ee39f`, sombras e halos verdes, palco dos cards                                      |
| Menta de "LENOVO" e "Solicite sua proposta."     | `mint` `#67dfa7`: CTA em pílula de contorno no header, destaques de título, eyebrows                       |
| Amarelo de "R$ 130,00" e "Alugue notebooks"      | `sun` `#fed605`: "notebooks" no H1, preços, números das etapas e dos segmentos                             |
| Fitas de Black Friday                            | fitas cruzadas animadas no topo de `ofertas` (param com `prefers-reduced-motion`)                          |
| Marca d'água vertical "PRINT MASTER"             | lateral esquerda do hero                                                                                   |
| Anel do logo ao fundo                            | canto superior direito do hero                                                                             |
| Barra menta ao lado da especificação             | bloco "ThinkPad T490" em `ofertas`                                                                         |
| Pílula amarela "nossos especialistas."           | CTA secundário do hero, "Converse com especialistas"                                                       |

A estrutura fixa continua a do padrão (grid de 3 colunas do hero com o chat de 300 px, cotação 1.05fr · 1fr, footer em uma linha); as assinaturas A8 do `check-lp.mjs` passam sem repinar.

## Assets

Todos derivados dos dois posts, gerados por script (recorte, máscara e composição com `sharp`). Nenhum placeholder.

| Asset                   | Arquivo                                 | Como foi feito                                                                                                                          |
| ----------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Logo                    | `src/assets/LOGO.png`                   | o logotipo da LP de impressoras com o texto preto convertido em branco (ícone menta mantido)                                            |
| Banner do hero          | `src/assets/heroBg.png`                 | notebook prata + grafite sobre o círculo verde, recortado do post "Sua equipe cresceu?"; marca d'água e seta amarela cobertas; 1981×900 |
| Posts em destaque       | `src/assets/ofertas/post-*.jpg`         | os dois posts como foram enviados (1080×1350)                                                                                           |
| ThinkPad T490           | `src/assets/linhas/linha-1.png`         | recorte do post de Black Friday, com os textos do post cobertos por uma vinheta preta                                                   |
| Notebooks corporativos  | `src/assets/linhas/linha-2.png`         | recorte do notebook prata do post "Sua equipe cresceu?"                                                                                 |
| Configuração sob medida | `src/assets/linhas/linha-3.png`         | ilustração neon (SVG) de notebook com controles                                                                                         |
| Aplicações (4)          | `src/assets/aplicacoes/aplicacao-*.jpg` | artes neon (SVG) com ícone sobre o círculo de luz, 1200×1000                                                                            |
| Cenário                 | `src/assets/diferenciais/cenario.jpg`   | ThinkPad T490 do post de Black Friday sobre fundo preto, 1600×900                                                                       |
| Logos de marcas         | —                                       | removidas (eram de impressoras); Dell, Lenovo e HP aparecem por extenso                                                                 |

**Provisórios:** os cards de `linhas` repetem os dois notebooks dos posts e o terceiro é ilustração. Com fotos reais de modelos Dell e HP, trocar `linha-2`/`linha-3`.

## Desvios desta execução

- **Página inteira escura**, com a paleta dos posts. Nomes de token do padrão mantidos e apontando para a paleta nova; tokens novos `night-*`, `neon`, `mint`, `sun` em `src/styles/global.css`.
- **Seção local `ofertas`** (`OfferHighlights.astro`, `src/data/sections/ofertas.ts`) com os dois posts em destaque — pedido do cliente. CTAs `ofertas-destaque`, `ofertas-thinkpad`, `ofertas-equipe`. **Sazonal**: depois da Black Friday, trocar o conteúdo ou tirar a seção (manifesto + página) e o `hero.promo`.
- **Vocabulário de CTA** (`content.ts`): "Solicite sua proposta" e "Converse com especialistas", como nos posts. "Identifique seu equipamento" não serve para notebook.
- **`linhas`**: 3 cards (contrato aceita 3–4), campo opcional `promo` (linha de preço em amarelo) e faixa de marcas por extenso (`brandNames`) no lugar das logos. `brands.ts` vazio.
- **`aplicacoes`**: momentos de uso (escritórios, novos colaboradores, projetos temporários, treinamentos e eventos) em vez de setores; artes 6:5 — spec do manifesto ajustada para 1200×1000.

## Pontos inferidos — validar com o cliente

- Suporte especializado na locação de notebooks (herdado da LP de impressoras).
- "Desde 2003" vale para a empresa (herdado da LP de impressoras).
- Sequência de `processo` e os momentos de uso de `aplicacoes`.
- Se R$ 130,00 é valor mensal — a LP repete o post ("A partir de R$ 130,00\*") sem período.
- URL final da página.

## Estado da entrega

- [x] `npm run verify` passa (ficha, check:lp, lint, prettier, build) em 19/11/2026
- [x] Publicada para prévia na Vercel
- [ ] Fotos reais dos modelos Dell e HP
- [ ] Validação dos pontos inferidos
