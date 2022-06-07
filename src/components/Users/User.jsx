import React from 'react'

export const User = ({ userLists }) => {
  return (
    <ul className="users__info" id='user_info'>
      {userLists.map(user => (
        <li key={user.id} className="user__info">
          <img className="user__avatar" src={user.photo} alt="avatar" />
          <h4 className="user__info_name">{user.name}</h4>
          <p className="user-p user__info_position">{user.position}</p>
          <p className="user-p user__info_email">{user.email}</p>
          <p className="user-p user__info_phone">{user.phone}</p>
        </li>
      ))}
    </ul>
  );
}
