import { useFetchUsers } from "./useFetchUsers";
import { useFetchPosts } from "./useFetchPosts";
import { useFetchStories } from "./useFetchStories";

export const useFeed = () => {
  const { getFetchUsers, handleFetchUsers } = useFetchUsers();
  const { getFetchPosts } = useFetchPosts({ users: getFetchUsers.users })
  const { getFetchStories } = useFetchStories();

  return {
    getFeed: {
      users: getFetchUsers.users,
      posts: getFetchPosts.posts,
      stories: getFetchStories.stories,
      usersFetched: getFetchPosts.usersFetched,
    },
    setFeed: {
      getUserPostById: handleFetchUsers.getUserPostById,

    }
  };
};
