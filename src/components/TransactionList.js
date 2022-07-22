import TransactionItem from "./TransactionItem";
import React, { useState, useEffect } from "react";
import SearchTransaction from "./SearchTransaction";
import AddTransactionForm from "./AddTransactionForm";
// import TransactionList from "./TransactionList";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  //GET TRANSACTIONS FROM DB
  useEffect(() => {
    fetch(`http://localhost:6001/transactions`)
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions));
  }, []);

  //POST FUNCTIONALITY
  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  //SEARCH FUNCTIONALITY
  const transactionsList = transactions.filter((transaction) => {
    return transaction.description
      .toLowerCase()
      .includes(searchParam.toLowerCase());
  });

  //DELETE FUNCTIONALITY
  function handleTransactionDelete(deletedTransaction) {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== deletedTransaction.id
    );
    setTransactions(updatedTransactions);
  }

  //FILTER SEARCH OUTPUT DISPLAYED
  // function filterTransactions() {

  // }

  return (
    <div>
      <SearchTransaction
        searchParam={searchParam}
        onTransactionSearch={setSearchParam}
      />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />

      <table className="ui celled striped padded table">
        <thead className="ui center aligned header">
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>DELETE?</th>
          </tr>
        </thead>
        {transactionsList.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDeleteTransaction={handleTransactionDelete}
          />
        ))}
      </table>
    </div>
  );
}

export default TransactionList;
