import { useState, useEffect } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onAddExpense, onUpdateExpense, editingExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  // Populate form when editing
  useEffect(() => {
    if (editingExpense) {
      setName(editingExpense.name);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount || !category || !date) return;

    const expenseData = {
      id: editingExpense ? editingExpense.id : Date.now(),
      name,
      amount: Number(amount),
      category,
      date,
    };

    if (editingExpense) {
      onUpdateExpense(expenseData);
    } else {
      onAddExpense(expenseData);
    }

    // Reset form
    setName("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>{editingExpense ? "Edit Expense" : "Add Expense"}</h2>

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

      <button type="submit">
        {editingExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
}

export default ExpenseForm;
