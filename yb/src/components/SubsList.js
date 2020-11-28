import React from "react";
import "./styles/subslist.css";
import dataj from "../json/subs.json";
class SubsList extends React.Component {
  state = {
    data: [],
  };
  render() {
    return (
      <div className="vertical-subs">
        <ul className="navvertical-subs">
          {dataj.map((datos) => {
            return (
              <li key={datos.id}>
                <span>
                  <img className="subs-icon" src={datos.imgcanal} />
                </span>
                <a>{datos.nombrecanal}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default SubsList;
