import { IStateInput } from './state';

export const validationLength = (
  inputValue: string,
  input: string,
  setState: (value: IStateInput, input: string) => void,
  minLenght: number,
  maxLength?: number
) => {
  if (inputValue.length < minLenght || inputValue.length > (maxLength || Infinity))
    setStateValue(
      input,
      `The string length cannot be less than ${minLenght} ${
        maxLength !== undefined ? `and more than ${maxLength}` : ''
      }`,
      setState
    );
};

export const validationEmpty = (
  inputValue: string,
  input: string,
  setState: (value: IStateInput, input: string) => void
) => {
  if (!inputValue) setStateValue(input, `String cannot be empty`, setState);
};

export const validationChecked = (
  inputChecked: boolean,
  input: string,
  setState: (value: IStateInput, input: string) => void
) => {
  if (!inputChecked) setStateValue(input, `Confirm to sending`, setState);
};

export const validationFile = (
  length: number,
  input: string,
  setState: (value: IStateInput, input: string) => void
) => {
  if (length === 0) setStateValue(input, `Select a file`, setState);
};

const setStateValue = (
  input: string,
  Message: string,
  setState: (value: IStateInput, input: string) => void
) => {
  setState({ isError: true, Message: Message }, input);
};
