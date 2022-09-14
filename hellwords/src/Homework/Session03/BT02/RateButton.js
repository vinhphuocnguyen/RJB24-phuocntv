import React, { Component } from "react";
import style from "../BT02/style.css";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
export default class RateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [],
      rating: 0,
      hoverd: 0,
      selectedIcon: <AiFillStar />,
      deselectedIcon: <AiOutlineStar />,
    };
    let outOf = props.outOf ? props.outOf : 5;

    for (var i = 0; i < outOf; i++) {
      this.state.stars.push(i + 1);
    }
  }
  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });

    if (this.props.onChange) this.props.onChange(newRating);
  }

  hoverRating(rating) {
    this.setState({
      hovered: rating,
    });
  }
  render() {
    const { stars, rating, hovered, deselectedIcon, selectedIcon } = this.state;
    return (
      <div className="style">
        {this.props.input2}
        <div className="rating" style={{ fontSize: "50px", color: "red" }}>
          {stars.map((star) => {
            return (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {this.changeRating(star);}}
                onMouseEnter={() => {this.hoverRating(star);}}
                onMouseLeave={() => {this.hoverRating(0);}}>
                {rating < star? hovered < star? deselectedIcon: selectedIcon: selectedIcon} </span>
            );
          })}
        </div>
      </div>
    );
  }
}
