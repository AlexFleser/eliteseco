import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  phoneNumber,
  salesEmail,
  officeEmail,
  phoneNumber2,
} from "../../components/infobar/Infobar";
import { Map } from "../../components";
import { Pages } from "../../components/navbar/Navbar";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-map-container">
        <h3 className="footer-map-text">Ne puteti gasi la locatia</h3>
        <Map />
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact</h2>
            <span className="info-text-footer-contact">Email</span>
            <span className="info-text-footer-contact">Phone number</span>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>↓</h2>
            <a href={`mailto:${salesEmail}`} className="text-wrapper">
              <i className="fa-solid fa-envelope fa-xs icon-color" />
              <span className="info-text-footer">{salesEmail}</span>
            </a>
            <a href={`mailto:${officeEmail}`} className="text-wrapper">
              <i className="fa-solid fa-envelope fa-xs icon-color" />
              <span className="info-text-footer">{officeEmail}</span>
            </a>
            <div>
              <i className="fa-solid fa-phone fa-xs icon-color" />
              <span className="info-text-footer">{phoneNumber}</span>
            </div>
            <div>
              <i className="fa-solid fa-phone fa-xs icon-color" />
              <span className="info-text-footer">{phoneNumber2}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <h2 style={{ color: "white" }}>
            Program: Luni - Vineri intre 8:30 si 17:00
          </h2>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <Link to="/" className="social-logo">
            <img className="footer-logo-img" src="images/logo8.png" alt="" />
          </Link>
          <small className="website-rights">ELITSECO ©2023</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="https://www.facebook.com/elitseco"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to={Pages.Home}
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            {/* <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link> */}
            <Link
              className="social-icon-link twitter"
              to={Pages.Home}
              // target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to={Pages.Home}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
