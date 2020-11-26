import React from "react";
import "./styles/thumbnail.css";

class Thumbnail extends React.Component {
  render() {
    return (
      <a href="#" class="thumbnail" data-duration="12:24">
        <img
          class="thumbnail-image"
          src="http://unsplash.it/250/150?gravity=center"
        />
      </a>
    );
  }
}
export default Thumbnail;
