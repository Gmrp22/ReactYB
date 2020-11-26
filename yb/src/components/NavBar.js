import React from "react";
import "./styles/colors.css";
import yblogo from "../images/youtube.svg";
import "./styles/navbar.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class NavBar extends React.Component {
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-light bg-light row"> */}
        <ul>
          <li>
            <a>
              <button>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </a>
          </li>
          <li>
            <a className="navbar-brand" href="#">
              <img src={yblogo} width="30" height="30" alt="" loading="lazy" />
              <spa> </spa>
              <b height="10px">YouTube</b>
              {/* Buacar letra */}
            </a>
          </li>
          <li>
            <div>
              <form>
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  width="100px"
                >

                  {/* {/* falta icono */}
                </input>
                
              </form>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavBar;

// <button class="navbar-toggler">
//   <span class="navbar-toggler-icon"></span>
// </button>
