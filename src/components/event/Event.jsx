import "./event.scss";
import PropTypes from "prop-types";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const Event = ({ event }) => {
  const {
    id,
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
    comments,
  } = event;

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
            <FmdGoodIcon />
            <MoreVertIcon />
          </div>
        </div>
        <img className="event-image" src={image} />
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <hr />
        <div className="additional-info">
          <div className="availible-slots">
            Available spots: {currentCapacity}/{capacity}
          </div>
          <div className="category">Event category: {category}</div>
          <div className="city">City: {city}</div>
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
