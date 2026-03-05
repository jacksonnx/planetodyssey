import { Link, useParams } from "react-router";
import { Footer, mods, Navigation, type Mod } from "app/exports";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Planet Odyssey - Mods" }
  ];
}

export function RenderMod({ mod } : { mod: Mod }) {
  return (
    <div className="bg-gray-800 w-270 h-auto m-auto mt-10 mb-10 rounded-2xl p-5 flex flex-col gap-3">
      <img src={mod.image === "" ? "/placeholder-art.jpg" : mod.image} alt={mod.name} className="aspect-video w-auto h-auto rounded" />
      <div>
        <div className="flex flex-row items-end gap-1">
          <h1 className="text-5xl">{mod.name}</h1>
          <p className="text-2xl italic">v{mod.version}</p>
        </div>
        <div className="flex flex-row items-center gap-2 text-gray-200 text-3xl">
          <h2 className="">Author:</h2>
          <p className="italic">{mod.author}</p>
        </div>
        <div className="mt-5 mb-5 flex flex-col gap-2">
          <h1 className="text-2xl">Description</h1>
          <div className="bg-white h-px w-full rounded-4xl" />
          <p className="text-2xl">{mod.description}</p>
        </div>
        <a href={mod.download} target="_blank" className="bg-blue-800 w-32 h-10 rounded-4xl flex justify-center items-center hover:text-gray-300 transition-colors">Download</a>
      </div>
    </div>
  )
}

export function ModNotFound() {
  return (
    <div>
      <h1 className="text-5xl text-center m-10">Mod Not Found</h1>
    </div>
  )
}

export default function Mod() {
  const { modId } = useParams();
  const mod = mods.find(instance => instance.id === Number(modId));
  
  return mod ? <RenderMod mod={mod} /> : <ModNotFound />
}