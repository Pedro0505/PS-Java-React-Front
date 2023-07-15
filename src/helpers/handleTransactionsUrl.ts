import ISearchForm from '../interfaces/ISearchForm';

const handleTransactionsUrl = (form: ISearchForm, accountId: string) => {
  const {finalDate, initialDate, operatorName} = form;
  let urlParams = `?accountId=${accountId}`;

  if (initialDate !== '' && finalDate !== '') {
    urlParams += `&initialDate=${initialDate}&finalDate=${finalDate}`;
  }

  if (operatorName !== '') {
    urlParams += `&operatorName=${operatorName}`;
  }

  return urlParams;
};

export default handleTransactionsUrl;
