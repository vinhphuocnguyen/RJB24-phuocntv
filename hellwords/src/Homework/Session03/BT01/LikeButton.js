import React, { Component } from "react";
import { AiFillLike } from 'react-icons/ai';

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button style={{color:'blue', width:'100px', margin:'0 10%'}}><h3><AiFillLike /></h3>{this.props.button}</button>;
  }
}
