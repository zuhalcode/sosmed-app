import React from "react";
import InfoCard from "../../components/ProfileLeft/InfoCard";
import FollowersCard from "../../components/ProfileSide/FollowersCard";
import LogoSearch from "../../components/ProfileSide/LogoSearch";

const ProfileLeft = () => {
  return (
    <div className="flex flex-col gap-4 items-center overflow-auto">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
