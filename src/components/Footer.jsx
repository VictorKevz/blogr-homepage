import React from "react";
import "./css/footer.css";
import footerLogo from "../assets/images/footer-logo.svg";
import data from "../Links";

function Footer() {
  return (
    <section className="footer-container">
      <figure className="footer-logo-container">
        <img src={footerLogo} alt="footer-logo " className="footer-logo logo" />
      </figure>

      <ul className="footer-links-container">
        {data.map((link) => (
          <li className="footer-link-name" key={link.id}>
            {link.name}
            <ul className="footer-link-container">
              {link.links.map((sublink, sublinkIndex) => (
                <li className="footer-link" key={sublinkIndex}>
                  {sublink}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Footer;
