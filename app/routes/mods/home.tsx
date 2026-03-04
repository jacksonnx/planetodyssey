import type { Route } from "../+types/home"
import { Navigation } from "app/root"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MarioDB - Mods" }
  ];
}

export default function Mods() {
    return (
        <>
            <Navigation />
        </>
    )
}