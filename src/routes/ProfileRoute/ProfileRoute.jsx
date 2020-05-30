import React, { useEffect } from "react";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import Loading from "../../components/Loading";
import { useFetchUsers, useFetchPosts } from "../../utils/hooks";

const ProfileRoute = () => {
  const { handleFetchUsers, getFetchUsers } = useFetchUsers({
    isEnableToFetchAllUsers: false,
  });
  const { handleFetchPosts, getFetchPosts } = useFetchPosts({
    isEnableToFetchAllPosts: false,
  });

  useEffect(() => {
    const loadUser = async () => {
      const { pathname } = window.location;
      const param = pathname.split("/")[2];
      await handleFetchUsers.getUserByName(param);
    };
    loadUser();
  }, [handleFetchUsers]);

  useEffect(() => {
    const loadUserPosts = async () => {
      await handleFetchPosts.getPostByUserId(getFetchUsers.user.id);
    };
    if (getFetchUsers.user.id) loadUserPosts();
  }, [getFetchUsers.user.id, handleFetchPosts]);

  return (
    <div data-testid="profile-route">
      <UserProfile
        name={getFetchUsers.user.name}
        avatar={getFetchUsers.user.avatar}
        username={getFetchUsers.user.username}
        email={getFetchUsers.user.email}
      />

      {getFetchPosts.isLoading ? (
        <Loading />
      ) : (
        <UserPosts posts={getFetchPosts.userPosts} />
      )}
    </div>
  );
};

export default ProfileRoute;
