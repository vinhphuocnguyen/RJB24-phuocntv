import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Creat from "./Creat";
import Projects from "./Projects"
// import Navi from "./Navi";

export default function index() {
  const [user, setUser] = useState({
    name: undefined,
    age: undefined,
  });
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <BrowserRouter>
        {/* {user?.name === undefined ? <Link to={"/login"}>LOGIN</Link> : <Navi />} */}
        <Link to="/"></Link>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/Home" element={<Home setUser={setUser} />} />
          <Route path="/Creat" element={<Creat setUser={setUser} />} />
          <Route path="/Projects" element={<Projects setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
