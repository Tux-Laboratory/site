import Link from "next/link";
import { Clock, Users, Star, Award, BookOpen, Play, Code, Laptop, Smartphone, Database, Paintbrush, Monitor } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Programação Web para Iniciantes",
    description: "Aprenda HTML, CSS e JavaScript do zero. Perfeito para quem nunca programou antes.",
    duration: "8 semanas",
    level: "Iniciante",
    students: 245,
    rating: 4.9,
    category: "Web Development",
    image: "/courses/web-dev.jpg",
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    features: ["HTML5 & CSS3", "JavaScript ES6+", "Projetos Práticos", "Portfolio Online"],
    prerequisites: "Nenhum",
    available: true
  },
  {
    id: 2,
    title: "Mobile First com React Native",
    description: "Desenvolva apps mobile profissionais para iOS e Android com uma única base de código.",
    duration: "12 semanas",
    level: "Intermediário",
    students: 189,
    rating: 4.8,
    category: "Mobile Development",
    image: "/courses/react-native.jpg",
    icon: <Smartphone className="h-6 w-6" />,
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    features: ["React Native", "Navigation", "APIs & Backend", "Publicação nas Stores"],
    prerequisites: "JavaScript básico",
    available: true
  },
  {
    id: 3,
    title: "Banco de Dados e SQL",
    description: "Domine SQL e aprenda a modelar, criar e gerenciar bancos de dados relacionais.",
    duration: "6 semanas",
    level: "Iniciante",
    students: 312,
    rating: 4.7,
    category: "Database",
    image: "/courses/database.jpg",
    icon: <Database className="h-6 w-6" />,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    features: ["SQL Fundamentals", "PostgreSQL", "Modelagem de Dados", "Queries Avançadas"],
    prerequisites: "Lógica básica",
    available: true
  },
  {
    id: 4,
    title: "UI/UX Design Digital",
    description: "Aprenda a criar interfaces bonitas e funcionais usando Figma e princípios de UX.",
    duration: "10 semanas",
    level: "Iniciante",
    students: 156,
    rating: 4.9,
    category: "Design",
    image: "/courses/ui-ux.jpg",
    icon: <Paintbrush className="h-6 w-6" />,
    color: "from-pink-400 to-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    features: ["Design Thinking", "Figma", "Prototipação", "Testes de Usabilidade"],
    prerequisites: "Criatividade",
    available: true
  },
  {
    id: 5,
    title: "Python para Ciência de Dados",
    description: "Análise de dados, visualização e machine learning básico com Python.",
    duration: "14 semanas",
    level: "Intermediário",
    students: 98,
    rating: 4.8,
    category: "Data Science",
    image: "/courses/python-data.jpg",
    icon: <Monitor className="h-6 w-6" />,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    features: ["Pandas & NumPy", "Matplotlib", "Machine Learning", "Projetos Reais"],
    prerequisites: "Matemática básica",
    available: true
  },
  {
    id: 6,
    title: "DevOps e Cloud Computing",
    description: "Docker, Kubernetes, AWS e automação de deployments para aplicações modernas.",
    duration: "16 semanas",
    level: "Avançado",
    students: 67,
    rating: 4.9,
    category: "DevOps",
    image: "/courses/devops.jpg",
    icon: <Laptop className="h-6 w-6" />,
    color: "from-teal-400 to-cyan-600",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    features: ["Docker & Kubernetes", "AWS/Azure", "CI/CD", "Monitoramento"],
    prerequisites: "Linux básico, programação",
    available: false
  }
];

function getLevelColor(level: string) {
  switch (level) {
    case "Iniciante":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Intermediário":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "Avançado":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
}

export default function Cursos() {
  const availableCourses = courses.filter(course => course.available);
  const upcomingCourses = courses.filter(course => !course.available);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Cursos Gratuitos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transforme seu futuro com nossos cursos de tecnologia 100% gratuitos. 
            Aprenda com profissionais da indústria e construa uma carreira sólida em tech.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">15</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cursos Disponíveis</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Alunos Ativos</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">4.8</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avaliação Média</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Gratuito</div>
          </div>
        </div>

        {/* Available Courses */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Cursos Disponíveis Agora
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Course Header */}
                <div className={`h-48 bg-gradient-to-br ${course.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {course.icon}
                    </div>
                    <div className="text-sm font-medium opacity-90">{course.category}</div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Course Info */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{course.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      O que você vai aprender:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {course.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {course.features.length > 2 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                          +{course.features.length - 2} mais
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students} alunos
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      {course.rating}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/cursos/${course.id}`}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors group"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Começar Curso
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Courses */}
        {upcomingCourses.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Próximos Cursos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden opacity-75"
                >
                  <div className={`h-48 bg-gradient-to-br ${course.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {course.icon}
                      </div>
                      <div className="text-sm font-medium">Em Breve</div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {course.description}
                    </p>
                    <button
                      disabled
                      className="w-full px-4 py-3 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg font-semibold cursor-not-allowed"
                    >
                      Em Desenvolvimento
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-800 dark:to-teal-900 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Começar sua Jornada?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de jovens que já estão transformando suas vidas 
            através da tecnologia. É totalmente gratuito!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscricao"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Inscreva-se Gratuitamente
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Saiba Mais Sobre Nós
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}