import React from "react";
import "./styles/listadevideos.css";
import Section from "./Section.js";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import dataj from "../data.json";
class ListaDeVideos extends React.Component {
  state = {
    data: [],
  };



  render() {
    return (
      <div className="videos-contenedor videos">
        {dataj.map((badge) => {
          return (
            <Section
              urlvideo={badge.urlvideo}
              duracion={badge.duracion}
              imgcanal={badge.imgcanal}
              titulo={badge.titulo}
              nombrecanal={badge.nombrecanal}
              vistas={badge.vistas}
              tiempo={badge.tiempo}
            />
          );
        })}
      </div>
    );
  }




















  // render() {
  //   return (
  //     <div className="videos-contenedor videos">
  //       {this.state.data.map((badge) => {
  //         return (
  //           <Section
  //             urlvideo={badge.urlvideo}
  //             duracion={badge.duracion}
  //             imgcanal={badge.imgcanal}
  //             titulo={badge.titulo}
  //             nombrecanal={badge.nombrecanal}
  //             vistas={badge.vistas}
  //             tiempo={badge.tiempo}
  //           />
  //         );
  //       })}
  //     </div>
  //   );
  // }
}
export default ListaDeVideos;
