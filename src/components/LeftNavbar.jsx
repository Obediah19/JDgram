import React, { useState } from 'react';
import {
  FaHome, FaSearch, FaCompass, FaVideo,
  FaFacebookMessenger, FaHeart, FaPlusSquare,
  FaUserCircle, FaBars, FaMoon, FaSun
} from 'react-icons/fa';

const LeftNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [profileExpanded, setProfileExpanded] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleProfile = () => {
    setProfileExpanded(!profileExpanded);
  };

  return (
    <div className="left-navbar">
      <div className="srmgram-title">JDgram</div>
      <div className="nav-items">
        <div className="nav-item">
          <FaHome />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <FaSearch />
          <span>Search</span>
        </div>
        <div className="nav-item">
          <FaCompass />
          <span>Explore</span>
        </div>
        <div className="nav-item">
          <FaVideo />
          <span>Reels</span>
        </div>
        <div className="nav-item">
          <FaFacebookMessenger />
          <span>Messages</span>
        </div>
        <div className="nav-item">
          <FaHeart />
          <span>Notifications</span>
        </div>
        <div className="nav-item">
          <FaPlusSquare />
          <span>Create</span>
        </div>
        <div className="nav-item profile-toggle" onClick={toggleProfile}>
          <FaUserCircle />
          <span>Profile</span>
          <div className={`toggle-switch ${profileExpanded ? 'expanded' : ''}`}>
            <div className="slider"></div>
          </div>
        </div>
        <div style={{ flexGrow: 1 }}></div>
        <div className="nav-item mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </div>
        <div className="nav-item">
          <FaBars />
          <span>More</span>
        </div>
      </div>
      {profileExpanded && (
        <div className="profile-dropdown">
          <div className="dropdown-item">Your Profile</div>
          <div className="dropdown-item">Settings</div>
          <div className="dropdown-item">Switch Accounts</div>
          <div className="dropdown-item">Log Out</div>
        </div>
      )}
    </div>
  );
};

export default LeftNavbar;