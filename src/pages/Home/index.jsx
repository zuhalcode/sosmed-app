import React from "react";
import PostSide from "./PostSide";
import ProfileSide from "./ProfileSide";
import RightSide from "./RightSide";

const Home = () => {
  return (
    <div className="container gap-4">
      <div>
        <ProfileSide />
      </div>
      <div>
        <PostSide />
      </div>
      <div>
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
