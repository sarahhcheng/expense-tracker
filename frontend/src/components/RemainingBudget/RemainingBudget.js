import { useContext } from "react";
import { BudgetContext } from "../../BudgetContext";

export const RemainingBudget = () => {
  const { remaining } = useContext(BudgetContext);

  return (
    <div className="alert alert-success">
      <div>Remaining Budget: ${remaining}</div>
    </div>
  );
};
