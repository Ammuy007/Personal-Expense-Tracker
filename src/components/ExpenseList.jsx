import "./ExpenseList.css";

function ExpenseList({ expenses, selectedCategory, onCategoryChange, onDeleteExpense,onEditExpense}) {
  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter(
          (expense) => expense.category === selectedCategory
        );

  return (
    <div className="expense-list">
      {/* Header */}
      <div className="list-header">
        <h2>Expenses</h2>

        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Education">Education</option>
          <option value="Bills">Bills</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* List */}
      {filteredExpenses.length === 0 ? (
        <div className="empty-state">No expenses found</div>
      ) : (
        <ul className="expense-cards">
          {filteredExpenses.map((expense) => (
            <li key={expense.id} className="expense-card">
              <div className="details">
                <p className="name">{expense.name}</p>

                <div className="meta">
                  <span className="badge">{expense.category}</span>
                  <span className="date">{expense.date}</span>
                </div>
              </div>

              <div className="right">
                <span className="amount">₹{expense.amount.toFixed(2)}</span>

                <button
                className="delete-btn"
                onClick={() => onDeleteExpense(expense.id)}
  >
                Delete
                </button>
                <button className="edit-btn" onClick={() => onEditExpense(expense)}>
                    Edit
                </button>
            </div>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
