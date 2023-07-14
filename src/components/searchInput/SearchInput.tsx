import React, {HTMLInputTypeAttribute, ReactNode} from 'react';
import './style.css';
import IEvents from '../../interfaces/IEvents';

interface SearchInputProps {
  name: string;
  id?: string;
  onChange: (event: IEvents) => void;
  placeholder?: string;
  label?: string;
  valueInput: string;
  maxLength?: number;
  icon?: ReactNode;
  type?: HTMLInputTypeAttribute;
  max?: string;
  min?: string;
  errorsMsg: string[];
}

function SearchInput({
  id,
  name,
  onChange,
  placeholder,
  label,
  valueInput,
  maxLength,
  icon,
  type = 'text',
  max,
  min,
  errorsMsg,
}: SearchInputProps) {
  return (
    <div className="input-search-section">
      <label htmlFor={id} className="input-search-label">
        <div className="input-search-lable-text-container">
          {icon}
          <p className="input-search-label-text">{label}</p>
        </div>
        <input
          className="input-search"
          max={max}
          min={min}
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={valueInput}
          maxLength={maxLength}
        />
      </label>
      <div className="input-search-error-section">
        {errorsMsg.map((e, i) => (
          <p className="input-search-error-msg" key={i}>
            {e}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SearchInput;
