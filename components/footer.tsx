import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-center md:text-left">
              © {currentYear} Flávio Montoril. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/flaviomontoril"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/flavio-montoril-dev-76b1b1255/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:flavio.montoril@hotmail.com"
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
