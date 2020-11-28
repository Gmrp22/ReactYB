import React from "react";
import "./styles/section.css";
import Thumbnail from "./Thumbnail.js";
import InfoVideo from "./InfoVideo.js";
class Section extends React.Component {
  render() {
    console.log(this.props);
    const data = this.props.data;
    return (
      <section className="video-section">
        {data.map((datos) => {
          return (
            <article className="video-container" key={datos.id}>
              {/* Imagen de video */}
              <Thumbnail urlvideo={datos.urlvideo} duracion={datos.duracion} />
              {/* Informacion de video */}
              <InfoVideo
                imgcanal={datos.imgcanal}
                titulo={datos.titulo}
                nombrecanal={datos.nombrecanal}
                vistas={datos.vistas}
                tiempo={datos.tiempo}
              />
            </article>
          );
        })}
      </section>
    );
  }
}
export default Section;
