import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav>
      <GiHamburgerMenu
        color={isActive ? "#1b1b1b" : "white"}
        onClick={() => setIsActive(!isActive)}
      />
      {isActive && <div className="nav-background"></div>}
      {isActive && (
        <ul>
          <li>HOME</li>
          <li>ABOUT ME</li>
          <li>CONTACT ME</li>
          <li>PROJECTS</li>
        </ul>
      )}
    </nav>
  );
};
