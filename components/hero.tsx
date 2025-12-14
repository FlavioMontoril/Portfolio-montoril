"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Olá, eu sou <span className="gradient-text">Flávio Montoril</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty">
            Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por criar soluções digitais inovadoras
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={() => scrollToSection("projetos")} className="w-full sm:w-auto">
              Ver Projetos
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contato")} className="w-full sm:w-auto">
              Entre em Contato
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="https://github.com/flaviomontoril"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/flaviomontoril"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:flavio.montoril@hotmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection("sobre")}
            className="animate-bounce p-2 rounded-full hover:bg-card transition-colors duration-200"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}
