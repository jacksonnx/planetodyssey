import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/games", "routes/games/layout.tsx", [
        index("routes/games/home.tsx")
    ]),
    route("/mods", "routes/mods/layout.tsx", [
        index("routes/mods/home.tsx")
    ])
] satisfies RouteConfig;
