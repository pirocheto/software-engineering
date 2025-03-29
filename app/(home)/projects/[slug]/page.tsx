import { notFound } from "next/navigation"
import Link from "next/link"
import { InlineTOC } from "fumadocs-ui/components/inline-toc"
import defaultMdxComponents from "fumadocs-ui/mdx"
import { projects } from "@/lib/source"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const page = projects.getPage([params.slug])

  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}

export default async function Page(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const page = projects.getPage([params.slug])

  if (!page) notFound()
  const Mdx = page.data.body

  return (
    <>
      <div className="container rounded-xl border my-6 md:py-8 md:px-8">
        <Image
          src={page.data.image || "/default-project.png"}
          alt={page.data.title}
          width={100}
          height={100}
          className="w-full h-72 object-cover mb-6"
        />
        <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
        <p className="mb-4 text-fd-muted-foreground">{page.data.description}</p>
        <Link href="/projects">
          <ArrowLeft className="inline" /> Retour
        </Link>
      </div>
      <article className="container flex flex-col px-4 py-4">
        <div className="prose min-w-0">
          <InlineTOC items={page.data.toc} />
          <Mdx components={defaultMdxComponents} />
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <div>
            <p className="mb-1 text-fd-muted-foreground">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-fd-muted-foreground">At</p>
            <p className="font-medium">
              {new Date(page.data.date).toDateString()}
            </p>
          </div>
        </div>
      </article>
    </>
  )
}

export function generateStaticParams(): { slug: string }[] {
  return projects.getPages().map((page) => ({
    slug: page.slugs[0],
  }))
}
