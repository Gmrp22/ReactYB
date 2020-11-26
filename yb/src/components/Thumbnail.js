import React from "react";
import "./styles/thumbnail.css";

class Thumbnail extends React.Component {
  render() {
    return (
      <a href="#" class="thumbnail" data-duration={this.props.duracion}>
        <img
          class="thumbnail-image"
          src={this.props.urlvideo}
        />
      </a>
    );
  }
}
export default Thumbnail;
