import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Creat from "./Creat";

//render list User ra man hinh web
export default function Home(props) {
  // const { user } = props;
  const navigate = useNavigate();
  const [listUser, setListUser] = useState([]);
  // const [creat, setCreat] = useState(false);

  useEffect(() => {
    fetch(`https://632878c99a053ff9aab8d2a5.mockapi.io/api/vi/users`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setListUser(data);
        // console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://632878c99a053ff9aab8d2a5.mockapi.io/api/vi/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let listUserNew = listUser.filter((item) => item.id !== id);
        setListUser(listUserNew);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <table style={{ width: "100%", textAlign: "center" }}>
      <button>Creat</button>
      <thead>
        <tr>
          <th>STT</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {listUser.map((user, i) => {
          console.log({ user });
          return (
            <tr key={i}>
              <th>{user.id}</th>
              <td>{user.name}</td>
              <td>
                <button
                  style={{
                    padding: "10px",
                    background: "red",
                    border: "green",
                  }}
                  className="btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
