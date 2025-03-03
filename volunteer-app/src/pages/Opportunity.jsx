import React, { useState } from "react";
import { createEvent} from "../config/firebase";
import "../styles/Opportunity.css";

function Opportunity() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <div>
        <div className = "opp-header">
            <h1>Opportunities Page</h1>
        </div>
      <button onClick={openPopup}>Add Event</button>
    </div>
  );
}

export default Opportunity;
