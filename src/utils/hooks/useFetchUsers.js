import { useState, useEffect } from 'react';


export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  const getUserPostById = (postUserId) => users.find((user) => postUserId === user.id);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch(
          "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users"
        );
        const data = await response.json();
        setUsers(data);

      } catch (error) {

      }
    };
    loadUsers();
  }, []);

  return {
    getFetchUsers: {
      users,
    },
    handleFetchUsers: {
      getUserPostById,
    }

  };
}

