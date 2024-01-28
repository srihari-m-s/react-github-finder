import { Link } from "react-router-dom";

export default function UserItem({ user }) {
  const { login, avatar_url } = user;

  return (
    <div className="card shadow-md compact side bg-zinc-900">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="">
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="profile" />
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-primary text-opacity-40 capitalize"
            to={`${`/user/${login}`}`}
          >
            visit profile
          </Link>
        </div>
      </div>
    </div>
  );
}
