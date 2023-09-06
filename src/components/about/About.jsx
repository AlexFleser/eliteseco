import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutDescription from "./AboutDescription";
import "./about.css";

function IncreaseNumber({ targetNumber }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const increment = 1;
  const delay = 40; // milliseconds

  useEffect(() => {
    if (currentNumber >= targetNumber) {
      return; // Stop the incrementation if already reached the target number
    }

    const intervalId = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        const nextNumber = prevNumber + increment;
        return nextNumber >= targetNumber ? targetNumber : nextNumber;
      });
    }, delay);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentNumber, targetNumber]);

  return <span>{currentNumber}</span>;
}

const About = () => {
  return (
    <div className="about-container">
      <div className="profile-description-container">
        <AboutDescription />
        <div className="profile-image">
          <Link to="/">
            <img
              className="navbar-logo-about-img"
              src="images/logo8.png"
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="projects-container">
        <div className="project">
          <h3 className="project-name">Proiecte Finalizate</h3>
          <div className="project-number">
            <IncreaseNumber targetNumber={1270} />
          </div>
        </div>

        <div className="project">
          <h3 className="project-name">Contracte de mentenanata</h3>
          <div className="project-number">
            <IncreaseNumber targetNumber={876} />
          </div>
        </div>
      </div>

      {/* <h2 className="our-team-heading">Echipa</h2>

      <div className="our-team">
        <div className="team-member">
          <img src="images/maleAvatarPlaceholder.png" alt="" />
          <div className="designation">
            <strong>Sebi M.,</strong> ( Manager General)
          </div>
        </div>

        <div className="team-member">
          <img src="images/femaleAvatarPlaceholder.png" alt="" />
          <div className="designation">
            <strong>Andreea B.,</strong> (Designer Principal)
          </div>
        </div>

        <div className="team-member">
          <img src="images/maleAvatarPlaceholder.png" alt="" />
          <div className="designation">
            <strong>Ion A.,</strong> (Sef Mop)
          </div>
        </div>
      </div> */}

      <div className="our-mission">
        {/* <img className="quote-icon" src="images/quote.png" alt="" /> */}
        <p className="cards__item__text_info" style={{ padding: "12px" }}>
          Securitatea este o prioritate, nu o optiune! Elitseco SRL este mereu
          aproape de clientii sai.
        </p>
      </div>
    </div>
  );
};

export default About;
