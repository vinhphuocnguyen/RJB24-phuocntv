import React, { Component } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
// import style1 from "../BT01/style1.css";

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const text = this.state.liked ? "liked" : "haven't liked";
    const label = this.state.liked ? <AiFillDislike/> : < AiFillLike />;
    return (
      <div className="style1">
        <p>{this.props.input1}</p>
        <button className="btn-red" onClick={this.handleClick}>
          {label}
        </button>
        <p>You {text}</p>
      </div>
    );
  }
}
