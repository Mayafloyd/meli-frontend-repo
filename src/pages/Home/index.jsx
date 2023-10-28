import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`/api/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return users.map((user) => (
    <div>
      <img key={user.id} src={user.url} alt="cat" width="500" height="600" />
    </div>
  ));
};

export default Home;
