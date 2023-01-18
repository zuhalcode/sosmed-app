import React from "react";
import FollowersCard from "../../components/ProfileSide/FollowersCard";
import LogoSearch from "../../components/ProfileSide/LogoSearch";
import ProfileCard from "../../components/ProfileSide/ProfileCard";

const ProfileSide = () => {
  return (
    <div className="flex flex-col gap-4 items-center overflow-auto">
      <LogoSearch />
      <ProfileCard location="homepage" />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
