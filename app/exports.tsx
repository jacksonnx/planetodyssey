export const modCategories = [
  "Gameplay",
]

export type Mod = {
  id: number;
  name: string;
  description: string;
  category: string;
  author: string;
  version: string;
  image: string;
  download: string;
}

export const mods: Mod[] = [
  {
    id: 0,
    name: "Infinite Cap Bounces",
    description: "Allows for infinite cap bounces.",
    category: "Gameplay",
    author: "jacksonnx",
    version: "1.0.0",
    image: "/mods/art/infinite-cap-bounces.jpg",
    download: "/mods/infinite-cap-bounces-100.zip",
  },
  {
    id: 1,
    name: "Speed Hack",
    description: "Increases Mario's speed.",
    category: "Gameplay",
    author: "jacksonnx",
    version: "1.0.0",
    image: "/mods/art/speed-hack.jpg",
    download: "/mods/super-fast-100.zip",
  }
]