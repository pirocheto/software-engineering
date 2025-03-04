import { docs, blogPosts, projectPosts } from "@/.source"
import { loader } from "fumadocs-core/source"
import { createElement } from "react"
import { icons } from "lucide-react"
import * as FaIcons from "react-icons/fa"
import * as SiIcons from "react-icons/si"
import { createMDXSource } from "fumadocs-mdx"

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons])
    if (icon && icon in FaIcons)
      return createElement(FaIcons[icon as keyof typeof FaIcons])
    if (icon && icon in SiIcons)
      return createElement(SiIcons[icon as keyof typeof SiIcons])
  },
})

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts),
})

export const projects = loader({
  baseUrl: "/projects",
  source: createMDXSource(projectPosts),
})
