import React, { useContext } from 'react';

import './user.styles.css';

import { DataContext } from '../../context/data.context';

export const User = ({ item, onClickHandler, classes }) => {
  const { selectedUsers } = useContext(DataContext);
  const {
    name,
    username,
    avatar_url = 'https://firebasestorage.googleapis.com/v0/b/vipic-db.appspot.com/o/vipic_assets%2Fplaceholders%2Favatar_placeholder.png?alt=media&token=9721916d-2e8b-4c1a-aff0-bba0cf4d4be3',
  } = item;

  const handleUserCardClick = () => {
    onClickHandler(item);
  };

  return (
    <div
      className={`user-container ${classes} ${
        selectedUsers.some((user) => user.username === username) &&
        'user-card-selected'
      }`}
      onClick={handleUserCardClick}
    >
      <img src={avatar_url} className="user-avatar" />
      <div className="user-info">
        <h4>{name}</h4>
        <p className="mt-sm">{username}</p>
      </div>
    </div>
  );
};
