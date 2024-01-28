import { createContext, useReducer } from "react";
import { githubReducer } from "./GithubReducer";

export const GithubContext = createContext();

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};

export default function GitHubProvider({ children }) {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
