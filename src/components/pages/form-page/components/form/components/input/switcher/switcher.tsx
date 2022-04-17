import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { InputWrapper } from '../wrapper/wrapper';
import './switcher.css';

interface IProps {
  register: UseFormRegisterReturn;
  label: string;
  errors: { [key: string]: FieldError | undefined };
}

export const InputSwitcher: React.FC<IProps> = ({ register, label, errors }) => {
  const error = errors[register.name];
  return (
    <InputWrapper {...{ label, error }}>
      <div className="switch__wrapper">
        <p>No</p>
        <label className="input-switch">
          <input type="checkbox" className="input-switch__checkbox" />
          <span className="input-switch__slider"></span>
        </label>
        <p>Yes</p>
      </div>
    </InputWrapper>
  );
};
