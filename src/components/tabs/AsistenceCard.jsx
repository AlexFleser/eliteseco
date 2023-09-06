import React from "react";
import "../cardscontainer/card.css";
import CardItem from "../carditem/CardItem";

const AsistenceCards = () => {
  return (
    <div className="cards">
      <div className="cards__tabs__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <div style={{ width: "16.5%" }}></div>
            <CardItem
              src="images/Apelare.png"
              text="Apelare asistente"
              info="Pentru persoanele aflate in suferinta la pat sau cu dizabilitati, posibilitatea chemarii asistentei rapid si comod prin actionarea unui buton de apel amplasat la indemana este vitala.
              "
              // path="/"
            />
            <CardItem
              src="images/Interfonie.png"
              text="Interfonie"
              info="Sistemele de interfonie si videointerfonie se vor dovedi eficiente si indispensabile in orice locuinta. Interfonul este esential deoarece ofera securitate, aceasta fiind un factor cheie la care se gandesc clientii nostrii cand isi achizitioneaza un altfel de sistem ."
              // path="/"
            />
            <div style={{ width: "16.5%" }}></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AsistenceCards;
