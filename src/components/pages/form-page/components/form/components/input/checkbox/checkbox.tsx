import React from 'react';
import { InputWrapper } from '../wrapper/wrapper';
import './checkbox.css';

interface IProps {
  label: string;
  errorMessage: string;
  isError: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  OnChange: () => void;
}

export const InputCheckbox: React.FC<IProps> = ({
  label,
  errorMessage,
  isError,
  inputRef,
  OnChange,
}) => {
  return (
    <InputWrapper {...{ label, errorMessage, isError }}>
      <input type="checkbox" className="" ref={inputRef} onChange={OnChange} />
    </InputWrapper>
  );
};
