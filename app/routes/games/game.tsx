import { Footer, Navigation } from "app/exports";
import type { Route } from "../+types/home";
import { type Game, games } from "app/exports"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MarioDB - Games" }
  ];
}

export function Game({ game } : { game: Game }) {
    return (
        <>
            <img src={game.image} alt={game.title} />
            <h1>{game.title}</h1>
            <p>Release Date: {game.releaseDate}</p>
        </>
    )
}

export function GameNotFound() {
    return (
        <>
            <h1 className="text-5xl">Game Not Found</h1>
        </>
    )
}

export default function FetchGame({ gameId } : { gameId: string }) {
    const game = games.find(instance => instance.id === gameId);
    return (
        <>
            <Navigation />
            <div className="w-2/3 h-200 bg-gray-800 flex flex-col justify-center items-center m-auto mt-10 mb-10 rounded-4xl">
                { game ? <Game game={game} /> : <GameNotFound /> }
            </div>
            <Footer />
        </>
    )
}