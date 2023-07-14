import React, {createContext, useState} from 'react';
import getTransactions from '../api/transactions/getTransactions';
import ITransactionsContextType from './interfaces/ITransactionsContextType';
import ITransactionsContextProps from './interfaces/ITransactionsContextProps';
import ITransactions from '../interfaces/ITransactions';

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
  fetchTransactionsFilter: async () => {},
  fetchAllTransactions: async () => {},
  totalBalance: 0,
  periodBalance: 0,
};

export const TransactionsContext =
  createContext<ITransactionsContextType>(initialValue);

export const TransactionsProvider = ({children}: ITransactionsContextProps) => {
  const [transactions, setTransactions] = useState(initialValue.transactions);
  const [totalBalance, setTotalBalance] = useState(0);
  const [periodBalance, setPeriodBalance] = useState(0);

  const fetchTransactionsFilter = async (paramsUrl: string) => {
    try {
      const response = await getTransactions(paramsUrl);
      const balance = calcTotalBalance(response);

      setPeriodBalance(balance);
      setTransactions(response);
    } catch (error) {
      console.log(error);
    }
  };

  const calcTotalBalance = (transactions: ITransactions[]) => {
    return transactions.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0,
    );
  };

  const fetchAllTransactions = async () => {
    try {
      const response = await getTransactions('');
      const balance = calcTotalBalance(response);

      setTotalBalance(balance);
      setPeriodBalance(balance);
      setTransactions(response);
    } catch (error) {
      console.log(error);
    }
  };

  const context = {
    transactions,
    fetchTransactionsFilter,
    fetchAllTransactions,
    totalBalance,
    periodBalance,
  };

  return (
    <TransactionsContext.Provider value={context}>
      {children}
    </TransactionsContext.Provider>
  );
};
