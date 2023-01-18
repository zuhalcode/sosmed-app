import React, { useEffect, useState } from "react";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../../pages/Profile/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserApi";
import { logout } from "../../actions/AuthAction";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [profileUser, setProfileUser] = useState({});

  const { user } = useSelector((state) => state.authReducer.authData);

  const dispatch = useDispatch();
  const params = useParams();

  const profileUserId = params.id;

  const handleLogout = () => dispatch(logout());

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (profileUserId === user._id) setProfileUser(user);
      else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchUserProfile();
  }, [profileUserId, user]);

  return (
    <div className="flex flex-col gap-3 bg-card p-4 rounded-2xl w-[90%]">
      <div className="flex justify-between items-center [&>div]:hover:cursor-pointer ">
        <h4 className="font-bold text-xl">Your info</h4>
        {user._id === profileUserId ? (
          <>
            <UilPen
              className="hover:cursor-pointer"
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </>
        ) : (
          ""
        )}
      </div>

      <div>
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>

      <div>
        <span>
          <b>Works At </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>

      <div>
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesIn}</span>
      </div>

      <button className="btn w-28 h-8 mt-24 self-end" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
