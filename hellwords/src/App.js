/*
import React from "react";
import { act } from "react-dom/test-utils";
import "./App.css";


const TEXT__INTRO = `Park Chae-young (tiếng Hàn: 박채영; tên tiếng Anh: Roseanne Park, sinh ngày 11 tháng 2 năm 1997), 
  thường được biết đến với nghệ danh Rosé (Hangul: 로제)[2] là nữ ca sĩ người New Zealand gốc Hàn Quốc, 
  thành viên của nhóm nhạc nữ Blackpink do YG Entertainment thành lập và quản lý.`;

const cardStyle = {
  width: "50%",
  height: "500px",
  margin: "3% auto",
};

const user = {
  firstName: "Park",
  lastName: "Chae-young",
  nickName: "Rosé",
  avatarUrl: "/images/Rose-Elle01.jpeg",
  profile: "https://www.instagram.com/roses_are_rosie/",
};

const userLeft = [
  {
    firstName: "Park1",
    lastName: "Chae-young",
    nickName: "Rosé",
    avatarUrl: "/images/Rose-Elle01.jpeg",
    profile: "https://www.instagram.com/roses_are_rosie/",
  },
  {
    firstName: "Park2",
    lastName: "Chae-young",
    nickName: "Rosé",
    avatarUrl: "/images/Rose-Elle01.jpeg",
    profile: "https://www.instagram.com/roses_are_rosie/",
  },

  {
    firstName: "Park3",
    lastName: "Chae-young",
    nickName: "Rosé",
    avatarUrl: "/images/Rose-Elle01.jpeg",
    profile: "https://www.instagram.com/roses_are_rosie/",
  },
];

let gotoProfile = (
  <a href={user.profile} className="btn btn-primary">
    More... {user.nickName}
  </a>
);
let introduction = React.createElement(
  "p",
  { className: "card-text modify__color" },
  TEXT__INTRO
);

function render(user) {
  return (
    <React.Fragment>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={user.avatarUrl}
          width="200"
          height="200"
          alt={formatName(user)}
          style={
            {
              objectFit: 'contain'
            }
          }
        ></img>
        <div className="card-body">
          <h5 className="card-title">{formatName(user)}</h5>
          {introduction}
          {gotoProfile}
        </div>
      </div>
    </React.Fragment>
  );
}

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function App() {
  return (
    <>
      <div className="row">
        <div className="col">{
        userLeft.map((u) => render(u))
        }
        </div>
        <div className="col">
          {[...Array(3)].map(() => render(user))}
          </div>
      </div>
    </>
  );
}
*/

/*
const array = [
  {
    firtName: "Nguyen",
    lastName: "Trinh",
    age: 1993,
  },
  {
    firtName: "Phan",
    lastName: "Trinh",
    age: 1993,
  },
];

const _renderInfo = (params) => {
  return (
    <>
      <div style={{ border: "1px solid red", width: "200px" }}>
        <p>{params.firtName}</p>
        <p>{params.lastName}</p>
      </div>
    </>
  );
};
export default App;
*/
/*
let a = 12;

let c = {
  id: 1,
  name: "User 1",
};

let d = {
  id: 2,
  name: "User 2",
};

const arrayNew = [
  { id: 3, name: "ba" },
  { id: 4, name: "bon" },
  { id: 5, name: "nam" },
];

const _render = (input) => {
  return (
    <>
      <p>{input.id}</p>
      <p style={{ color: input.id % 2 === 0 ? "red" : "green" }}>
        {input.name}
      </p>
    </>
  );
};

*/
/*
for (let index = 0; index < arrayNew.length; index++) {
  let item = arrayNew[index]
  _render(item)
}

arrayNew.map(
  (item) => {return _render(item)} 
)

arrayNew.map((item) => _render(item));

function App() {
  return (
    <>
   
      {_render(arrayNew[0])}
      {_render(arrayNew[1])}
      {_render(arrayNew[2])}

      {arrayNew.map((item) => (
        <div key={item.id}>{_render(item)}</div>
      ))}
    </>
  );
}
export default App;
*/
import React from "react";
import "./App.css";
// import BT01 from "./HomeWork/Session01/BT01";
// import BT02 from "./HomeWork/Session01/BT02";
// import BT01 from "./Class/Session2/BT01";
import LikeButton from "../src/HomeWork/Session03/BT01/LikeButton";
import RateButton from "../src/HomeWork/Session03/BT02/RateButton";
import Form from "../src/Class/Session03/Form";
import Navi from "../src/Class/Session03/Navi"
function App() {
  // let text1 = "HomeWork1-Like Button";
  // let text2 = "HomeWorks2-RateButton";
  // let text3 = "HomeWorks3-ImageView";

  return (
    <>
      {/* <LikeButton input1={text1} /> */}
      {/* <RateButton input2={text2} /> */}
      {/* <Form /> */}
      <Navi/>
      
    </>
  );
}

export default App;
