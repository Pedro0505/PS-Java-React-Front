import ITransactions from '../../interfaces/ITransactions';
import handlesAxios from '../handleAxios';

const getTransactions = async (urlParms: string): Promise<ITransactions[]> => {
  const response = await handlesAxios.get(`/transferencias${urlParms}`);

  return response.data;
};

export default getTransactions;
