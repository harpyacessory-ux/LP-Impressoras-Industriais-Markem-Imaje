/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`. O conteúdo
 * que vem no template é o exemplo de referência, com imagens placeholder.
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

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu equipamento',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Codificação industrial',
  title: site.product,
  text: 'Codificação e rastreabilidade com precisão para a sua linha de produção, com equipamentos de alta performance e suporte especializado da Print Master.',
  banner: {
    src: heroBg,
    alt: 'Impressora jato de tinta Markem-Imaje 9750 em destaque sobre fundo verde-escuro',
  },
  points: [
    { icon: 'barcode', line1: 'Codificação e', line2: 'rastreabilidade' },
    { icon: 'gear', line1: 'Equipamentos de', line2: 'alta performance' },
    { icon: 'users', line1: 'Suporte', line2: 'especializado' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com quem entende de impressoras industriais.',
  text: 'Nossa equipe ajuda a escolher o equipamento certo para a sua linha e a sua embalagem. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'zap', label: 'Tecnologia de ponta' },
    { icon: 'shield', label: 'Conformidade regulatória' },
    { icon: 'wrench', label: 'Suporte da escolha ao pós-venda' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: 'Seus dados serão usados apenas para responder à sua solicitação.',
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
