import React, {createContext, useState} from 'react';
import getTransactions from '../api/transactions/getTransactions';
import ITransactionsContextType from './interfaces/ITransactionsContextType';
import ITransactionsContextProps from './interfaces/ITransactionsContextProps';

const initialValue = {
  transactions: [
    {
      id: 1,
      transferDate: '',
      value: 0,
      type: '',
      transactionOperatorName: '',
    },
  ],
  fetchTransactions: async () => {},
};

export const TransactionsContext =
  createContext<ITransactionsContextType>(initialValue);

export const TransactionsProvider = ({children}: ITransactionsContextProps) => {
  const [transactions, setTransactions] = useState(initialValue.transactions);

  const fetchTransactions = async (paramsUrl: string) => {
    try {
      const response = await getTransactions(paramsUrl);

      setTransactions(response);
    } catch (error) {
      console.log(error);
    }
  };

  const context = {
    transactions,
    fetchTransactions,
  };

  return (
    <TransactionsContext.Provider value={context}>
      {children}
    </TransactionsContext.Provider>
  );
};
