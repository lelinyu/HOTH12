import React, { useState, useEffect } from "react";
import { createEvent, getAllOpportunities } from "../config/firebase"; 
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

  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const fetchOpportunities = async () => {
      const events = await getAllOpportunities();
      setOpportunities(events);
    };
    fetchOpportunities();
  }, []);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await createEvent(
        eventData.name,
        eventData.organizer,
        eventData.description,
        eventData.date,
        eventData.location,
        eventData.picture
      );
      alert("Event successfully added! Please Reload Page to see changes.");
      setEventData({
        name: "",
        organizer: "",
        description: "",
        date: "",
        location: "",
        picture: "",
      });
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
            <h2 id = "Event-Button">Add Event</h2>
            <input
              type="text"
              name="name"
              placeholder="Event Name"
              value={eventData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="organizer"
              placeholder="Organizer Name"
              value={eventData.organizer}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={eventData.description}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={eventData.location}
              onChange={handleChange}
            />
            <input
              type="text"
              name="picture"
              placeholder="Picture URL"
              value={eventData.picture}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      <div className="opportunities-list">
        {opportunities.map((opportunity) => (
          <div key={opportunity.id} className="opportunity-card">
            <h3>{opportunity.name}</h3>
            <p><strong>Organizer:</strong> {opportunity.organizer}</p>
            <p><strong>Date:</strong> {opportunity.date}</p>
            <p><strong>Location:</strong> {opportunity.location}</p>
            <p>{opportunity.description}</p>
            {opportunity.picture && <img src={opportunity.picture} alt={opportunity.name} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opportunity;