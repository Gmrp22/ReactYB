import React from "react";
import "./styles/listadevideos.css";
import Section from "./Section.js";
class ListaDeVideos extends React.Component {
  render() {
    return (
      <div className="videos-contenedor videos">
        <Section />
        <Section />
        <Section />
      </div>
    );
  }
}
export default ListaDeVideos;
