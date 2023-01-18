import React from "react";
import Posts from "../../components/PostSide/Posts";
import PostShare from "../../components/PostSide/PostShare";

const PostSide = () => {
  return (
    <div className="flex flex-col h-[100vh] gap-4 overflow-auto">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
