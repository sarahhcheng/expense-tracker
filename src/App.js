import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { RemainingBudget } from "./components/RemainingBudget/RemainingBudget";
import { Expense } from "./components/Expenses/Expense";
import { Budget } from "./components/Budget/Budget";
import { ExpenseList } from "./components/ExpenseList/ExpenseList";
import { ExpenseForm } from "./components/Form/ExpenseForm";
import { useState } from "react";
import { BudgetProvider } from "./BudgetContext";

function App() {
  return (
    <BudgetProvider>
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
            <ExpenseList />
            <ExpenseForm />
          </div>
        </div>
      </div>
    </BudgetProvider>
  );
}

export default App;
