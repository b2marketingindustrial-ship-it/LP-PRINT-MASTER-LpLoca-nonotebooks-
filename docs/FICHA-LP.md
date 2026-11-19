```yaml
ficha: 1
padrao: 2.8.0
cliente: Print Master
produto: Locação de notebooks
data: 2026-11-19

site:
  brand: Print Master
  brandShort: Print Master
  product: Locação de notebooks
  context: empresas
  url: https://printmaster.net.br/lp-locacao-de-notebooks-para-empresas/
  address: Rua C56 nº 65, Qd. 103, Lt. 05, Setor Sudoeste, Goiânia/GO, CEP 74.305-350
  privacyUrl: ''
  whatsapp: ''
  shortcodes:
    chat: '[atendimento_chat id="default"]'
    form: '[atendimento_form id="default-form"]'

campanha:
  mainKeyword: locação de notebooks
  negatives: []
  forbidden: []
  areaAtendida: Goiânia/GO, confirmada pelo endereço
  onde: selo
  familias:
    - nome: locacao-aluguel
      termos:
        [
          locação de notebooks,
          locação de notebook,
          aluguel de notebooks,
          aluguel de notebook,
          alugar notebook,
          aluguel de notebook para empresas,
        ]
      responde: linhas
    - nome: marcas
      termos:
        [
          aluguel de notebook Lenovo,
          aluguel de notebook Dell,
          aluguel de notebook HP,
          locação de notebook Lenovo,
          aluguel de ThinkPad,
        ]
      responde: linhas
    - nome: equipe-crescendo
      termos: [notebook para novos funcionários, locação de notebooks para equipe]
      responde: aplicacoes
    - nome: goiania
      termos:
        [aluguel de notebook Goiânia, locação de notebooks Goiânia, aluguel de notebook em Goiânia]
      responde: null

publico: [Administrativo, Compras, TI, Diretoria, RH]

marcas:
  usarLogos: false
  nomes: [Dell, Lenovo, HP]
  autorizacao: marcas por extenso, como nos posts da campanha; sem logos enviadas

tokens:
  padrao: false
  # paleta dos dois posts de referência da campanha (19/11/2026); fonte Manrope mantida
  cores:
    fundo: '#010d09'
    acao: '#3ee39f'
    menta: '#67dfa7'
    amarelo: '#fed605'

conteudo:
  title: null
  description: 'Locação de notebooks para empresas em Goiânia: Dell, Lenovo e HP sem investir na compra, com suporte especializado. ThinkPad T490 a partir de R$ 130,00.'
  hero:
    eyebrow: Tecnologia para sua equipe
    title: Locação de notebooks para empresas
    text: Notebooks Dell, Lenovo, HP e outras marcas para a sua equipe trabalhar desde o primeiro dia, sem investir na compra.
    points:
      - icon: shield
        line1: Desde 2003
        line2: no mercado
      - icon: tag
        line1: Sem investir
        line2: na compra
      - icon: users
        line1: Suporte
        line2: especializado
  quote:
    eyebrow: Soluções para sua empresa
    title: Equipe sua empresa sem investir na compra.
    text: Locação de notebooks Dell, Lenovo, HP e outras marcas, com suporte especializado e proposta sob medida para o tamanho da sua equipe.
    trust:
      - icon: tag
        label: Sem investir na compra
      - icon: users
        label: Suporte especializado
      - icon: pin
        label: Goiânia/GO
    lgpd: Seus dados serão usados apenas para responder à sua solicitação.

blocos:
  linhas:
    veredicto: completo
    responde: [locacao-aluguel, marcas]
    papeis: [Administrativo, Compras, TI]
    # variante local: 3 cards escuros, 2 características, preço opcional e marcas por extenso
    eyebrow: Notebooks para locação
    title: Notebooks corporativos para cada perfil de equipe
    text: Dell, Lenovo, HP e outras marcas para a rotina da sua empresa.
    help:
      text: Precisa de ajuda para escolher?
      cta: Fale com um especialista
    itemCta: Solicitar proposta
    brandsLabel: Locação de notebooks das principais marcas
    items:
      - id: thinkpad-t490
        tag: Black Friday
        title: Lenovo ThinkPad T490
        description: A linha corporativa da Lenovo para a rotina da sua equipe.
        features: [Intel Core i5 de 8ª geração, 'Linha ThinkPad, da Lenovo']
        photo: Notebook Lenovo ThinkPad T490 aberto sobre bancada com luz verde
      - id: corporativos
        tag: Multimarcas
        title: Notebooks corporativos
        description: Modelos Dell, Lenovo e HP para o trabalho do dia a dia.
        features: ['Dell, Lenovo e HP', Para toda a equipe]
        photo: Notebook prata aberto e notebook grafite ao fundo, sobre luz verde
      - id: sob-medida
        tag: Sob consulta
        title: Configuração sob medida
        description: Indicamos o modelo certo para cada função da sua equipe.
        features: [Modelo por perfil de uso, Outras marcas sob consulta]
        photo: Ilustração de notebook com controles de configuração na tela

  vitrine:
    veredicto: insuficiente
    falta: só há um modelo com especificação (ThinkPad T490); a vitrine pede 6 a 24 produtos

  especificacoes:
    veredicto: insuficiente
    falta: faltam modelos com especificações comparáveis (processador, memória, armazenamento, tela)

  identificar:
    veredicto: insuficiente
    falta: o comercial não informou os dados que pede para dimensionar uma locação de notebooks

  situacoes:
    veredicto: insuficiente
    falta: o comercial não listou os gatilhos de contato mais comuns

  processo:
    veredicto: completo
    responde: [locacao-aluguel]
    papeis: [Administrativo, Compras]
    # sequência inferida; validar com o comercial
    eyebrow: Como funciona
    title: Do pedido à entrega, cuidamos de cada etapa.
    microcopy: Sem investimento na compra
    text: Uma proposta sob medida para equipar a sua equipe sem complicação.
    cta: Fale com um especialista
    steps:
      - id: diagnostico
        title: Diagnóstico
        description: Entendemos quantos notebooks sua equipe precisa e para qual rotina.
      - id: proposta
        title: Proposta sob medida
        description: Indicamos os modelos e montamos a sua proposta de locação.
      - id: entrega
        title: Entrega
        description: Levamos os notebooks até a sua empresa para a equipe começar.
      - id: suporte
        title: Suporte especializado
        description: Acompanhamos a sua equipe com suporte durante toda a locação.

  aplicacoes:
    veredicto: completo
    responde: [locacao-aluguel, equipe-crescendo]
    papeis: [Administrativo, RH, Diretoria]
    # momentos de uso inferidos a partir do post "Sua equipe cresceu?"; artes neon no lugar de fotos
    eyebrow: Soluções por necessidade
    title: Notebooks para cada momento da sua empresa
    text: Locação de notebooks para empresas de todos os portes, do primeiro colaborador à equipe inteira.
    cta: Encontre a solução ideal
    items:
      - id: escritorios
        label: Escritórios e administrativo
        description: Notebooks para a rotina administrativa, financeira e comercial.
        photo: Ícone de prédio comercial em neon sobre círculo de luz verde
      - id: novos-colaboradores
        label: Novos colaboradores
        description: Equipamento pronto para quem está chegando à sua equipe.
        photo: Ícone de equipe em neon sobre círculo de luz verde
      - id: projetos
        label: Projetos temporários
        description: Mais notebooks para demandas com prazo definido, sem comprar.
        photo: Ícone de relógio em neon sobre círculo de luz verde
      - id: treinamentos
        label: Treinamentos e eventos
        description: Notebooks para turmas, treinamentos internos e eventos corporativos.
        photo: Ícone de tela de apresentação em neon sobre círculo de luz verde

  segmentos:
    veredicto: insuficiente
    falta: não há setores com vocabulário próprio nem modelos indicados por setor

  clientes:
    veredicto: insuficiente
    falta: faltam 4 a 8 logos autorizadas e 3 números com fonte

  diferenciais:
    veredicto: completo
    responde: [locacao-aluguel]
    papeis: [Diretoria, Compras]
    eyebrow: Soluções Print Master
    titleLines: [Tecnologia para o, próximo passo da sua empresa.]
    text: Locação de notebooks Dell, Lenovo, HP e outras marcas, com suporte especializado e sem investir na compra. Sua equipe cresce, a Print Master acompanha.
    cta: Solicite sua proposta
    scene: Notebook Lenovo ThinkPad T490 aberto sobre bancada iluminada em verde
    reasons:
      - icon: tag
        title: Sem investimento inicial
        description: Equipe sua empresa sem comprar nem imobilizar capital.
      - icon: users
        title: Equipe que cresce
        description: Notebooks para quem está chegando, na hora certa.
      - icon: layers
        title: Multimarcas
        description: Dell, Lenovo, HP e outras marcas para cada perfil.
      - icon: wrench
        title: Suporte especializado
        description: Atendimento técnico durante toda a locação.
      - icon: shield
        title: Desde 2003
        description: Mais de 20 anos em soluções para empresas.

  perguntas:
    veredicto: insuficiente
    falta: o comercial não enviou a lista real de dúvidas, com respostas aprovadas

  escopo:
    veredicto: nao-se-aplica
    falta: a oferta não é consolidação de compras de itens diferentes

assets:
  pendentes: []

conflitos:
  - pede: CTAs "Solicite sua proposta." e "Converse com nossos especialistas." dos posts
    regra: vocabulário fixo de CTA ("Solicite sua cotação", "Identifique seu equipamento")
    entrou: os rótulos dos posts; "Identifique seu equipamento" não faz sentido para notebook

naoAplicado:
  - CNPJ 21.762.387/0001-93 (dado legal, sem bloco previsto no footer padrão)
```

