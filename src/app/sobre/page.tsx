import { Clock, Target, Zap, Heart, Users, BookOpen, Award, Globe, Star } from "lucide-react";
import Link from "next/link";

export default function Sobre() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 pt-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <Heart className="h-4 w-4 mr-2" />
            Um Sonho Que Está Começando
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre o Tux Laboratory
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            🚀 Uma ideia ambiciosa que está nascendo! Uma iniciativa para democratizar o acesso à tecnologia 
            e capacitar jovens para construir um futuro mais próspero
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Nossa Visão</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              O Tux Laboratory é mais do que uma ideia - é um sonho que está tomando forma! Nossa visão é criar 
              uma plataforma onde a tecnologia seja verdadeiramente acessível a todos, independente de origem 
              social ou econômica. Queremos ofertar cursos gratuitos e de qualidade para jovens que sonham com 
              uma carreira em tecnologia.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Estamos começando do zero</strong>, e é isso que torna tudo tão emocionante! Cada pessoa 
              que se junta a nós agora será parte da história fundacional do TuxLab. Juntos, vamos construir 
              algo que realmente faça a diferença na vida de muitos jovens.
            </p>
          </div>
        </div>

        {/* Current Status */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Onde Estamos Agora
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">0</div>
              <div className="text-gray-600 dark:text-gray-400">Alunos (ainda!)</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">?</div>
              <div className="text-gray-600 dark:text-gray-400">Cursos (em criação)</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-400">Potencial de Impacto</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">0€</div>
              <div className="text-gray-600 dark:text-gray-400">Sempre Gratuito</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              📈 <strong>Estamos crescendo!</strong> Cada dia mais pessoas se juntam ao nosso sonho.
            </p>
          </div>
        </div>

        {/* What We're Building */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            O Que Estamos Construindo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Cursos Práticos
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Vamos criar cursos focados na prática, com projetos reais e tecnologias que o mercado usa.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Comunidade Forte
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Uma comunidade onde alunos e instrutores se apoiam mutuamente na jornada de aprendizado.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Mentoria Individual
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cada aluno terá acompanhamento personalizado para alcançar seus objetivos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Oportunidades Reais
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Parcerias com empresas para conectar nossos alunos a oportunidades de emprego e estágio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Inclusão Para Todos
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Queremos que todos tenham acesso às oportunidades que a tecnologia oferece,
                  independentemente de sua situação socioeconômica.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Educação de Qualidade
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Vamos focar na excelência do ensino, sempre atualizando nossos conteúdos com as melhores práticas.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Colaboração
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Construímos conhecimento juntos, onde cada pessoa contribui com sua experiência única.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Transparência
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Somos abertos sobre nosso progresso, desafios e aprendizados. Vocês fazem parte da jornada!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Como Tudo Começou
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              A ideia do TuxLab nasceu de uma observação simples: muitos jovens talentosos não têm acesso 
              a educação de qualidade em tecnologia. Seja pelo alto custo dos cursos, falta de infraestrutura 
              ou simplesmente por não saberem por onde começar.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Inspirados pelo mascote Tux do Linux e pelos valores do software livre, decidimos criar 
              um espaço onde qualquer pessoa pode aprender programação gratuitamente. Um laboratório virtual 
              onde sonhos se transformam em código.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Estamos ainda nos primeiros passos, mas já conseguimos reunir pessoas incríveis que 
              acreditam nesta visão. Desenvolvedores, designers, educadores e entusiastas da tecnologia 
              que querem fazer a diferença.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Nosso objetivo é claro: quebrar barreiras e democratizar o acesso à educação tecnológica. 
              Queremos ver jovens conseguindo seus primeiros empregos, criando suas próprias startups 
              e, principalmente, transformando suas realidades através da programação.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Quem Somos
          </h2>
          <div className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Somos um grupo de pessoas apaixonadas por tecnologia e educação. Desenvolvedores, 
              designers, educadores e sonhadores unidos por uma missão: democratizar o ensino de programação.
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <Heart className="h-4 w-4 mr-1" /> Movidos por Propósito
              </span>
              <span className="flex items-center">
                <Star className="h-4 w-4 mr-1" /> Focados no Impacto
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-800 dark:to-teal-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Quer Fazer Parte Desta Jornada?
          </h2>
          <p className="mb-6">
            Estamos começando e queremos você conosco! Seja como aluno interessado ou 
            instrutor voluntário, cada pessoa que se junta nos deixa mais perto do sonho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quero-aprender"
              className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-yellow-100 transition-colors"
            >
              Quero Aprender 🎓
            </Link>
            <Link
              href="/quero-ensinar"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Quero Ensinar 👨‍🏫
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}