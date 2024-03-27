// Main.js

import React, { useState, useEffect , useRef } from 'react';
import '../styles/Hero.css'; // Import the CSS file
import img1 from '../imges/img1.png'; // Import image 1
import img2 from '../imges/img2.png'; // Import image 2

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 1 ? 2 : 1));
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const switchText = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalRef.current); // Clear interval when manually switching text
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 1 ? 2 : 1));
    }, 5000);
  };

  return (
    <section className="custom-hero">
      <div className="custom-hero-text">
        <div className={`custom-hero-text-1 ${currentIndex === 1 ? 'active' : ''}`}>
          <h1>Build More Relationships.<br />Close More Deals. Automate<br />Everything In Between.</h1>
          <p>The relationship intelligence & deal flow platform designed by<br />ex-investors for Venture Capital</p>
        </div>
        <div className={`custom-hero-text-2 ${currentIndex === 2 ? 'active' : ''}`}>
          <h1>Stop wasting hours <br />on outdated spreadsheets</h1>
          <p>platform designed by eabdkvkn n  ds bckkadf dfb dfabdfxcfasfas<br />ex-investors for Venture Capital</p>
        </div>
        <form action="#" method="post">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Request A Demo →</button>
        </form>
      </div>
      <div className="custom-image-container">
        <img src={img1} alt="..." width="500" height="600" />
        <img src={img2} alt="..." width="300" height="900" className="custom-image2" />
      </div>
      <div className="custom-navigator">
        <button onClick={() => switchText(1)}>o</button>
        <button onClick={() => switchText(2)}>o</button>
      </div>
    </section>
  );
};

export default Main;

