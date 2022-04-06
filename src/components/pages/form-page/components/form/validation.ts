import { IStateInput } from './state';

export const validationLength = (
  inputValue: string,
  input: string,
  setState: (value: IStateInput, input: string) => void,
  minLenght: number,
  maxLength?: number
) => {
  if (inputValue.length >= minLenght && inputValue.length <= (maxLength || Infinity)) return true;

  setStateValue(
    input,
    `The string length cannot be less than ${minLenght} ${
      maxLength !== undefined ? `and more than ${maxLength}` : ''
    }`,
    setState
  );
  return false;
};

export const validationEmpty = (
  inputValue: string,
  input: string,
  setState: (value: IStateInput, input: string) => void
) => {
  if (inputValue) return true;
  setStateValue(input, `String cannot be empty`, setState);
  return false;
};

export const validationChecked = (
  inputChecked: boolean,
  input: string,
  setState: (value: IStateInput, input: string) => void
) => {
  if (inputChecked) return true;

  setStateValue(input, `Confirm to sending`, setState);
  return false;
};

export const validationFile = (
  length: number,
  input: string,
  setState: (value: IStateInput, input: string) => void
) => {
  if (length !== 0) return true;
  setStateValue(input, `Select a file`, setState);
  return false;
};

const setStateValue = (
  input: string,
  Message: string,
  setState: (value: IStateInput, input: string) => void
) => {
  setState({ isError: true, Message: Message }, input);
};
