import { useState, useEffect } from 'react';
import { fetchUserData } from '../services/githubApi';

const useGithubData = (username) => {
  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (username) {
      fetchUserData(username).then((data) => {
        setUser(data.user);
        setFollowers(data.followers);
        setRepos(data.repos);
      });
    }
  }, [username]);

  return { user, followers, repos };
};

export default useGithubData;
