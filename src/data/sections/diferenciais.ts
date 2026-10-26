/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e a pessoa recortada, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'
import pessoa from '@assets/diferenciais/pessoa.png'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Precisão para', 'sua linha de produção'],
  text: 'Na Print Master, oferecemos as soluções de marcação e rastreabilidade Markem-Imaje, com codificação precisa e legível para alimentos, bebidas, farmacêuticos e eletrônicos.',
  scene: {
    src: cenario,
    alt: 'Garrafa de vidro com código impresso por jato de tinta',
  },
  person: {
    src: pessoa,
    alt: 'Impressoras Markem-Imaje de jato de tinta, transferência térmica e Print & Apply',
  },
  reasons: [
    {
      icon: 'cpu',
      title: 'Tecnologia de ponta',
      description: 'Sistemas modernos, com alta performance e confiabilidade.',
    },
    {
      icon: 'shield',
      title: 'Conformidade regulatória',
      description: 'Produtos que atendem às normas locais e internacionais.',
    },
    {
      icon: 'users',
      title: 'Suporte especializado',
      description: 'Apoio técnico da escolha do equipamento ao pós-venda.',
    },
    {
      icon: 'leaf',
      title: 'Sustentabilidade',
      description: 'Menor consumo de energia e de materiais na operação.',
    },
    {
      icon: 'gear',
      title: 'Codificação confiável',
      description: 'Equipamentos de alta performance para a sua produção.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  person: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
