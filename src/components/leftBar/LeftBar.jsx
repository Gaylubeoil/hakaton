import "./leftBar.scss";

import FollowersIcon from "../../assets/followers.svg";
import FollowingIcon from "../../assets/following.svg";
import EventsIcon from "../../assets/events.svg";
import NotificationOnIcon from "../../assets/notificationOn.svg";
import NotificationOffIcon from "../../assets/notificationOff.svg";
import RequestsIcon from "../../assets/requests.svg";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const LeftBar = ({ user }) => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <Link to={`/profile/${user.id}`} style={{ textDecoration: "none" }}>
            <div className="user">
              <img src={user.image} />
              <span>Luben Lubenus</span>
            </div>
          </Link>

          <hr />

          <div className="menuComponent">
            <img src={FollowersIcon} alt="" />
            <span>Followers</span>
          </div>

          <div className="menuComponent">
            <img src={FollowingIcon} alt="" />
            <span>Following</span>
          </div>

          <div className="menuComponent">
            <img src={EventsIcon} alt="" />
            <span>Events</span>
          </div>

          <div className="menuComponent">
            <img src={RequestsIcon} alt="" />
            <span>Requests</span>
          </div>
          <div className="menuComponent">
            <img src={NotificationOnIcon} alt="" />
            <span>Notifications</span>
          </div>
          <hr />
          <div className="filtter">
            <h3>Filtters</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

LeftBar.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    trustScore: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    followersCount: PropTypes.number.isRequired,
    followingCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default LeftBar;
