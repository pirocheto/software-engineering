import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Montserrat } from "next/font/google"
import type { ReactNode } from "react"
import { Body } from "@/app/layout.client"

const inter = Montserrat({
  subsets: ["latin"],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Body>
        <RootProvider
          search={{
            options: {
              type: "static",
              api: process.env.BASE_PATH || "" + "/api/search",
            },
          }}
        >
          {children}
        </RootProvider>
      </Body>
    </html>
  )
}
