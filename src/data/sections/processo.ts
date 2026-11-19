/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * Variante local da Print Master, LP de notebooks (19/11/2026, docs/BRIEFING.md):
 * cabeçalho com botão à direita e 4 cards escuros numerados, sem ícones.
 * O contrato repinado (sem `icon`) está em `lp.manifest.json`.
 */

export interface ProcessStep {
  id: string
  title: string
  description: string
  /** Prazo ou marco da etapa, 2–4 palavras. Opcional. */
  when?: string
}

/**
 * Tipo anotado, e não `as const satisfies`: sem nenhum `when` nos itens, o tipo
 * literal não teria a propriedade e o componente deixaria de tipar.
 */
export interface Process {
  eyebrow: string
  title: string
  text: string
  /** Rótulo do botão da seção. */
  cta: string
  microcopy: string
  steps: readonly ProcessStep[]
}

export const process: Process = {
  eyebrow: 'Como funciona',
  title: 'Do pedido à entrega, cuidamos de cada etapa.',
  text: 'Uma proposta sob medida para equipar a sua equipe sem complicação.',
  cta: 'Fale com um especialista',
  microcopy: 'Sem investimento na compra',
  steps: [
    {
      id: 'diagnostico',
      title: 'Diagnóstico',
      description: 'Entendemos quantos notebooks sua equipe precisa e para qual rotina.',
    },
    {
      id: 'proposta',
      title: 'Proposta sob medida',
      description: 'Indicamos os modelos e montamos a sua proposta de locação.',
    },
    {
      id: 'entrega',
      title: 'Entrega',
      description: 'Levamos os notebooks até a sua empresa para a equipe começar.',
    },
    {
      id: 'suporte',
      title: 'Suporte especializado',
      description: 'Acompanhamos a sua equipe com suporte durante toda a locação.',
    },
  ],
}
