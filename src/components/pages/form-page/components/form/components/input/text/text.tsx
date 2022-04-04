import React from 'react';
import { InputWrapper } from '../wrapper/wrapper';
import './text.css';

interface IProps {
  label: string;
  errorMessage: string;
  isError: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  OnChange: () => void;
}

export const InputText: React.FC<IProps> = ({
  label,
  errorMessage,
  isError,
  inputRef,
  OnChange,
}) => {
  return (
    <InputWrapper {...{ label, errorMessage, isError }}>
      <input type="text" className="input-text" ref={inputRef} onChange={OnChange} />
    </InputWrapper>
  );
};
