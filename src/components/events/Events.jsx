import "./events.scss";
import Event from "../event/Event.jsx";

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
      description:
        "A nice description of the current event. It's pretty long and kinda boring, but you'll have to kindly sit though it since I need to fill just a bit more space to see how descriptions react to being longer. Thank you<3.",
      location:
        "https://www.google.bg/maps/dir//42.6674403,23.3162753/@42.6668802,23.3162002,17z?hl=bg",
      image:
        "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "21.10.2024",
      remainingTime: "2 hours",
      host: {
        id: 11,
        name: "Luben",
        profilePicture:
          "https://images.pexels.com/photos/19056314/pexels-photo-19056314/free-photo-of-ess-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      comments: [
        {
          user: {
            id: 11,
            name: "Luben",
            profilePicture:
              "https://images.pexels.com/photos/19056314/pexels-photo-19056314/free-photo-of-ess-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          comment: "A nice, not too large comment.",
        },
      ],
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

export default Events;
