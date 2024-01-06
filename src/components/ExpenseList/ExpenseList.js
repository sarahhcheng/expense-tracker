import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

export const ExpenseList = () => {
  var expenses = [
    { id: 1, title: "Charlotte Tilbury Lipstick", price: "$47" },
    { id: 2, title: "Glossier Lip Shine in Villa", price: "$22" },
  ];

  console.log("Items ");

  return (
    <>
      <div className="col-sm">
        <h2>My Expenses</h2>
        {expenses.map((exp) => {
          return (
            <ExpenseItem id={exp.id} title={exp.title} price={exp.price} />
          );
        })}
      </div>
    </>
  );
};
