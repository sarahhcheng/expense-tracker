import { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  // This is just for setting the budget, the expenses, and the re
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [expenseItems, setExpenseItems] = useState([]);

  // For adding new items
  const handleExpenseItems = (item) => {
    setExpenseItems((prevExpenses) => [...prevExpenses, item]);
    setExpenses((exp) => exp + parseFloat(item.price));
    setRemaining((rem) => rem - parseFloat(item.price));
  };

  // For removing items
  const handleDeleteExpense = (price, expenseId) => {
    setExpenseItems((prevExpenseItems) =>
      prevExpenseItems.filter((expense) => expense.id !== expenseId)
    );
    setExpenses((exp) => exp - parseFloat(price));
    setRemaining((rem) => rem + parseFloat(price));
  };

  // for setting the initial budget or editing it
  const handleBudget = (b) => {
    setBudget(b);
  };

  const contextValue = {
    budget,
    setBudget,
    expenses,
    setExpenses,
    remaining,
    setRemaining,
    handleExpenseItems,
    expenseItems,
    setExpenseItems,
    handleDeleteExpense,
    handleBudget,
  };

  return (
    <BudgetContext.Provider value={contextValue}>
      {children}
    </BudgetContext.Provider>
  );
};
