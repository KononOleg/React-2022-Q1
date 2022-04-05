import React from 'react';
import { InputData } from './components/input/data/data';
import { InputText } from './components/input/text/text';
import './form.css';
import { IState, IStateInput, state } from './state';
import { validationEmpty, validationLength } from './validation';

export class Form extends React.Component<unknown, IState> {
  Name: React.RefObject<HTMLInputElement>;
  Date: React.RefObject<HTMLInputElement>;
  constructor(props: unknown) {
    super(props);
    this.state = { ...state };
    this.Name = React.createRef();
    this.Date = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setStateValue = this.setStateValue.bind(this);
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    //Name
    validationLength(this.Name.current?.value as string, 'Name', this.setStateValue, 3);

    //Dat
    validationEmpty(this.Date.current?.value as string, 'Date', this.setStateValue);
  }

  setStateValue(value: IStateInput, input: string) {
    this.setState({ [input]: { ...value } } as unknown as IState);
  }

  resetError(input: string) {
    this.setState({ [input]: { isError: false, Message: '' } } as unknown as IState);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form__wrapper">
        <InputText
          label="Name"
          inputRef={this.Name}
          errorMessage={this.state.Name.Message}
          isError={this.state.Name.isError}
          OnChange={() => this.resetError('Name')}
        />

        <InputData
          label="Data"
          inputRef={this.Date}
          errorMessage={this.state.Date.Message}
          isError={this.state.Date.isError}
          OnChange={() => this.resetError('Date')}
        />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
