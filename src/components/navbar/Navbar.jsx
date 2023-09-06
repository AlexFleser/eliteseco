import React, { useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

export const Pages = {
  Home: "/",
  Solutii: "/solutii",
  Servicii: "/servicii",
  DespreNoi: "/despre-noi",
};

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const location = useLocation();

  const isOnCurrentPage = (currentPage) =>
    location && location.pathname === currentPage;

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="navbar-logo-img" src="images/logo8.png" alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to={Pages.Solutii}
                className={`${
                  isOnCurrentPage(Pages.Solutii)
                    ? "nav-links-selected"
                    : "nav-links"
                }`}
                onClick={closeMobileMenu}
              >
                Solutii
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={Pages.Servicii}
                className={`${
                  isOnCurrentPage(Pages.Servicii)
                    ? "nav-links-selected"
                    : "nav-links"
                }`}
                onClick={closeMobileMenu}
              >
                Servicii
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={Pages.DespreNoi}
                className={`${
                  isOnCurrentPage(Pages.DespreNoi)
                    ? "nav-links-selected"
                    : "nav-links"
                }`}
                onClick={closeMobileMenu}
              >
                Despre noi
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div className="wallpaper-container" /> */}
    </>
  );
};

export default Navbar;
