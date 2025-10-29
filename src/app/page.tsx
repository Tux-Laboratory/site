import Link from "next/link";
import { ArrowRight, Code, Heart, Users, Target, BookOpen, Laptop, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 dark:from-emerald-700 dark:via-teal-800 dark:to-cyan-900">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent"></div>
        
        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-300/20 rounded-full blur-sm animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-400/20 rounded-full blur-sm animate-pulse delay-500"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Tux<span className="text-yellow-300">Laboratory</span>
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-100 mb-4 max-w-4xl mx-auto">
              🚀 Um projeto ambicioso para democratizar o acesso à tecnologia
            </p>
            <p className="text-lg text-emerald-200 mb-8 max-w-3xl mx-auto">
              Estamos começando nossa jornada! Junte-se a nós para criar uma iniciativa que oferecerá 
              cursos gratuitos e oportunidades para jovens descobrirem seu potencial na tecnologia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quero-aprender"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Quero Aprender! 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/quero-ensinar"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="mr-2 h-5 w-5" />
                Quero Ensinar!
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">0</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Alunos (começando!)</div>
            </div>
            <div className="p-6">
              <div className="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">?</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Cursos (em desenvolvimento)</div>
            </div>
            <div className="p-6">
              <div className="text-3xl sm:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">100%</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Gratuito Sempre</div>
            </div>
            <div className="p-6">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">∞</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Potencial de Impacto</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Como Vamos Transformar Vidas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Nosso sonho é oferecer oportunidades reais para jovens descobrirem seu potencial na tecnologia, 
              independente de sua origem ou situação socioeconômica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Cursos Gratuitos
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Programação, design, robótica e muito mais. Conteúdo de qualidade totalmente gratuito
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Comunidade Ativa
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Conectamos jovens com mentores e colegas em uma comunidade acolhedora e colaborativa
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Projetos Reais
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experiência prática com projetos que fazem diferença na comunidade e no portfólio
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Foco no Futuro
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Preparamos jovens para carreiras promissoras no mercado de tecnologia em crescimento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section temporarily removed - will add when we have real testimonials */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-800 dark:to-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto para Transformar Seu Futuro?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Faça parte do início desta jornada! Estamos procurando pessoas que querem 
            aprender e ensinar. É gratuito, é acessível, é para você!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quero-aprender"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Heart className="mr-2 h-5 w-5" />
              Quero Aprender
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/quero-ensinar"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              <Users className="mr-2 h-5 w-5" />
              Quero Ensinar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}