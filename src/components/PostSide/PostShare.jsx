import React, { useState } from "react";

import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadAction";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const imageRef = useRef();
  const desc = useRef();

  const publicServer = process.env.REACT_APP_PUBLIC_FOLDER;

  const dispatch = useDispatch();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };

  const handleOnShare = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  };

  return (
    <div className="post-share">
      <img
        src={
          user.profilePicture
            ? publicServer + user.profilePicture
            : publicServer + "defaultProfile.jpg"
        }
        alt=""
      />
      <div>
        <input type="text" placeholder="What's happening" ref={desc} required />
        <div className="post-option mt-3">
          <div
            className="option text-photo"
            onClick={() => imageRef.current.click()}
          >
            <UilScenery /> Photo
          </div>
          <div className="option text-video">
            <UilPlayCircle /> Video
          </div>
          <div className="option text-location">
            <UilLocationPoint /> Location
          </div>
          <div className="option text-schedule">
            <UilSchedule /> Schedule
          </div>
          <button
            className="btn p-1 px-5 text-xs"
            disabled={loading}
            onClick={handleOnShare}
          >
            {loading ? "Uploading" : "Share"}
          </button>
          <div className="hidden">
            <input
              type="file"
              name="myImage"
              id=""
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="preview-img relative mt-3">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
