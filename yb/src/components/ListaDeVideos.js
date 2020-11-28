import React from "react";
import "./styles/listadevideos.css";
import Section from "./Section.js";
import dataj from "../json/data.json";
import SectionHeader from "./SectionHeader.js";
class ListaDeVideos extends React.Component {
  state = {
    data: [],
  };
  separacionData() {
    this.state.data[0] = dataj[0];
    this.state.data[1] = dataj[1];
    this.state.data[2] = dataj[2];
  }
  render() {
    this.separacionData();

    return (
      <div className="videos-contenedor videos">
        <SectionHeader titulo="Recommended" />
        <Section data={this.state.data[0]} />
        <SectionHeader titulo="From your subscriptions" />
        <Section data={this.state.data[1]} />
        <SectionHeader titulo="Nature-Topic" />
        <Section data={this.state.data[2]} />
      </div>
    );
  }
}
export default ListaDeVideos;
