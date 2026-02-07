import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './components/ExpenseForm';
import Summary from './components/Summary.jsx';
import ExpenseList from './components/ExpenseList.jsx';
function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">💰</div>
        <div>
          <h1>Expense Tracker</h1>
          <p>Track and manage your spending</p>
        </div>
      </header>

      {/* Summary Cards */}
      <Summary expenses={expenses} />

      {/* Main Content */}
      <section className="main">
        {/* Expense Form */}
        <ExpenseForm onAddExpense={addExpense} />

        {/* Expense List + Filter */}
        <ExpenseList
          expenses={expenses}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </section>
    </div>
  );
}

export default App;