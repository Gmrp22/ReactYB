import React from "react";
import "./styles/thumbnail.css";

class Thumbnail extends React.Component {
  render() {
    // Imagen de video
    return (
      <a href="#" className="thumbnail" data-duration={this.props.duracion}>
        <img className="thumbnail-image" src={this.props.urlvideo} />
      </a>
    );
  }
}
export default Thumbnail;
