import "./createEvent.scss";

import { userPropTypes } from "../../PropTypesDefinitions";
import { useState } from "react";

const CreateEvent = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const [eventData, setEventData] = useState({
    title: "",
    city: "",
    category: "",
    capacity: 0,
    currentCapacity: 0,
    description: "",
    location: "",
    image: "",
    date: "",
    remainingTime: "",
    host: user,
    comments: [],
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="createEvent">
      <div className="container">
        <img src={user.image} alt="" />
        <input
          type="text"
          placeholder="Create event..."
          onClick={togglePopup}
        />
        {showPopup && (
          <div className="modal">
            <div className="modal-content">
              <input className="title" type="text" placeholder="Title" />
              <textarea className="text-area" placeholder="Description..." />
              <textarea className="text-area" placeholder="City.." />
              <textarea className="text-area" placeholder="Event Capacity.." />
              <textarea className="text-area" placeholder="Location Link.." />
              <textarea className="text-area" placeholder="Date.." />

              <div className="image-input">
                <input
                  type="file"
                  accept="image/*" // Allow only image files
                  onChange={handleFileChange}
                />
                {selectedFile && (
                  <div>
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                    />
                  </div>
                )}
              </div>

              <button onClick={togglePopup}>Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
// city, category, maxCapacity, descr, location link, image, date, remaining time

CreateEvent.propTypes = {
  user: userPropTypes,
};

export default CreateEvent;
