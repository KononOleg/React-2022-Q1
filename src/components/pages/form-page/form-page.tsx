import React from 'react';
import { Form } from './components/form/form';
import './form-page.css';

export class FormPage extends React.Component<unknown, unknown> {
  createCard(
    Name: string,
    Date: string,
    Select: string,
    Checkbox: boolean,
    Switcher: boolean,
    File: string
  ) {}

  render() {
    return (
      <div className="form-page__wrapper">
        <Form createCard={() => this.createCard} />
      </div>
    );
  }
}
