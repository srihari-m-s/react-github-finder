import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GithubContext } from "../contexts/github/GithubContext";
import Spinner from "../components/shared/Spinner/Spinner";
import { FaArrowLeft } from "react-icons/fa6";
import UserProfileHead from "../components/users/User/UserProfileHead";
import UserProfileStats from "../components/users/User/UserProfileStats";
import RepoList from "../components/repos/RepoList";
import { GITHUB_ACTIONS } from "../contexts/github/GithubReducer";
import { getUserAndRepos } from "../api";

export default function User() {
  let { userId } = useParams();
  const { loading, repos, dispatch } = useContext(GithubContext);

  useEffect(() => {
    async function fetchUserAndRepos() {
      dispatch({
        type: GITHUB_ACTIONS.SET_LOADING,
        payload: true,
      });

      const userData = await getUserAndRepos(userId);
      dispatch({
        type: GITHUB_ACTIONS.GET_USER_AND_REPOS,
        payload: userData,
      });
    }

    fetchUserAndRepos();
  }, [dispatch, userId]);

  return loading ? (
    <div className="grid w-full place-items-center py-5">
      <Spinner />
    </div>
  ) : (
    <div>
      <Link to={"/"} className="btn btn-ghost btn-lg mb-4">
        <FaArrowLeft /> Back
      </Link>

      <div className="flex flex-col gap-8">
        {/* Profile Head */}
        <UserProfileHead />

        {/* Further Stats */}
        <UserProfileStats />

        <div className="">
          <RepoList repos={repos} />
        </div>
      </div>
    </div>
  );
}
