import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data: User[] = await res.json();
        setUsers(data);
      } catch (e: any) {
        setError(e.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="card">
      <h2>User List</h2>
      {error ? (
        <p>Error loading users: {error}</p>
      ) : users.length === 0 ? (
        <p>Loading users…</p>
      ) : (
        <ul>
          {users.map(u => (
            <li key={u.id}>
              {u.name} ({u.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
