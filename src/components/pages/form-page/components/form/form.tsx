import React from 'react';
import './form.css';
import { InputCheckbox } from './components/input/checkbox/checkbox';
import { InputData } from './components/input/data/data';
import { InputFile } from './components/input/file/file';
import { InputSelect } from './components/input/select/select';
import { InputText } from './components/input/text/text';
import { IState, IStateInput, state } from './state';
import { validationChecked, validationEmpty, validationFile, validationLength } from './validation';
import { InputSwitcher } from './components/input/switcher/switcher';

export class Form extends React.Component<unknown, IState> {
  Name: React.RefObject<HTMLInputElement>;
  Date: React.RefObject<HTMLInputElement>;
  Select: React.RefObject<HTMLSelectElement>;
  Checkbox: React.RefObject<HTMLInputElement>;
  Switcher: React.RefObject<HTMLInputElement>;
  File: React.RefObject<HTMLInputElement>;
  constructor(props: unknown) {
    super(props);
    this.state = state;
    this.Name = React.createRef();
    this.Date = React.createRef();
    this.Select = React.createRef();
    this.Checkbox = React.createRef();
    this.Switcher = React.createRef();
    this.File = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setStateValue = this.setStateValue.bind(this);
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    if (this.isValid()) {
      console.log('valid');
    } else {
      console.log('invalid');
    }
  }
  isValid() {
    //Name
    const isNameValid = validationLength(
      this.Name.current?.value as string,
      'Name',
      this.setStateValue,
      3
    );
    //Date
    const isEmptyValid = validationEmpty(
      this.Date.current?.value as string,
      'Date',
      this.setStateValue
    );
    //Checkbox
    const isCheckedValid = validationChecked(
      this.Checkbox.current?.checked as boolean,
      'Checkbox',
      this.setStateValue
    );
    //File
    const isFileValid = validationFile(
      this.File.current?.files?.length as number,
      'File',
      this.setStateValue
    );
    return isNameValid && isEmptyValid && isCheckedValid && isFileValid;
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
        <div className="form-input__wrapper">
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
          <InputSelect
            label="City"
            inputRef={this.Select}
            errorMessage={this.state.Select.Message}
            isError={this.state.Select.isError}
            OnChange={() => this.resetError('Select')}
            options={[
              { value: 'Minas Tirith', label: 'Minas Tirith' },
              { value: 'Minas Morgul', label: 'Minas Morgul' },
            ]}
          />
          <InputFile
            label="File"
            inputRef={this.File}
            errorMessage={this.state.File.Message}
            isError={this.state.File.isError}
            OnChange={() => this.resetError('File')}
          />
          <InputSwitcher
            label="Switcher"
            inputRef={this.Switcher}
            errorMessage={this.state.Switcher.Message}
            isError={this.state.Switcher.isError}
            OnChange={() => this.resetError('Switcher')}
          />
          <InputCheckbox
            label="Agreement"
            inputRef={this.Checkbox}
            errorMessage={this.state.Checkbox.Message}
            isError={this.state.Checkbox.isError}
            OnChange={() => this.resetError('Checkbox')}
          />
        </div>
        <input
          type="submit"
          className="form__submit"
          value="Submit"
          disabled={
            this.state.Name.isError &&
            this.state.Date.isError &&
            this.state.Checkbox.isError &&
            this.state.File.isError
          }
        />
      </form>
    );
  }
}
