import React from "react";
import "../cardscontainer/card.css";
import CardItem from "../carditem/CardItem";

const DetectionCards = () => {
  return (
    <div className="cards">
      <div className="cards__tabs__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Detectie.png"
              text="Detectie si avertizare incendiu"
              info="Detectia timpurie a inceputului de incediu este esentiala pentru eliminarea sau limitarea pagubelor materiale si chiar in evitarea pierderii vietilor. Oferim o gama completa de solutii pentru detectia de incediu, de fum, de flacara, detectie prin cablu senzitiv, detectie prin aspiratie."
              // path="/"
              longHeader
            />
            <CardItem
              src="images/Ventilare.png"
              text="Sisteme de ventilare pentru evacuarea fumului si gazelor fierbinti"
              info="Aceste sisteme care asigura securitatea la incediu, au ca rol limitarea probabilitatii producerii de victime si distrugerea proprietatii.Prin deschiderea automata a trapelor de fum, gazele fierbinti si fumul sunt evacuate rapid, caile de evacuarea raman vizibile, protejand astfel persoanele din incinta respectiva. Este asigurata astfel si intrarea oxigenului si eliminearea gazelor toxice."
              // path=""
              longHeader
            />
            <CardItem
              src="images/Stingere.png"
              text="Sisteme de limitare si stingere a incendiilor"
              info="Aceste sisteme sunt dispozitive sensibile la caldura concepute pentru a reactiona la o temperatura prestabilita prin eliberarea automanata a unui flux de apa, care se repartizeaza uniform.Au rolul de a detecta un focar de incediu, de a da o alarma si de a-l stinge inca de la inceput."
              // path="/"
              longHeader
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetectionCards;
