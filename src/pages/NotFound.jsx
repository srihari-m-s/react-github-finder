import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-6xl font-bold mb-8">Oops!</h1>
          <p className="text-4xl mb-8">
            You seemed to have stumbled into something that does not exist!
          </p>
          <Link to={"/"} className="btn btn-primary btn-lg">
            <FaHouse /> Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
