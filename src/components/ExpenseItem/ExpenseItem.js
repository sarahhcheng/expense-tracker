import { TiDelete } from "react-icons/ti";
import "./ExpenseItem.css";
import { useContext } from "react";
import { BudgetContext } from "../../BudgetContext";

export const ExpenseItem = (props) => {
  const { id, title, price } = props;

  const { handleDeleteExpense } = useContext(BudgetContext);

  return (
    <div className="expense-item">
      <span>{title}</span>
      <span className="price">${price}</span>
      <TiDelete
        className="delete-icon"
        size="1.5em"
        onClick={() => handleDeleteExpense(price, id)}
      ></TiDelete>
    </div>
  );
};
