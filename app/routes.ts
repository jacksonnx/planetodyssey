import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/mods", "routes/mods/layout.tsx", [
        index("routes/mods/home.tsx")
    ])
] satisfies RouteConfig;
