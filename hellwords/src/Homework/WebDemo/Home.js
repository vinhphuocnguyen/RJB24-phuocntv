import React, { useState, useEffect } from "react";

//render list User ra man hinh web
export default function Home(props) {
  const { user } = props;
  const [listUser, setListUser] = useState([]);

  const getUsersAsync = async () => {
    try {
      const url = "https://632878c99a053ff9aab8d2a5.mockapi.io/api/vi/users";
      const response = await fetch(url, {
        method: "GET",
      });
      //xu ly ket qua JSON
      const json = await response.json();
      setListUser(json);
      // console.log(json);
    } catch (error) {
      alert("hello");
    }
  };

  useEffect(() => {
    getUsersAsync();
  }, []);

  return (
    <table style={{ width: "100%" , textAlign:"center"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
       <tbody>
        {listUser.map((user, i) => {
          console.log({user});
          return (
            <tr key={i}>
              <th>{user.id}</th>
              <td>{user.name}</td>
               <td>
                <button style={{padding:'10px', background:'red', border:'green'}}
                className="btn" onClick={() => console.log(user)}
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

// a run thu