import React from 'react';
import { FormCard, IProps as Icard } from './components/card/card';
import { Form } from './components/form/form';
import './form-page.css';

interface IState {
  cards: Icard[];
}

export class FormPage extends React.Component<unknown, IState> {
  constructor(props: unknown) {
    super(props);
    this.state = { cards: [] };
    this.createCard = this.createCard.bind(this);
  }

  createCard(
    Name: string,
    Date: string,
    Select: string,
    Checkbox: boolean,
    Switcher: boolean,
    File: FileList
  ) {
    const fReader = new FileReader();
    fReader.readAsDataURL(File[0] as Blob);
    fReader.onloadend = (event) => {
      const img = event?.target?.result as string;
      const card = {
        name: Name,
        date: Date,
        city: Select,
        switcher: Checkbox,
        agreement: Switcher,
        img: img,
      };
      const cards = [...this.state.cards, card];
      localStorage.setItem('cards', JSON.stringify(cards));
      this.setState({
        cards: cards,
      });
    };
  }

  componentDidMount() {
    const cards = JSON.parse(localStorage.getItem('cards') as string);
    this.setState({
      cards: cards,
    });
  }

  render() {
    return (
      <div className="form-page__wrapper">
        <Form createCard={this.createCard} />

        <div className="form-page-cards__wrapper">
          {this.state.cards.map((card: Icard, key: number) => (
            <FormCard {...card} key={key} />
          ))}
        </div>
      </div>
    );
  }
}
