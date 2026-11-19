/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`. Frases e
 * oferta vêm dos dois posts de referência da campanha (docs/BRIEFING.md).
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/**
 * Vocabulário de CTA. Desvio registrado no BRIEFING (19/11/2026): os posts da campanha
 * pedem "Solicite sua proposta" e "Converse com nossos especialistas"; "Identifique seu
 * equipamento" não faz sentido para notebook.
 */
export const cta = {
  primary: 'Solicite sua proposta',
  primaryShort: 'Proposta',
  secondary: 'Converse com especialistas',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Tecnologia para sua equipe',
  title: `${site.product} para ${site.context}`,
  /** Trecho do H1 em amarelo, em linha própria (precisa estar contido em `title`). */
  highlight: 'notebooks',
  text: 'Notebooks Dell, Lenovo, HP e outras marcas para a sua equipe trabalhar desde o primeiro dia, sem investir na compra.',
  /** Selo de campanha acima do eyebrow. Some se ficar vazio. */
  promo: {
    tag: 'Black Friday',
    text: 'ThinkPad T490 a partir de R$ 130,00*',
  },
  banner: {
    src: heroBg,
    alt: 'Notebooks prata e grafite abertos sobre um círculo de luz verde',
  },
  points: [
    { icon: 'shield', line1: 'Desde 2003', line2: 'no mercado' },
    { icon: 'tag', line1: 'Sem investir', line2: 'na compra' },
    { icon: 'users', line1: 'Suporte', line2: 'especializado' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  promo: { tag: string; text: string } | null
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Soluções para sua empresa',
  title: 'Equipe sua empresa sem investir na compra.',
  /** Trecho final do título em menta (precisa estar contido em `title`). */
  highlight: 'sem investir na compra.',
  text: 'Locação de notebooks Dell, Lenovo, HP e outras marcas, com suporte especializado e proposta sob medida para o tamanho da sua equipe.',
  /** Chamada acima do espaço reservado ao WhatsApp. */
  whatsappLead: 'Prefere falar com a nossa equipe?',
  trust: [
    { icon: 'tag', label: 'Sem investir na compra' },
    { icon: 'users', label: 'Suporte especializado' },
    { icon: 'pin', label: 'Goiânia/GO' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: 'Seus dados serão usados apenas para responder à sua solicitação.',
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  whatsappLead: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
