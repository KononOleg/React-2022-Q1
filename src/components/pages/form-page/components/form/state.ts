export interface IStateInput {
  isError: boolean;
  Message: string;
}

export interface IState {
  Name: IStateInput;
}

export const state = {
  Name: { isError: false, Message: '' },
};
