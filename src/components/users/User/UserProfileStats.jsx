import { useContext } from "react";
import { FaCodepen, FaStore, FaUserGroup, FaUsers } from "react-icons/fa6";
import { GithubContext } from "../../../contexts/github/GithubContext";

export default function UserProfileStats() {
  const { user } = useContext(GithubContext);

  const { followers, following, public_repos, public_gists } = user;

  return (
    <div className="w-full rounded-lg shadow-md stats bg-base-200">
      {/* followers */}
      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaUsers className="text-3xl md:text-5xl" />
        </div>
        <div className="stat-title">Followers</div>
        <div className="stat-value text-3xl md:text-4xl">{followers}</div>
      </div>
      {/* following */}
      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaUserGroup className="text-3xl md:text-5xl" />
        </div>
        <div className="stat-title">Following</div>
        <div className="stat-value text-3xl md:text-4xl">{following}</div>
      </div>
      {/* Public Repos */}
      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaCodepen className="text-3xl md:text-5xl" />
        </div>
        <div className="stat-title">Public Repos</div>
        <div className="stat-value text-3xl md:text-4xl">{public_repos}</div>
      </div>
      {/* Public Gists */}
      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaStore className="text-3xl md:text-5xl" />
        </div>
        <div className="stat-title">Public Gists</div>
        <div className="stat-value text-3xl md:text-4xl">{public_gists}</div>
      </div>
    </div>
  );
}
