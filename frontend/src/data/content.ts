export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "bitcoin-intro",
    title: "Introdução ao Bitcoin",
    description: "Entenda o que é Bitcoin, como surgiu e por que ele importa para o futuro do dinheiro.",
    content: `
# Introdução ao Bitcoin

Bitcoin é um sistema de dinheiro eletrônico peer-to-peer, criado por Satoshi Nakamoto em 2008. Diferente das moedas tradicionais, o Bitcoin não depende de intermediários como bancos ou governos.

## O que é Bitcoin?

Bitcoin é simultaneamente:
- Uma rede de pagamentos descentralizada
- Uma unidade monetária digital (BTC)
- Um protocolo de consenso distribuído

## Como surgiu?

Em 31 de outubro de 2008, Satoshi Nakamoto publicou o whitepaper "Bitcoin: A Peer-to-Peer Electronic Cash System". O bloco gênesis foi minerado em 3 de janeiro de 2009.

## Por que importa?

Bitcoin resolve o problema do gasto duplo sem necessidade de uma autoridade central. Pela primeira vez na história, é possível transferir valor digitalmente sem confiar em terceiros.

## Características fundamentais

- **Descentralizado**: nenhuma entidade controla a rede
- **Limitado**: apenas 21 milhões de unidades existirão
- **Pseudônimo**: transações são públicas, mas identidades são protegidas
- **Imutável**: transações confirmadas não podem ser revertidas
- **Aberto**: qualquer pessoa pode participar da rede

## Próximos passos

Para entender como o Bitcoin funciona na prática, leia sobre os fundamentos da Blockchain.
    `,
  },
  {
    slug: "blockchain-basics",
    title: "Fundamentos de Blockchain",
    description: "Como funciona a tecnologia por trás do Bitcoin: blocos, hashes e consenso.",
    content: `
# Fundamentos de Blockchain

A blockchain é a estrutura de dados que sustenta o Bitcoin. É um registro público, distribuído e imutável de todas as transações já realizadas.

## O que é um bloco?

Cada bloco contém:
- Um conjunto de transações válidas
- O hash do bloco anterior (formando a "cadeia")
- Um nonce (número usado na mineração)
- Um timestamp

## Hashing

O Bitcoin usa o algoritmo SHA-256 para criar hashes. Um hash é uma "impressão digital" dos dados — qualquer alteração nos dados produz um hash completamente diferente.

## Consenso

A rede Bitcoin usa Proof of Work (PoW) como mecanismo de consenso. Os mineradores competem para encontrar um nonce que produza um hash válido (abaixo de um alvo de dificuldade).

## Imutabilidade

Para alterar uma transação passada, seria necessário refazer o trabalho computacional de todos os blocos subsequentes — algo praticamente impossível com o poder computacional atual da rede.

## Nós da rede

Qualquer pessoa pode rodar um nó completo (full node), que valida independentemente todas as transações e blocos. Isso garante a descentralização da rede.
    `,
  },
  {
    slug: "mining-guide",
    title: "Guia de Mineração",
    description: "Entenda o processo de mineração, hardware necessário e economia por trás.",
    content: `
# Guia de Mineração de Bitcoin

Mineração é o processo pelo qual novas transações são adicionadas à blockchain e novos bitcoins são criados.

## Como funciona?

1. Transações pendentes são agrupadas em um bloco candidato
2. O minerador tenta encontrar um nonce que produza um hash válido
3. O primeiro minerador a encontrar a solução propaga o bloco para a rede
4. Os outros nós verificam e aceitam o bloco
5. O minerador recebe a recompensa (subsídio + taxas)

## Recompensa de bloco

A recompensa começou em 50 BTC por bloco e é reduzida pela metade a cada 210.000 blocos (~4 anos). Esse evento é chamado de halving.

## Hardware

- **CPU**: os primeiros bitcoins foram minerados em processadores comuns
- **GPU**: placas de vídeo trouxeram mais eficiência
- **FPGA**: hardware programável intermediário
- **ASIC**: chips especializados dominam a mineração atual

## Dificuldade

A dificuldade de mineração se ajusta automaticamente a cada 2.016 blocos (~2 semanas) para manter o tempo médio entre blocos em aproximadamente 10 minutos.

## Pools de mineração

Como a dificuldade é extremamente alta, mineradores individuais se unem em pools para combinar poder computacional e dividir as recompensas proporcionalmente.

## Consumo energético

A mineração de Bitcoin consome energia significativa, mas incentiva o uso de fontes renováveis e energia que seria desperdiçada.
    `,
  },
];

export const videos = [
  {
    title: "O que é Bitcoin?",
    embedId: "s4g1XFU8Gto",
  },
  {
    title: "Como funciona a Blockchain?",
    embedId: "SSo_EIwHSd4",
  },
  {
    title: "Mineração de Bitcoin explicada",
    embedId: "GmOzih6I1zs",
  },
];

export const faqItems = [
  {
    question: "O que é Bitcoin?",
    answer:
      "Bitcoin é um sistema de dinheiro eletrônico peer-to-peer que permite transações online diretamente entre as partes, sem intermediários como bancos.",
  },
  {
    question: "Bitcoin é seguro?",
    answer:
      "A rede Bitcoin nunca foi hackeada. A segurança vem da criptografia e da descentralização. O importante é proteger suas chaves privadas.",
  },
  {
    question: "Como comprar Bitcoin?",
    answer:
      "Você pode comprar Bitcoin em exchanges centralizadas ou descentralizadas, via P2P, ou até em caixas eletrônicos de Bitcoin em algumas cidades.",
  },
  {
    question: "O que é uma wallet?",
    answer:
      "Uma wallet (carteira) é um software ou hardware que armazena suas chaves privadas e permite enviar e receber Bitcoin.",
  },
  {
    question: "O que é o halving?",
    answer:
      "O halving é um evento programado que reduz pela metade a recompensa dos mineradores a cada 210.000 blocos (~4 anos), controlando a emissão de novos bitcoins.",
  },
  {
    question: "Bitcoin é anônimo?",
    answer:
      "Bitcoin é pseudônimo. As transações são públicas na blockchain, mas não estão diretamente ligadas a identidades reais — a menos que o usuário revele essa ligação.",
  },
];
