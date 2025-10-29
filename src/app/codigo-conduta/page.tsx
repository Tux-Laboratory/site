import { Heart, Users, Shield, AlertTriangle, CheckCircle, XCircle, Calendar, MessageCircle } from "lucide-react";

export default function CodigoConduta() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 pt-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
            <Heart className="h-4 w-4 mr-2" />
            Comunidade Respeitosa
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Código de Conduta
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Construindo uma comunidade inclusiva e acolhedora para todos
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
                <Users className="h-6 w-6 mr-3 text-purple-600 dark:text-purple-400" />
                1. Nossa Missão
              </h2>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6">
                <p className="text-purple-800 dark:text-purple-200 font-medium mb-2">
                  O TuxLab é mais que uma plataforma educacional:
                </p>
                <p className="text-purple-700 dark:text-purple-300">
                  Somos uma comunidade que acredita no poder transformador da tecnologia e na 
                  importância de criar um ambiente onde todas as pessoas se sintam bem-vindas, 
                  respeitadas e capazes de aprender e crescer juntas.
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Este código de conduta estabelece as diretrizes para manter nossa comunidade 
                segura, inclusiva e produtiva para todos os participantes, independentemente 
                de sua origem, identidade ou nível de experiência.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-green-600 dark:text-green-400" />
                2. Comportamentos Esperados
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center">
                      <Heart className="h-4 w-4 mr-2" />
                      Respeito e Empatia
                    </h3>
                    <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                      <li>• Trate todos com gentileza e respeito</li>
                      <li>• Escute ativamente outras perspectivas</li>
                      <li>• Seja paciente com iniciantes</li>
                      <li>• Reconheça e aprecie contribuições</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Colaboração
                    </h3>
                    <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                      <li>• Compartilhe conhecimento livremente</li>
                      <li>• Ofereça ajuda quando possível</li>
                      <li>• Aceite feedback construtivo</li>
                      <li>• Trabalhe em equipe</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2 flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Inclusão
                    </h3>
                    <ul className="text-indigo-700 dark:text-indigo-300 text-sm space-y-1">
                      <li>• Use linguagem inclusiva</li>
                      <li>• Respeite diferentes identidades</li>
                      <li>• Evite assumir conhecimento prévio</li>
                      <li>• Crie espaço para todas as vozes</li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Comunicação
                    </h3>
                    <ul className="text-emerald-700 dark:text-emerald-300 text-sm space-y-1">
                      <li>• Seja claro e construtivo</li>
                      <li>• Use linguagem respeitosa</li>
                      <li>• Mantenha discussões relevantes</li>
                      <li>• Evite spam ou autopromação</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <XCircle className="h-6 w-6 mr-3 text-red-600 dark:text-red-400" />
                3. Comportamentos Inaceitáveis
              </h2>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-4">
                  ⚠️ Não toleramos:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-700 dark:text-red-300 mb-2">Discriminação e Assédio:</h4>
                    <ul className="text-red-600 dark:text-red-400 text-sm space-y-1">
                      <li>• Comentários discriminatórios</li>
                      <li>• Assédio de qualquer tipo</li>
                      <li>• Linguagem ofensiva ou preconceituosa</li>
                      <li>• Ameaças ou intimidação</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 dark:text-red-300 mb-2">Comportamento Disruptivo:</h4>
                    <ul className="text-red-600 dark:text-red-400 text-sm space-y-1">
                      <li>• Spam ou trolling</li>
                      <li>• Compartilhamento de conteúdo impróprio</li>
                      <li>• Violação de privacidade</li>
                      <li>• Atividades ilegais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                4. Ambientes de Aplicação
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Este código de conduta se aplica a todos os espaços do TuxLab:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900 dark:text-white">🌐 Plataforma</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Site e aplicações</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900 dark:text-white">💬 Comunicação</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Chats e fóruns</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900 dark:text-white">🎓 Aulas</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sessões online</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900 dark:text-white">📱 Redes Sociais</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Representando o TuxLab</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-yellow-600 dark:text-yellow-400" />
                5. Processo de Denúncia
              </h2>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                    Como reportar violações:
                  </h3>
                  <div className="space-y-3 text-yellow-700 dark:text-yellow-300">
                    <p><strong>1. Email confidencial:</strong> conduta@tuxlaboratory.dev</p>
                    <p><strong>2. Contato direto:</strong> Fale com qualquer moderador ou organizador</p>
                    <p><strong>3. Formulário anônimo:</strong> [Link será adicionado em breve]</p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                    O que acontece após uma denúncia:
                  </h3>
                  <ol className="list-decimal list-inside text-blue-700 dark:text-blue-300 space-y-2">
                    <li>Recebimento e análise confidencial (24-48h)</li>
                    <li>Investigação imparcial com todas as partes</li>
                    <li>Decisão baseada em evidências e contexto</li>
                    <li>Ação apropriada (aviso, suspensão ou banimento)</li>
                    <li>Acompanhamento e suporte às partes envolvidas</li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                6. Consequências
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 dark:text-yellow-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Primeira violação menor</h4>
                    <p className="text-gray-600 dark:text-gray-400">Aviso privado e orientação sobre comportamento adequado</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Violação repetida ou moderada</h4>
                    <p className="text-gray-600 dark:text-gray-400">Suspensão temporária da plataforma (1-30 dias)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 dark:text-red-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Violação grave</h4>
                    <p className="text-gray-600 dark:text-gray-400">Banimento permanente da comunidade TuxLab</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                7. Nosso Compromisso
              </h2>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg">
                <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed mb-4">
                  <strong>A equipe do TuxLab se compromete a:</strong>
                </p>
                <ul className="text-emerald-700 dark:text-emerald-300 space-y-2">
                  <li>• Liderar pelo exemplo, seguindo este código em todas as interações</li>
                  <li>• Tratar todas as denúncias com seriedade e confidencialidade</li>
                  <li>• Ser imparcial e justa em todas as decisões</li>
                  <li>• Apoiar vítimas de comportamento inadequado</li>
                  <li>• Melhorar continuamente nossos processos e políticas</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                8. Evoluindo Juntos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Este código de conduta é um documento vivo que evolui com nossa comunidade. 
                Encorajamos feedback e sugestões para torná-lo ainda mais inclusivo e efetivo.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <p className="text-purple-800 dark:text-purple-200 font-medium mb-2">
                  💬 Quer contribuir para melhorar este código?
                </p>
                <p className="text-purple-700 dark:text-purple-300">
                  Entre em contato conosco: <strong>conduta@tuxlaboratory.dev</strong>
                </p>
              </div>
            </section>

          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            ← Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
}