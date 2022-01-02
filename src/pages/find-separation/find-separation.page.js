import React, { useState, useContext, useEffect } from 'react';

import './find-separation.styles.css';

// Context
import { DataContext } from '../../context/data.context';

import { Icon } from '../../components/icon/icon.component';
import { UsersList } from '../../components/users-list/users-list.component';
import { User } from '../../components/user/user.component';
import { Switch } from '../../components/switch/switch.component';
import { AddUser } from '../../components/add-user/add-user.component';
import { fireEvent } from '@testing-library/react';

const UserSnippet = ({ item }) => {
  return (
    <div className="user-snippet">
      <h5>{item}</h5>
    </div>
  );
};

const Divider = () => {
  return <Icon name="ARROW_LEFT" size={28} color="black" />;
};

export const FindSeparation = () => {
  // Context
  const {
    friends,
    setFriends,
    selectedUsers,
    setSelectedUsers,
    showAddUserDialog,
  } = useContext(DataContext);
  const [value, setValue] = useState(false);
  const [degreeOfSeparation, setDegreeOfSeparation] = useState([]);

  const handleUserCardClick = (item) => {
    if (selectedUsers.some((user) => user.username === item.username)) {
      const newArr = selectedUsers.filter(
        (user) => user.username !== item.username
      );
      setSelectedUsers(newArr);
    } else {
      if (selectedUsers.length < 2) {
        setSelectedUsers([...selectedUsers, item]);
      }
    }
  };

  useEffect(() => {
    if (selectedUsers.length === 2) {
      // Set Selected Users as Friends
      const pName = selectedUsers[0].name;
      const sName = selectedUsers[1].name;
      const pUsername = selectedUsers[0].username;
      const sUsername = selectedUsers[1].username;
      const pUserFriends = friends[pUsername];
      const sUserFriends = friends[sUsername];
      if (value) {
        setFriends({
          ...friends,
          [pUsername]: { ...pUserFriends, [sUsername]: sName },
          [sUsername]: { ...sUserFriends, [pUsername]: pName },
        });
      } else {
      }
    }
  }, [value]);

  useEffect(() => {
    if (selectedUsers.length === 2) {
      const pUsername = selectedUsers[0].username;
      const sUsername = selectedUsers[1].username;

      if (
        pUsername in friends &&
        sUsername in friends &&
        sUsername in friends[pUsername] &&
        pUsername in friends[sUsername]
      ) {
        setValue(true);
      } else {
        setValue(false);
      }
    }
  }, [selectedUsers]);

  useEffect(() => {
    const result = [];
    if (selectedUsers.length === 2) {
      const root = selectedUsers[0].username;
      const beacon = selectedUsers[1].username;

      result.push(root);

      if (root in friends && beacon in friends[root]) {
        result.push(beacon);
      } else {
        if (root in friends) {
          Object.keys(friends[root]).forEach((i) => {
            if (i in friends && beacon in friends[i]) {
              result.push(i);
              result.push(beacon);
            }
          });
        }
      }
      setDegreeOfSeparation(result);
    }
  }, [selectedUsers]);

  useEffect(() => console.log(degreeOfSeparation), [degreeOfSeparation]);

  return (
    <div className="find-separation-container">
      {showAddUserDialog && <AddUser />}

      <UsersList onClickHandler={handleUserCardClick} />
      {selectedUsers.length === 2 ? (
        <div className="con-pad-lg">
          <h3>Selected Users</h3>

          {/* Selected Users Section */}

          <div className="selected-users mt-rg">
            <User item={selectedUsers[0]} classes="selected-user-card" />
            <div className="space-rg" />
            <Icon name="REPEAT_LINE" />
            <div className="space-rg" />
            <User item={selectedUsers[1]} classes="selected-user-card" />
          </div>

          {/* Set Friendhsip Status Section */}
          <div className="mt-rg friendship-status">
            <div className="flex-grow">
              <h3>Friendship Status</h3>
              <p>{value ? 'Friends' : 'Not Friends'}</p>
            </div>
            <Switch
              isOn={value}
              onColor="#000000"
              handleToggle={() => setValue(!value)}
            />
          </div>

          {/*  */}
          <h3 className="mt-lg">Degree of separation</h3>
          <div className="relation-div">
            {degreeOfSeparation.length !== 0 &&
              degreeOfSeparation.map((item, index) => {
                return (
                  <div key={item} className="relation-div">
                    {index !== 0 && index !== degreeOfSeparation.length && (
                      <>
                        <div className="space-sm" />
                        <Icon name="ARROW_RIGHT" />
                        <div className="space-sm" />
                      </>
                    )}
                    <UserSnippet item={item} />
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="empty-layout">
          <h1>
            Select any two users to find degree of relation or set relation
          </h1>
        </div>
      )}
    </div>
  );
};
