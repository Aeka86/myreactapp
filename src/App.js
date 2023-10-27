import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://api.randomuser.me/?na=US&results=5").then((response) => {
      setUsers(response.data.results);
      setLoading(false);
    });
    // For example, you can fetch data and update the state:
    // fetchUsersData().then(data => {
    //   setUsers(data);
    // });
  }, []);

  return (
    <div className="App">
      { loading ? (
        <p>Loading...</p>
      ) : (
      users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name.first} {user.name.last}</p>
          <p>{user.cell}</p>
          <p>{user.email}</p>
          <hr />
        </div>
      )))}
    </div>
  );
}

export default App;
