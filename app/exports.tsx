import { Link } from "react-router";

export type Game = {
    id: string;
    title: string;
    releaseDate: string;
    image: string;
}

export const games: Game[] = [
  { id: "smb1", title: "Super Mario Bros.", releaseDate: "1985-09-13", image: "/public/cover-art/smb1.jpg" },
  { id: "smb2", title: "Super Mario Bros. 2", releaseDate: "1988-10-09", image: "/public/cover-art/smb2.png" },
  { id: "smb3", title: "Super Mario Bros. 3", releaseDate: "1990-10-23", image: "/public/cover-art/smb3.png" },
]

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Mods", href: "/mods" }
]

export function Navigation() {
  return (
    <nav className="h-15 bg-blue-900 flex flex-row justify-center items-center">
      <h1 className="text-2xl">MarioDB</h1>
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
    <footer className="h-10 bg-gray-800 flex flex-row justify-center items-center">
      <p>&copy; MarioDB 2026 - Not affiliated with Nintendo.</p>
    </footer>
  )
}