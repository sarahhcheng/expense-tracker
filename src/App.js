import "bootstrap/dist/css/bootstrap.min.css";
import { RemainingBudget } from "./components/RemainingBudget/RemainingBudget";
import { Expense } from "./components/Expenses/Expense";
import { Budget } from "./components/Budget/Budget";
import { ExpenseList } from "./components/ExpenseList/ExpenseList";

function App() {
  return (
    <div className="container">
      <h1>My Expense Tracker</h1>
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
      <div>
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
