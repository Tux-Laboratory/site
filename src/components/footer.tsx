import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail, Heart, Users } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Tux<span className="text-emerald-600 dark:text-emerald-400">Laboratory</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Democratizando o acesso à tecnologia e capacitando jovens para construir 
              um futuro mais digital e inclusivo. 100% gratuito, 100% open source.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-sm text-emerald-600 dark:text-emerald-400">
                <Heart className="h-4 w-4 mr-1" />
                0 alunos (começando!)
              </div>
              <div className="flex items-center text-sm text-teal-600 dark:text-teal-400">
                <Users className="h-4 w-4 mr-1" />
                ? cursos (em criação)
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Tux-Laboratory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:contato@tuxlaboratory.dev"
                className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Aprendizado
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quero-aprender" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Quero Aprender
                </Link>
              </li>
              <li>
                <Link href="/quero-ensinar" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Quero Ensinar
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Sobre o Projeto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Comunidade
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contato" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <a href="https://github.com/Tux-Laboratory" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Discord (em breve)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © 2025 Tux Laboratory. Feito com <Heart className="inline h-4 w-4 text-red-500 mx-1" /> para a comunidade.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/termos" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Privacidade
              </Link>
              <Link href="/codigo-conduta" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Código de Conduta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}