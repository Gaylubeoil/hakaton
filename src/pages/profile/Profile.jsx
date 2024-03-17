import "./profile.scss";
import { userPropTypes } from "../../PropTypesDefinitions.js";

import { SocialIcon } from "react-social-icons";

const Profile = ({ user }) => {
  

  return (
    <div className="profile">
      <img src={user.image} className="profile" />
      <div className="container">
        <div className="username">
          <span>{user.username}</span>
        </div>
        <div className="user-data">
          <button className="follow-button">Follow</button>
          <span>Trust Score: {user.trustScore}</span>
          <span>Email: {user.email}</span>
          <span>Bio: {user.bio}</span>
        </div>
        <div className="icons">
          <SocialIcon url="https://instagram.com" />
          <SocialIcon url="https://discord.com" />
          <SocialIcon url="https://facebook.com" />
          <SocialIcon url="https://reddit.com" />
          <SocialIcon url="https://twitter.com" />
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: userPropTypes,
};

{
  /* <SocialIcon url="https://twitter.com" />
<SocialIcon url="https://instagram.com" />
<SocialIcon url="https://youtube.com" />
<SocialIcon url="https://reddit.com" /> */
}
export default Profile;
