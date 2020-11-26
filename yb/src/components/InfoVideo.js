import React from "react";
import "./styles/infovideo.css";

class InfoVideo extends React.Component {
  render() {
    return (
      <div class="video-bottom-section">
        {/* CANAl */}
        <a href="#">
          <img
            class="channel-icon"
            src="http://unsplash.it/36/36?gravity=center"
          />
        </a>

        {/* TITULOS */}
        <div class="video-details">
          <a href="#" class="video-title">
          {this.props.titulo}
          </a>
          <a href="#" class="video-channel-name">
          {this.props.nombrecanal}
          </a>
          <div class="video-metadata">
            <span>{this.props.vistas}</span>•<span>{this.props.tiempo}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default InfoVideo;

