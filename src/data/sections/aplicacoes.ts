/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * VARIANTE LOCAL — Print Master, mockup de 27/10/2026 (docs/BRIEFING.md): H2 em duas linhas,
 * cards com foto 8:5 (recortadas do mockup) e corpo verde-escuro, e uma faixa de ajuda no fim.
 * O card inteiro é o CTA.
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
  eyebrow: 'Aplicações',
  title: 'Codificação para cada tipo de embalagem.',
  /** O H2 quebrado em duas linhas, como no mockup. */
  titleLines: ['Codificação para cada', 'tipo de embalagem.'],
  text: 'Soluções para identificar embalagens, produtos e diferentes superfícies da sua produção.',
  help: {
    text: 'Encontre a solução ideal para sua aplicação.',
    cta: 'Fale com um especialista',
  },
  items: [
    {
      id: 'papel-cartao',
      label: 'Papel cartão',
      description:
        'Codificação nítida em embalagens de papel cartão, com tintas de secagem rápida.',
      photo: { src: app1, alt: 'Data e hora impressas em embalagem de papel cartão' },
    },
    {
      id: 'papelao',
      label: 'Papelão ondulado',
      description: 'Identificação de caixas com informações de lote, datas e rastreabilidade.',
      photo: { src: app2, alt: 'Data de produção e lote impressos em caixa de papelão ondulado' },
    },
    {
      id: 'cabos-fios',
      label: 'Cabos e fios',
      description: 'Marcação legível para identificar cabos e fios ao longo da produção.',
      photo: { src: app3, alt: 'Marcação impressa na capa de cabos elétricos pretos' },
    },
    {
      id: 'alimentos',
      label: 'Alimentos',
      description: 'Soluções de codificação para as necessidades da indústria de alimentos.',
      photo: { src: app4, alt: 'Queijos embalados com lote e datas impressos' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleLines: readonly string[]
  text: string
  help: { text: string; cta: string }
  items: readonly [Application, Application, Application, Application]
}
