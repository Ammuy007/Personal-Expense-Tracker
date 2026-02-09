import { useState,useEffect } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import Summary from "./components/Summary";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editingExpense, setEditingExpense] = useState(null);
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  // Add expense
  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  // Update expense
  const updateExpense = (updatedExpense) => {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
    setEditingExpense(null); // exit edit mode
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Expense Tracker</h1>
        <p>Track and manage your spending</p>
      </header>

      {/* Summary */}
      <Summary expenses={expenses} />

      {/* Main Content */}
      <section className="main">
        <ExpenseForm
          onAddExpense={addExpense}
          onUpdateExpense={updateExpense}
          editingExpense={editingExpense}
        />

        <ExpenseList
          expenses={expenses}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onDeleteExpense={deleteExpense}
          onEditExpense={setEditingExpense}
        />
      </section>
    </div>
  );
}

export default App;
