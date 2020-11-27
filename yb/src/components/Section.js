import React from "react";
import "./styles/section.css";
import Thumbnail from "./Thumbnail.js";
import InfoVideo from "./InfoVideo.js";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
class Section extends React.Component {
  render() {
    console.log(this.props);
    const data = this.props.data;
    return (
      // <div>
      //   <SectionHeader />

      <section className="video-section">
        
        {data.map((badge) => {
          return (
            <article className="video-container">
              <Thumbnail
                urlvideo={badge.urlvideo}
                duracion={badge.duracion}
              />
              <InfoVideo
                imgcanal={badge.imgcanal}
                titulo={badge.titulo}
                nombrecanal={badge.nombrecanal}
                vistas={badge.vistas}
                tiempo={badge.tiempo}
              />
            </article>
          );
        })}
      </section>



      // </div>
    );
  }
}
export default Section;
