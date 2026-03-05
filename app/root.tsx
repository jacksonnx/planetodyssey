import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Mods", href: "/mods" }
]

function Navigation() {
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

function Footer() {
  return (
    <footer className="bottom-0 w-screen h-10 bg-gray-800 flex flex-row justify-center items-center">
      <p>&copy; Planet Odyssey 2026 - Not affiliated with Nintendo.</p>
    </footer>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main>
      <div className="h-screen w-screen flex flex-col justify-center items-center gap-1">
        <h1 className="text-5xl">{message}</h1>
        <p className="text-2xl">{details}</p>
        <Link to="/" className="mt-5 w-30 h-10 bg-blue-800 rounded-4xl flex justify-center items-center hover:text-gray-300 transition-colors">Home</Link>
      </div>
    </main>
  );
}
