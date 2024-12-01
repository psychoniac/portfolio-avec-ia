import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo_avec_dall-e.jpg";

export default function Header() {
  return (
    <header data-theme="halloween" className="flex justify-around items-center">
      <div>
        <h1 className="text-3xl font-bold text-white">
          <Link to="/">Mon portfolio</Link>
        </h1>
      </div>
      <div className="max-w-[25%] rounded-xl">
        <img src={Logo} alt="logo fait avec dal-e" className="rounded-full" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Mes projets</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Mon blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
