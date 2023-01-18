import React from "react";
import ProfileCard from "../../components/ProfileSide/ProfileCard";
import PostSide from "../Home/PostSide";
import RightSide from "../Home/RightSide";
import ProfileLeft from "./ProfileLeft";

const Profile = () => {
  return (
    <div className="container gap-4">
      <div className="">
        <ProfileLeft />
      </div>
      <div className="flex flex-col gap-4 ">
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>
      <div className="">
        <RightSide />
      </div>
    </div>
  );
};

export default Profile;
