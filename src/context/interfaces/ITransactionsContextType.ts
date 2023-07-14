import ITransactions from '../../interfaces/ITransactions';

interface ITransactionsContextType {
  fetchTransactions: (paramsUrl: string) => Promise<void>;
  transactions: ITransactions[];
}

export default ITransactionsContextType;
