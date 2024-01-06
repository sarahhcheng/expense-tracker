import "./ExpenseForm.css";

export const ExpenseForm = () => {
  return (
    <form className="expense-form">
      <div>
        <input type="text" id="name" placeholder="Item"></input>
        <input type="text" id="price" placeholder="Price"></input>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Add Item
      </button>
    </form>
  );
};
