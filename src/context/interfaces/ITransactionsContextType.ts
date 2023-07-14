import ITransactions from '../../interfaces/ITransactions';

interface ITransactionsContextType {
  fetchTransactionsFilter: (paramsUrl: string) => Promise<void>;
  fetchAllTransactions: (paramsUrl: string) => Promise<void>;
  totalBalance: number;
  periodBalance: number;
  transactions: ITransactions[];
}

export default ITransactionsContextType;
