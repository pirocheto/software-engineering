import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Montserrat } from "next/font/google"
import type { ReactNode } from "react"
import { Body } from "@/app/layout.client"
// import { I18nProvider, type Translations } from 'fumadocs-ui/i18n';

const inter = Montserrat({
  subsets: ["latin"],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr-FR" className={inter.className} suppressHydrationWarning>
      <Body>
        {/* <Banner variant="rainbow" className="flex gap-2">
          <IoIosWarning size={20} />
          Site en cours de développement
          <IoIosWarning size={20} />
        </Banner> */}
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
      </Body>
    </html>
  )
}
