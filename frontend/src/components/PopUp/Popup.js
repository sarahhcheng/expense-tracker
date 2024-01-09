import React, { useContext, useState } from "react";
import "./Popup.css";
import { MdOutlineCancel } from "react-icons/md";
import { BudgetContext } from "../../BudgetContext";

const Popup = ({ isOpen, closePopup }) => {
  const [inputBudget, setNewBudget] = useState("");
  const { budget, handleBudget, remaining, setRemaining } =
    useContext(BudgetContext);

  const newBudget = () => {
    const budgetValue = parseFloat(inputBudget);
    if (budgetValue > 0 && !isNaN(budgetValue)) {
      const changeRemaining = budgetValue - budget;
      setRemaining(remaining + changeRemaining);
      handleBudget(budgetValue);
      closePopup();
    } else {
      alert("Please enter a numeric value greater than 0");
    }
  };

  return isOpen ? (
    <div className="popup-backdrop">
      <div className="popup">
        <label>New Budget</label>
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
