import React from 'react';
import "../pages/css/ProfileCard.css";
// Component Name

const ProfileCard = ({firstName, lastName, image}) => {
  return (
    <div>
      <div className="background"
      style={{
        backgroundImage: `url(${image})`
      }}>
      <h2 className='firstName'>{firstName}</h2>
      <h3 className="lastName">{lastName}</h3>
      </div>
    </div>
  );
};

export default ProfileCard; 