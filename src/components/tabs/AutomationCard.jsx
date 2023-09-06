import React from "react";
import "../cardscontainer/card.css";
import CardItem from "../carditem/CardItem";

const AutomationCard = () => {
  return (
    <div className="cards">
      <div className="cards__tabs__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Automatizari.jpg"
              text="Automatizari usi si porti"
              info="Un sistem de automatizari porti si usi reprezinta nu doar o investitie pentru casa ta, reprezinta in cele din urma un plus care creste valoarea proprietatii, dar sunt o facilitate si pentru client."
              // path=""
            />
            <CardItem
              src="images/Bariere.png"
              text="Bariere auto"
              info="Bariera electromecanica automata are rolul de a controla accesul autovehiculelor in parcari. Este recomandata si pentru controlul traficului in zone de trafic intens."
              // path=""
            />
            <CardItem
              src="images/Case.png"
              text="Smart house"
              info="Casa ta poate sa se comporte ca un prieten bun si sigur. Prin acest sistem iti poti controla temperatura ambientala din locuinta de la distanta, asa cum iti doresti. De asemnea te ajuta sa “vezi” ce se intampla in lipsa ta si te alerteaza cand este nevoie. Casele inteligente au devenit realitatea omului modern."
              // path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AutomationCard;
