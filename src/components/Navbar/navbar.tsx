import React from "react";
import { NavMenu } from "./NavMenu";

interface Props {
  current: string;
}

export const Navbar = (props: Props) => {
  return (
    <header className="container">
      <h3 className="home-button">{props.current.toLocaleUpperCase()}</h3>
      <NavMenu />
    </header>
  );
};
