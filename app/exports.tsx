import { Link } from "react-router";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Mods", href: "/mods" }
]

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

export function Navigation() {
  return (
    <nav className="h-15 bg-blue-900 flex flex-row justify-center items-center">
      <h1 className="text-2xl">Planet Odyssey</h1>
      <ul className="flex flex-row justify-center items-center m-5">
        {navLinks.map(({ label, href }) => (
            <li className="m-1 hover:text-gray-300 transition-colors" key={label}><Link to={href}>{label}</Link></li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bottom-0 w-screen h-10 bg-gray-800 flex flex-row justify-center items-center">
      <p>&copy; Planet Odyssey 2026 - Not affiliated with Nintendo.</p>
    </footer>
  )
}