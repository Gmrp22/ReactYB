import React from "react";
import "./styles/section.css";
import Thumbnail from "./Thumbnail.js";

class Section extends React.Component {
  render() {
    return (
      <section class="video-section">
        <article class="video-container">
          <Thumbnail />

        </article>
      </section>
    );
  }
}
export default Section;
