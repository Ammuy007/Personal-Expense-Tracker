import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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
      <section className="summary">
        <div className="card">Total Expenses</div>
        <div className="card">Food</div>
        <div className="card">Transport</div>
        <div className="card">Shopping</div>
        <div className="card">Bills</div>
        <div className="card">Others</div>
      </section>

      {/* Main Content */}
      <section className="main">
        {/* Expense Form */}
        <div className="expense-form">
          <h2>Add Expense</h2>
          <p>Expense Form</p>
        </div>

        {/* Expense List + Filter */}
        <div className="expense-list">
          <div className="list-header">
            <h2>Expenses</h2>
            <select>
              <option>All Categories</option>
              <option>Food</option>
              <option>Transport</option>
              <option>Shopping</option>
              <option>Bills</option>
              <option>Other</option>
            </select>
          </div>

          <div className="empty-state">
            No expenses found
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;