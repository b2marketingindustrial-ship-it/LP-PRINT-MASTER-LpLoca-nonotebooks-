/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * Variante local da Print Master, LP de notebooks (19/11/2026, docs/BRIEFING.md): 3 cards
 * escuros com a foto em palco, etiqueta, 2 características e botão de proposta; o card em
 * oferta ganha a linha de preço em amarelo (`promo`). Abaixo do grid, as marcas por extenso
 * (o cliente não enviou logos). O contrato repinado está em `lp.manifest.json`.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string]
  /** Linha de preço em destaque (oferta). Opcional. */
  promo?: string
}

export const productLines = {
  eyebrow: 'Notebooks para locação',
  title: 'Notebooks corporativos para cada perfil de equipe',
  text: 'Dell, Lenovo, HP e outras marcas para a rotina da sua empresa.',
  /** Ajuda ao lado do cabeçalho. */
  help: {
    text: 'Precisa de ajuda para escolher?',
    cta: 'Fale com um especialista',
  },
  /** Rótulo do botão de cada card. */
  itemCta: 'Solicitar proposta',
  /** Faixa de marcas abaixo do grid, por extenso. */
  brandsLabel: 'Locação de notebooks das principais marcas',
  brandNames: ['Dell', 'Lenovo', 'HP'],
  brandsMore: 'e outras marcas',
  items: [
    {
      id: 'thinkpad-t490',
      tag: 'Black Friday',
      title: 'Lenovo ThinkPad T490',
      description: 'A linha corporativa da Lenovo para a rotina da sua equipe.',
      promo: 'A partir de R$ 130,00*',
      photo: {
        src: linha1,
        alt: 'Notebook Lenovo ThinkPad T490 aberto sobre bancada com luz verde',
      },
      features: ['Intel Core i5 de 8ª geração', 'Linha ThinkPad, da Lenovo'],
    },
    {
      id: 'corporativos',
      tag: 'Multimarcas',
      title: 'Notebooks corporativos',
      description: 'Modelos Dell, Lenovo e HP para o trabalho do dia a dia.',
      photo: {
        src: linha2,
        alt: 'Notebook prata aberto e notebook grafite ao fundo, sobre luz verde',
      },
      features: ['Dell, Lenovo e HP', 'Para toda a equipe'],
    },
    {
      id: 'sob-medida',
      tag: 'Sob consulta',
      title: 'Configuração sob medida',
      description: 'Indicamos o modelo certo para cada função da sua equipe.',
      photo: {
        src: linha3,
        alt: 'Ilustração de notebook com controles de configuração na tela',
      },
      features: ['Modelo por perfil de uso', 'Outras marcas sob consulta'],
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  help: { text: string; cta: string }
  itemCta: string
  brandsLabel: string
  brandNames: readonly string[]
  brandsMore: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
