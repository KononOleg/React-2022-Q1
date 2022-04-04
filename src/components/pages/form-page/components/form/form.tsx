import React from 'react';
import { InputText } from './components/input/text/text';
import './form.css';
import { IState, IStateInput, state } from './state';
import { validationLength } from './validation';

export class Form extends React.Component<unknown, IState> {
  Name: React.RefObject<HTMLInputElement>;
  constructor(props: unknown) {
    super(props);
    this.state = state;
    this.Name = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setStateValue = this.setStateValue.bind(this);
    this.resetError = this.resetError.bind(this);
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    //Name
    validationLength(this.Name.current?.value as string, 'Name', this.setStateValue, 3);
  }

  setStateValue(value: IStateInput, input: string) {
    this.setState({ ...this.state, [input]: { ...value } });
  }

  resetError(input: string) {
    this.setState({ ...this.state, [input]: { isError: false, Message: '' } });
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
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
