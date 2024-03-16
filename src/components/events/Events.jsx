import "./events.scss";
import Event from "../event/Event.jsx";
import PropTypes from "prop-types";
const Events = () => {
  // Fetch all events. '/newPosts'

  const events = [
    {
      id: 1,
      title: "First Post Title",
      city: "Sofia",
      category: "Board games",
      capacity: 10,
      currentCapacity: 4,
      description: "A nice description of the current event.",
      location:
        "https://www.google.bg/maps/dir//42.6674403,23.3162753/@42.6668802,23.3162002,17z?hl=bg",
      image:
        "https://images.pexels.com/photos/5691866/pexels-photo-5691866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "21.10.2024",
      host: {
        id: 11,
        name: "Luben",
        profilePicture:
          "https://images.pexels.com/photos/19056314/pexels-photo-19056314/free-photo-of-ess-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
  ];

  return (
    <div className="events">
      {events.map((ev) => (
        <Event event={ev} key={ev.id} />
      ))}
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};

export default Events;
