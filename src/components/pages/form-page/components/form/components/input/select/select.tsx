import React from 'react';
import { InputWrapper } from '../wrapper/wrapper';
import './select.css';

interface IOption {
  value: string;
  label: string;
}

interface IProps {
  label: string;
  errorMessage: string;
  isError: boolean;
  inputRef: React.RefObject<HTMLSelectElement>;
  OnChange: () => void;
  options: IOption[];
}

export const InputSelect: React.FC<IProps> = ({
  label,
  errorMessage,
  isError,
  inputRef,
  OnChange,
  options,
}) => {
  return (
    <InputWrapper {...{ label, errorMessage, isError, options }}>
      <select className="input-select" ref={inputRef} onChange={OnChange}>
        {options.map((select: IOption, key) => (
          <option value={select.value} key={key}>
            {select.label}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};
