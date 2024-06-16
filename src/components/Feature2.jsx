import React from "react";
import "./css/feature2.css";
import mobilePhones from "../assets/images/illustration-phones.svg";
function Feature2() {
  return (
    <section className="feature-2-container">
      <div className="feature-2 image">
        <img
          src={mobilePhones}
          alt="illustration-phones"
          className="feature-2-img"
        />
      </div>
      <div className="feature-2 text">
        <div>
          <h3 className="feature-3-heading">State of the Art Infrastructure</h3>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Feature2;
