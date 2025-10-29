import { FileText, Calendar, Shield, Users, AlertTriangle } from "lucide-react";

export default function Termos() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 pt-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <FileText className="h-4 w-4 mr-2" />
            Documento Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Termos de Uso
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transparência e clareza sobre como usar a plataforma TuxLab
          </p>
          <div className="flex items-center justify-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-2" />
            Última atualização: 29 de outubro de 2025
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-emerald-600 dark:text-emerald-400" />
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ao acessar e usar a plataforma TuxLab, você concorda em cumprir estes Termos de Uso. 
                Se você não concorda com qualquer parte destes termos, não deve usar nossos serviços.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                O TuxLab é um projeto em desenvolvimento que visa democratizar o acesso à educação 
                em tecnologia. Como estamos em fase inicial, estes termos podem ser atualizados 
                conforme o projeto evolui.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Users className="h-6 w-6 mr-3 text-emerald-600 dark:text-emerald-400" />
                2. Elegibilidade e Cadastro
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Quem pode usar:</strong> O TuxLab é aberto a qualquer pessoa interessada 
                  em aprender ou ensinar tecnologia, independente de idade, background ou experiência.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Informações precisas:</strong> Ao se cadastrar, você se compromete a 
                  fornecer informações verdadeiras e atualizadas.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Responsabilidade:</strong> Você é responsável por manter a segurança 
                  de suas informações de acesso.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                3. Uso da Plataforma
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Gratuidade:</strong> Todos os serviços do TuxLab são completamente gratuitos 
                  e sempre serão.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Finalidade educacional:</strong> A plataforma deve ser usada exclusivamente 
                  para fins educacionais e de desenvolvimento profissional.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Comportamento adequado:</strong> Esperamos que todos os usuários mantenham 
                  um comportamento respeitoso e colaborativo.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-yellow-600 dark:text-yellow-400" />
                4. Condutas Proibidas
              </h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
                <p className="text-yellow-800 dark:text-yellow-200 font-medium mb-2">
                  É estritamente proibido:
                </p>
                <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 space-y-2">
                  <li>Usar a plataforma para atividades ilegais ou prejudiciais</li>
                  <li>Assediar, intimidar ou discriminar outros usuários</li>
                  <li>Compartilhar conteúdo ofensivo, spam ou malicioso</li>
                  <li>Tentar hackear ou comprometer a segurança da plataforma</li>
                  <li>Usar a plataforma para fins comerciais não autorizados</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                5. Propriedade Intelectual
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Conteúdo do TuxLab:</strong> Todo material educacional criado pelo TuxLab 
                  será disponibilizado sob licenças abertas, promovendo o conhecimento livre.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Conteúdo dos usuários:</strong> Você mantém os direitos sobre o conteúdo 
                  que criar, mas ao compartilhar na plataforma, concede permissão para uso educacional.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Terceiros:</strong> Respeitamos os direitos de propriedade intelectual 
                  de terceiros e esperamos o mesmo dos nossos usuários.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                6. Limitação de Responsabilidade
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  O TuxLab é um projeto em desenvolvimento oferecido "como está". Enquanto nos esforçamos 
                  para fornecer uma experiência de qualidade, não podemos garantir que a plataforma 
                  estará sempre disponível ou livre de problemas.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Não nos responsabilizamos por danos indiretos, perda de dados ou interrupções 
                  de serviço, especialmente durante esta fase inicial do projeto.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                7. Modificações dos Termos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Como o TuxLab está em constante evolução, estes termos podem ser atualizados periodicamente. 
                Notificaremos sobre mudanças significativas através da plataforma.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                O uso continuado da plataforma após as modificações constitui aceitação dos novos termos.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                8. Contato
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Dúvidas sobre estes termos? Entre em contato conosco:
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg">
                <p className="text-emerald-800 dark:text-emerald-200">
                  <strong>Email:</strong> contato@tuxlaboratory.dev<br />
                  <strong>GitHub:</strong> github.com/Tux-Laboratory
                </p>
              </div>
            </section>

          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            ← Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
}