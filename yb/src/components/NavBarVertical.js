import React from "react";
import "./styles/navbarvertical.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import playlist from "../images/playlist.svg";
import subscription from "../images/subscription.svg";
class NavBarVertical extends React.Component {
  render() {
    return (
      <div className="vertical">
        <ul className="navvertical">
          <li>
            <a className="links">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
              &nbsp;&nbsp; Home
            </a>
          </li>
          <li>
          <a className="links">
              <span>
                {" "}
                <FontAwesomeIcon icon={faFire} />
              </span>
              &nbsp;&nbsp; Trending
            </a>
          </li>
          <li>
          <a className="links">
              <span>
                {" "}
                <img src={subscription} height="20px"/>
                
              </span>
              &nbsp;&nbsp; Subs
            </a>
          </li>
        </ul>
        <ul className="navvertical">
          <li>
            <a>LIBRARY</a>
          </li>

          <li>
          <a className="links">
              <span>
                {" "}
                <FontAwesomeIcon icon={faHistory} />
              </span>
              &nbsp;&nbsp; History
            </a>
          </li>
          <li>
          <a className="links">
              <span>
                {" "}
                <FontAwesomeIcon icon={faClock} />
              </span>
              &nbsp;&nbsp; Watch Later
            </a>
          </li>
          <li>
          <a className="links">
              <span>
                {" "}
                <FontAwesomeIcon icon={faThumbsUp} />
              </span>
              &nbsp;&nbsp; Liked Videos
            </a>
          </li>
          <li>
          <a className="links">
              <span>
                {" "}
                <FontAwesomeIcon icon={faTag} />
              </span>
              &nbsp;&nbsp; Purchase
            </a>
          </li>
          <li>
          <a className="links">
              <span>
                
                <img src={playlist} height="20px"/>
              </span>
              &nbsp;&nbsp; LOL Cots
            </a>
          </li>
          <li>
          <a className="links">
              <span>
                <img src={playlist} height="20px"/>
              </span>
              &nbsp;&nbsp; Classic
            </a>
          </li>
        </ul>
        <ul className="navvertical">
          <li>
            <a>SUBSCRIPTIONS</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavBarVertical;
