import React, { useContext } from 'react';

import './users-list.styles.css';

// Utils
import { containsObject } from '../../utils/array-helpers';

// Context
import { DataContext } from '../../context/data.context';

import { User } from '../user/user.component';

export const UsersList = (props) => {
  // Context
  const { users, setShowAddUserDialog, setSelectedUsers, selectedUsers } =
    useContext(DataContext);
  const { onClickHandler } = props;

  const handleUserCardClick = (item) => {
    onClickHandler(item);
  };

  const handleAddNewUserBtnClick = () => {
    setShowAddUserDialog(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      {users.length === 0 ? (
        <div className="empty-layout">
          <h4>Add Users and set relation to fine degree of relation</h4>
        </div>
      ) : (
        <div className="border-r-sm pt-lg users-list-container ">
          {users.length !== 0 &&
            Object.values(users).map((item) => (
              <User
                item={item}
                key={item.username}
                onClickHandler={handleUserCardClick}
              />
            ))}
        </div>
      )}

      <div className="add-new-user-btn-con">
        <button className="btn btn-primary" onClick={handleAddNewUserBtnClick}>
          Add New User
        </button>
      </div>
    </div>
  );
};
