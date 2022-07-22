import React from "react";

function TransactionItem({ transaction, onDeleteTransaction }) {
  let { date, description, category, amount } = transaction;

  //DELETE transaction operation
  function handleTransactionDelete() {
    fetch(`http://localhost:6001/transactions/${transaction.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteTransaction(transaction));
  }

  return (
    <tbody>
      <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td>
          <button style={{ color: "red" }} onClick={handleTransactionDelete}>
            DELETE
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default TransactionItem;
