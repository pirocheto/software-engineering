import { Card, Cards } from "fumadocs-ui/components/card"
import { FaPython } from "react-icons/fa"
import TextTyped from "@/components/typed"
import { FaBook, FaTools } from "react-icons/fa"
import { FaPenToSquare } from "react-icons/fa6"

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col gap-10 justify-center container">
      <div className="font-bold">
        <h1 className="mb-4 text-5xl">Pierre Rochet</h1>
        <div className="inline-flex flex-wrap gap-2 text-3xl uppercase">
          <p className="">Ingénieur</p>
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
            loop
          />
        </div>
      </div>
      <div>
        <p className="text-fd-muted-foreground text-lg">
          Bienvenue sur mon site personnel. Je suis Pierre Rochet ingénieur
          logiciel spécialisé en{" "}
          <span className="text-fd-primary">
            {" "}
            data et intelligence artificielle
          </span>
          . Je partage ici mes connaissances et découvertes à travers des cours,
          des articles et des projets détaillés.
        </p>
      </div>

      {/* <div className="flex flex-col items-center gap-4 text-fd-primary">
        <p className=" text-lg">Parcourez les rubriques</p>
        <PiArrowCircleDown size={40} className=" animate-bounce" />
      </div> */}

      {/* <h2 className="text-3xl font-semibold">Les cours</h2>
      <p className="text-fd-muted-foreground">
        Découvrez les cours que je propose sur les technologies fondamentales du
        développement backend pour le domaine de la data et de l'intelligence
        artificielle.
      </p> */}

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
          href="/docs/projects"
          title="Les projets"
          description="Découvrez des projets concrets avec code source et des explications détaillés sur chaque étape de développement."
        />
        <Card
          icon={<FaPenToSquare className="menu-item" />}
          className="menu-item shadow-none"
          href="/docs/blog"
          title="Le blog"
          description="Découvrez des tutoriels, des astuces et des retours d'expérience sur le développement, la data et l'intelligence artificielle."
        />
      </Cards>
    </main>
  )
}
