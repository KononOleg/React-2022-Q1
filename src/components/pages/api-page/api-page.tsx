import React from 'react';
import './api-page.css';
import { CardApi } from './components/card/card';
import { SearchBar } from './components/search-bar/search-bar';
import { getPopularMovie } from './shared/api';

export interface ICard {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
}

interface IState {
  cards: ICard[];
}

export class ApiPage extends React.Component<unknown, IState> {
  constructor(props: unknown) {
    super(props);
    this.state = { cards: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(input: string) {}

  async componentDidMount() {
    const response = await getPopularMovie();
    this.setState({ cards: response.results });
  }

  render() {
    return (
      <div className="api-page">
        <div className="api-page__wrapper">
          <SearchBar handleSubmit={this.handleSubmit} />
          <div className="api-cards__container">
            {this.state.cards.map((card: ICard) => (
              <CardApi {...card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
