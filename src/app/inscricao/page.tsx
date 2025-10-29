import { Heart, Users, BookOpen, Award, CheckCircle, Clock } from "lucide-react";

export default function Inscricao() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Inscreva-se Gratuitamente
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comece sua jornada na tecnologia hoje mesmo. Preencha o formulário abaixo 
            e tenha acesso a todos os nossos cursos gratuitos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Dados de Inscrição
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sobrenome *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Seu sobrenome"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Idade *
                  </label>
                  <select
                    id="age"
                    name="age"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione</option>
                    <option value="14-17">14-17 anos</option>
                    <option value="18-24">18-24 anos</option>
                    <option value="25-30">25-30 anos</option>
                    <option value="30+">Mais de 30 anos</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Escolaridade *
                  </label>
                  <select
                    id="education"
                    name="education"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione</option>
                    <option value="fundamental">Ensino Fundamental</option>
                    <option value="medio">Ensino Médio</option>
                    <option value="superior">Ensino Superior</option>
                    <option value="pos">Pós-graduação</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Experiência com Tecnologia *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione</option>
                  <option value="nenhuma">Nenhuma experiência</option>
                  <option value="basica">Uso básico de computador</option>
                  <option value="intermediaria">Conhecimento intermediário</option>
                  <option value="avancada">Experiência avançada</option>
                </select>
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Por que quer aprender tecnologia? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Conte-nos sobre seus objetivos e sonhos na área de tecnologia..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="mt-1 h-4 w-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
                  Eu concordo com os <a href="/termos" className="text-emerald-600 hover:text-emerald-700">termos de uso</a> e 
                  <a href="/privacidade" className="text-emerald-600 hover:text-emerald-700 ml-1">política de privacidade</a> *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                <Heart className="h-5 w-5" />
                Inscrever-se Gratuitamente
              </button>
            </form>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                O que você ganha:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Acesso Total Gratuito</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Todos os cursos sem custo algum</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Mentoria Personalizada</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Acompanhamento individual com especialistas</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Comunidade Ativa</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Networking com outros jovens e profissionais</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Certificados Reconhecidos</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Comprove seus conhecimentos no mercado</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Projetos Práticos</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Portfolio real para mostrar aos empregadores</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Apoio na Carreira</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Ajuda para conseguir estágios e empregos</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Processo de Inscrição
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                    1
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Preencha o formulário</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                    2
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Confirme seu email</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                    3
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Acesse a plataforma</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                    4
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Comece a aprender!</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Próxima Turma
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Início: <strong>Segunda-feira, 15 de Janeiro</strong>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Vagas limitadas - inscreva-se o quanto antes!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}