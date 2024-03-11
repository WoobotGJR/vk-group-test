import React, { useState } from 'react';
import { User } from '../../../types/types';

interface GroupFriendsProps {
  friends?: User[];
}

const GroupFriends: React.FC<GroupFriendsProps> = ({ friends }) => {
  const [showFriendsList, setShowFriendsList] = useState(false); // Состояние для отображения списка друзей

  const toggleFriendsList = () => {
    setShowFriendsList(!showFriendsList); // Функция для изменения состояния при клике
  };

  return (
    <>
      {friends && friends.length > 0 && (
        <div className="group__friends">
          <p className="group__friends-text" onClick={toggleFriendsList}>
            Подписано друзей: {friends.length}
          </p>
          {showFriendsList && (
            <div className="group__friends-container">
              <p className="group__friends-container-text">Подписаны:</p>
              {friends.map((friend, index) => (
                <div className="friend" key={index}>
                  <span>
                    {friend.first_name} {friend.last_name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default GroupFriends;
