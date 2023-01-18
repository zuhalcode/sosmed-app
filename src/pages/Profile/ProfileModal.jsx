import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/UploadAction";
import { updateUser } from "../../actions/UserAction";

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {
  const theme = useMantineTheme();
  const { password, ...other } = data;

  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const dispatch = useDispatch();
  const params = useParams();

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let userData = formData;
    if (profileImage) {
      const data = new FormData();
      const filename = Date.now() + profileImage.name;
      data.append("name", filename);
      data.append("file", profileImage);
      userData.profilePicture = filename;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    if (coverImage) {
      const data = new FormData();
      const filename = Date.now() + coverImage.name;
      data.append("name", filename);
      data.append("file", coverImage);
      userData.coverPicture = filename;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(updateUser(params.id, userData));
    setModalOpened(false);
  };

  return (
    <>
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        size="55%"
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <form className="form" onSubmit={handleOnSubmit}>
          <h3 className="text-2xl">Your Info</h3>
          <div>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              className="info-input"
              onChange={handleOnChange}
              value={formData.firstname}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="info-input"
              onChange={handleOnChange}
              value={formData.lastname}
            />
          </div>
          <div>
            <input
              type="text"
              name="worksAt"
              placeholder="Works At"
              className="info-input"
              onChange={handleOnChange}
              value={formData.worksAt}
            />
          </div>
          <div>
            <input
              type="text"
              name="livesIn"
              placeholder="Lives in"
              className="info-input"
              onChange={handleOnChange}
              value={formData.livesIn}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="info-input"
              onChange={handleOnChange}
              value={formData.country}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Relationship Status"
              name="relationship"
              className="info-input"
              onChange={handleOnChange}
              value={formData.relationship}
            />
          </div>
          <div>
            Profile Image
            <input type="file" name="profileImage" onChange={onImageChange} />
            Cover Image
            <input type="file" name="coverImage" onChange={onImageChange} />
          </div>
          <button className="btn self-end">Update</button>
        </form>
      </Modal>
    </>
  );
};

export default ProfileModal;
