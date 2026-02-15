

# CriptoHub — Hub Educacional Bitcoin & Cripto

## Identidade Visual
- Tema escuro: fundo preto absoluto (#000000), cor primária amarelo (#EAB308), texto branco
- Bordas arredondadas (rounded-2xl), cinza escuro para bordas e fundos secundários
- Design minimalista, sem ícones, sem emojis — visual tech/Web3
- Max-width 6xl, layout centralizado

## Navbar
- Fixa no topo, fundo preto
- Links: Home, Materiais, Docs, FAQ, Contribuir, Projeto
- Hover amarelo, sem dropdown, sem ícones

## Páginas

### 1. Home (/)
- **Hero**: título grande "CriptoHub", subtítulo explicativo, botão amarelo "Começar" → /materials
- **Sobre o Projeto**: texto explicando o objetivo educacional, foco em Bitcoin e fundamentos técnicos
- **Sobre o Autor**: nome, bio técnica profissional, sem foto, sem redes sociais

### 2. Materiais (/materials)
- **Carrossel de Vídeos**: componente com iframes YouTube embed, botões Previous/Next, loop infinito, estilo moderno com borda cinza e hover amarelo
- **Leitura Obrigatória**: grid de cards com título, descrição, botões "Ler" (link para /docs/slug) e "Download" (placeholder), cards com borda cinza e hover amarelo

### 3. Docs (/docs)
- Lista de artigos técnicos com título, descrição e botão "Abrir"
- Rota dinâmica /docs/:slug renderizando o conteúdo do artigo
- Artigos iniciais: Bitcoin Intro, Blockchain Basics, Mining Guide
- Tipografia limpa estilo prose invertido (dark mode)

### 4. FAQ (/faq)
- Lista simples de perguntas (amarelo) e respostas (cinza claro)
- Sem acordeão, sem animações complexas

### 5. Contribuir (/contribute)
- Texto explicando apoio ao projeto
- Endereço BTC em bloco destacado: fonte monoespaçada, fundo gray-900, rounded-xl

### 6. Projeto (/project)
- Texto explicando como contribuir com código
- Botão "Enviar contribuição" linkando para repositório externo (placeholder)

## Footer
- Rodapé simples e minimalista em todas as páginas

## Notas Técnicas
- React + Vite + React Router (adaptado do pedido Next.js)
- Conteúdos dos "artigos MDX" implementados como dados estáticos em TypeScript
- Zero dependências extras, zero backend
- Projeto compila e roda sem erros

