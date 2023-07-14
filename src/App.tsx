import React from 'react';
import Main from './pages/main/Main';
import {TransactionsProvider} from './context/TransactionsContext';

function App() {
  return (
    <div>
      <TransactionsProvider>
        <Main />
      </TransactionsProvider>
    </div>
  );
}

export default App;
