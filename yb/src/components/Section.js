import React from "react";
import "./styles/section.css";
import Thumbnail from "./Thumbnail.js";
import InfoVideo from "./InfoVideo.js";
class Section extends React.Component {
  render() {
    return (
      <section class="video-section">
        <article class="video-container">
          <Thumbnail />
          <InfoVideo />
        </article>
      </section>
    );
  }
}
export default Section;
