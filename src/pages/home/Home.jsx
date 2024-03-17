import "./home.scss";
import Events from "../../components/events/Events.jsx";
import CreateEvent from "../../components/CreateEvent/CreateEvent.jsx";
import { userPropTypes } from "../../PropTypesDefinitions.js";

const Home = ({ user }) => {
  return (
    <div className="home">
      <CreateEvent user={user} />
      <Events />
    </div>
  );
};

Home.propTypes = {
  user: userPropTypes,
};

export default Home;
