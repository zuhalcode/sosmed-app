import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostData } from "../../data/PostsData";
import { getTimelinePosts } from "../../actions/PostAction";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, [dispatch, user]);

  return (
    <div className="flex flex-col gap-4">
      {loading
        ? "Fetching Posts"
        : posts.map((post, index) => (
            <Post key={index} data={post} id={index} />
          ))}
    </div>
  );
};

export default Posts;
