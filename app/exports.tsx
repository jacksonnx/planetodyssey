import { Link } from "react-router";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Mods", href: "/mods" }
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
    <footer className="h-10 bg-gray-800 flex flex-row justify-center items-center">
      <p>&copy; Planet Odyssey 2026 - Not affiliated with Nintendo.</p>
    </footer>
  )
}