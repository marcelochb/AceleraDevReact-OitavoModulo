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
      const response = await fetch(
        "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    loadUsers();
  }, []);

  useEffect(() => {
    const loadPosts = async () => {
      const response = await fetch(
        `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFetched].id}/posts`
      );
      const data = await response.json();
      setPosts([...posts, ...data]);
      setUsersFetched(usersFetched + 1);
    };
    if (usersFetched !== users.length) loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      getUserPostById,
    },
  };
};
