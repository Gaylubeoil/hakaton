import "./createEvent.scss";

import { userPropTypes } from "../../PropTypesDefinitions";
import { useState } from "react";

const CreateEvent = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="createEvent">
      <input type="text" placeholder="Create event" />
      {showPopup && (
        <div className="popup">
          {/* Inputs for creating a new post */}
          <input type="text" placeholder="Title" />
          <textarea placeholder="Write your post here..." />
          <button onClick={togglePopup}>Submit</button>
        </div>
      )}
      {/* <div className="container">
        <img src={user.image} alt="" />

        <div className="data-input">
          <input type="text" placeholder="Create Event.." />
          <input type="text" placeholder="City.." />
          <input type="text" placeholder="Event capacity.." />
          <input type="text" placeholder="Description .." />
          <input type="text" placeholder="Maps link.." />
          <input type="text" placeholder="Date.." />
          <input type="text" placeholder="Remaining time.." />
        </div>
        <div className="customPic">
          <input
            type="file"
            accept="image/*" // Allow only image files
            onChange={handleFileChange}
          />
          {selectedFile && (
            <div>
              <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
};
// city, category, maxCapacity, descr, location link, image, date, remaining time

CreateEvent.propTypes = {
  user: userPropTypes,
};

export default CreateEvent;
