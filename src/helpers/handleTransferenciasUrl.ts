import ISearchForm from '../interfaces/ISearchForm';
import standardizingDate from './standardizingDate';

const handleTransferenciasUrl = (form: ISearchForm) => {
  const {finalDate, initialDate, operatorName} = form;

  let urlParams = '';

  if (initialDate !== '' && finalDate !== '') {
    const serializedInitialDate = standardizingDate(initialDate);
    const serializedFinalDate = standardizingDate(finalDate);
    urlParams += `?initialDate=${serializedInitialDate}&finalDate=${serializedFinalDate}`;
  }

  if (operatorName !== '') {
    urlParams += `${urlParams === '' ? '&' : '?'}operatorName=${operatorName}`;
  }

  return urlParams;
};

export default handleTransferenciasUrl;
