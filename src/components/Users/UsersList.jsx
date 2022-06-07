import React, { useState, useEffect } from 'react';
import { fetchUsersData } from '../../gateway/gateway';
import { User } from './User';
import './users.scss';

export const Users = () => {
  const [usersLists, setUserLists] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(5);

  useEffect(() => fetchUsers(), []);

  const fetchUsers = (page = 1, count = 5) => {
    fetchUsersData(page, count).then(userList => {
      setTotalPages(userList.total_pages);
      setUserLists(userList.users);
    });
  };

  const handleClick = () => {
    setPage(page + 1);
    fetchUsers(page, count)
  }

  return (
    <section className="users">
      <h1 className="users__title">Working with GET request</h1>
      <User userLists={usersLists} />
      <button
        disabled={totalPages === page}
        className="action_button users__button"
        onClick={handleClick}
      >
        Show more
      </button>
    </section>
  );
};
