import React, { useState } from "react";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../../components/RightSide/TrendCard";
import ShareModal from "../../components/ShareModal";
import { Link } from "react-router-dom";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="mt-4 flex justify-between [&>img]:w-6 [&>img]:h-6 [&>a>img]:h-6">
        <Link to={`/home`}>
          <img src={Home} alt="" className="" />
        </Link>
        <UilSetting />
        <img src={Noti} alt="" className="" />
        <img src={Comment} alt="" className="" />
      </div>

      <TrendCard />
      <button
        className="btn py-5 w-[80%] mx-auto"
        onClick={() => setModalOpened(true)}
      >
        Share
      </button>

      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
