import ISearchForm from '../interfaces/ISearchForm';

const handleTransactionsUrl = (form: ISearchForm, accountId: string) => {
  const {finalDate, initialDate, operatorName} = form;

  let urlParams = '';

  if (initialDate !== '' && finalDate !== '') {
    urlParams += `?initialDate=${initialDate}&finalDate=${finalDate}&accountId=${accountId}`;
  }

  if (operatorName !== '') {
    urlParams += `${
      urlParams ? '&' : '?'
    }operatorName=${operatorName}&accountId=${accountId}`;
  }

  return urlParams;
};

export default handleTransactionsUrl;