# Ficha de execução — Print Master / Locação de notebooks

> Montada no editor em 19/11/2026 a partir dos dois posts de referência da campanha (Black Friday "Alugue seu notebook Lenovo" e "Sua equipe cresceu?") e da estrutura da LP de locação de impressoras da mesma empresa, que serviu de base. Os pontos marcados como **inferido** precisam ser validados com o cliente; se mudarem, a ficha é regerada.

## O que foi decidido

LP de serviço para a campanha de locação de notebooks da Print Master, com a palavra-chave `locação de notebooks` no H1 ("Locação de notebooks para empresas") e no title. Goiânia entra na meta description e num selo da cotação, porque o endereço a confirma.

A estrutura é a mesma da LP de impressoras (header, hero com chat, linhas, processo, aplicações, diferenciais, cotação, footer); mudam as cores e o design, tirados dos posts: fundo quase preto esverdeado, verde neon de ação, menta nos destaques e amarelo no preço e na fita de Black Friday.

Os dois posts entram **em destaque** numa seção local logo abaixo do hero (`ofertas`, fora da biblioteca B2): a oferta do ThinkPad T490 a partir de R$ 130,00\* transcrita em texto ao lado das duas artes, cada uma clicável como CTA.

## Viabilidade por fase

| Fase       | Bloco             | Veredicto    | Responde                  | Papéis                        | O que falta                                             |
| ---------- | ----------------- | ------------ | ------------------------- | ----------------------------- | ------------------------------------------------------- |
| Oferta     | `ofertas` (local) | completo     | locação e aluguel, marcas | Compras, Diretoria            | sazonal: trocar depois da Black Friday                  |
| Oferta     | `linhas`          | completo     | locação e aluguel, marcas | Administrativo, Compras, TI   | 2º e 3º cards **inferidos**; faltam fotos reais         |
| Oferta     | `vitrine`         | insuficiente | —                         | —                             | só 1 modelo com especificação                           |
| Apoio      | `processo`        | completo     | locação e aluguel         | Administrativo, Compras       | sequência **inferida**; sem prazos                      |
| Prova      | `aplicacoes`      | completo     | locação e aluguel, equipe | Administrativo, RH, Diretoria | momentos de uso **inferidos**                           |
| Autoridade | `diferenciais`    | completo     | locação e aluguel         | Diretoria, Compras            | suporte especializado **inferido** da LP de impressoras |

## Pendências

| O que falta                                        | Quem resolve | Especificação                                                    |
| -------------------------------------------------- | ------------ | ---------------------------------------------------------------- |
| Fotos reais dos modelos Dell e HP                  | cliente      | PNG 800×600, fundo escuro ou transparente                        |
| Confirmar URL final da página                      | cliente      | hoje `printmaster.net.br/lp-locacao-de-notebooks-para-empresas/` |
| Validar suporte/manutenção na locação de notebooks | cliente      | herdado da LP de impressoras                                     |
| Validar os momentos de uso de `aplicacoes`         | comercial    | inferidos do post "Sua equipe cresceu?"                          |
| Validar a sequência de `processo`                  | comercial    | diagnóstico, proposta, entrega, suporte; sem prazos              |
| Data de fim da oferta de Black Friday              | cliente      | a seção `ofertas` e o selo do hero são sazonais                  |
| WhatsApp comercial                                 | cliente      | número com DDD; liga o botão flutuante                           |
| Política de privacidade                            | cliente      | link para a nota de LGPD                                         |
