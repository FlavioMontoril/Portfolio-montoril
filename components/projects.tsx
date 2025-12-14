import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Fronte-end/Flow Criação de Tarefas",
      description: "Aplicação de gerenciamento de tarefas (CRUD) desenvolvida com ReactJS, TypeScript, React Router, React Flow e Zustand para gerenciamento de estado. A aplicação consome dados de uma API externa, permitindo fazer todas as operações(CRUD). Interface intuitiva com visualização de fluxo das tarefas.",
      // image: "/modern-web-application-dashboard-with-user-managem.png",
      technologies: ["TypeScript", "React", "ReactFlow", "Zustand"],
      githubUrl: "https://github.com/FlavioMontoril/taskfront-crud-flow",
    },
    {
      title: "Api Restfull de Criação de Tafefas",
      description: "API REST desenvolvida com Node.js e TypeScript, utilizando Express como framework e Zod para validação de dados. Implementa autenticação com JWT, containerização com Docker e Prisma como ORM para manipulação do banco de dados relacional MySQL. Inclui operações CRUD, regras de autenticação e boas práticas de arquitetura e segurança.",
      // image: "/educational-management-system-interface-with-stude.png",
      technologies: ["TypeScript", "Nodejs", "MySQL", "Prisma"],
      githubUrl: "https://github.com/FlavioMontoril/project-backend",
    },
    {
      title: "Lista de Compras",
      description: "Aplicação mobile de gerenciamento de compras com funcionalidades CRUD, desenvolvida em React Native e TypeScript. Utiliza Zustand para gerenciamento de estado, permitindo cadastrar, editar, visualizar e excluir itens da lista de compras de forma simples e eficiente.",
      // image: "/business-intelligence-dashboard-with-charts-and-gr.png",
      technologies: ["ReactNative", "TypeScript", "Zustand"],
      githubUrl: "https://github.com/FlavioMontoril/comprar-reactnative",
    },
    {
      title: "Portfolio Pessoal",
      description: "Site pessoal moderno e responsivo desenvolvido com as mais recentes tecnologias web.",
      // image: "/modern-portfolio-website-design-with-clean-layout.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/flaviomontoril/portfolio",
    },
  ]

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Meus Projetos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Alguns dos projetos que desenvolvi durante minha jornada acadêmica e profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  {/* <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  /> */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-pretty">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3"> 
                    <Button size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver Projeto
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
