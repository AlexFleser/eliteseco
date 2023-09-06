import React from "react";
import DragPictureEffect from "../landing/DragPictureEffect";
import "./pages.css";

const pictureUrls = [
  "images/Parcare.jpg",
  "images/Turnicheti.jpg",
  "images/Automatizari.jpg",

  // Add more picture URLs as needed
];

const captions = [
  {
    line1: "Sisteme de",
    line2: "parcare",
  },
  {
    line1: "Sisteme de access",
    line2: "cu turnicheti",
  },
  {
    line1: "Automatizari",
    line2: "usi si porti",
  },

  // Add more captions as needed
];

const Home = () => {
  return (
    <>
      <DragPictureEffect pictures={pictureUrls} captions={captions} />
    </>
  );
};

export default Home;
