export interface IStateInput {
  isError: boolean;
  Message: string;
}

export interface IState {
  Name: IStateInput;
  Date: IStateInput;
}

export const state = {
  Name: { isError: false, Message: '' },
  Date: { isError: false, Message: '' },
};
