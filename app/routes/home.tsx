import type { Route } from "./+types/home"
import { Navigation } from "app/root"
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MarioDB - Home" }
  ];
}

export default function Home() {
  return (
    <>
      <Navigation />
      <header className="h-65 bg-blue-950 flex flex-col items-center justify-center">
        <h1 className="text-6xl">MarioDB</h1>
        <p className="text-2xl">The hub for Mario games.</p>
        <div className="flex flex-row justify-center items-center m-5 gap-3">
          <div className="h-10 w-25 bg-blue-800 rounded-4xl flex flex-row justify-center items-center">
            <Link to="/games">Games</Link>
          </div>
          <div className="h-10 w-25 bg-blue-800 rounded-4xl flex flex-row justify-center items-center hover:text-gray-300">
            <Link to="/mods">Mods</Link>
          </div>
        </div>
      </header>
      <div className="h-auto p-10 bg-gray-900">
        <h1 className="text-4xl">Did you know?</h1>
        <p className="mt-5">Mario Kart 8 Deluxe is the best-selling game in the Mario franchise, ranked #5 on the best-selling games of all time behind Read Dead Redemption 2 and Wii Sports. It is based on the Mario Kart 8, originally released on the Wii U.</p>
        <img src="/public/mk8d.avif" alt="Mario Kart 8 Deluxe" className="mt-5 block-80 rounded-4xl" />
      </div>
      <footer className="h-7 bg-gray-800 flex flex-row justify-center items-center">
        <p>&copy; MarioDB 2026 - Not affiliated with Nintendo.</p>
      </footer>
    </>
  )
}
