import { Mail, Github, Twitter, Linkedin, MessageSquare, Heart, Users, BookOpen, Handshake, Target, Globe } from "lucide-react";

export default function Contato() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30 dark:from-gray-900 dark:via-emerald-950/30 dark:to-teal-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 pt-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <Heart className="h-4 w-4 mr-2" />
            Junte-se à Nossa Missão
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Transforme Vidas{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Conosco
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Seja parte da revolução da inclusão digital. Juntos, podemos democratizar 
            o acesso à tecnologia e capacitar jovens para um futuro mais próspero.
          </p>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "0", label: "Alunos (começando!)", icon: Users },
            { number: "?", label: "Cursos (em criação)", icon: BookOpen },
            { number: "∞", label: "Potencial de Impacto", icon: Heart },
            { number: "100%", label: "Gratuito Sempre", icon: Target }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-emerald-600 dark:text-emerald-400" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Ways to Get Involved */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Como Você Pode Ajudar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Seja Voluntário",
                description: "Compartilhe seu conhecimento como mentor, instrutor ou apoiando nossa comunidade.",
                icon: Handshake,
                action: "Quero Ajudar",
                color: "from-emerald-500 to-teal-600"
              },
              {
                title: "Faça uma Doação",
                description: "Ajude-nos a manter nossos cursos gratuitos e expandir nosso impacto social.",
                icon: Heart,
                action: "Doar Agora",
                color: "from-pink-500 to-rose-600"
              },
              {
                title: "Parceria Empresarial",
                description: "Empresas podem apoiar através de patrocínio, estágios ou oportunidades de emprego.",
                icon: Globe,
                action: "Seja Parceiro",
                color: "from-blue-500 to-indigo-600"
              }
            ].map((way, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${way.color} flex items-center justify-center mb-4`}>
                  <way.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {way.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {way.description}
                </p>
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 px-4 rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-200">
                  {way.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              💬 Fale Conosco
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Como deseja contribuir?
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="voluntario">Quero ser voluntário/mentor</option>
                  <option value="estudante">Sou estudante interessado</option>
                  <option value="doacao">Quero fazer uma doação</option>
                  <option value="parceria">Parceria empresarial</option>
                  <option value="midia">Imprensa/Mídia</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  placeholder="Conte-nos mais sobre como você gostaria de contribuir..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Information & Community */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                📞 Contato Direto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Email Geral</div>
                    <a href="mailto:contato@tuxlaboratory.dev" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                      contato@tuxlaboratory.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Voluntariado</div>
                    <a href="mailto:voluntarios@tuxlaboratory.dev" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                      voluntarios@tuxlaboratory.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Parcerias</div>
                    <a href="mailto:parcerias@tuxlaboratory.dev" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                      parcerias@tuxlaboratory.dev
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Community */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                🌐 Nossa Comunidade
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/Tux-Laboratory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors group"
                >
                  <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 mr-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors group"
                >
                  <MessageSquare className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 mr-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">Discord</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors group"
                >
                  <Twitter className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 mr-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors group"
                >
                  <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 mr-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
              <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-100 mb-3">
                ⚡ Resposta Rápida
              </h4>
              <p className="text-emerald-800 dark:text-emerald-200 text-sm mb-3">
                Tentamos responder todas as mensagens em até 24 horas. Para assuntos urgentes, 
                entre em contato via Discord ou email direto.
              </p>
              <div className="text-xs text-emerald-700 dark:text-emerald-300">
                <strong>Horário de atendimento:</strong> Segunda a Sexta, 9h às 18h (horário de Brasília)
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Juntos Somos Mais Fortes! 💪
          </h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Cada pessoa que se junta à nossa missão faz a diferença na vida de jovens 
            que sonham com um futuro melhor através da tecnologia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Quero Ser Voluntário
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-emerald-600 transition-colors">
              Fazer Doação
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}