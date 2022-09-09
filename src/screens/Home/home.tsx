import React, { useState } from "react";
import ProfilePic from "../../assets/profile.jpeg";
import { Navbar } from "../../components";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

export const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="section-container">
      <Navbar current="home" />
      <main className="main-container container">
        <div className="main-header">
          <h2>MATIAS BENITEZ</h2>
          <h1>front-end developer</h1>
        </div>
        <div className="main-img">
          <img src={ProfilePic} alt="profile-pic" />
        </div>
        <div className="main-button">
          <Link
            className="section-button"
            to={"about-me"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <VscArrowRight />
            <span>About me</span>
          </Link>
          <div className={isHovered ? "line w-65" : "line"}></div>
        </div>
      </main>
    </section>
  );
};
