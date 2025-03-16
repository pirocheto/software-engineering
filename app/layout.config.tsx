import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import { type LinkItemType } from "fumadocs-ui/layouts/docs"
import { FumadocsIcon } from "@/app/layout.client"
import { FaPython, FaDocker, FaGitAlt, FaDatabase } from "react-icons/fa"
import { SiFastapi, SiGrafana } from "react-icons/si"

export const linkItems: LinkItemType[] = [
  {
    text: "Projets",
    url: "/projects",
    active: "nested-url",
  },
  {
    text: "Articles",
    url: "/blog",
    active: "nested-url",
  },
]

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/pirocheto",
  nav: {
    title: (
      <>
        <FumadocsIcon className="size-5 [.uwu_&]:hidden" fill="currentColor" />
        Pierre Rochet
      </>
    ),
  },
  links: [
    {
      type: "menu",
      text: "Cours",
      url: "/docs/python",
      items: [
        {
          icon: <FaPython />,
          text: "Python",
          description: "Langage de programmation.",
          url: "/docs/python",
          menu: {
            className: "python menu-item",
          },
        },
        {
          icon: <FaGitAlt />,
          text: "Git",
          description: "Système de contrôle de version.",
          url: "/docs/git",
          menu: {
            className: "git menu-item",
          },
        },
        {
          icon: <FaDatabase />,
          text: "SQL",
          description: "Langage de requête structurée.",
          url: "/docs/sql",
          menu: {
            className: "sql menu-item",
          },
        },
        {
          icon: <SiFastapi />,
          text: "FastAPI",
          description: "Framework web pour Python.",
          url: "/docs/fastapi",
          menu: {
            className: "fastapi menu-item",
          },
        },
        {
          icon: <FaDocker />,
          text: "Docker",
          description: "Plateforme de conteneurisation.",
          url: "/docs/docker",
          menu: {
            className: "docker menu-item",
          },
        },
        {
          icon: <SiGrafana />,
          text: "Grafana",
          description: "Plateforme de visualisation de données.",
          url: "/docs/grafana",
          menu: {
            className: "grafana menu-item",
          },
        },
      ],
    },
    ...linkItems,
  ],
}
