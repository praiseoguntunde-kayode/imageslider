import React from "react";
import { useEffect, useState } from "react";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <h1>Users Page</h1>
    </React.Fragment>
  );
};

export default Users;
