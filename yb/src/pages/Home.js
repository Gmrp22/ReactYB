import React from "react";
import NavBarHorizontal from "../components/NavBarHorizontal";
import NavBarVertical from "../components/NavBarVertical";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavBarHorizontal />
        </div>
        <div>
          <NavBarVertical />
        </div>
        <div>
          dd
        </div>
      </div>
    );
  }
}

export default Home;
