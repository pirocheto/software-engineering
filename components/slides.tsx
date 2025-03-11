"use client"

import { useEffect, useRef } from "react"
import Reveal from "reveal.js"
import { ReactNode, HTMLAttributes } from "react"
import RevealHighlight from "reveal.js/plugin/highlight/highlight"
import RevealNotes from "reveal.js/plugin/notes/notes"
import RevealZoom from "reveal.js/plugin/zoom/zoom"
import "reveal.js/dist/reveal.css"
import "reveal.js/dist/theme/black.css"
import "highlight.js/styles/github-dark.css"

interface SlidesProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Slides = ({ children, ...props }: SlidesProps) => {
  const deckDivRef = useRef<HTMLDivElement>(null) // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null) // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      // other config options
    })

    deckRef.current
      .initialize({
        showNotes: false,
        // The "normal" size of the presentation, aspect ratio will
        // be preserved when the presentation is scaled to fit different
        // resolutions. Can be specified using percentage units.
        width: 960,
        height: 700,
        // width: "100%",
        // height: "100%",

        // Factor of the display size that should remain empty around
        // the content
        margin: 0.04,

        // Bounds for smallest/largest possible scale to apply to content
        minScale: 0.2,
        maxScale: 2.5,

        embedded: true,

        // Disables the default reveal.js slide layout (scaling and centering)
        // so that you can use custom CSS layout
        disableLayout: false,

        plugins: [RevealHighlight, RevealNotes, RevealZoom],
      })
      .then(() => {
        // good place for event handlers and plugin setups
      })

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy()
          deckRef.current = null
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.")
      }
    }
  }, [])

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className="h-50 md:h-100" {...props}>
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">{children}</div>
      </div>
    </div>
  )
}

export default Slides
