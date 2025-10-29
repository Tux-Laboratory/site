import { BookOpen, Users, Target, Calendar, MapPin, User, Mail, MessageSquare, Heart, Star, ArrowRight } from "lucide-react";

export default function QueroAprender() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30 dark:from-gray-900 dark:via-emerald-950/30 dark:to-teal-950/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 pt-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4 mr-2" />
            Futuro Aluno do TuxLab
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Quero{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Aprender!
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Seja um dos primeiros alunos do TuxLab! Cadastre-se e ajude-nos a construir 
            uma plataforma incrível de ensino de tecnologia 100% gratuita.
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Star,
                title: "Seja um Pioneiro",
                description: "Faça parte da primeira turma do TuxLab"
              },
              {
                icon: Heart,
                title: "100% Gratuito",
                description: "Nunca cobramos nada, sempre será gratuito"
              },
              {
                icon: Users,
                title: "Comunidade",
                description: "Conecte-se com outros jovens apaixonados por tech"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <benefit.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              📚 Cadastro de Interesse - Alunos
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Preencha os dados abaixo e entraremos em contato quando tivermos nossos primeiros cursos prontos!
            </p>
          </div>

          <form className="space-y-6">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Email */}
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

            {/* Idade */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="idade" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Idade *
                </label>
                <input
                  type="number"
                  id="idade"
                  name="idade"
                  min="13"
                  max="99"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  placeholder="18"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            {/* Endereço */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cidade *
                </label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  placeholder="São Paulo"
                />
              </div>

              <div>
                <label htmlFor="estado" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Estado *
                </label>
                <select
                  id="estado"
                  name="estado"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione seu estado</option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="PR">Paraná</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="BA">Bahia</option>
                  <option value="GO">Goiás</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="PE">Pernambuco</option>
                  <option value="CE">Ceará</option>
                  <option value="PA">Pará</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="PB">Paraíba</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="AL">Alagoas</option>
                  <option value="SE">Sergipe</option>
                  <option value="PI">Piauí</option>
                  <option value="MA">Maranhão</option>
                  <option value="TO">Tocantins</option>
                  <option value="AC">Acre</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="AM">Amazonas</option>
                  <option value="AP">Amapá</option>
                </select>
              </div>
            </div>

            {/* Nível de experiência */}
            <div>
              <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Qual seu nível de experiência com tecnologia? *
              </label>
              <select
                id="experiencia"
                name="experiencia"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
              >
                <option value="">Selecione seu nível</option>
                <option value="iniciante">Iniciante total (nunca programei)</option>
                <option value="basico">Básico (já fiz alguns tutoriais)</option>
                <option value="intermediario">Intermediário (já criei alguns projetos)</option>
                <option value="avancado">Avançado (trabalho ou estudei formalmente)</option>
              </select>
            </div>

            {/* Áreas de interesse */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Quais áreas mais te interessam? (pode marcar várias) *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Programação Web",
                  "Desenvolvimento Mobile",
                  "Data Science",
                  "Inteligência Artificial",
                  "Segurança da Informação",
                  "Design UI/UX",
                  "DevOps",
                  "Games",
                  "IoT (Internet das Coisas)",
                  "Blockchain",
                  "Cloud Computing",
                  "Robótica"
                ].map((area) => (
                  <label key={area} className="flex items-center space-x-2 text-sm">
                    <input
                      type="checkbox"
                      name="interesses"
                      value={area}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700 dark:text-gray-300">{area}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Disponibilidade */}
            <div>
              <label htmlFor="disponibilidade" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Quantas horas por semana você pode dedicar aos estudos? *
              </label>
              <select
                id="disponibilidade"
                name="disponibilidade"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
              >
                <option value="">Selecione sua disponibilidade</option>
                <option value="1-3">1-3 horas por semana</option>
                <option value="4-6">4-6 horas por semana</option>
                <option value="7-10">7-10 horas por semana</option>
                <option value="10+">Mais de 10 horas por semana</option>
              </select>
            </div>

            {/* Mensagem */}
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Conte-nos um pouco sobre você e por que quer aprender tecnologia
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                placeholder="Compartilhe sua história, seus sonhos, o que espera alcançar com a tecnologia..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center shadow-lg"
            >
              <BookOpen className="h-6 w-6 mr-3" />
              Quero Fazer Parte do TuxLab!
              <ArrowRight className="h-6 w-6 ml-3" />
            </button>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Ao enviar este formulário, você concorda em receber atualizações sobre o TuxLab por email.
              Nunca faremos spam e você pode cancelar a qualquer momento.
            </p>
          </form>
        </div>

        {/* What happens next */}
        <div className="mt-12 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-8 border border-emerald-200 dark:border-emerald-800">
          <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-4 text-center">
            🚀 O que acontece depois?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Confirmação</h4>
              <p className="text-sm text-emerald-800 dark:text-emerald-200">
                Você receberá um email confirmando seu interesse
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Desenvolvimento</h4>
              <p className="text-sm text-emerald-800 dark:text-emerald-200">
                Criamos os cursos baseados no interesse dos inscritos
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Lançamento</h4>
              <p className="text-sm text-emerald-800 dark:text-emerald-200">
                Você será um dos primeiros a saber quando abrirmos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}