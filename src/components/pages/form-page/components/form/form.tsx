import React from 'react';
import { InputText } from './components/input/text/text';
import './form.css';

export class Form extends React.Component<any, any> {
  input: any;
  constructor(props: any) {
    super(props);
    this.state = { isValid: { isNameValid: false }, Name: { isError: false, Message: '' } };
    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.set = this.set.bind(this);
    this.vali = this.vali.bind(this);
  }

  handleSubmit(event: any) {
    event.preventDefault();
    console.log('dsadas');
    this.vali(this.state);
  }

  vali(state: any) {
    if (this.input) {
      this.setState({ Name: { isError: true, Message: 'dsadas' } });
    }
  }
  set() {
    const r = 'Name';
    this.setState(`{ ${r}: { isError: false } }`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form__wrapper">
        <InputText
          inputRef={this.input}
          errorMessage={this.state.Name.Message}
          isError={this.state.Name.isError}
          OnChange={() => {
            this.setState({ Name: { isError: false } });
          }}
        />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
