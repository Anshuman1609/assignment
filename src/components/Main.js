import React, { useState, useEffect } from "react";
import "../styles/Hero.css"; // Import the CSS file
import img1 from "../imges/img1.png"; // Import image 1
import img2 from "../imges/img2.png"; // Import image 2

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => !prevIndex);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="custom-hero">
      <div className="custom-hero-text">
        {currentIndex ? (
          <div
            className={`custom-hero-text-1 ${currentIndex === 1 ? "active" : ""
              }`}
          >
            <h1>
              Build More Relationships.
              <br />
              Close More Deals. Automate
              <br />
              Everything In Between.
            </h1>
            <br />
            <p>
              The relationship intelligence & deal flow platform designed by
              <br />
              ex-investors for Venture Capital
            </p>
          </div>
        ) : (
          <div
            className={`custom-hero-text-2 ${currentIndex === 2 ? "active" : ""
              }`}
          >
            <h1>
              Stop wasting hours <br />
              on outdated spreadsheets
            </h1>
            <br />
            <p>

              Our news platform helps you  eliminate busywork  <br /> and manage your deals and relationships effortlessly.
            </p>
          </div>
        )}
        <br />
        <form className="d-flex" style={{ flexDirection: 'row' }}>
          <input className="form-control form-control-lg" style={{ padding: '10px' }} type="email" placeholder="Enter your email" />
          <button className="btn btn-sm" type="submit" >Request A Demo →</button>
        </form>
      </div>
      <div className="custom-image-container">
        <img src={img1} alt="..." width="500" height="600" />
        <img
          src={img2}
          alt="..."
          width="300"
          height="900"
          className="custom-image2"
        />
      </div>
      <div className="custom-navigator">
        <button onClick={() => setCurrentIndex(true)}>o</button>
        <button onClick={() => setCurrentIndex(false)}>o</button>
      </div>
    </section>
  );
};

export default Main;