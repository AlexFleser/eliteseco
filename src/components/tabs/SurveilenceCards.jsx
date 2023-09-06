import React from "react";
import "../cardscontainer/card.css";
import CardItem from "../carditem/CardItem";

const SurveilenceContainer = () => {
  return (
    <div className="cards">
      <div className="cards__tabs__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Video.png"
              text="Sisteme de supraveghere video"
              // path=""
              info="Integram o gama larga de camere video ce imbunatatesc  eficienta sistemului de securitate si maresc gradul de siguranta.Sistemele de supraveghere IP ofera avantaje proceselor de business,precum alerte generate de anumite situatii, informatii ce pot ajuta in luarea unor decizii privind bunul mers al operatiunilor sau alocarea de resurse.
              "
            />
            <CardItem
              src="images/Access.png"
              text="Control access"
              info="Echipa noastra ofera solutii personalizate si adaptate cerintelor fiecarui domeniu de activitate. Va punem la dispozitie o gama completa de solutii de control al accesului, care va permit sa securizati cladiri si perimetrul acestora,  dar si sisteme simple, individuale pentru o singura locatie.
              "
              // path=""
            />
            <CardItem
              src="images/Antiefractie.png"
              text="Antiefractie"
              info="Sistemul de alarma antiefractie asigura detectia evenimentului si transmiterea informatiei catre beneficiar sau firmei de interventie. Specialistii nostri pot asigura o gama larga de solutii profesionale, calitatea acestora si garantia serviciilor noastre.
              "
              // path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SurveilenceContainer;
