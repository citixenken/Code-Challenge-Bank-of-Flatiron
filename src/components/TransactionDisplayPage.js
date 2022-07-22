import React, { useState, useEffect } from "react";
import SearchTransaction from "./SearchTransaction";
import AddTransactionForm from "./AddTransactionForm";
import TransactionList from "./TransactionList";

function TransactionDisplayPage() {
  const [transactions, setTransactions] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  //GET TRANSACTIONS FROM DB
  useEffect(() => {
    fetch(`http://localhost:6001/transactions`)
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions));
  }, []);

  // add new transaction - POST implementation
  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  return (
    <div>
      <SearchTransaction
        searchParam={searchParam}
        onTransactionSearch={setSearchParam}
      />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default TransactionDisplayPage;
