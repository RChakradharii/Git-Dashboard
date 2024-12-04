import React from 'react';
import '../Style/FollowersList.css'; // Import the CSS file

const FollowersList = ({ followers }) => {
  return (
    <div className="followers-container">
      <h2>Followers</h2> {/* Added heading */}
      <div className="followers">
        {followers.map((follower) => (
          <div key={follower.id} className="follower">
            <img src={follower.avatar_url} alt={follower.login} />
            <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
              {follower.login}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowersList;
