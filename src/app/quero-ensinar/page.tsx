import { Heart, Users, Target, Calendar, MapPin, User, Mail, MessageSquare, BookOpen, Star, ArrowRight, Code, Laptop, GraduationCap } from "lucide-react";

export default function QueroEnsinar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 pt-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
            <Heart className="h-4 w-4 mr-2" />
            Futuro Instrutor do TuxLab
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Quero{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ensinar!
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Seja um dos fundadores do TuxLab! Compartilhe seu conhecimento e ajude 
            a construir o futuro da educação em tecnologia no Brasil.
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Star,
                title: "Seja um Fundador",
                description: "Faça parte da equipe que está criando o TuxLab"
              },
              {
                icon: Heart,
                title: "Impacto Real",
                description: "Transforme vidas através da educação"
              },
              {
                icon: Users,
                title: "Reconhecimento",
                description: "Ganhe experiência e reconhecimento na comunidade"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <benefit.icon className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
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
              🎓 Cadastro de Instrutores Voluntários
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Junte-se a nós para criar algo incrível! Precisamos de pessoas apaixonadas por ensinar.
            </p>
          </div>

          <form className="space-y-6">
            {/* Informações Pessoais */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                📋 Informações Pessoais
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="idade" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Idade *
                  </label>
                  <input
                    type="number"
                    id="idade"
                    name="idade"
                    min="18"
                    max="99"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="25"
                  />
                </div>

                <div>
                  <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
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
            </div>

            {/* Experiência Profissional */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                💼 Experiência Profissional
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="cargo_atual" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Cargo/Posição Atual *
                  </label>
                  <input
                    type="text"
                    id="cargo_atual"
                    name="cargo_atual"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Ex: Desenvolvedor Full Stack, Estudante de Engenharia, etc."
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Empresa/Instituição Atual
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Nome da empresa ou universidade"
                  />
                </div>

                <div>
                  <label htmlFor="experiencia_anos" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tempo de experiência na área de tecnologia *
                  </label>
                  <select
                    id="experiencia_anos"
                    name="experiencia_anos"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione</option>
                    <option value="menos_1">Menos de 1 ano</option>
                    <option value="1-2">1 a 2 anos</option>
                    <option value="3-5">3 a 5 anos</option>
                    <option value="5-10">5 a 10 anos</option>
                    <option value="mais_10">Mais de 10 anos</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="formacao" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Formação Acadêmica
                  </label>
                  <input
                    type="text"
                    id="formacao"
                    name="formacao"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Ex: Ciência da Computação, Análise de Sistemas, etc."
                  />
                </div>
              </div>
            </div>

            {/* Habilidades Técnicas */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🔧 Habilidades Técnicas
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Em quais áreas você tem expertise para ensinar? (marque todas que se aplicam) *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "HTML/CSS",
                      "JavaScript",
                      "Python",
                      "Java",
                      "React",
                      "Node.js",
                      "PHP",
                      "C#",
                      "SQL/Banco de Dados",
                      "DevOps",
                      "Linux",
                      "Git/GitHub",
                      "UI/UX Design",
                      "Mobile (Android/iOS)",
                      "Data Science",
                      "Machine Learning",
                      "Segurança da Informação",
                      "Cloud Computing",
                      "Blockchain",
                      "IoT",
                      "Robótica",
                      "Games"
                    ].map((skill) => (
                      <label key={skill} className="flex items-center space-x-2 text-sm">
                        <input
                          type="checkbox"
                          name="habilidades"
                          value={skill}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="outras_habilidades" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Outras habilidades não listadas
                  </label>
                  <input
                    type="text"
                    id="outras_habilidades"
                    name="outras_habilidades"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Ex: Flutter, TypeScript, Docker, etc."
                  />
                </div>

                <div>
                  <label htmlFor="nivel_ensino" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Que nível você se sente confortável para ensinar? *
                  </label>
                  <select
                    id="nivel_ensino"
                    name="nivel_ensino"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione</option>
                    <option value="iniciante">Apenas iniciantes (do zero)</option>
                    <option value="basico-intermediario">Básico ao intermediário</option>
                    <option value="intermediario-avancado">Intermediário ao avançado</option>
                    <option value="todos">Todos os níveis</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Experiência com Ensino */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🎓 Experiência com Ensino
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="experiencia_ensino" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Você já tem experiência ensinando? *
                  </label>
                  <select
                    id="experiencia_ensino"
                    name="experiencia_ensino"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione</option>
                    <option value="nenhuma">Não, seria minha primeira experiência</option>
                    <option value="informal">Sim, já ensinei informalmente (amigos, colegas)</option>
                    <option value="cursos">Sim, já dei cursos ou workshops</option>
                    <option value="professor">Sim, sou professor ou instrutor profissional</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="motivacao" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Por que você quer ensinar no TuxLab? *
                  </label>
                  <textarea
                    id="motivacao"
                    name="motivacao"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Conte-nos sobre sua motivação para ajudar jovens a aprender tecnologia..."
                  />
                </div>
              </div>
            </div>

            {/* Disponibilidade */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                ⏰ Disponibilidade
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="disponibilidade_semanal" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Quantas horas por semana você pode dedicar ao TuxLab? *
                  </label>
                  <select
                    id="disponibilidade_semanal"
                    name="disponibilidade_semanal"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione</option>
                    <option value="1-2">1-2 horas por semana</option>
                    <option value="3-5">3-5 horas por semana</option>
                    <option value="6-10">6-10 horas por semana</option>
                    <option value="10+">Mais de 10 horas por semana</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Como você gostaria de contribuir? (marque todas que se aplicam) *
                  </label>
                  <div className="space-y-2">
                    {[
                      "Criar conteúdo de cursos",
                      "Gravar videoaulas",
                      "Dar aulas ao vivo",
                      "Mentorar alunos individualmente",
                      "Revisar exercícios e projetos",
                      "Moderar comunidade/fóruns",
                      "Desenvolver plataforma técnica",
                      "Design e UX",
                      "Marketing e comunicação"
                    ].map((contribuicao) => (
                      <label key={contribuicao} className="flex items-center space-x-2 text-sm">
                        <input
                          type="checkbox"
                          name="contribuicoes"
                          value={contribuicao}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">{contribuicao}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="horarios_preferidos" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Quais são seus horários preferidos para atividades síncronas?
                  </label>
                  <textarea
                    id="horarios_preferidos"
                    name="horarios_preferidos"
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Ex: Manhãs de sábado, noites durante a semana, etc."
                  />
                </div>
              </div>
            </div>

            {/* Links e Portfólio */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🔗 Portfólio e Redes
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="github" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    GitHub
                  </label>
                  <input
                    type="url"
                    id="github"
                    name="github"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="https://github.com/seususuario"
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="https://linkedin.com/in/seuperfil"
                  />
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Portfólio/Site Pessoal
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="https://seusite.com"
                  />
                </div>

                <div>
                  <label htmlFor="outras_redes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Outras redes/links relevantes
                  </label>
                  <input
                    type="text"
                    id="outras_redes"
                    name="outras_redes"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Twitter, YouTube, Blog, etc."
                  />
                </div>
              </div>
            </div>

            {/* Mensagem Final */}
            <div>
              <label htmlFor="mensagem_adicional" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensagem adicional
              </label>
              <textarea
                id="mensagem_adicional"
                name="mensagem_adicional"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="Conte-nos mais sobre você, suas ideias para o TuxLab, ou qualquer coisa que considere relevante..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center shadow-lg"
            >
              <Heart className="h-6 w-6 mr-3" />
              Quero Ser Parte da Equipe TuxLab!
              <ArrowRight className="h-6 w-6 ml-3" />
            </button>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Ao enviar este formulário, você se candidata a fazer parte da equipe de instrutores voluntários do TuxLab.
              Entraremos em contato para uma conversa mais detalhada.
            </p>
          </form>
        </div>

        {/* Next Steps */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
          <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4 text-center">
            🚀 Próximos Passos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Análise</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Analisaremos seu perfil e experiências
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Conversa</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Conversaremos por videochamada para nos conhecermos
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Colaboração</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Começamos a construir o TuxLab juntos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}