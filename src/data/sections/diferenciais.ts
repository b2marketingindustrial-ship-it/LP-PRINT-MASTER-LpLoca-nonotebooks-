/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Variante local da Print Master, LP de notebooks (19/11/2026, docs/BRIEFING.md):
 * bloco em largura total sobre o ThinkPad T490 do post de Black Friday (o preto à esquerda
 * já vem na imagem), texto sobre o preto e 5 cards sobrepostos à base. São 5 exatos: o
 * grid é `lg:grid-cols-5`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: 'Soluções Print Master',
  /** Cada item é uma linha do H2 (quebra forçada); a última sai em menta. */
  titleLines: ['Tecnologia para o', 'próximo passo da sua empresa.'],
  text: 'Locação de notebooks Dell, Lenovo, HP e outras marcas, com suporte especializado e sem investir na compra. Sua equipe cresce, a Print Master acompanha.',
  /** Rótulo do botão da seção. */
  cta: 'Solicite sua proposta',
  scene: {
    src: cenario,
    alt: 'Notebook Lenovo ThinkPad T490 aberto sobre bancada iluminada em verde',
  },
  reasons: [
    {
      icon: 'tag',
      title: 'Sem investimento inicial',
      description: 'Equipe sua empresa sem comprar nem imobilizar capital.',
    },
    {
      icon: 'users',
      title: 'Equipe que cresce',
      description: 'Notebooks para quem está chegando, na hora certa.',
    },
    {
      icon: 'layers',
      title: 'Multimarcas',
      description: 'Dell, Lenovo, HP e outras marcas para cada perfil.',
    },
    {
      icon: 'wrench',
      title: 'Suporte especializado',
      description: 'Atendimento técnico durante toda a locação.',
    },
    {
      icon: 'shield',
      title: 'Desde 2003',
      description: 'Mais de 20 anos em soluções para empresas.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  cta: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
