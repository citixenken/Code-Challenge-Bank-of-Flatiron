import React, { useState } from "react";
import TransactionItem from "./TransactionItem";

function TransactionList({ transactions }) {
  const [searchParam, setSearchParam] = useState("");

  //SEARCH FUNCTIONALITY
  const transactionsList = transactions.filter((transaction) => {
    return transaction.description
      .toLowerCase()
      .includes(searchParam.toLowerCase());
  });
  return (
    <div>
      <table className="ui celled striped padded table">
        <thead className="ui center aligned header">
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        {transactionsList.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </table>
    </div>
  );
}

export default TransactionList;
