import { useEffect, useState } from "react";

export const useFeed = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  const getUserPostById = (postUserId) =>
    users.find((user) => postUserId === user.id);

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

  useEffect(() => {
    const loadStories = async () => {
      const response = await fetch(
        "https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories"
      );
      const data = await response.json();
      setStories(data);
    };
    loadStories();
  }, [users]);

  return {
    getFeed: {
      users,
      posts,
      stories,
      usersFetched,
    },
    setFeed: {
      getUserPostById,

    }
  };
};
