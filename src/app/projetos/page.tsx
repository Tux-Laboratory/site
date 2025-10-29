import { Github, ExternalLink, Star, GitFork, Users, BookOpen, Laptop, Smartphone } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "TuxLearn Platform",
    description: "Plataforma de ensino online open-source desenvolvida especificamente para cursos de tecnologia gratuitos.",
    image: "/projects/tuxlearn.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    github: "https://github.com/Tux-Laboratory/tuxlearn-platform",
    demo: "https://learn.tuxlaboratory.dev",
    stars: 342,
    forks: 67,
    status: "Em Desenvolvimento",
    category: "Educação",
    impact: "500+ estudantes ativos"
  },
  {
    id: 2,
    name: "CodeMentor Bot",
    description: "Bot inteligente que ajuda estudantes com dúvidas de programação usando IA e conhecimento da comunidade.",
    image: "/projects/codementor.jpg",
    technologies: ["Python", "OpenAI API", "Discord.py", "MongoDB"],
    github: "https://github.com/Tux-Laboratory/codementor-bot",
    demo: null,
    stars: 189,
    forks: 28,
    status: "Estável",
    category: "IA Educacional",
    impact: "1000+ dúvidas resolvidas"
  },
  {
    id: 3,
    name: "TuxMobile Academy",
    description: "App mobile para aprender programação através de mini-jogos e desafios interativos.",
    image: "/projects/tuxmobile.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Gamification"],
    github: "https://github.com/Tux-Laboratory/tuxmobile-academy",
    demo: "https://play.google.com/store/apps/tuxmobile",
    stars: 234,
    forks: 45,
    status: "Beta",
    category: "Mobile Learning",
    impact: "2000+ downloads"
  },
  {
    id: 4,
    name: "Accessibility Hub",
    description: "Conjunto de ferramentas para tornar aplicações web mais acessíveis para pessoas com deficiência.",
    image: "/projects/accessibility.jpg",
    technologies: ["JavaScript", "CSS", "ARIA", "Web Standards"],
    github: "https://github.com/Tux-Laboratory/accessibility-hub",
    demo: "https://a11y.tuxlaboratory.dev",
    stars: 156,
    forks: 32,
    status: "Estável",
    category: "Acessibilidade",
    impact: "50+ sites melhorados"
  },
  {
    id: 5,
    name: "Community Dashboard",
    description: "Dashboard para gestão de comunidades educacionais com métricas, eventos e comunicação.",
    image: "/projects/dashboard.jpg",
    technologies: ["Vue.js", "Node.js", "Socket.io", "Chart.js"],
    github: "https://github.com/Tux-Laboratory/community-dashboard",
    demo: "https://community.tuxlaboratory.dev",
    stars: 98,
    forks: 19,
    status: "Em Desenvolvimento",
    category: "Gestão",
    impact: "15+ comunidades ativas"
  },
  {
    id: 6,
    name: "TuxCode Editor",
    description: "Editor de código online colaborativo com suporte a múltiplas linguagens e execução em tempo real.",
    image: "/projects/editor.jpg",
    technologies: ["Monaco Editor", "WebSocket", "Docker", "Kubernetes"],
    github: "https://github.com/Tux-Laboratory/tuxcode-editor",
    demo: "https://code.tuxlaboratory.dev",
    stars: 423,
    forks: 89,
    status: "Beta",
    category: "Ferramenta de Ensino",
    impact: "300+ projetos criados"
  },
  {
    id: 7,
    name: "Digital Inclusion Kit",
    description: "Kit de ferramentas para organizações que querem implementar programas de inclusão digital.",
    image: "/projects/inclusion.jpg",
    technologies: ["React", "Material-UI", "Express", "MySQL"],
    github: "https://github.com/Tux-Laboratory/digital-inclusion-kit",
    demo: null,
    stars: 167,
    forks: 23,
    status: "Estável",
    category: "Inclusão Digital",
    impact: "10+ organizações usando"
  },
  {
    id: 8,
    name: "Youth Career Hub",
    description: "Plataforma que conecta jovens formados em tech com oportunidades de estágio e emprego.",
    image: "/projects/career.jpg",
    technologies: ["Django", "React", "PostgreSQL", "Celery"],
    github: "https://github.com/Tux-Laboratory/youth-career-hub",
    demo: "https://careers.tuxlaboratory.dev",
    stars: 145,
    forks: 34,
    status: "Em Desenvolvimento",
    category: "Empregabilidade",
    impact: "80+ jovens colocados"
  }
];

function getStatusColor(status: string) {
  switch (status) {
    case "Estável":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Beta":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Alpha":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "Em Desenvolvimento":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "Educação":
    case "IA Educacional":
    case "Ferramenta de Ensino":
      return <BookOpen className="h-5 w-5" />;
    case "Mobile Learning":
      return <Smartphone className="h-5 w-5" />;
    case "Acessibilidade":
    case "Inclusão Digital":
      return <Users className="h-5 w-5" />;
    default:
      return <Laptop className="h-5 w-5" />;
  }
}

export default function Projetos() {
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nossos Projetos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Projetos open-source focados em educação, inclusão digital e empoderamento de jovens 
            através da tecnologia. Todos desenvolvidos com e para a comunidade.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">8</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projetos Ativos</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Usuários Impactados</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">300+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Contribuidores</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Open Source</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    {getCategoryIcon(project.category)}
                  </div>
                  <div className="text-sm font-medium">{project.category}</div>
                </div>
              </div>

              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.name}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Impact */}
                <div className="mb-3">
                  <span className="inline-flex items-center px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">
                    <Users className="h-3 w-3 mr-1" />
                    {project.impact}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {project.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    {project.forks}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Áreas de Atuação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const categoryProjects = projects.filter(p => p.category === category);
              return (
                <div key={category} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{categoryProjects.length} projetos</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-800 dark:to-teal-900 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Quer Contribuir?
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Nossos projetos são desenvolvidos pela comunidade, para a comunidade. 
            Junte-se a nós e ajude a transformar vidas através da tecnologia!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Tux-Laboratory"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="h-5 w-5 mr-2" />
              Ver no GitHub
            </a>
            <a
              href="/contato"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              <Users className="h-5 w-5 mr-2" />
              Junte-se à Comunidade
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}