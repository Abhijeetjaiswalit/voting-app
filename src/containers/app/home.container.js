import React, { Component } from "react";
import Header from "../../components/header/header.component";
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default HomeContainer;
