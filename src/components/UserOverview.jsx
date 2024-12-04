import React from 'react';
import "../Style/UserOverview.css"; 

const UserOverview = ({ user }) => {
  return (
    <div className="user-overview" >
      <div>
        <h3>{user.public_repos}</h3>
        <p>Repos</p>
      </div>
      <div>
        <h3>{user.followers}</h3>
        <p>Followers</p>
      </div>
      <div>
        <h3>{user.following}</h3>
        <p>Following</p>
      </div>
      <div>
        <h3>{user.public_gists}</h3>
        <p>Gists</p>
      </div>
    </div>
  );
};

export default UserOverview;
