import React from 'react';
import '../Style/UserProfile.css';

const UserProfile = ({ user, followers }) => {
  return (
    <div className="profile-layout">
      {/* User Profile Section */}
      <div className="profile-container">
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="profile-avatar" />
        <h2>{user.name || user.login}</h2>
        <p className="bio">{user.bio || 'No bio available'}</p>
        <p className="location">{user.location || 'Location not specified'}</p>
        <p className="company">{user.company || 'Company not available'}</p>
        <div className="stats">
          <div>
            <h4>{user.public_repos}</h4>
            <p>Repositories</p>
          </div>
          <div>
            <h4>{user.followers}</h4>
            <p>Followers</p>
          </div>
          <div>
            <h4>{user.following}</h4>
            <p>Following</p>
          </div>
        </div>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
          View GitHub Profile
        </a>
      </div>

    
    </div>
  );
};

export default UserProfile;


