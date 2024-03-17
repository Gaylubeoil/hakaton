import "./event.scss";
import PropTypes from "prop-types";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useState } from "react";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

const Event = ({ event }) => {
  const {
    title,
    city,
    category,
    capacity,
    currentCapacity,
    description,
    location,
    image,
    date,
    remainingTime,
    host,
  } = event;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (ev) => {
    setAnchorEl(ev.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="event">
      <div className="container">
        <div className="user">
          <div className="user-info">
            <Link to={`/profile/${host.id}`}>
              <img src={event.host.profilePicture} />
            </Link>
            <div className="details">
              <Link
                to={`/profile/${host.id}`}
                style={{ textDecoration: "none", color: "inherit" }}>
                <span className="name">{event.host.name}</span>
              </Link>
              <span className="remaining-time">{remainingTime} remain.</span>
              <span className="remaining-time">{date}</span>
            </div>
          </div>
          <div className="icons">
            <Link to={location}>
              <FmdGoodIcon />
            </Link>
            <IconButton
              aria-controls="dropdown-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="dropdown-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>Save</MenuItem>
              <MenuItem onClick={handleClose}>Share</MenuItem>
              <MenuItem onClick={handleClose}>View Profile</MenuItem>
              <MenuItem onClick={handleClose}>Report</MenuItem>
              <MenuItem onClick={handleClose}>Block User</MenuItem>
            </Menu>
          </div>
        </div>
        <img className="event-image" src={image} />
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="additional-info">
          <div className="availible-slots">
            Available spots: {currentCapacity}/{capacity}
          </div>
          <div className="category">Event category: {category}</div>
          <div className="city">City: {city}</div>
        </div>
        <hr />

        <div className="join-comments">
          <button type="button" className="green-button">
            Join Event
          </button>

          <div className="comments">
            <ModeCommentOutlinedIcon />
            <span>Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    currentCapacity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    remainingTime: PropTypes.string.isRequired,
    host: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profilePicture: PropTypes.string.isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          profilePicture: PropTypes.string.isRequired,
        }).isRequired,
        comment: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Event;
