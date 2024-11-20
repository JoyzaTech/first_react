// Example usage in index.js:

/* <ProfileCard 
profileImage="" 
firstName="John" 
lastName="Doe" 
email="johndoe@example.com" 
socialLinks={{
  github: "https://github.com/johndoe", 
  instagram: "https://instagram.com/johndoe", 
  facebook: "https://facebook.com/johndoe"
}} 
/> */

// Import components and libraries
import React from 'react';
import "../pages/css/ProfileCard.css";
import { CiMail } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { CiInstagram } from "react-icons/ci";
// Set default image if left empty
const defaultImage = "/images/stryder.jpeg";
// ProfileCard Component
const ProfileCard = ({ firstName, lastName, profileImage, email, socialLinks }) => {
  const { github, instagram, facebook } = socialLinks;
  const imageToUse = profileImage?.trim() ? profileImage : defaultImage;

  return (
    <div className="profile-card">
      <div
        className="background"
        style={{
          backgroundImage: `url(${imageToUse})`,
        }}
      >
        <div className="name-container">
          <h2 className="firstName">{firstName +" " + lastName}</h2>
        </div>
        <div className="icon-container">
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <CiMail className="emailIcon" />
          </a>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <SlSocialFacebook className="facebookIcon" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FiGithub className="githubIcon" />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <CiInstagram className="instagramIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;