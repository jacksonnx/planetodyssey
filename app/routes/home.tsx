import type { Route } from "./+types/home"
import { Navigation, Footer } from "app/exports"
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
      <header className="h-80 bg-blue-950 flex flex-col items-center justify-center">
        <h1 className="text-6xl">MarioDB</h1>
        <p className="text-2xl">The hub for Mario games.</p>
        <div className="flex flex-row justify-center items-center m-5 gap-3">
          <div className="h-10 w-25 bg-blue-800 rounded-4xl flex flex-row justify-center items-center">
            <Link className="hover:text-gray-300 transition-colors" to="/games">Games</Link>
          </div>
          <div className="h-10 w-25 bg-blue-800 rounded-4xl flex flex-row justify-center items-center">
            <Link className="hover:text-gray-300 transition-colors" to="/mods">Mods</Link>
          </div>
        </div>
      </header>
      <div className="h-auto p-10">
        <h1 className="text-4xl text-center">Did you know?</h1>
        <div className="mt-10 flex flex-row justify-center items-center gap-20">
          <p className="w-1/2 text-2xl text-center">Mario Kart 8 Deluxe is the best-selling game in the Mario franchise, ranked #5 on the best-selling games of all time behind Read Dead Redemption 2 and Wii Sports. It is based on the Mario Kart 8, which originally released on the Wii U.</p>
          <img src="/public/mk8d.avif" alt="Mario Kart 8 Deluxe" className="block-100 rounded-4xl" />
        </div>
      </div>
      <Footer />
    </>
  )
}
