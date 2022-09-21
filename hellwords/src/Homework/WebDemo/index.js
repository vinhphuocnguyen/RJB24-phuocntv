import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
// import Navi from "./Navi";

export default function WebDemo() {
  const [user, setUser] = useState({
    name: undefined,
    age: undefined,
  });
  useEffect(()=> {
    console.log(user)
  },[user])     
  return (
    <>
      <BrowserRouter>
        {/* {user?.name === undefined ? <Link to={"/login"}>LOGIN</Link> : <Navi />} */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Form setUser={setUser} />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 page not found</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
