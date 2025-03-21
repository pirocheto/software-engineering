import { docs, blogPosts, projectPosts } from "@/.source"
import { loader } from "fumadocs-core/source"
import { createElement } from "react"
import { icons } from "lucide-react"
import * as FaIcons from "react-icons/fa"
import * as SiIcons from "react-icons/si"
import * as TbIcons from "react-icons/tb"
import { createMDXSource } from "fumadocs-mdx"
import { i18n } from "@/lib/i18n"

export const source = loader({
  // i18n,
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons])
    if (icon && icon in FaIcons)
      return createElement(FaIcons[icon as keyof typeof FaIcons])
    if (icon && icon in SiIcons)
      return createElement(SiIcons[icon as keyof typeof SiIcons])
    if (icon && icon in TbIcons)
      return createElement(TbIcons[icon as keyof typeof TbIcons])
  },
})

export const blog = loader({
  // i18n,
  baseUrl: "/blog",
  source: createMDXSource(blogPosts),
})

export const projects = loader({
  // i18n,
  baseUrl: "/projects",
  source: createMDXSource(projectPosts),
})
