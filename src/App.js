import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { RemainingBudget } from "./components/RemainingBudget/RemainingBudget";
import { Expense } from "./components/Expenses/Expense";
import { Budget } from "./components/Budget/Budget";
import { ExpenseList } from "./components/ExpenseList/ExpenseList";
import { ExpenseForm } from "./components/Form/ExpenseForm";
import { useState } from "react";

function App() {
  const [expenseItems, setExpenseItems] = useState([]);

  const handleExpenseItems = (item) => {
    setExpenseItems((prevExpenseItems) => [...prevExpenseItems, item]);
  };

  const handleDeleteExpense = (expenseId) => {
    setExpenseItems((prevExpenseItems) =>
      prevExpenseItems.filter((expense) => expense.id !== expenseId)
    );
  };

  return (
    <div className="container">
      <div className="align-items">
        <h1 className="app-title">My Expense Tracker</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <Expense />
          </div>
        </div>
        <div className="expenseList-container">
          <ExpenseList
            expenseItems={expenseItems}
            onDeleteExpense={handleDeleteExpense}
          />
          <ExpenseForm handleExpenseItems={handleExpenseItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
