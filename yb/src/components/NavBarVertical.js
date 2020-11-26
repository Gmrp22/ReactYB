import React from "react";
import "./styles/navbarvertical.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class NavBarVertical extends React.Component {
  render() {
    return (
      <div className="vertical">
        <ul className="navvertical">
          <li>
            <a>
              <FontAwesomeIcon icon={faHome} />
              &nbsp;&nbsp; Home
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faFire} />
              &nbsp;&nbsp; Trending
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faFire} />
              &nbsp;&nbsp; Subs
            </a>
          </li>
          <li>
            <a>LIBRARY</a>
          </li>

          <li>
            <a>
              <FontAwesomeIcon icon={faHistory} />
              &nbsp;&nbsp; History
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faClock} />
              &nbsp;&nbsp; Watch Later
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faThumbsUp} />
              &nbsp;&nbsp; Liked Videos
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faTag} />
              &nbsp;&nbsp; Purchase
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faThumbsUp} />
              &nbsp;&nbsp; LOL Cots
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faThumbsUp} />
              &nbsp;&nbsp; Classic
            </a>
          </li>
          <li>
            <a>SUBSCRIPTIONS</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavBarVertical;
