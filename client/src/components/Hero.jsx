import React from "react";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-img">
        <div className="hero-content">
          <div className="hero-price">
            <p>
              Starting at <br /> <span>$20</span> <br /> per month!
            </p>
          </div>
          <div className="hero-description">
            <h1>Managed IT Services</h1>
            <hr />
            <p>
              MJP Systems provides Managed IT Services to help small and
              medium-sized businesses with all their technology needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
