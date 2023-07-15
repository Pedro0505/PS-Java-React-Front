import IAccounts from '../../interfaces/IAccounts';
import handlesAxios from '../handleAxios';

const getAllAccounts = async (): Promise<IAccounts[]> => {
  const response = await handlesAxios.get('/contas');

  return response.data;
};

export default getAllAccounts;
