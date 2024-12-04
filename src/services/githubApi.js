import axios from 'axios';

export const fetchUserData = async (username) => {
  const userUrl = `https://api.github.com/users/${username}`;
  const reposUrl = `https://api.github.com/users/${username}/repos`;
  const followersUrl = `https://api.github.com/users/${username}/followers`;

  const user = await axios.get(userUrl); // Fetch user details
  const repos = await axios.get(reposUrl); // Fetch repositories
  const followers = await axios.get(followersUrl); // Fetch followers

  return {
    user: user.data, // Return full user profile details
    repos: repos.data,
    followers: followers.data,
  };
};


