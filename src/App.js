import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Code to run when the component is mounted
    // You can fetch data, set up subscriptions, or perform other tasks here
axios('https://api.randomuser.me/?na=US&results5')
.then((response) => { setUsers(response.data.results)
})
    // For example, you can fetch data and update the state:
    // fetchUsersData().then(data => {
    //   setUsers(data);
    // });
  }, []); 

  return (
    <div className="App">
      We'll be back!
    </div>
  );
}

export default App;
