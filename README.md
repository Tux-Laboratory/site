# Tux Laboratory Website

Um site moderno e responsivo para o Tux Laboratory, desenvolvido com Next.js 14, TypeScript e Tailwind CSS, com suporte completo a Dark Mode por padrão.

## 🚀 Características

- **Next.js 14** com App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilização
- **Dark Mode** como padrão (com toggle para Light Mode)
- **Responsive Design** para todos os dispositivos
- **Lucide React** para ícones modernos
- **Componentes reutilizáveis**

## 📋 Páginas

- **Home**: Hero section com apresentação e features principais
- **Sobre**: História, missão e valores do Tux Laboratory
- **Projetos**: Showcase dos projetos open source
- **Blog**: Artigos sobre tecnologia e desenvolvimento
- **Contato**: Formulário e informações de contato

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Linguagem tipada
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Lucide React](https://lucide.dev/) - Ícones SVG
- [next-themes](https://github.com/pacocoursey/next-themes) - Gerenciamento de temas

## 🚀 Como executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Tux-Laboratory/site.git
cd site
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── app/                     # App Router (Next.js 14)
│   ├── blog/               # Página do blog
│   ├── contato/            # Página de contato
│   ├── projetos/           # Página de projetos
│   ├── sobre/              # Página sobre
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página inicial
└── components/             # Componentes reutilizáveis
    ├── footer.tsx          # Rodapé
    ├── navbar.tsx          # Navegação
    ├── theme-provider.tsx  # Provider de tema
    └── theme-toggle.tsx    # Toggle de tema
```

## 🎨 Design System

### Cores Principais
- **Azul**: `#2563eb` (blue-600)
- **Índigo**: `#4f46e5` (indigo-600)
- **Amarelo**: `#fbbf24` (yellow-400)

### Dark Mode
- Configurado para ser o tema padrão
- Toggle disponível na navegação
- Transições suaves entre temas

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm start

# Lint
npm run lint
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🌟 Features Implementadas

### Componentes
- [x] Navbar responsiva com navegação
- [x] Footer com links e informações
- [x] Theme Provider para Dark/Light mode
- [x] Theme Toggle com ícones dinâmicos

### Páginas
- [x] Home com hero section e features
- [x] Sobre com missão e valores
- [x] Projetos com showcase de repositórios
- [x] Blog com artigos mockados
- [x] Contato com formulário e informações

### Estilização
- [x] Design moderno e limpo
- [x] Gradientes e efeitos visuais
- [x] Hover states e transições
- [x] Cards responsivos
- [x] Tipografia otimizada

## 🚀 Deploy

O projeto está pronto para deploy em:

- **Vercel** (recomendado)
- **Netlify** 
- **GitHub Pages**
- **Servidor próprio**

### Deploy na Vercel

```bash
npm i -g vercel
vercel
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

- **GitHub**: [Tux-Laboratory](https://github.com/Tux-Laboratory)
- **Email**: contato@tuxlaboratory.dev
- **Website**: [tuxlaboratory.dev](https://tuxlaboratory.dev)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ pelo [Tux Laboratory](https://github.com/Tux-Laboratory)
