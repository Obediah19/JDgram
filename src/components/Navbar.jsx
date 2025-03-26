import React from "react";
import { FaHome, FaSearch, FaCompass, FaFilm, FaPaperPlane, FaHeart, FaPlusSquare, FaUser } from "react-icons/fa";
import Stories from "./Stories";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="top-navbar">
        <div className="top-navbar-title">JDgram</div>
        <div className="stories-wrapper">
          <Stories />
        </div>
      </div>
      <div className="left-navbar">
        <div className="navbar-item">
          <FaHome className="icon" />
          <span>Home</span>
        </div>
        <div className="navbar-item">
          <FaSearch className="icon" />
          <span>Search</span>
        </div>
        <div className="navbar-item">
          <FaCompass className="icon" />
          <span>Explore</span>
        </div>
        <div className="navbar-item">
          <FaFilm className="icon" />
          <span>Reels</span>
        </div>
        <div className="navbar-item">
          <FaPaperPlane className="icon" />
          <span>Messages</span>
        </div>
        <div className="navbar-item">
          <FaHeart className="icon" />
          <span>Notifications</span>
        </div>
        <div className="navbar-item">
          <FaPlusSquare className="icon" />
          <span>Create</span>
        </div>
        <div className="navbar-item">
          <FaUser className="icon" />
          <span>Profile</span>
        </div>
      </div>
      <div className="profile-section">
        <img src="/profile/pfp10.jpg" alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <span className="username">_jaideepsinghanand_</span>
          <span className="switch-btn">Switch</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
