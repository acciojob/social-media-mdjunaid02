import React from "react";
import { Link } from "react-router-dom";

const Users = ({ users }) => {
  return (
    <main>
      <h2>Users</h2>

      <div className="users-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Users;