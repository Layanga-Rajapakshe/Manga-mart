// src/components/Loader.js
import React, { useState, useEffect } from 'react';
import './Loader.css'; // Import the CSS file for the loader

const Loader = () => {
  const [displayText, setDisplayText] = useState('');
  const loadingText = 'Manga Mart....';

  useEffect(() => {
    let textIndex = 0;
    let isAdding = true;

    const intervalId = setInterval(() => {
      setDisplayText((prev) => {
        if (isAdding) {
          textIndex++;
          if (textIndex === loadingText.length) {
            isAdding = false;
          }
          return loadingText.slice(0, textIndex);
        } else {
          textIndex--;
          if (textIndex === 0) {
            isAdding = true;
          }
          return loadingText.slice(0, textIndex);
        }
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-text">{displayText}</div>
    </div>
  );
};

export default Loader;
