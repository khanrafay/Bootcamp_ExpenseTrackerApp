import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionDifference from './components/TransactionDifference';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {TransactionProvider} from './contexts/TransactionContext';

function App() {
  return (
    <TransactionProvider>
      <div className="App">
      <Header />
      <Balance />
      <TransactionDifference />
      <TransactionList />
      <AddTransaction />
      </div>
    </TransactionProvider>
  );
}

export default App;
