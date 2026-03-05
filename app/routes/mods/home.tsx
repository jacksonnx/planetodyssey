import { Link } from "react-router";
import type { Route } from "../+types/home"
import { Navigation, Footer, mods } from "app/exports"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Planet Odyssey - Mods" }
  ];
}

export default function Mods() {
  return (
    <main>
      <h1 className="text-5xl text-center mt-5">Mods</h1>
      <div className="w-auto h-auto m-5 flex flex-row flex-wrap justify-center items-center gap-2">
        {mods.map((mod) => (
          <div key={mod.id} className="w-100 h-auto bg-gray-800 p-3 gap-4 rounded-2xl">
            <img src={mod.image === "" ? "/placeholder-art.jpg" : mod.image} alt={mod.name} className="aspect-video rounded flex justify-center items-center" />
            <div className="flex flex-row items-end gap-1 mt-2">
              <Link to={String(mod.id)} className="text-2xl hover:text-gray-300 transition-colors">{mod.name}</Link>
              <p className="italic">v{mod.version}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}