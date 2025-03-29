import Link from "next/link"
import { projects } from "@/lib/source"
import Image from "next/image"

export default function Home() {
  const posts = projects.getPages()

  return (
    <main className="grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => {
          return (
            <Link
              key={post.url}
              href={post.url}
              className="block bg-fd-secondary rounded-lg shadow-md overflow-hidden p-4"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={post.data.image || "/images/default-project.png"}
                  alt={post.data.title}
                  width={100}
                  height={100}
                  className="w-32 h-32"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-4">
                    {post.data.title}
                  </h2>
                  <p>{post.data.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.data.tags?.map((tag) => {
                      return (
                        <span
                          key={tag}
                          className="bg-fd-foreground/90 text-fd-accent rounded-full px-2 py-1  text-xs"
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
