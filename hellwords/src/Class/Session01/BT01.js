import React from "react";

export default function BT01(props) {
  const { data,color} = props;
  console.log(data,color)
  return (
    <div style={{border: "1px solid #ccc" }}>
      {data.name}
      {color.name}
    </div>
  );
}