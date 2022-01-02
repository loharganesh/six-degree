import React, { useState, useContext, useEffect } from 'react';

import './add-user.styles.css';

// Context
import { DataContext } from '../../context/data.context';

// Component

export const AddUser = () => {
  // Context
  const { users, setUsers, setShowAddUserDialog } = useContext(DataContext);

  const handleCancelBtnClick = () => {
    setShowAddUserDialog(false);
  };

  // State
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'username':
        setUsername(value);
        break;
      default:
        break;
    }
  };

  const handleOnAddUserBtnClick = () => {
    const newUser = { name, username };
    const newUsers = users;
    newUsers.push(newUser);
    setUsers(newUsers);
    setName('');
    setUsername('');
    setShowAddUserDialog(false);
  };

  return (
    <div className="add-user-container">
      <input
        name="name"
        placeholder="Name"
        className="input"
        value={name}
        onChange={handleInputChange}
      />
      <div className="space-sm" />
      <input
        placeholder="Username"
        className="input"
        name="username"
        onChange={handleInputChange}
      />
      <div className="space-sm" />
      <button className="btn btn-primary" onClick={handleOnAddUserBtnClick}>
        Add User
      </button>
      <div className="space-sm" />
      <button className="btn btn-secondary" onClick={handleCancelBtnClick}>
        Cancel
      </button>
    </div>
  );
};
