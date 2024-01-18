import React, { Component } from "react";

class Menulist extends Component {
  render() {
    return (
      <>
        <div className="menulist">
          <div className="menulist1">
            <h4 onClick={this.props.clickVeg}>Veg</h4>
          </div>
          <br />
          <div className="menulist2">
            <h4 onClick={this.props.clickNonVeg}>Non-Veg</h4>
          </div>
        </div>
      </>
    );
  }
}

export default Menulist;
