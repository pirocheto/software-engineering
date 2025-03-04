// import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs"
import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/notebook"
import { baseOptions, linkItems } from "@/app/layout.config"
import { source } from "@/lib/source"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  // links: linkItems,
  // containerProps: {
  //   className: "python",
  // },
  sidebar: {
    tabs: {
      transform(option, node) {
        const meta = source.getNodeMeta(node)
        if (!meta) return option

        const dirname = meta.file.dirname
        const color = `var(--${dirname}-color, var(--color-fd-foreground))`

        return {
          ...option,
          props: {
            // className: `${dirname}-hover`,
          },
          icon: (
            <div
              className="rounded-md p-1 shadow-lg ring-2 [&_svg]:size-5 "
              style={
                {
                  color: color,
                  border: `1px solid color-mix(in oklab, ${color} 50%, transparent)`,
                  "--tw-ring-color": `color-mix(in oklab, ${color} 20%, transparent)`,
                } as object
              }
            >
              {node.icon}
            </div>
          ),
        }
      },
    },
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>
}
