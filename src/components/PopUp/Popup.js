import React, { useState } from "react";
import "./Popup.css";
import { MdOutlineCancel } from "react-icons/md";

const Popup = ({ isOpen, closePopup, onSetNewBudget }) => {
  const [budget, setNewBudget] = useState("");

  const newBudget = () => {
    const budgetValue = parseFloat(budget);
    if (budgetValue > 0 && !isNaN(budgetValue)) {
      onSetNewBudget(budgetValue);
      closePopup();
    } else {
      alert("Please enter a numeric value greater than 0");
    }
  };

  return isOpen ? (
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
            type="button" // Change to button to avoid form submission
            className="btn btn-primary mt-3"
            onClick={newBudget}
          >
            Set Budget
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
