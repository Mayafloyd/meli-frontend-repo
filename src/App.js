import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`/api/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      {users.map((user) => (
        <img key={user.id} src={user.url} alt="cat" width="500" height="600" />
      ))}
    </div>
  );
}

export default App;
