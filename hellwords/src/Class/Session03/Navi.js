import React from "react";
import Form from "../Session03/Form"
import Home from "../Session03/Home"
import MyPage from "../Session03/Mypage"
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Mypage from "../Session03/Mypage";
export default function Navi() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path ="/Home" element ={<Home/>}/>
        <Route path ="/Mypage" element ={<Mypage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
