import React from "react";
import "./css/feature3.css";
import laptopDesktop from "../assets/images/illustration-laptop-desktop.svg";
import laptopMobile from "../assets/images/illustration-laptop-mobile.svg";

function Feature3() {
  return (
    <section className="feature-3-container">
      <div className="feature-3 image">
        <picture>
          <source srcSet={laptopDesktop} media="(min-width: 1180px)" />
          <img
            src={laptopMobile}
            alt="Laptop illustration"
            className="feature-3-img"
          />
        </picture>
      </div>

      <div className="feature-3 text">
        <div>
          <span className="feature-3-heading">Free, open, simple</span>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div>
          <span className="feature-3-heading">Powerful tooling</span>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Feature3;
