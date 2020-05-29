import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";
import { useFeed } from "../../utils/hooks";

const FeedRoute = () => {
  const { getFeed, setFeed } = useFeed();
  return (
    <div data-testid="feed-route">
      {getFeed.users.length > 0 && getFeed.stories.length > 0 && (
        <Stories
          stories={getFeed.stories}
          getUserHandler={setFeed.getUserPostById}
        />
      )}

      {getFeed.users.length !== getFeed.usersFetched ? (
        <Loading />
      ) : (
        <Posts posts={getFeed.posts} getUserHandler={setFeed.getUserPostById} />
      )}
    </div>
  );
};

export default FeedRoute;
