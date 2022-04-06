import React from 'react';
import { InputWrapper } from '../wrapper/wrapper';
import './switcher.css';

interface IProps {
  label: string;
  errorMessage: string;
  isError: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  OnChange: () => void;
}

export const InputSwitcher: React.FC<IProps> = ({
  label,
  errorMessage,
  isError,
  inputRef,
  OnChange,
}) => {
  return (
    <InputWrapper {...{ label, errorMessage, isError }}>
      <div className="switch__wrapper">
        <p>No</p>
        <label className="input-switch">
          <input
            type="checkbox"
            className="input-switch__checkbox"
            ref={inputRef}
            onChange={OnChange}
          />
          <span className="input-switch__slider"></span>
        </label>
        <p>Yes</p>
      </div>
    </InputWrapper>
  );
};
