import { useState, useEffect } from 'react';


export const useFetchPosts = ({ users }) => {
  const [posts, setPosts] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  useEffect(() => {
    const loadPosts = async () => {
      try {

        const response = await fetch(
          `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`
        );
        const data = await response.json();
        setPosts(prev => ([
          ...prev,
          ...data,
        ]));
        setUsersFetched(usersFetched + 1);
      } catch (error) {

      }
    };
    if (usersFetched !== users.length) loadPosts();
  }, [users, usersFetched]);


  return {
    getFetchPosts: {
      posts,
      usersFetched,
    }
  };
}

