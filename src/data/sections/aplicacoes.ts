/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto 4:3 e cabeçalho centrado. O card inteiro é o CTA.
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
  title: 'Codificação para cada tipo de embalagem',
  text: 'Do papelão ao metal: codificação para alimentos, cabos, garrafas, latas, vidro, ovos e outras superfícies da sua produção.',
  items: [
    {
      id: 'papel-cartao',
      label: 'Papel cartão',
      description:
        'Tintas de secagem rápida com resistência a manchas para impressão em papel cartão.',
      photo: { src: app1, alt: 'Data de validade e lote impressos em embalagem de papel cartão' },
    },
    {
      id: 'papelao',
      label: 'Papelão ondulado',
      description: 'Econômico e conforme as normas: o código certo na caixa certa, sempre.',
      photo: { src: app2, alt: 'Data de produção e lote impressos em caixa de papelão ondulado' },
    },
    {
      id: 'cabos-fios',
      label: 'Cabos e fios',
      description: 'Códigos permanentes e legíveis, mesmo nos ambientes de produção mais adversos.',
      photo: { src: app3, alt: 'Marcação impressa na capa de cabos elétricos' },
    },
    {
      id: 'alimentos',
      label: 'Alimentos',
      description:
        'Tintas 100% seguras e comestíveis, em conformidade com normas locais e nacionais.',
      photo: { src: app4, alt: 'Queijos embalados com data e código de barras impressos' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
