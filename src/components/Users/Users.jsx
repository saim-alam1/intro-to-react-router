import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

  const users = useLoaderData();
  console.log(users);

  return (
    <div>
      <h2>Users Components</h2>
      {
        users.map(user => <User key={user.id} user={user}></User>)
      }
    </div>
  );
};

export default Users;