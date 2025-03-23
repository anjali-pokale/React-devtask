import React, { useContext } from "react";
import { UserContext } from "../App";
import profilePic from "../assets/profile.webp"; 

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div className="container"><h2>No Profile Data Found</h2></div>;
  }

  return (
    <div className="container">
      <h2>Account Settings</h2>
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <p>
        <strong>Phone:</strong> {user.phone} <br />
        <strong>Company:</strong> {user.company} <br />
        <strong>Agency:</strong> {user.agency}
      </p>
    </div>
  );
};

export default Profile;
