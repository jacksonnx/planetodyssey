import type { Route } from "../+types/home"
import { Navigation } from "app/root"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MarioDB - Games" }
  ];
}

export default function Games() {
    return (
        <>
            <Navigation />
        </>
    )
}