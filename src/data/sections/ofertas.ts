/**
 * Dados da seção "Ofertas em destaque" (fase: oferta). Seção local da LP de notebooks,
 * fora da biblioteca B2 (docs/BRIEFING.md, 19/11/2026).
 *
 * Coloca em destaque os dois posts da campanha — a oferta de Black Friday do ThinkPad T490
 * e o "Sua equipe cresceu?" — com a oferta transcrita em texto ao lado, para quem não lê a
 * arte. Todo o copy saiu dos próprios posts. Os 2 posts são o contrato: `posts` tem 2 itens.
 *
 * Sazonal: depois da Black Friday, troque `tape`, o título e a oferta, ou tire a seção da
 * composição (manifesto + página).
 */
import type { Photo } from '@data/types'

import postBlackFriday from '@assets/ofertas/post-black-friday.jpg'
import postEquipe from '@assets/ofertas/post-equipe.jpg'

export interface OfferPost {
  id: string
  /** Legenda do card, 1 frase curta. */
  label: string
  /** Rótulo da ação do card (o card inteiro é o CTA). */
  cta: string
  photo: Photo
}

export const offers = {
  /** Texto repetido nas fitas do topo da seção. */
  tape: 'Black Friday',
  eyebrow: 'Ofertas em destaque',
  title: 'Alugue seu notebook Lenovo na Black Friday',
  /** Trecho do título em menta (precisa estar contido em `title`). */
  highlight: 'Lenovo',
  product: {
    name: 'ThinkPad T490',
    spec: 'Processador Intel Core i5 de 8ª geração',
  },
  price: { from: 'A partir de', currency: 'R$', value: '130,00', mark: '*' },
  text: 'Equipe sua empresa sem investir na compra.',
  /** Rótulo do botão da oferta. */
  cta: 'Quero esta oferta',
  note: '*Promoção válida enquanto durar o estoque.',
  posts: [
    {
      id: 'thinkpad',
      label: 'ThinkPad T490 a partir de R$ 130,00*',
      cta: 'Solicite sua proposta',
      photo: {
        src: postBlackFriday,
        alt: 'Post Black Friday Print Master: alugue seu notebook Lenovo ThinkPad T490, com processador Intel Core i5 de 8ª geração, a partir de R$ 130,00',
      },
    },
    {
      id: 'equipe',
      label: 'Sua equipe cresceu? Notebooks para quem está chegando',
      cta: 'Converse com nossos especialistas',
      photo: {
        src: postEquipe,
        alt: 'Post Print Master: sua equipe cresceu? Alugue notebooks Dell, Lenovo, HP e outras marcas para quem está chegando',
      },
    },
  ],
} as const satisfies {
  tape: string
  eyebrow: string
  title: string
  highlight: string
  product: { name: string; spec: string }
  price: { from: string; currency: string; value: string; mark: string }
  text: string
  cta: string
  note: string
  posts: readonly [OfferPost, OfferPost]
}
