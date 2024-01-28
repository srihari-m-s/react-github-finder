import { useContext, useState } from "react";
import { GithubContext } from "../../contexts/github/GithubContext";
import { AlertContext } from "../../contexts/alert/AlertContext";
import { searchUsers } from "../../api";
import { GITHUB_ACTIONS } from "../../contexts/github/GithubReducer";

export default function UserSearch() {
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (text === "") {
      setAlert("Search term cannot be empty.", "error");
    } else {
      dispatch({ type: GITHUB_ACTIONS.SET_LOADING, payload: true });
      const users = await searchUsers(text);
      dispatch({
        type: GITHUB_ACTIONS.GET_USERS,
        payload: users,
      });
      setText("");
    }
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClear() {
    dispatch({
      type: GITHUB_ACTIONS.CLEAR_USERS,
    });
  }

  return (
    <div className="grid grid-cols-1 mb-8 gap-2 md:gap-4 xl:gap-8 md:grid-cols-2">
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="text"
              className="w-full input input-lg text-white bg-slate-600 rounded-r-none border-transparent placeholder:text-gray-850 focus:outline-none focus:border-primary"
              placeholder="Search"
              autoFocus
              value={text}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-lg btn-primary text-white rounded-l-none"
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className="ms-auto md:ms-0">
          <button
            type="button"
            className="btn btn-ghost btn-lg text-primary"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
