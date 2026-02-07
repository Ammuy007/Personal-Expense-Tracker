import "./Summary.css";

function Summary({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const categories = ["Food", "Transport", "Shopping", "Education", "Bills", "Others"];

  const categoryTotals = categories.reduce((acc, category) => {
    acc[category] = expenses
      .filter((e) => e.category === category)
      .reduce((sum, e) => sum + e.amount, 0);
    return acc;
  }, {});

  return (
    <section className="summary">
      <div className="card total">
        <h4>Total</h4>
        <p>₹{total.toFixed(2)}</p>
      </div>

      {categories.map((cat) => (
        <div key={cat} className="card">
          <h4>{cat}</h4>
          <p>₹{categoryTotals[cat].toFixed(2)}</p>
        </div>
      ))}
    </section>
  );
}

export default Summary;
