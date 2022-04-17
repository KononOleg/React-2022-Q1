import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { InputWrapper } from '../wrapper/wrapper';
import './select.css';

interface IOption {
  value: string;
  label: string;
}

interface IProps {
  register: UseFormRegisterReturn;
  label: string;
  options: IOption[];
  errors: { [key: string]: FieldError | undefined };
}

export const InputSelect: React.FC<IProps> = ({ register, label, errors, options }) => {
  const error = errors[register.name];
  return (
    <InputWrapper {...{ label, error }}>
      <select className="input-select" {...register}>
        {options.map((select: IOption, key) => (
          <option value={select.value} key={key}>
            {select.label}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};
