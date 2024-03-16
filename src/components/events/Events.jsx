import "./events.scss";
import Event from "../event/Event.jsx";

const Events = () => {
  const ev = [
    {
      id: 1,
      name: "Luben",
      profilePic:
        "https://images.pexels.com/photos/19056314/pexels-photo-19056314/free-photo-of-ess-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "A black nigga girl",
      image:
        "https://images.pexels.com/photos/5691866/pexels-photo-5691866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "AnDrew",
      profilePic:
        "https://images.pexels.com/photos/20339251/pexels-photo-20339251/free-photo-of-woman-wearing-dress-sitting-by-the-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Andrew e gotinB)",
      image:
        "https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "VenCiCi",
      profilePic:
        "https://images.pexels.com/photos/2929574/pexels-photo-2929574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "jeninkite",
    },
    {
      id: 4,
      name: "KrisKoBeats",
      profilePic:
        "https://images.pexels.com/photos/1414253/pexels-photo-1414253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "A very cool event!!!",
    },
  ];

  return (
    <div className="events">
      {ev.map((ev) => {
        <Event event={ev} key={ev.id} />;
      })}
    </div>
  );
};

export default Events;
