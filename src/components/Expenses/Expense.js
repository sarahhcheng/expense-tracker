import { useContext } from "react";
import { BudgetContext } from "../../BudgetContext";

export const Expense = () => {
  const { expenses } = useContext(BudgetContext);

  return (
    <div className="alert alert-primary">
      <div>Total Spent: ${expenses}</div>
    </div>
  );
};
