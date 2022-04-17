import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { InputWrapper } from '../wrapper/wrapper';
import './date.css';

interface IProps {
  register: UseFormRegisterReturn;
  label: string;
  errors: { [key: string]: FieldError | undefined };
}

export const InputDate: React.FC<IProps> = ({ register, label, errors }) => {
  const error = errors[register.name];
  return (
    <InputWrapper {...{ label, error }}>
      <input type="date" className="input-date" {...register} />
    </InputWrapper>
  );
};
