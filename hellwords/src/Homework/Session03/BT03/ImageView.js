import React, { Component } from "react";
import style from "../BT03/style.css";
import Slider from "react-slick";

export default class ImageView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (<div className="style">
      {this.props.input3}
      <Slider {...settings}>
        
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          </Slider>
      </div>);
  }
}
