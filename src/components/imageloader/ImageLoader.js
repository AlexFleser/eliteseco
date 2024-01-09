import React, { useEffect } from 'react';

const ImageLoader = () => {
  useEffect(() => {
    // List of image URLs to be fetched and cached
    const imageUrls = [
        "images/Parcare.jpg",
        "images/Turnicheti.jpg",
        "images/Automatizari.jpg",
        "images/Proiectare.png",
        "images/Instalare.jpg",
        "images/Mentenanta.jpg",
        "images/Service.png",
        "images/Apelare.png",
        "images/Interfonie.png",
        "images/Bariere.png",
        "images/Case.png",
        "images/Detectie.png",
        "images/Ventilare.png",
        "images/Stingere.png",
        "images/Retele.png",
        "images/Video.png",
        "images/Access.png",
        "images/Antiefractie.png",
      // Add more image URLs as needed
    ];

    // Load and cache images in local storage
    imageUrls.forEach((imageUrl) => {
      fetch(imageUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const objectURL = URL.createObjectURL(blob);
          localStorage.setItem(imageUrl, objectURL);
        })
        .catch((error) => {
          console.error('Error caching image:', error);
        });
    });
  }, []);

  return null; // This component doesn't render anything to the UI
};

export default ImageLoader;
