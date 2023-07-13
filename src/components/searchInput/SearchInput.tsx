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
}: SearchInputProps) {
  return (
    <label htmlFor={id} className="input-search-label">
      <div className="input-search-lable-text-container">
        {icon}
        <p className="input-search-label-text">{label}</p>
      </div>
      <input
        className="input-search"
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={valueInput}
        maxLength={maxLength}
      />
    </label>
  );
}

export default SearchInput;
