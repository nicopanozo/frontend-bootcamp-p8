import React from 'react';

interface UserCardProps {
  name: string;
  age: number;
  onClick: (name: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, onClick }) => {
  return (
    <div
      className="card"
      onClick={() => onClick(name)}
      style={{ maxWidth: '200px', cursor: 'pointer' }}
    >
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
