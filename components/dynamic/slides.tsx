"use client"
import dynamic from "next/dynamic"

const Slides = dynamic(
  () => import("../slides").then((module) => module.default),
  {
    ssr: false,
  }
)

export default Slides
