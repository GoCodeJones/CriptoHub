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

export interface Video {
  title: string;
  embedId: string;
}

export const videos: Video[] = [
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

export interface ResourceLink {
  title: string;
  description: string;
  url: string;
}

export interface ResourceCategory {
  category: string;
  links: ResourceLink[];
}

export const externalResources: ResourceCategory[] = [
  {
    category: "Bitcoin",
    links: [
      { 
        title: "O que é Bitcoin?", 
        description: "Vídeo completo sobre os fundamentos do Bitcoin",
        url: "https://www.youtube.com/watch?v=9JWCAbVTMlY" 
      },
      { 
        title: "O que é Bitcoin? - Nubank", 
        description: "Guia completo para iniciantes",
        url: "https://blog.nubank.com.br/o-que-e-bitcoin/" 
      },
      { 
        title: "Antifragilidade do Bitcoin", 
        description: "Como o Bitcoin se fortalece com adversidades",
        url: "https://portaldobitcoin.uol.com.br/como-a-antifragilidade-do-bitcoin-faz-ele-ser-quase-imparavel/" 
      },
      { 
        title: "Bitcoin pode ir a zero?", 
        description: "Análise sobre a segurança do Bitcoin",
        url: "https://br.cointelegraph.com/news/mythbusting-why-bitcoin-can-never-go-to-zero" 
      },
      { 
        title: "O Bitcoin não morreu", 
        description: "Resiliência e história do Bitcoin",
        url: "https://coinext.com.br/blog/o-bitcoin-nao-morreu" 
      },
      { 
        title: "Antifragilidade e Bitcoin - InfoMoney", 
        description: "Como ganhar com a volatilidade do Bitcoin",
        url: "https://www.infomoney.com.br/mercados/como-o-conceito-de-antifragilidade-pode-te-ajudar-a-ganhar-dinheiro-com-bitcoin/" 
      },
      { 
        title: "Guia Bitcoin - InfoMoney", 
        description: "Guia completo sobre Bitcoin",
        url: "https://www.infomoney.com.br/guias/o-que-e-bitcoin/" 
      },
    ],
  },
  {
    category: "Blockchain",
    links: [
      { 
        title: "Blockchain explicada - Parte 1", 
        description: "Introdução visual à tecnologia blockchain",
        url: "https://www.youtube.com/watch?v=dZid_N5i6Tg" 
      },
      { 
        title: "Blockchain explicada - Parte 2", 
        description: "Aprofundamento em conceitos técnicos",
        url: "https://www.youtube.com/watch?v=w_Q9Ska_DLw" 
      },
      { 
        title: "Blockchain explicada - Parte 3", 
        description: "Casos de uso e aplicações práticas",
        url: "https://www.youtube.com/watch?v=ztQEaQ06GYs" 
      },
      { 
        title: "Artigo Blockchain - Alura", 
        description: "Artigo técnico sobre blockchain",
        url: "https://www.alura.com.br/artigos/blockchain" 
      },
      { 
        title: "O que é Blockchain? - IBM", 
        description: "Explicação corporativa sobre blockchain",
        url: "https://www.ibm.com/br-pt/think/topics/blockchain" 
      },
      { 
        title: "Blockchain - AWS", 
        description: "Visão da Amazon sobre blockchain",
        url: "https://aws.amazon.com/pt/what-is/blockchain/" 
      },
    ],
  },
  {
    category: "Web3",
    links: [
      { 
        title: "Web3 explicada - Parte 1", 
        description: "Introdução ao futuro da internet",
        url: "https://www.youtube.com/watch?v=-PTvSV6N6zY" 
      },
      { 
        title: "Web3 explicada - Parte 2", 
        description: "Descentralização e aplicações",
        url: "https://www.youtube.com/watch?v=yx0iffro8Og" 
      },
      { 
        title: "Web3 explicada - Parte 3", 
        description: "NFTs, DAOs e metaverso",
        url: "https://www.youtube.com/watch?v=sP_HGJUFc8Y" 
      },
      { 
        title: "Web3 explicada - Parte 4", 
        description: "Oportunidades e desafios",
        url: "https://www.youtube.com/watch?v=8WX158LWvv4" 
      },
      { 
        title: "O que é Web3? - AWS", 
        description: "Visão técnica da AWS sobre Web3",
        url: "https://aws.amazon.com/pt/what-is/web3/" 
      },
      { 
        title: "Web 3.0 e negócios", 
        description: "Como Web3 impacta empresas",
        url: "https://innowise.com/pt/blog/what-is-web-3-0-and-why-it-matters-for-business/" 
      },
    ],
  },
  {
    category: "FAQ - Perguntas Frequentes",
    links: [
      {
        title: "O que é Bitcoin?",
        description: "Sistema de dinheiro eletrônico peer-to-peer que permite transações online diretamente entre as partes, sem intermediários.",
        url: "#faq-bitcoin"
      },
      {
        title: "Bitcoin é seguro?",
        description: "A rede Bitcoin nunca foi hackeada. A segurança vem da criptografia e descentralização.",
        url: "#faq-seguranca"
      },
      {
        title: "Como comprar Bitcoin?",
        description: "Exchanges centralizadas/descentralizadas, P2P ou caixas eletrônicos especializados.",
        url: "#faq-comprar"
      },
      {
        title: "O que é uma wallet?",
        description: "Software ou hardware que armazena chaves privadas e permite enviar/receber Bitcoin.",
        url: "#faq-wallet"
      },
      {
        title: "O que é o halving?",
        description: "Evento que reduz pela metade a recompensa dos mineradores a cada ~4 anos.",
        url: "#faq-halving"
      },
      {
        title: "Bitcoin é anônimo?",
        description: "Bitcoin é pseudônimo. Transações são públicas mas não ligadas diretamente a identidades reais.",
        url: "#faq-anonimato"
      },
    ],
  },
  {
    category: "Recursos Internacionais",
    links: [
      { 
        title: "Bitcoin Overview - Investopedia", 
        description: "Comprehensive guide to Bitcoin basics",
        url: "https://www.investopedia.com/terms/b/bitcoin.asp" 
      },
      { 
        title: "Blockchain for Beginners - Reddit", 
        description: "Community-driven blockchain explanation",
        url: "https://www.reddit.com/r/CryptoCurrency/comments/u0fww6/blockchain_explained_for_beginners/" 
      },
      { 
        title: "What is Web3? - Coursera", 
        description: "Academic perspective on Web3",
        url: "https://www.coursera.org/articles/web-three" 
      },
      { 
        title: "Crypto Market Strength - The Atlantic", 
        description: "Analysis of cryptocurrency market resilience",
        url: "https://www.theatlantic.com/ideas/archive/2024/03/crypto-bitcoin-market-strength/677643/" 
      },
    ],
  },
];