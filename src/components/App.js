import React from "react";
import "../stylesheets/App.css";
import TransactionDisplayPage from "./TransactionDisplayPage";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h1>The Royal Bank of Flatiron</h1>
      </div>
      <TransactionDisplayPage />
    </div>
  );
}

export default App;
