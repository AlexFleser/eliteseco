import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Pages } from "../navbar/Navbar";
import SpinningLoader from "../loader/SpinningLoader";
import CachedImage from "../cachedimage/CachedImage";
import "./dragPictureEffect.css";

const DragPictureEffect = ({ pictures, captions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false); // New state for tracking image loading
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 3500); // Change picture every 3.5 seconds

    // Measure loading time of the first image
    const firstImage = new Image();
    firstImage.src = pictures[0];
    const startTime = performance.now();

    firstImage.onload = () => {
      const loadingTime = performance.now() - startTime;
      const loadingTimeout = setTimeout(() => {
        setImagesLoaded(true);
      }, loadingTime);

      return () => {
        clearTimeout(loadingTimeout);
      };
    };

    return () => {
      clearInterval(interval);
    };
  }, [pictures]);

  return (
    <div className="drag-picture-container" ref={containerRef}>
      {!imagesLoaded ? (
        <div className="spiner-container">
        <SpinningLoader/>
         </div>
      ) : (
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 1s ease-in-out",
            opacity: imagesLoaded ? 1 : 0, // Show the slider when images are loaded
          }}
        >
          {pictures.map((picture, index) => (
            <div key={index} className="picture">
              <CachedImage src={picture} alt={`Pic ${index + 1}`} />
              <div className="header">
                <p>{captions[index].line1}</p>
                <p>{captions[index].line2}</p>
                <div className="button-container">
                  <Link to={Pages.Solutii}>
                    <Button variant="contained">{"Afla mai multe"}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DragPictureEffect;
