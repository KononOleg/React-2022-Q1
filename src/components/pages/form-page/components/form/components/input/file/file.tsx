import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { InputWrapper } from '../wrapper/wrapper';
import './file.css';

interface IProps {
  register: UseFormRegisterReturn;
  label: string;
  errors: { [key: string]: FieldError | undefined };
}

export const InputFile: React.FC<IProps> = ({ register, label, errors }) => {
  const error = errors[register.name];
  return (
    <InputWrapper {...{ label, error }}>
      <input
        type="file"
        className="input-file"
        {...register}
        accept="image/png, image/gif, image/jpeg"
      />
    </InputWrapper>
  );
};
