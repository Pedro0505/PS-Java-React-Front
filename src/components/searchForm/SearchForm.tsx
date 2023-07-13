import React, {useState} from 'react';
import {BiUser} from 'react-icons/bi';
import {BsFillCalendar2DateFill} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import SearchInput from '../searchInput/SearchInput';
import './style.css';
import IEvents from '../../interfaces/IEvents';

function SearchForm() {
  const [formValues, setFormValues] = useState({
    initialDate: '',
    finalDate: '',
    operatorName: '',
  });

  const handleChange = (events: IEvents) => {
    const {name, value} = events.target;

    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  return (
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
      />
      <SearchInput
        id="final-date"
        name="finalDate"
        placeholder="00/00/000"
        label="Data de fim"
        onChange={handleChange}
        type="date"
        valueInput={formValues.finalDate}
        icon={<BsFillCalendar2DateFill />}
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
      />
      <button type="button" className="search-btn">
        Pesquisar
        <AiOutlineSearch fontSize={15} className="search-icon" />
      </button>
    </div>
  );
}

export default SearchForm;
