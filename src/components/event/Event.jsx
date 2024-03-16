import "./event.scss";
import PropTypes from "prop-types";

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
    host,
    //  comments,
  } = event;
  return (
    <div className="event">
      <div>ID: {id}</div>
      <div>Title: {title}</div>
      <div>city: {city}</div>
      <div>category: {category}</div>
      <div>capacity: {capacity}</div>
      <div>currentCapacity: {currentCapacity}</div>
      <div>description: ${description}</div>
      <div>location: {location}</div>
      <div>image: {image}</div>
      <div>host: {host.id}</div>
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
