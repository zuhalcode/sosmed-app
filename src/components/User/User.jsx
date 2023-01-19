import React from "react";

const User = ({ person }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        <img
          src={
            person.profilePicture
              ? serverPublic + person.profilePicture
              : serverPublic + "defaultProfile.jpg"
          }
          alt=""
          className="w-12 h-12 rounded-full "
        />
        <div className="flex flex-col items-start justify-center">
          <span className="font-bold">{person.name}</span>
          <span className="text-xs">@{person.email.toLowerCase()}</span>
        </div>
      </div>
      <button className="btn">Follow</button>
    </div>
  );
};

export default User;
