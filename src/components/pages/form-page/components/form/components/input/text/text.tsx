import React from 'react';
import { InputWrapper } from '../wrapper/wrapper';
import './text.css';

export const InputText: React.FC<any> = ({ label, errorMessage, isError, inputRef, OnChange }) => {
  return (
    <InputWrapper {...{ label, errorMessage, isError }}>
      <input type="text" className="input-text" ref={inputRef} onChange={OnChange} />
    </InputWrapper>
  );
};
