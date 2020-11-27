import React from "react";
import "./styles/infovideo.css";

class InfoVideo extends React.Component {
  render() {
    return (
      <div className="video-bottom-section">
        {/* CANAl */}
        <a href="#">
          <img
            className="channel-icon"
            src={this.props.imgcanal}
          />
        </a>

        {/* TITULOS */}
        <div className="video-details">
          <a href="#" className="video-title">
          {this.props.titulo}
          </a>
          <a href="#" className="video-channel-name">
          {this.props.nombrecanal}
          </a>
          <div className="video-metadata">
            <span>{this.props.vistas}</span>•<span>{this.props.tiempo}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default InfoVideo;

