import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount || !category || !date) return;
    if (amount <= 0) return;

    onAddExpense({
      id: Date.now(),
      name,
      amount: Number(amount),
      category,
      date,
    });

    setName("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <div className="form-group">
        <label>Expense Name</label>
        <input
          type="text"
          
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          placeholder="₹0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Education</option>
          <option>Bills</option>
          <option>Others</option>
        </select>
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
