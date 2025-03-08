import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Montserrat } from "next/font/google"
import type { ReactNode } from "react"
import { Body } from "@/app/layout.client"
// import { I18nProvider, type Translations } from 'fumadocs-ui/i18n';
import { I18nProvider, type Translations } from "fumadocs-ui/i18n"

const fr: Partial<Translations> = {
  search: "Rechercher",
  searchNoResult: "Aucun résultat",
  toc: "Sommaire",
  tocNoHeadings: "Aucun titre",
  lastUpdate: "Dernière mise à jour",
  chooseLanguage: "Choisir la langue",
  nextPage: "Page suivante",
  previousPage: "Page précédente",
  chooseTheme: "Choisir le thème",
  editOnGithub: "Modifier sur GitHub",
}

const inter = Montserrat({
  subsets: ["latin"],
})

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>
  children: ReactNode
}) {
  const lang = (await params).lang

  return (
    <html lang="fr" className={inter.className} suppressHydrationWarning>
      <Body>
        <I18nProvider locale={lang} translations={{ fr }[lang]}>
          <RootProvider
            search={{
              options: {
                type: "static",
                api: (process.env.BASE_PATH || "") + "/api/search",
              },
            }}
          >
            {children}
          </RootProvider>
        </I18nProvider>
      </Body>
    </html>
  )
}
