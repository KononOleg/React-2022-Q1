import React from 'react';
import { InputWrapper } from '../wrapper/wrapper';
import './data.css';

interface IProps {
  label: string;
  errorMessage: string;
  isError: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  OnChange: () => void;
}

export const InputData: React.FC<IProps> = ({
  label,
  errorMessage,
  isError,
  inputRef,
  OnChange,
}) => {
  return (
    <InputWrapper {...{ label, errorMessage, isError }}>
      <input type="date" className="input-date" ref={inputRef} onChange={OnChange} />
    </InputWrapper>
  );
};
