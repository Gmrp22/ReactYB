import React from "react";
import "./styles/sectionheader.css";

class SectionHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <h5>{this.props.titulo}</h5>
      </div>
    );
  }
}
export default SectionHeader;
