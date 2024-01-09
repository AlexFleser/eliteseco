import React, { useState, useEffect } from 'react';

const CachedImage = ({ src, alt = '', cacheTime = 3600, hasStyles = false }) => {
  const [cachedSrc, setCachedSrc] = useState(null);

  useEffect(() => {
    const getCachedImage = () => {
      const cachedImage = localStorage.getItem(src);

      if (cachedImage) {
        setCachedSrc(cachedImage);
      } else {
        fetchAndCacheImage();
      }
    };

    const fetchAndCacheImage = async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setCachedSrc(objectURL);
        localStorage.setItem(src, objectURL);

        setTimeout(() => {
          localStorage.removeItem(src);
          URL.revokeObjectURL(objectURL);
        }, cacheTime * 1000);
      } catch (error) {
        console.error('Error fetching or caching image:', error);
      }
    };

    getCachedImage();
  }, [src, cacheTime]);
    
  return <img src={cachedSrc} alt={alt} className={hasStyles ? 'cards__item__img' : ''} />;
};

export default CachedImage;
