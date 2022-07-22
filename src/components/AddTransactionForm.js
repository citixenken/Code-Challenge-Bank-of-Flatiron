import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(evt) {
    evt.preventDefault();
    const transactionData = {
      date: formData.date,
      description: formData.description,
      category: formData.category,
      amount: formData.amount,
    };

    //POST request to add the transaction
    const fetchPOSTOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    };
    fetch(`http://localhost:6001/transactions`, fetchPOSTOptions)
      .then((res) => res.json())
      .then((newTransaction) => onAddTransaction(newTransaction));

    // RESET form after POST operation
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: 0,
    });
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="inline fields">
          <label id="date">
            Date:
            <input
              type="date"
              name="date"
              aria-labelledby="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="Description"
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            placeholder="Category"
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            placeholder="Amount"
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit" style={{ color: "green" }}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
