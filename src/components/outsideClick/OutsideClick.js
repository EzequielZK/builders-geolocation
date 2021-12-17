import React, { Component } from "react";

class OutsideClick extends Component {
  componentDidMount() {
    window.addEventListener("click", (e) => {
      if (!document.getElementById("container")?.contains(e.target)) {
        this.props.onOutsideClick();
      }
    });
  }
  render() {
    return (
      <div
        className={this.props.classStyle ? this.props.classStyle : null}
        id="container"
      >
        {this.props.children}
      </div>
    );
  }
}

export default OutsideClick;
