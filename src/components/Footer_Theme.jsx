import React from 'react';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';


/* Example Usage:
<FooterTheme
              logo="/images/stryder_cutout.png"
              about={{
                  "About Us": "/about",
                  "FAQ": "/faq",
                  "Contact": "/contact",
                  "Privacy Policy": "/privacy"
              }}
              socialLinks={{
                  github: "https://github.com/yourcompany",
                  instagram: "https://instagram.com/yourcompany",
                  facebook: "https://facebook.com/yourcompany"
              }}
              services={[
                  "Web Development",
                  "Mobile Apps",
                  "Cloud Solutions",
                  "Consulting"
              ]}
          /> */
const Footer_Theme = ({ logo, about, socialLinks }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src={logo} alt="Company Logo" className="footer-logo" />
        </div>

        <div className="footer-links-section">
          <ul>
            {Object.entries(about).map(([title, link]) => (
              <li key={title}>
                <a href={link}>{title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-social-section">
          <div className="social-links">
            {socialLinks.github && (
              <a href={socialLinks.github} aria-label="GitHub">
                <FaGithub />
              </a>
            )}
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} aria-label="Instagram">
                <FaInstagram />
              </a>
            )}
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} aria-label="Facebook">
                <FaFacebook />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer_Theme;