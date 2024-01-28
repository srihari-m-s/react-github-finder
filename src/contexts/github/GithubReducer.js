// Actions
const GITHUB_ACTIONS = {
  GET_USERS: "get-users",
  SET_LOADING: "set-loading",
  CLEAR_USERS: "clear-users",
  GET_USER_AND_REPOS: "get-user-and-repos",
};

// Reducer
const githubReducer = (state, action) => {
  switch (action.type) {
    case GITHUB_ACTIONS.GET_USERS:
      return { ...state, users: action.payload, loading: false };
    case GITHUB_ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    case GITHUB_ACTIONS.CLEAR_USERS:
      return { ...state, users: [] };
    case GITHUB_ACTIONS.GET_USER_AND_REPOS:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    default:
      return state;
  }
};

// Exports
export { githubReducer, GITHUB_ACTIONS };
