import { useContext, useState } from "react";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";
import { BudgetContext } from "../../BudgetContext";

export const ExpenseList = () => {
  const { expenseItems } = useContext(BudgetContext);

  return (
    <div className="expense-container">
      <div className="col-sm">
        <h2>My Expenses</h2>
        {expenseItems.map((exp) => {
          return (
            <ExpenseItem
              key={exp.id}
              id={exp.id}
              title={exp.title}
              price={exp.price}
            />
          );
        })}
      </div>
    </div>
  );
};
