import { Link } from "react-router";
import type { Route } from "../+types/home"
import { Navigation, Footer } from "app/exports"
import { games } from "app/exports"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MarioDB - Games" }
  ];
}

export default function Games() {
  return (
    <>
      <Navigation />
      <h1 className="text-5xl text-center m-5">Games</h1>
      <div className="bg-blue-950 p-5 flex flex-wrap flex-row justify-center items-center w-auto m-5 rounded-4xl">
        {games.map(({ id, title, releaseDate, image }) => (
          <div key={id} className="m-2 bg-gray-900 w-70 h-auto flex flex-col items-center justify-around rounded-3xl p-5">
            <img src={image} alt={title} className="w-75 h-90 rounded-3xl text-center" />
            <div className="flex flex-col items-center justify-center mt-3">
              <Link to={`/games/${id}`} className="text-2xl">{title}</Link>
              <p>{releaseDate}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}