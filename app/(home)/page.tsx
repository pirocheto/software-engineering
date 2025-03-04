import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Pierre Rochet, Data ingénieur</h1>
      <h2 className="mb-4 text-lg font-semibold">
        Bienvenue sur mon site personnel
      </h2>
      <p className="text-fd-muted-foreground">
        <Link
          href="/docs/python"
          className="text-fd-foreground font-semibold underline"
        >
          Commencer la lecture
        </Link>{" "}
      </p>
    </main>
  )
}
