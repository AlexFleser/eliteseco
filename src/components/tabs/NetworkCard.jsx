import React from "react";
import "../cardscontainer/card.css";
import CardItem from "../carditem/CardItem";

const NetworkCards = () => {
  return (
    <div className="cards">
      <div className="cards__tabs__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <div style={{ width: "33.33%" }}></div>
            <CardItem
              src="images/Retele.png"
              text="Retele Voce-Date"
              info="Reteaua de date voce reprezinta unul din cele mai importante componente ale sistemului de comunicatii moderne. Aceasta infrastructura serveste unei game largi de utilizari ca furnizarea de telefonie si retele de date. "
              // path="/"
            />
            <div style={{ width: "33.33%" }}></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NetworkCards;
