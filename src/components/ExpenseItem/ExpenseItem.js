import { TiDelete } from "react-icons/ti";
import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  const { id, title, price, onDelete } = props;

  return (
    <div className="expense-item">
      <span>{title}</span>
      <span className="price">{price}</span>
      <TiDelete
        className="delete-icon"
        size="1.5em"
        onClick={() => onDelete(id)}
      ></TiDelete>
    </div>
  );
};
