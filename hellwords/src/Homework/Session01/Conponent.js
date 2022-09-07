import React from "react";
import '../../HomeWork/style.css'

export default function Conponent(props) {
  const { input } = props;
  //return <>{input[0].title}</>
  return (
    <>
      {input.map((u) => (
        <div className="body">
          <div><img src={u.img}></img></div>
          <div style={{ textAlign: "justify" }}>
            <h1>{u.title}</h1>
            <p>{u.text1}</p>
            <p>{u.text2}</p>
            <p>{u.text3}</p>
            <p>{u.general}</p>
          </div>
        </div>
      ))}
    </>
  );
}
