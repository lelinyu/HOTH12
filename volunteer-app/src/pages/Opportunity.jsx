import React, { useState } from "react";
import { createEvent } from "../config/firebase"; // Ensure this function correctly writes to Firestore
import "../styles/Opportunity.css";

function Opportunity() {
  const [showPopup, setShowPopup] = useState(false);
  const [eventData, setEventData] = useState({
    name: "",
    organizer: "",
    description: "",
    date: "",
    location: "",
    picture: "",
  });

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await createEvent(eventData.name, eventData.organizer, eventData.description, eventData.date, eventData.location, eventData.picture);
      alert("Event successfully added!");
      setEventData({ name: "", organizer: "", description: "", date: "", location: "", picture: "" }); // Reset form
      closePopup();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <div>
      <div className="opp-header">
        <h1>Opportunities Page</h1>
      </div>
      <button onClick={openPopup}>Add Event</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add Event</h2>
            <input type="text" name="name" placeholder="Event Name" value={eventData.name} onChange={handleChange} />
            <input type="text" name="organizer" placeholder="Organizer Name" value={eventData.organizer} onChange={handleChange} />
            <input type="text" name="description" placeholder="Description" value={eventData.description} onChange={handleChange} />
            <input type="date" name="date" value={eventData.date} onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" value={eventData.location} onChange={handleChange} />
            <input type="text" name="picture" placeholder="Picture URL" value={eventData.picture} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Opportunity;