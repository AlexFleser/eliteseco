import React, { useState } from "react";
import "./infobar.css";

export const salesEmail = "sales.elitseco@gmail.com";
export const officeEmail = "office.elitseco@gmail.com";
export const phoneNumber = "0722.870.880";
export const phoneNumber2 = "0771.008.007";

const Infobar = () => {
  const [emailHover, setEmailHover] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);
  return (
    <div className="info-bar">
      <div className="info-container">
        <div className="info-item" />
        <div
          className="info-item"
          onMouseEnter={() => setEmailHover(true)}
          onMouseLeave={() => setEmailHover(false)}
        >
          <a href={`mailto:${salesEmail}`} className="text-wrapper">
            <i
              className={`fa-solid fa-envelope fa-xs icon-color ${
                emailHover ? "fa-beat" : ""
              }`}
            />
            <span className="info-text">{salesEmail}</span>
          </a>
        </div>
        <div
          className="info-item"
          onMouseEnter={() => setPhoneHover(true)}
          onMouseLeave={() => setPhoneHover(false)}
        >
          <div className="text-wrapper">
            <i
              className={`fa-solid fa-phone fa-xs icon-color ${
                phoneHover ? "fa-beat" : ""
              }`}
            />
            <span className="info-text">{phoneNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infobar;
