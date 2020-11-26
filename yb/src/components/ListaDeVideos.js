import React from "react";
import "./styles/listadevideos.css";
import Section from "./Section.js";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
class ListaDeVideos extends React.Component {
  state = {
    data: [
      {
        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        urlvideo: "http://unsplash.it/250/150?gravity=center",
        duracion: "12.10",
        imgcanal: "http://unsplash.it/36/36?gravity=center",
        titulo: "Titulo video1",
        nombrecanal: "Nombre canal",
        vistas: "5k views",
        tiempo: "1 week ago",
      },
      {
        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        urlvideo: "http://unsplash.it/250/150?gravity=center",
        duracion: "12.10",
        imgcanal: "http://unsplash.it/36/36?gravity=center",
        titulo: "Titulo video2",
        nombrecanal: "Nombre canal",
        vistas: "5k views",
        tiempo: "1 week ago",
      },
      {
        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        urlvideo: "http://unsplash.it/250/150?gravity=center",
        duracion: "12.10",
        imgcanal: "http://unsplash.it/36/36?gravity=center",
        titulo: "Titulo video3",
        nombrecanal: "Nombre canal",
        vistas: "5k views",
        tiempo: "1 week ago",
      },
      
    ],
  };
  render() {
    return (
      <div className="videos-contenedor videos">
        {this.state.data.map((badge) => {
          return (
            <Section
              urlvideo= {badge.urlvideo}
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
}
export default ListaDeVideos;
