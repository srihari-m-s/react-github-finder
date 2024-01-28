import { FaGithub } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto flex-col sm:flex-row">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline text-4xl pr-2 hover:text-primary" />
          <Link
            to={"/"}
            className="text-lg font-bold align-middle hover:text-primary"
          >
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <NavLink to={"/"} className="btn btn-ghost btn-sm rounded-btn">
              Home
            </NavLink>
            <NavLink to={"/about"} className="btn btn-ghost btn-sm rounded-btn">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "React GitHub Finder",
};
