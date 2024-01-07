import { useState } from "react";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

export const ExpenseList = ({ expenseItems, onDeleteExpense }) => {
  return (
    <>
      <div className="col-sm">
        <h2>My Expenses</h2>
        {expenseItems.map((exp) => {
          return (
            <ExpenseItem
              key={exp.id}
              id={exp.id}
              title={exp.title}
              price={exp.price}
              onDelete={onDeleteExpense}
            />
          );
        })}
      </div>
    </>
  );
};
