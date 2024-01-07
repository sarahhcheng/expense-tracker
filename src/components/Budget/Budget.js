import { FaRegEdit } from "react-icons/fa";
import "./Budget.css";
import { useState } from "react";
import Popup from "../PopUp/Popup";

export const Budget = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [budget, setBudget] = useState(500);

  const handleBudget = (b) => {
    setBudget(b);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="alert alert-secondary">
      <div className="budget-contain">
        {" "}
        <div>Budget: ${budget}</div>
        <div className="edit" onClick={togglePopup}>
          <FaRegEdit />
        </div>
        <Popup
          isOpen={isPopupOpen}
          closePopup={togglePopup}
          onSetNewBudget={handleBudget}
        />
      </div>
    </div>
  );
};
