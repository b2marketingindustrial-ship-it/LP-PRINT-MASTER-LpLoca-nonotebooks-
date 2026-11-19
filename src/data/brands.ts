/**
 * Logos de marcas — usadas pelo primitivo `BrandCarousel`.
 *
 * LP de notebooks (19/11/2026, docs/BRIEFING.md): o cliente não enviou logos. As marcas
 * (Dell, Lenovo, HP e outras) aparecem por extenso na faixa de `linhas`, vindas de
 * `src/data/sections/linhas.ts`. Com a lista vazia o carrossel não renderiza. Para usar
 * logos, salve os arquivos em `src/assets/brands/` (400×160) e preencha a lista.
 */
import type { ImageMetadata } from 'astro'

export interface Brand {
  name: string
  src: ImageMetadata
}

export const brands: readonly Brand[] = []
