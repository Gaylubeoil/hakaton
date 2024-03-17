import "./createEvent.scss";

import { userPropTypes } from "../../PropTypesDefinitions";
import { useState } from "react";

const CreateEvent = ({ user }) => {
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
  
  const [url, setUrl] = useState(null);
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };
  
  const [title, setTitle] = useState('');
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const [description, setDescription] = useState('');
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const [city, setCity] = useState('');
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const [capacity, setCapacity] = useState('');
  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  }

  const [date, setDate] = useState('');
  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  const togglePopup = () => {
    setShowPopup(!showPopup);

    if (showPopup) {

      const obj = {
        _title: title,
        _city: city,
        _capacity: capacity,
        _description: description,
        _date: date,
        _user: user.id,
        _image: url,
        _category: "Board Games",
        _location: 'https://www.google.com/maps/contrib/114965508482761244151'
      }

      const handleSubmit = async () => {
        try {
          const response = await fetch('http://localhost:3000/createPost', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const responseData = await response.json();
          console.log('Response from server:', responseData);
          // Do something with the response if needed
        } catch (error) {
          console.error('Error:', error);
          // Handle error
        }
      };

      handleSubmit();
      console.log(obj);
    }
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
              <input className="title" type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
              <textarea className="text-area" placeholder="Description..." value={description} onChange={handleDescriptionChange}/>
              <textarea className="text-area" placeholder="City.." value={city} onChange={handleCityChange}/>
              <textarea className="text-area" placeholder="Event Capacity.." value={capacity} onChange={handleCapacityChange}/>
              <textarea className="text-area" placeholder="Date.." value={date} onChange={handleDateChange} />
              <input type="url" id="urlInput" name="urlInput" placeholder='url' value={url} onChange={handleUrlChange} />


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
