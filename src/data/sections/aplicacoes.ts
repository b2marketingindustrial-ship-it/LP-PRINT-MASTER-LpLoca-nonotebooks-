/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * Variante local da Print Master, LP de notebooks (19/11/2026, docs/BRIEFING.md):
 * cabeçalho à esquerda com link à direita e 4 cards-botão com arte 6:5 numerada (ícone em
 * neon sobre o círculo de luz dos posts) e painel escuro. O card inteiro é o CTA.
 * Os segmentos são momentos de uso, não clientes — inferidos, validar com o comercial.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.jpg'
import app2 from '@assets/aplicacoes/aplicacao-2.jpg'
import app3 from '@assets/aplicacoes/aplicacao-3.jpg'
import app4 from '@assets/aplicacoes/aplicacao-4.jpg'

export interface Application {
  id: string
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Soluções por necessidade',
  title: 'Notebooks para cada momento da sua empresa',
  text: 'Locação de notebooks para empresas de todos os portes, do primeiro colaborador à equipe inteira.',
  /** Link à direita do cabeçalho. */
  cta: 'Encontre a solução ideal',
  items: [
    {
      id: 'escritorios',
      label: 'Escritórios e administrativo',
      description: 'Notebooks para a rotina administrativa, financeira e comercial.',
      photo: { src: app1, alt: 'Ícone de prédio comercial em neon sobre círculo de luz verde' },
    },
    {
      id: 'novos-colaboradores',
      label: 'Novos colaboradores',
      description: 'Equipamento pronto para quem está chegando à sua equipe.',
      photo: { src: app2, alt: 'Ícone de equipe em neon sobre círculo de luz verde' },
    },
    {
      id: 'projetos',
      label: 'Projetos temporários',
      description: 'Mais notebooks para demandas com prazo definido, sem comprar.',
      photo: { src: app3, alt: 'Ícone de relógio em neon sobre círculo de luz verde' },
    },
    {
      id: 'treinamentos',
      label: 'Treinamentos e eventos',
      description: 'Notebooks para turmas, treinamentos internos e eventos corporativos.',
      photo: { src: app4, alt: 'Ícone de tela de apresentação em neon sobre círculo de luz verde' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  cta: string
  items: readonly [Application, Application, Application, Application]
}
