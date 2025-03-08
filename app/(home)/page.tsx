import { Card, Cards } from "fumadocs-ui/components/card"
import { FaPython } from "react-icons/fa"
import TextTyped from "@/components/typed"
import { FaBook, FaTools } from "react-icons/fa"
import { FaPenToSquare } from "react-icons/fa6"

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col gap-10 justify-center mt-12 sm:mt-0 container xs:mt-20">
      <div className="font-bold">
        <h1 className="mb-4 text-4xl sm:text-5xl">Pierre Rochet</h1>
        <div className="inline-flex flex-wrap text-2xl sm:text-3xl uppercase">
          <p className="mr-2">Ingénieur</p>
          <TextTyped
            className="text-fd-primary"
            strings={[
              "data",
              "machine learning",
              "intelligence artificielle",
              "logiciel",
            ]}
            typeSpeed={70}
            backSpeed={50}
            cursorChar=""
            // fadeOut={true}
            // loop
          />
        </div>
      </div>
      <div>
        <p className="text-fd-muted-foreground text-lg">
          Bienvenue sur mon site personnel. Je suis Pierre Rochet ingénieur
          logiciel spécialisé en <span className="font-bold">data</span> et{" "}
          <span className="font-bold">intelligence artificielle</span>. Je
          partage ici mes connaissances et découvertes à travers des cours, des
          articles et des projets détaillés.
        </p>
      </div>

      <Cards className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          icon={<FaBook className="menu-item" />}
          className="menu-item shadow-none"
          href="/docs/python"
          title="Les cours"
          description="Découvrez les cours que je propose sur les technologies fondamentales pour la création d'applications modernes en Python."
        />
        <Card
          icon={<FaTools className="menu-item" />}
          className="menu-item shadow-none"
          href="/projects"
          title="Les projets"
          description="Découvrez des projets concrets avec code source et des explications détaillés sur chaque étape de développement."
        />
        <Card
          icon={<FaPenToSquare className="menu-item" />}
          className="menu-item shadow-none"
          href="/blog"
          title="Le blog"
          description="Découvrez des tutoriels, des astuces et des retours d'expérience sur le développement, la data et l'intelligence artificielle."
        />
      </Cards>
    </main>
  )
}
