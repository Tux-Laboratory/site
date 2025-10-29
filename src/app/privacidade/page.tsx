import { Shield, Eye, Lock, Database, Users, Mail, Calendar } from "lucide-react";

export default function Privacidade() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 pt-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Proteção de Dados
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Política de Privacidade
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Como protegemos e usamos suas informações no TuxLab
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
                <Eye className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
                1. Nossa Filosofia de Privacidade
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
                <p className="text-blue-800 dark:text-blue-200 font-medium mb-2">
                  Compromisso com a transparência:
                </p>
                <p className="text-blue-700 dark:text-blue-300">
                  No TuxLab, acreditamos que a privacidade é um direito fundamental. Coletamos apenas 
                  as informações essenciais para oferecer uma experiência educacional de qualidade 
                  e nunca comercializamos seus dados.
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Esta política explica de forma clara e simples como tratamos suas informações pessoais, 
                seguindo as melhores práticas de proteção de dados e a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Database className="h-6 w-6 mr-3 text-green-600 dark:text-green-400" />
                2. Informações que Coletamos
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Informações que você nos fornece:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Dados de cadastro:</strong> Nome, idade, endereço (cidade/estado), email</li>
                    <li><strong>Perfil educacional:</strong> Interesses em tecnologia, nível de experiência</li>
                    <li><strong>Para instrutores:</strong> Experiência profissional, habilidades técnicas</li>
                    <li><strong>Comunicações:</strong> Mensagens que você nos envia</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Informações coletadas automaticamente:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Dados técnicos:</strong> Tipo de dispositivo, navegador, endereço IP</li>
                    <li><strong>Uso da plataforma:</strong> Páginas visitadas, tempo de permanência</li>
                    <li><strong>Cookies:</strong> Apenas essenciais para funcionamento da plataforma</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                3. Como Usamos suas Informações
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                    ✅ Para que usamos:
                  </h3>
                  <ul className="text-green-700 dark:text-green-300 space-y-2 text-sm">
                    <li>• Conectar alunos e instrutores</li>
                    <li>• Personalizar experiência de aprendizado</li>
                    <li>• Enviar comunicações importantes</li>
                    <li>• Melhorar nossos serviços</li>
                    <li>• Garantir segurança da plataforma</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3">
                    ❌ Nunca usamos para:
                  </h3>
                  <ul className="text-red-700 dark:text-red-300 space-y-2 text-sm">
                    <li>• Vender ou comercializar dados</li>
                    <li>• Spam ou marketing indesejado</li>
                    <li>• Compartilhar com terceiros</li>
                    <li>• Fins não educacionais</li>
                    <li>• Discriminação ou preconceito</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Lock className="h-6 w-6 mr-3 text-purple-600 dark:text-purple-400" />
                4. Proteção e Segurança
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Criptografia:</strong> Todas as informações são transmitidas usando 
                  conexões seguras (HTTPS) e armazenadas com criptografia.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Acesso limitado:</strong> Apenas membros autorizados da equipe têm 
                  acesso aos dados, e somente quando necessário.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Monitoramento:</strong> Monitoramos continuamente nossos sistemas 
                  para detectar e prevenir atividades suspeitas.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Atualizações:</strong> Mantemos nossos sistemas sempre atualizados 
                  com as últimas correções de segurança.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Users className="h-6 w-6 mr-3 text-indigo-600 dark:text-indigo-400" />
                5. Seus Direitos
              </h2>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                <p className="text-indigo-800 dark:text-indigo-200 font-medium mb-4">
                  De acordo com a LGPD, você tem direito a:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-indigo-700 dark:text-indigo-300">
                  <div>
                    <p className="font-medium">📋 Acessar seus dados</p>
                    <p className="text-sm">Ver quais informações temos sobre você</p>
                  </div>
                  <div>
                    <p className="font-medium">✏️ Corrigir dados</p>
                    <p className="text-sm">Atualizar informações incorretas</p>
                  </div>
                  <div>
                    <p className="font-medium">🗑️ Excluir dados</p>
                    <p className="text-sm">Solicitar remoção de suas informações</p>
                  </div>
                  <div>
                    <p className="font-medium">📤 Portabilidade</p>
                    <p className="text-sm">Receber seus dados em formato padrão</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                6. Cookies e Tecnologias Similares
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Cookies essenciais:</strong> Usamos apenas cookies necessários para 
                  o funcionamento da plataforma (login, preferências de tema, etc.).
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Analytics simples:</strong> Coletamos dados básicos de uso para 
                  melhorar a experiência, sem identificar usuários individualmente.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Sem tracking:</strong> Não usamos cookies de terceiros para 
                  rastreamento ou publicidade.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                7. Compartilhamento de Dados
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>Política clara:</strong> Não vendemos, alugamos ou compartilhamos 
                  suas informações pessoais com terceiros para fins comerciais.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>Exceções limitadas:</strong> Podemos compartilhar dados apenas em casos de:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Cumprimento de obrigações legais</li>
                  <li>Proteção de direitos e segurança</li>
                  <li>Com seu consentimento explícito</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Mail className="h-6 w-6 mr-3 text-emerald-600 dark:text-emerald-400" />
                8. Contato e Dúvidas
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Tem dúvidas sobre privacidade ou quer exercer seus direitos? Entre em contato:
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg">
                <div className="text-emerald-800 dark:text-emerald-200">
                  <p><strong>Email:</strong> privacidade@tuxlaboratory.dev</p>
                  <p><strong>Contato geral:</strong> contato@tuxlaboratory.dev</p>
                  <p><strong>Tempo de resposta:</strong> Até 15 dias úteis</p>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            ← Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
}