import React from 'react';
import { InputWrapper } from '../wrapper/wrapper';
import './file.css';

interface IProps {
  label: string;
  errorMessage: string;
  isError: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  OnChange: () => void;
}

export const InputFile: React.FC<IProps> = ({
  label,
  errorMessage,
  isError,
  inputRef,
  OnChange,
}) => {
  return (
    <InputWrapper {...{ label, errorMessage, isError }}>
      <input
        type="file"
        className="input-file"
        accept="image/png, image/gif, image/jpeg"
        ref={inputRef}
        onChange={OnChange}
      />
    </InputWrapper>
  );
};
