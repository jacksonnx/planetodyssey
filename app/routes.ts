import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/games", "routes/games/layout.tsx", [
        index("routes/games/home.tsx"),
        route(":gameId", "routes/games/game.tsx")
    ]),
    route("/mods", "routes/mods/layout.tsx", [
        index("routes/mods/home.tsx")
    ])
] satisfies RouteConfig;
