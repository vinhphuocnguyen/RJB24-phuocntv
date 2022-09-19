import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    // khoi tao thuoc tinh cua cha
    super(props);
    this.number = 0;
    this.state = {
      name: "Phuoc",
      age: 12,
    };
    this.setStateName = this.setStateName.bind(this);
  }
  componentDidMount() {
    this.setState({
      name: "Red",
    });
  }
  setStateName(params) {
    this.setState({
      name: params,
    });
  }
 
  render() {
    return (
      <div>
        <p>{this.props.textProp}</p>
        <p>{this.state.name}</p>
        <button onClick={() => this.setStateName('black')}>ChangeBlack</button>
        <button onClick={() => this.setStateName('Red')}>ChangeRed</button>
      </div>
    );
  }
}
