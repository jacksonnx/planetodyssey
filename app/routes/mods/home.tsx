import type { Route } from "../+types/home"
import { Navigation, Footer } from "app/exports"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Planet Odyssey - Mods" }
  ];
}

export default function Mods() {
    return (
        <>
            <Navigation />
            <h1 className="text-5xl text-center m-5">Mods</h1>
            <Footer />
        </>
    )
}