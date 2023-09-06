import React from "react";
import "./card.css";
import CardItem from "../carditem/CardItem";

const CardsContainer = () => {
  return (
    <div className="cards">
      <h1 style={{ paddingTop: "20px" }}>Va prezentam serviciile noastre</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Proiectare.png"
              label="Proiectare"
              text="Departmentul  propriu de proiectare va pune la dispozitie proiecte pentru instalatii electrice curenti slabi, cu ingineri autorizati ANRE, IGPR, IGSU."
              // path=""
            />
            <CardItem
              src="images/Instalare.jpg"
              label="Instalare"
              text="Echipele noastre de ingineri, tehnicieni si electricieni au capacitatea de a instala si pune in functiune  sisteme de instalatii electrice si curenti slabi."
              // path=""
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Mentenanta.jpg"
              text="Tehnicienii nostrii asigura mentenanta sistemelor de curenti slabi, pentru asigurarea pentru asigurarea unei bune functionari permanente a instalatiilor si preintampinearea defectiunilor."
              label="Mentenanta"
              // path="/"
            />
            <CardItem
              src="images/Service.png"
              text="Elitseco SRL are  implementat un sistem de ticket-ing unde se pot inregistra la orice ora solicitarile pentru mentenanta si service astfel incat echipa de interventie si suport tehnic remediaza sesizarile in cel mai scurt timp."
              label="Service"
              // path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
