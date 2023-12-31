import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "./Loading";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    axios("https://api.randomuser.me/?na=US&results=5")
      .then((response) => {
        setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    loadUsers();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="submit" value="load users" />
      </form>
      <hr />
      {loading ? (
        <Loading message="Welcome to my world!" />
      ) : (
        users.map((user, index) => (
          <div key={index}>
            <p style={{ color: "red", fontWeight: "bold" }}>
              {user.name.first} {user.name.last}
            </p>
            <p>{user.cell}</p>
            <p>{user.email}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
