import React from "react";
import "./styles/listadevideos.css";
import Section from "./Section.js";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import dataj from "../data.json";
class ListaDeVideos extends React.Component {
  state = {
    data: [],
  };
  separacionData() {
    this.state.data[0] = dataj[0]
    this.state.data[1] = dataj[1]
    this.state.data[2] = dataj[2]
  }
  render() {
      this.separacionData()
    
    return (

      <div className="videos-contenedor videos">
        <Section  data = {this.state.data[0]} />
        <Section  data = {this.state.data[1]} />
        <Section  data = {this.state.data[2]} />
      </div>
    );
  }

}
export default ListaDeVideos;
