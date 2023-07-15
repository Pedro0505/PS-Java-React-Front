import React, {useContext, useState} from 'react';
import {BiUser} from 'react-icons/bi';
import {BsFillCalendar2DateFill} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import dayjs from 'dayjs';
import SearchInput from '../searchInput/SearchInput';
import './style.css';
import IEvents from '../../interfaces/IEvents';
import {TransactionsContext} from '../../context/TransactionsContext';
import ValidationForm from '../../helpers/ValidationForm';
import handleTransactionsUrl from '../../helpers/handleTransactionsUrl';

function SearchForm() {
  const {fetchTransactionsFilter} = useContext(TransactionsContext);
  const [formValues, setFormValues] = useState({
    initialDate: '',
    finalDate: '',
    operatorName: '',
  });
  const [errorsInitialDate, setErrorsInitialDate] = useState<string[]>([]);
  const [errorsFinallDate, setErrorsFinallDate] = useState<string[]>([]);
  const [errorsOperatorName, setErrorsOperatorName] = useState<string[]>([]);

  const handleChange = (events: IEvents) => {
    const {name, value} = events.target;

    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleError = () => {
    const validationForm = new ValidationForm(formValues);

    validationForm.validateForm();

    setErrorsInitialDate(validationForm.getErrorFields.initialDateErrors);
    setErrorsFinallDate(validationForm.getErrorFields.finalDateErrors);
    setErrorsOperatorName(validationForm.getErrorFields.operatorNameErrors);

    return validationForm.hasError();
  };

  const handleSubimit = async () => {
    const urlParam = handleTransactionsUrl(formValues);
    if (!handleError()) {
      try {
        await fetchTransactionsFilter(urlParam);
      } catch (error) {
        console.log();
      }
    }
  };

  return (
    <div className="form-container">
      <div className="input-search-container">
        <SearchInput
          id="initial-date"
          name="initialDate"
          placeholder="00/00/000"
          label="Data de início"
          onChange={handleChange}
          valueInput={formValues.initialDate}
          type="date"
          icon={<BsFillCalendar2DateFill />}
          errorsMsg={errorsInitialDate}
        />
        <SearchInput
          id="final-date"
          name="finalDate"
          placeholder="00/00/000"
          label="Data de fim"
          onChange={handleChange}
          max={dayjs().format('YYYY-MM-DD')}
          type="date"
          valueInput={formValues.finalDate}
          icon={<BsFillCalendar2DateFill />}
          errorsMsg={errorsFinallDate}
        />
        <SearchInput
          id="operator-name"
          name="operatorName"
          label="Nome operador transacionado"
          onChange={handleChange}
          valueInput={formValues.operatorName}
          maxLength={50}
          icon={<BiUser />}
          type="text"
          errorsMsg={errorsOperatorName}
        />
      </div>
      <div className="search-btn-container">
        <button type="button" className="search-btn" onClick={handleSubimit}>
          Pesquisar
          <AiOutlineSearch fontSize={15} className="search-icon" />
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
