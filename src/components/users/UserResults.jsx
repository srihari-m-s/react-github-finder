import { useContext } from "react";
import UserItem from "./UserItem.jsx";
import Spinner from "../shared/Spinner/Spinner.jsx";
import { GithubContext } from "../../contexts/github/GithubContext.jsx";

export default function UserResults() {
  const { users, loading } = useContext(GithubContext);

  return loading ? (
    <div className="grid w-full place-items-center py-5">
      <Spinner />
    </div>
  ) : (
    <div className="grid grid-cols-1 gap-2 md:gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
}
