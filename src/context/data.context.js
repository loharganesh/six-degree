import React, { useState, createContext } from 'react';

export const DataContext = createContext({
  // User
  users: [],
  setUsers: () => {},

  // Add User Window
  showAddUserDialog: false,
  setShowAddUserDialog: () => {},

  // Selected Users
  selectedUsers: [],
  setSelectedUsers: () => {},

  // User's Friends
  friends: [],
  setFriends: () => {},

  //
});

export const DataContextProvider = ({ children }) => {
  // State
  const [users, setUsers] = useState([]);
  const [showAddUserDialog, setShowAddUserDialog] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [friends, setFriends] = useState({});

  // Setter

  //
  return (
    <DataContext.Provider
      value={{
        users,
        setUsers,
        showAddUserDialog,
        setShowAddUserDialog,
        selectedUsers,
        setSelectedUsers,
        friends,
        setFriends,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
