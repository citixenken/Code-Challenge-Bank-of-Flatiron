import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    const transactionData = {
      date: date,
      description: description,
      category: category,
      amount: amount,
    };

    //POST request to add the transaction
    fetch(`http://localhost:6001/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((res) => res.json())
      .then((newTransaction) => onAddTransaction(newTransaction));

    //reset form after POST operation
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
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
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <input
            type="text"
            name="description"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="category"
            value={category}
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            name="amount"
            value={amount}
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
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
