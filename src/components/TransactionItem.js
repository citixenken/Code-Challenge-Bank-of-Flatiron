import React from "react";

function TransactionItem({ transaction }) {
  let { date, description, category, amount } = transaction;

  return (
    <tbody>
      <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
      </tr>
    </tbody>
  );
}

export default TransactionItem;
