import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Transactions from './pages/transactions/Transactions';
import {TransactionsProvider} from './context/TransactionsContext';
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/transactions/:accountId"
          element={
            <TransactionsProvider>
              <Transactions />
            </TransactionsProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
