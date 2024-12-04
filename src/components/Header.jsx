import React, { useState } from 'react';
import "../Style/Header.css"; 

const Header = ({ fetchUserData, requestCount }) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    if (username.trim()) {
      fetchUserData(username);
    }
  };

  return (
    <header>
      <h1>GitHub User Dashboard</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter GitHub User"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <span className="request-count">Requests: {requestCount} / 60</span>
    </header>
  );
};

export default Header;
