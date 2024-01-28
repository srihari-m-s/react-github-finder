import { useContext } from "react";
import { GithubContext } from "../../../contexts/github/GithubContext";

export default function UserProfileHead() {
  const { user } = useContext(GithubContext);
  const {
    avatar_url,
    login,
    type,
    hireable,
    bio,
    html_url,
    blog,
    twitter_username,
    name,
    location,
  } = user;
  // console.log("from head", user);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-4">
      <div className="custom-image-card">
        <div className="rounded-xl card image-full shadow-xl">
          <figure className="">
            <img src={avatar_url} alt={login} />
          </figure>
          <div className="card-body mt-auto">
            <h1 className="card-title text-white text-3xl">{name}</h1>
            <p className="text-white text-xl">{login}</p>
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <div className="h-full flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-4">
            {/* Name and info */}
            <span className="flex gap-4 items-center">
              <h1 className="text-3xl card-title">{name}</h1>
              <span className="badge badge-success badge-outline">{type}</span>
              {hireable && (
                <span className="badge badge-info badge-outline">Hireable</span>
              )}
            </span>
            {/* Bio */}
            <p className="">{bio}</p>
            {/* Actions */}
            <div className="card-actions">
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                Visit Github Profile
              </a>
            </div>
          </div>
          {/* Stats */}
          <div className="stats rounded-lg shadow-md bg-base-300">
            {/* location */}
            {location && (
              <div className="stat">
                <div className="stat-title">Location</div>
                <div className="stat-value text-xl">{location}</div>
              </div>
            )}
            {/* blog */}
            {blog && (
              <div className="stat">
                <div className="stat-title">Website</div>
                <div className="stat-value text-xl">
                  <a
                    href={`https://${blog}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {blog}
                  </a>
                </div>
              </div>
            )}
            {/* Twitter */}
            {twitter_username && (
              <div className="stat">
                <div className="stat-title">Twitter</div>
                <div className="stat-value text-xl">
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
