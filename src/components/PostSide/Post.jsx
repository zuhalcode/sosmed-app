import React, { useState } from "react";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLiked from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostApi";

const Post = ({ data, id }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleOnLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div key={id} className="flex flex-col p-4 space-y-3 bg-card rounded-2xl">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
        className="w-full max-h-80 object-cover rounded-lg"
      />
      <div className="flex justify-start gap-5 mt-3">
        <img
          src={liked ? Heart : NotLiked}
          alt=""
          className="cursor-pointer"
          onClick={handleOnLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span className="text-gray text-sm">{likes} likes</span>
      <div className="space-x-3">
        <span className="">
          <b>{data.name}</b>
        </span>
        <span className="">{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
