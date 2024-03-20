import {Link} from "react-router-dom";

export default function Header() {
  const routes = [
    {to: "/", label: "Home"},
    {to: "/fetch-tuto", label: "Fetch"},
  ];
  return (
    <nav className="w-full flex gap-4 justify-center items-center h-16 bg-zinc-900">
      {routes.map((route) => (
        <Link
          key={route.label}
          to={route.to}
          className="text-center text-emerald-400 hover:text-emerald-500 leading-8 w-20 rounded-md bg-zinc-800 hover:bg-zinc-700 ">
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
