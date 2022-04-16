import React from 'react';
import './api-page.css';
import { CardApi } from './components/card/card';
import { Load } from './components/load/load';
import { NotFound } from './components/not-found/not-found';
import { SearchBar } from './components/search-bar/search-bar';
import { getPopularMovie, getSearch } from './shared/api';

export interface ICard {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
}

interface IState {
  isLoad: boolean;
  cards: ICard[];
}

export class ApiPage extends React.Component<unknown, IState> {
  constructor(props: unknown) {
    super(props);
    this.state = { isLoad: false, cards: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(input: string) {
    this.setState({ isLoad: true });
    const response = await getSearch(input);
    this.setState({ isLoad: false, cards: response });
  }

  async componentDidMount() {
    this.setState({ isLoad: true });
    const response = await getPopularMovie();
    this.setState({ isLoad: false, cards: response.results });
  }

  render() {
    return (
      <div className="api-page">
        <div className="api-page__wrapper">
          <SearchBar handleSubmit={this.handleSubmit} />
          {this.state.isLoad ? (
            <Load />
          ) : this.state.cards.length !== 0 ? (
            <div className="api-cards__container">
              {this.state.cards.map((card: ICard) => (
                <CardApi {...card} key={card.id} />
              ))}
            </div>
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    );
  }
}
