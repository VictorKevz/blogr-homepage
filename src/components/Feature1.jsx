import React from "react";
import "./css/feature1.css";
import editorDesktop from "../assets/images/illustration-editor-desktop.svg";
import editorMobile from "../assets/images/illustration-editor-mobile.svg";

function Feature1() {
  return (
    <section className="feature-1-container">
      <h2>Designed for the future</h2>
      <div className="feature-1-wrapper">
        <div className="feature-1 image">
          <picture>
            <source srcSet={editorDesktop} media="(min-width: 1280px)" />
            <img
              src={editorMobile}
              alt="Editor view"
              className="feature-1-img"
            />
          </picture>
        </div>

        <div className="feature-1 text">
          <div>
            <span className="feature-1-heading">
              Introducing an extensible editor
            </span>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div>
            <span className="feature-1-heading">Robust content management</span>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Feature1;
