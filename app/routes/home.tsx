import type { Route } from "./+types/home"
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Planet Odyssey - Home" }
  ];
}

export default function Home() {
  return (
    <main>
      <header className="h-80 bg-blue-950 flex flex-col items-center justify-center">
        <h1 className="text-6xl">Planet Odyssey</h1>
        <p className="text-2xl">The hub for Super Mario Odyssey.</p>
        <Link to="/mods" className="h-10 w-25 bg-blue-800 rounded-4xl flex flex-row justify-center items-center hover:text-gray-300 transition-colors mt-5">Mods</Link>
      </header>
      <div className="h-auto p-10">
        <h1 className="text-4xl text-center">Did you know?</h1>
        <div className="mt-10 flex flex-row justify-center items-center gap-20">
          <p className="w-1/2 text-2xl text-center">Super Mario Odyssey is the 29th best-selling video game of all time, and the 13th best-selling Nintendo game.<sup><Link to="https://en.wikipedia.org/wiki/List_of_best-selling_video_games" target="_blank" className="hover:text-gray-300 transition-colors">[1]</Link></sup></p>
          <img src="/smo-box-art.png" alt="Super Mario Odyssey" className="block-100 rounded-2xl flex items-center justify-center" />
        </div>
      </div>
    </main>
  )
}
