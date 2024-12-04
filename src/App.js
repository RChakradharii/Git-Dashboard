
// import React, { useState } from 'react';
// import './App.css'; 
// // import  SearchBar from './components/SearchBar';
// import UserOverview from './components/UserOverview';
// import UserProfile from './components/Userprofile';
// import FollowersList from './components/FollowersList';
// import LanguageChart from './components/LanguageChart';
// import Header from './components/Header';
// import { fetchUserData } from './services/githubApi'; // Import here


// const App = () => {
//   const [user, setUser] = useState(null);
//   const [followers, setFollowers] = useState([]);
//   const [languages, setLanguages] = useState({});
//   const [requestCount, setRequestCount] = useState(60);

//   const handleFetchUserData = async (username) => {
//     try {
//       const data = await fetchUserData(username); // Use the imported function
//       setUser(data.user);
//       setFollowers(data.followers);

//       // Aggregate language data
//       const langData = {};
//       data.repos.forEach((repo) => {
//         if (repo.language) {
//           langData[repo.language] = (langData[repo.language] || 0) + 1;
//         }
//       });
//       setLanguages(langData);

//       // Update API request count
//       setRequestCount((prev) => prev - 3);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="app">
//       <Header fetchUserData={handleFetchUserData} requestCount={requestCount} />
//       {user && (
//         <>
//           <UserOverview user={user} />
//           <UserProfile user={user} />
//           <FollowersList followers={followers} />
//           <LanguageChart languages={languages} />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;




import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UserOverview from './components/UserOverview';
import UserProfile from './components/Userprofile';
import FollowersList from './components/FollowersList';
import LanguageChart from './components/LanguageChart';
import PopularChart from './components/PopularChart'; // Import popular repos chart
import StarsPerLanguageChart from './components/StarsPerLanguageChart'; // Import stars per language chart
import MostForkedChart from './components/MostForkedChart'; // Import most forked repos chart
import { fetchUserData } from './services/githubApi'; // Import API service

const App = () => {
  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [languages, setLanguages] = useState({});
  const [popularRepos, setPopularRepos] = useState([]);
  const [starsPerLanguage, setStarsPerLanguage] = useState({});
  const [mostForkedRepos, setMostForkedRepos] = useState([]);
  const [requestCount, setRequestCount] = useState(60);

  const handleFetchUserData = async (username) => {
    try {
      const data = await fetchUserData(username); // Use the API function
      setUser(data.user);
      setFollowers(data.followers);

      // Aggregate language data
      const langData = {};
      const starsLangData = {};
      const forkedData = [];
      const popularData = [];

      data.repos.forEach((repo) => {
        if (repo.language) {
          // Count languages
          langData[repo.language] = (langData[repo.language] || 0) + 1;

          // Sum stars per language
          starsLangData[repo.language] =
            (starsLangData[repo.language] || 0) + repo.stargazers_count;
        }

        // Find most forked repos
        forkedData.push({
          name: repo.name,
          forks: repo.forks_count,
        });

        // Find popular repos (based on stars)
        popularData.push({
          name: repo.name,
          stars: repo.stargazers_count,
        });
      });

      // Sort data for specific charts
      forkedData.sort((a, b) => b.forks - a.forks); // Sort by forks (desc)
      popularData.sort((a, b) => b.stars - a.stars); // Sort by stars (desc)

      // Update state
      setLanguages(langData);
      setStarsPerLanguage(starsLangData);
      setMostForkedRepos(forkedData.slice(0, 5)); // Top 5 most forked
      setPopularRepos(popularData.slice(0, 5)); // Top 5 popular

      // Update API request count
      setRequestCount((prev) => prev - 3);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="app">
      <Header fetchUserData={handleFetchUserData} requestCount={requestCount} />
      {user && (
        <div className="main-content">
          {/* Left section */}
          <div className="left-section">
           <UserOverview user={user} />
            <UserProfile user={user} />
            <FollowersList followers={followers} />
            <LanguageChart languages={languages} />
            <PopularChart popularRepos={popularRepos} />
            <StarsPerLanguageChart starsPerLanguage={starsPerLanguage} />
            <MostForkedChart mostForkedRepos={mostForkedRepos} />
          </div>

          {/* Right section */}
          {/* <div className="right-section">
            <FollowersList followers={followers} />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default App;





