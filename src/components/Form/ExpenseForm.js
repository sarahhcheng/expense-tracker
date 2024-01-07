import { useContext, useState } from "react";
import "./ExpenseForm.css";
import { v4 as uuidv4 } from "uuid";
import { BudgetContext } from "../../BudgetContext";

export const ExpenseForm = () => {
  const [itemTitle, setItemTitle] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const { handleExpenseItems } = useContext(BudgetContext);

  const addExpenseItem = (e) => {
    e.preventDefault();
    const randomId = uuidv4();
    handleExpenseItems({ id: randomId, title: itemTitle, price: itemPrice });
  };

  return (
    <form className="expense-form">
      <div>
        <input
          type="text"
          id="name"
          placeholder="Item"
          onChange={(e) => setItemTitle(e.target.value)}
        />
        <input
          type="text"
          id="price"
          placeholder="Price"
          onChange={(e) => setItemPrice(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-3"
        onClick={addExpenseItem}
      >
        Add Item
      </button>
    </form>
  );
};
