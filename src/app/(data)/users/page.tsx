"use client";
import { useEffect, useState } from "react";
import axios from "axios";

// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
}

export default function Page() {
  const [users, setUsers] = useState<User[]>([]); // 👈 state is typed as an array of User

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:5000/users") // 👈 axios expects an array of User
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

