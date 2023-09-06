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
              src="images/Parcare.jpg"
              text="Sisteme de acces"
              info="Parcarea – atat componenta off-street , dar mai ales cea on-street, a devenit un element cheie in planul de mobilitate urbana al oraselor. In functie de politica adoptata in oras/regiunea/institutie, beneficiarul alege sa foloseasca anumite tehnologii si sisteme pentru parcari care sa corespunda cel mai bine nevoilor.              "
              // path="/"
            />
            <CardItem
              src="images/Turnicheti.jpg"
              text="Sisteme de acces pietonal cu turnicheti"
              info="Un sistem de acces cu turnicheti reprezinta una din cele mai sigure metode de control si moniorizare a resurselor si bunurile companiei dumneavoastra. Acesta permite gesionarea automata a accesului personalului in anumite zone in functie de permisiunile sau restrictiile pe care le stabiliti dumneavoastra."
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
