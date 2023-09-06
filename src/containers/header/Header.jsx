import React from "react";
import "./header.css";
import { Infobar, Navbar } from "../../components";

const Header = () => {
  return (
    <div>
      <Infobar />
      <Navbar />
    </div>
  );
};

export default Header;
