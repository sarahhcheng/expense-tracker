import React, { useState } from "react";
import "./Popup.css";
import { MdOutlineCancel } from "react-icons/md";

const Popup = ({ isOpen, closePopup, onSetNewBudget }) => {
  const [budget, setNewBudget] = useState(0);

  if (!isOpen) return null;

  const newBudget = () => {
    onSetNewBudget(budget);
  };

  return (
    <div className="popup-backdrop">
      <div className="popup">
        <h3>New budget</h3>
        <MdOutlineCancel className="close-button" onClick={closePopup} />
        <div className="new-budget">
          <input
            type="text"
            placeholder="e.g. 700"
            onChange={(e) => setNewBudget(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={newBudget}
          >
            Set Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
