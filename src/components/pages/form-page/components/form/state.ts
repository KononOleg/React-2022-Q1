export interface IStateInput {
  isError: boolean;
  Message: string;
}

export interface IState {
  Name: IStateInput;
  Date: IStateInput;
  Select: IStateInput;
  Checkbox: IStateInput;
  File: IStateInput;
}

export const state = {
  Name: { isError: false, Message: '' },
  Date: { isError: false, Message: '' },
  Select: { isError: false, Message: '' },
  Checkbox: { isError: false, Message: '' },
  File: { isError: false, Message: '' },
};
