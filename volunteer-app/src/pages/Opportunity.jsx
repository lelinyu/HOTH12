import React, { useState } from "react";

function Opportunity() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <div>
      <h1>Opportunities Page</h1>
      <p>Here you will find various opportunities.</p>
      <button onClick={openPopup}>Add Event</button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={(e) => {e.stopPropagation(); closePopup();}}>
              Close
            </button>
            <AddEvent />
          </div>
        </div>
      )}
    </div>
  );
}

export default Opportunity;

<button
  className="close-button"
  onClick={(e) => {
    e.stopPropagation();
    closePopup();
  }}
>
  Close
</button>
