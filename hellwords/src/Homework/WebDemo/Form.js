import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UNSAFE_DataRouterContext, useNavigate } from "react-router-dom";

export default function Form(props) {
  const { setUser } = props;
  const navigate = useNavigate();
  const USER_NAME = "phuocntv@gmail.com";
  const USER_PASSWORD = "Abc@123";

  const [email, setEmail] = useState(undefined);
  const [passWord, setPassWord] = useState(undefined);

  const [errors, setErrors] = useState({
    email: undefined,
    PassWord: undefined,
  });

  const [res, setRes] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === USER_NAME && passWord === USER_PASSWORD) {
      setUser && setUser({ name: email, age: 18 });

      console.log("S");
      navigate("/");
      setRes(true);
    } else {
      console.log("F");
    }
    setRes(false);
    console.log(email, passWord);
  };
  const handleChange = (e) => {
    if (e.target.name === "inputEmail") setEmail(e.target.value);
    console.log(e.target.name, e.target.value);
  };
  return (
    // Hàm handleSubmit sẽ validate trước khi gọi hàm onSubmit
    <form onSubmit={handleSubmit}>
      <input
        name={"inputEmail"}
        type={"mail"}
        placeholder={"Enter mail"}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        name={"inputPassWord"}
        type={"PassWord"}
        placeholder={"Enter PassWord"}
        onChange={(e) => {
          setPassWord(e.target.value);
        }}
      />
      <button type={"submit"} style={{ color: "black", background: "red" }}>
        Login
      </button>
      {/* <small>{errors?.email && errors?.email}</small> */}
    </form>
  );
}
