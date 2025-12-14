import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone } from "lucide-react"
import perfil from "@/public/Image-portfolio.png"
import Image from "next/image"

export function About() {
  const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML", "CSS", "MySQL", "Power BI", "Java"]

  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Desenvolvimento Frontend",
      description: "Criação de interfaces modernas e responsivas com React e Next.js",
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Back-end",
      description: "Desenvolvimento de ApiRestfull, utilizando Nodejs, Typescript, Authenticação JWT, Prisma como ORM e MYSQL ",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Desenvolvimento Web",
      description: "Aplicações web completas com foco em performance e usabilidade",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Design Responsivo",
      description: "Interfaces que funcionam perfeitamente em todos os dispositivos",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Sobre Mim</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Estudante dedicado com paixão por tecnologia e desenvolvimento de sistemas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative w-100 h-100 mx-auto lg:mx-0 mb-8 lg:mb-0">
                <Image
                  src={perfil}
                  alt="Flávio Montoril"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-primary/20 to-secondary/20"></div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Flávio Montoril</h3>
              <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                Estudante de Análise e Desenvolvimento de Sistemas na{" "}
                <span className="text-primary font-medium">UNIFAMETRO</span>, com conhecimento em MySQL, Power BI, e
                desenvolvimento de sistemas utilizando Java, JavaScript, HTML e CSS.
              </p>
              <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                Apaixonado por criar soluções digitais que fazem a diferença, sempre buscando aprender novas tecnologias
                e aplicar as melhores práticas de desenvolvimento.
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">Tecnologias</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
