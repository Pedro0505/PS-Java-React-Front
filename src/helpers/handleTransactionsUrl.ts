import ISearchForm from '../interfaces/ISearchForm';

const handleTransactionsUrl = (form: ISearchForm) => {
  const {finalDate, initialDate, operatorName} = form;

  let urlParams = '';

  if (initialDate !== '' && finalDate !== '') {
    urlParams += `?initialDate=${initialDate}&finalDate=${finalDate}`;
  }

  if (operatorName !== '') {
    urlParams += `${urlParams ? '&' : '?'}operatorName=${operatorName}`;
  }

  return urlParams;
};

export default handleTransactionsUrl;
