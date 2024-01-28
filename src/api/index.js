import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const github = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export async function searchUsers(text) {
  const params = new URLSearchParams({
    q: text,
  });

  try {
    const response = await github.get(`/search/users?${params}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

export async function getUserAndRepos(login) {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  try {
    const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos?${params}`),
    ]);

    return { user: user.data, repos: repos.data };
  } catch (error) {
    console.error("Error fetching user and repos data:", error);
  }
}
