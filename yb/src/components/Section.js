import React from "react";
import "./styles/section.css";
import Thumbnail from "./Thumbnail.js";
import InfoVideo from "./InfoVideo.js";
class Section extends React.Component {
  render() {
    return (
      <section className="video-section">
       

        <article className="video-container">
          <Thumbnail urlvideo={this.props.urlvideo}
          duracion = {this.props.duracion}
          />
          <InfoVideo 
          imgcanal = {this.props.imgcanal}
          titulo = {this.props.titulo}
          nombrecanal = {this.props.nombrecanal}
          vistas = {this.props.vistas}
          tiempo = {this.props.tiempo}
          />
        </article>
   
        
      </section>
    );
  }
}
export default Section;
