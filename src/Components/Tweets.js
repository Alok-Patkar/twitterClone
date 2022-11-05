import React from "react";
import CreateTweet from "./CreateTweet";
import Post from "./Post";

const Tweets = () => {
  return (
    <div className="posts">
      <div className="posts__home">Home </div>
      <CreateTweet />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Tweets;
