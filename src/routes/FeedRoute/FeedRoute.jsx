import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";
import { useFeed } from "../../utils/hooks";

const FeedRoute = () => {
  const { getFeed } = useFeed();
  return <div>{console.log(getFeed)}</div>;
};

export default FeedRoute;
