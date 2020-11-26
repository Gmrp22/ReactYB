import React from "react";
import NavBarHorizontal from "../components/NavBarHorizontal";
import NavBarVertical from "../components/NavBarVertical";
import ListaDeVideos from "../components/ListaDeVideos";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div >
          <NavBarHorizontal />
        </div>
        <div >
          <NavBarVertical />
        </div>
        <div>
          <ListaDeVideos />
        </div>
      </div>
    );
  }
}

export default Home;
