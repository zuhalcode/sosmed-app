import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const publicServer = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="rounded-3xl flex flex-col relative gap-4 overflow-x-clip bg-card pb-3">
      <div className="flex relative flex-col items-center justify-center">
        <img
          src={
            user.coverPicture
              ? publicServer + user.coverPicture
              : publicServer + "defaultCover.jpg"
          }
          alt=""
          className="w-full"
        />
        <img
          src={
            user.profilePicture
              ? publicServer + user.profilePicture
              : publicServer + "defaultProfile.jpg"
          }
          alt=""
          className="w-24 rounded-full absolute shadow-profile -bottom-12"
        />
      </div>

      <div className="flex flex-col items-center mt-12 gap-2">
        <span className="font-bold">
          {user.firstname} {user.lastname}
        </span>
        <span className="">
          {user.worksAt ? user.worksAt : "Write about yourself"}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 ">
        <hr className="w-[85%] h-[1.5px] bg-hr text-hr" />
        <div className="flex w-[80%] justify-around items-center gap-4">
          <div className="flex flex-col gap-2 items-center justify-center  ">
            <span className="font-bold">{user.followings.length}</span>
            <span className="text-gray text-[13px]">Followings</span>
          </div>
          <div className="vl"></div>
          <div className="flex flex-col gap-2 items-center justify-center ">
            <span className="font-bold">{user.followers.length}</span>
            <span className="text-gray text-[13px]">Followers</span>
          </div>

          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="flex flex-col gap-2 items-center justify-center  ">
                <span className="font-bold">
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span className="text-gray text-[13px]">Posts</span>
              </div>
            </>
          )}
        </div>
        <hr className="w-[85%] bg-hr text-hr h-[1px]" />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span className="text-orange font-bold text-center ">
          <Link to={`/profile/${user._id}`}>My Profile</Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
