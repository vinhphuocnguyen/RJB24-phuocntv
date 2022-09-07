import React from "react";
import Conponent from "./Conponent";
import img from "./Images/1.jpg";
const Info =[{
    title: "Clothing & Apparel",
    text1: "Accessories",
    text2: "Bags",
    text3: "Kid fashion",
    general: "Mens",
    img: img,
  }];

export default function BT01() {
  return (
    <>
      <Conponent input={Info}></Conponent>
    </>
  );
}
