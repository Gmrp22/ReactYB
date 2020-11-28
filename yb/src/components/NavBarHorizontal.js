import React from "react";
import "./styles/colors.css";
import yblogo from "../images/youtube.svg";
import menu from "../images/menu.svg";
import "./styles/navbarhorizontal.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

class NavBarHorizontal extends React.Component {
  render() {
    return (
      <div className="fixed-top horizontal">
        <nav className="navbar navbar-light bg-light">
          <ul className="navhorizontal">
            <li className="list-menu">
              <img src={menu} height="20px" id="boton" />
            </li>

            <li className="list-nombre">
              <a className="navbar-brand" href="#">
                <img
                  src={yblogo}
                  width="30"
                  height="28"
                  alt=""
                  loading="lazy"
                />

                <b id="logoy" height="13px">
                  YouTube
                </b>
                {/* Buacar letra */}
              </a>
            </li>
            <li className="list-search">
              <div>
                <form className="navbarform">
                  <input
                    className="form-control mr-sm-2"
                    id="searchbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    width="100px"
                  ></input>
                </form>
              </div>
              {/* <div className="input-group mb-3 navbarform">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>

                <input
                  type="text"
                  className="form-control search"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </div> */}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBarHorizontal;

// <button class="navbar-toggler">
//   <span class="navbar-toggler-icon"></span>
// </button>
