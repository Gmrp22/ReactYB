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
          {dataj.map((badge) => {
            return (
              <li>
                <span>
                  <img className="subs-icon" src={badge.imgcanal} />
                </span>
                <a>{badge.nombrecanal}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default SubsList;
