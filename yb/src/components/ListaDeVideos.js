import React from "react";
import "./styles/listadevideos.css";
import Section from "./Section.js";
class ListaDeVideos extends React.Component {

  render() {
    return (
      <div className="videos-contenedor videos">
        <Section
        urlvideo = "http://unsplash.it/250/150?gravity=center" 
        duracion = "12.10"
        imgcanal = "http://unsplash.it/36/36?gravity=center"
        titulo = "Titulo video"
        nombrecanal = "Nombre canal"
        vistas = "5k views"
        tiempo = "1 week ago"
        />
        {/* <Section />
        <Section /> */}
      </div>
    );
  }
}
export default ListaDeVideos;
