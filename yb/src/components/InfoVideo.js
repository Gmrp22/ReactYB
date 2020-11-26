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
            Video Title
          </a>
          <a href="#" class="video-channel-name">
            Channel Name
          </a>
          <div class="video-metadata">
            <span>12K views</span>•<span>1 week ago</span>
          </div>
        </div>
      </div>
    );
  }
}
export default InfoVideo;
