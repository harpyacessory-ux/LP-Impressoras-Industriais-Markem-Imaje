/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * Alternativa ao painel de identificação para quando o atrito do visitante não é
 * "não sei o que pedir" e sim "não sei como isso acontece" — típico de serviço,
 * instalação, adequação a norma e contrato de manutenção.
 *
 * 4 a 6 etapas. Com 3 a promessa parece rasa; com 7 ninguém lê.
 */
import type { IconName } from '@data/icons'

export interface ProcessStep {
  id: string
  icon: IconName
  title: string
  description: string
  /** Prazo ou marco da etapa, 2–4 palavras. Opcional. */
  when?: string
}

/** Sem prazos confirmados no material: nenhuma etapa leva `when`. */
export const process: {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  steps: readonly ProcessStep[]
} = {
  eyebrow: 'Como funciona',
  title: 'Da escolha do equipamento ao pós-venda',
  text: 'Acompanhamos a sua linha em cada etapa, da escolha da tecnologia de codificação à assistência depois da instalação.',
  microcopy: 'Suporte técnico em todas as etapas',
  steps: [
    {
      id: 'diagnostico',
      icon: 'search',
      title: 'Diagnóstico da linha',
      description: 'Entendemos o produto, a embalagem e a velocidade da sua linha de produção.',
    },
    {
      id: 'tecnologia',
      icon: 'sliders',
      title: 'Escolha da tecnologia',
      description:
        'Indicamos jato de tinta, transferência térmica ou Print & Apply para o seu caso.',
    },
    {
      id: 'instalacao',
      icon: 'wrench',
      title: 'Instalação',
      description: 'Entregamos e integramos o equipamento à sua linha de produção.',
    },
    {
      id: 'suporte',
      icon: 'users',
      title: 'Suporte e pós-venda',
      description: 'Equipe técnica preparada para apoiar a sua operação depois da instalação.',
    },
  ],
}
