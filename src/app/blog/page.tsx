import { Calendar, Clock, User, BookOpen, TrendingUp, Heart, Star } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: "Como o Tux Laboratory Transformou a Vida de 500+ Jovens",
      excerpt: "Descubra histórias inspiradoras de jovens que mudaram suas vidas através da tecnologia e educação digital gratuita.",
      category: "Impacto Social",
      author: "Equipe Tux Lab",
      date: "2025-01-15",
      readTime: "8 min",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["Inclusão Digital", "Jovens", "Tecnologia", "Educação"]
    },
    {
      id: 2,
      title: "Programação para Iniciantes: Guia Completo 2025",
      excerpt: "Um roadmap completo para começar sua jornada na programação, desde conceitos básicos até projetos práticos.",
      category: "Educação",
      author: "Carlos Silva",
      date: "2025-01-12",
      readTime: "12 min",
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["Programação", "Iniciantes", "JavaScript", "Python"]
    }
  ]

  const recentPosts = [
    {
      id: 3,
      title: "Linux para Jovens: Por que Começar com Open Source?",
      excerpt: "Entenda como o Linux pode ser a porta de entrada para o mundo da tecnologia e desenvolvimento.",
      category: "Open Source",
      author: "Ana Santos",
      date: "2025-01-10",
      readTime: "6 min",
      tags: ["Linux", "Open Source", "Iniciantes"]
    },
    {
      id: 4,
      title: "Criando Seu Primeiro Site: HTML, CSS e JavaScript",
      excerpt: "Tutorial passo a passo para criar um site do zero usando tecnologias fundamentais da web.",
      category: "Desenvolvimento Web",
      author: "Pedro Lima",
      date: "2025-01-08",
      readTime: "15 min",
      tags: ["HTML", "CSS", "JavaScript", "Web Development"]
    },
    {
      id: 5,
      title: "Carreiras em Tech: Oportunidades para Jovens em 2025",
      excerpt: "Explore as principais áreas de tecnologia e como se preparar para o mercado de trabalho.",
      category: "Carreira",
      author: "Maria Oliveira",
      date: "2025-01-05",
      readTime: "10 min",
      tags: ["Carreira", "Tecnologia", "Mercado", "Jovens"]
    },
    {
      id: 6,
      title: "Python para Análise de Dados: Primeiros Passos",
      excerpt: "Aprenda como usar Python para análise de dados e descobrir insights interessantes.",
      category: "Data Science",
      author: "João Costa",
      date: "2025-01-03",
      readTime: "8 min",
      tags: ["Python", "Data Science", "Análise", "Pandas"]
    },
    {
      id: 7,
      title: "Histórias de Sucesso: Ex-alunos que Mudaram de Vida",
      excerpt: "Conheça jovens que saíram do zero e hoje trabalham em grandes empresas de tecnologia.",
      category: "Inspiração",
      author: "Equipe Tux Lab",
      date: "2025-01-01",
      readTime: "7 min",
      tags: ["Histórias", "Sucesso", "Carreira", "Inspiração"]
    },
    {
      id: 8,
      title: "Introdução ao Git e GitHub para Iniciantes",
      excerpt: "Aprenda a usar as ferramentas essenciais para controle de versão e colaboração em projetos.",
      category: "Ferramentas",
      author: "Lucas Ferreira",
      date: "2024-12-28",
      readTime: "9 min",
      tags: ["Git", "GitHub", "Versionamento", "Colaboração"]
    }
  ]

  const categories = [
    { name: "Educação", count: 12, color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" },
    { name: "Impacto Social", count: 8, color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200" },
    { name: "Desenvolvimento Web", count: 15, color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
    { name: "Open Source", count: 10, color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
    { name: "Carreira", count: 6, color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
    { name: "Data Science", count: 7, color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30 dark:from-gray-900 dark:via-emerald-950/30 dark:to-teal-950/30">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Blog Educacional Tux Laboratory
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Conhecimento que{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Transforma Vidas
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Artigos, tutoriais e histórias inspiradoras sobre tecnologia, programação e 
              inclusão digital. Conteúdo criado por nossa comunidade para nossa comunidade.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="h-4 w-4 mr-2" />
                50+ artigos publicados
              </div>
              <div className="flex items-center text-teal-600 dark:text-teal-400">
                <Heart className="h-4 w-4 mr-2" />
                10k+ leitores mensais
              </div>
              <div className="flex items-center text-purple-600 dark:text-purple-400">
                <Star className="h-4 w-4 mr-2" />
                Conteúdo 100% gratuito
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Artigos em Destaque
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-emerald-400 to-teal-600 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                    <span className="mx-2">•</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
                  >
                    Ler artigo
                    <svg className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts & Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Recent Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Artigos Recentes
              </h2>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 mr-3">
                        {post.category}
                      </span>
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
                    >
                      Ler artigo
                      <svg className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Categorias
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/blog/categoria/${category.name.toLowerCase()}`}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {category.name}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${category.color}`}>
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">
                  📧 Newsletter Educacional
                </h3>
                <p className="text-emerald-100 mb-4 text-sm">
                  Receba artigos exclusivos, dicas de carreira e oportunidades 
                  de aprendizado direto no seu email.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                    Inscrever-se
                  </button>
                </div>
                <p className="text-xs text-emerald-200 mt-2">
                  100% gratuito. Sem spam. Cancele quando quiser.
                </p>
              </div>

              {/* Popular Tags */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Tags Populares
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'Python', 'React', 'Linux', 'Git', 'HTML/CSS', 'Node.js', 'Data Science', 'Open Source', 'Carreira'].map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}