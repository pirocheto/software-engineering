import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Montserrat } from "next/font/google"
import type { ReactNode } from "react"
import { Body } from "@/app/layout.client"
import { source } from "@/lib/source"

const inter = Montserrat({
  subsets: ["latin"],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Body>
        <RootProvider
          search={{
            enabled: false,
            options: {
              type: "static",
            },
          }}
        >
          {children}
        </RootProvider>
      </Body>
    </html>
  )
}
