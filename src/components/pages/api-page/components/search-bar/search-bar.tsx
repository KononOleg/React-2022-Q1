import React from 'react';
import './search-bar.css';

interface IProps {
  handleSubmit: (input: string) => void;
}

export class SearchBar extends React.Component<IProps, unknown> {
  input: React.RefObject<HTMLInputElement>;
  constructor(props: IProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    this.props.handleSubmit(this.input.current?.value as string);
  }

  render() {
    return (
      <div className="search-bar-api__wrapper">
        <h2 className="search-bar-api__title">Добро пожаловать.</h2>
        <h3 className="search-bar-api__subtitle">
          Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
        </h3>
        <form className="search-bar-api" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="search-bar-api__input"
            placeholder="Найти фильм, сериал, персону......"
            ref={this.input}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              e.key === 'Enter' && this.handleSubmit
            }
          />
          <input type="submit" className="search-bar-api__submit" value="Search" />
        </form>
      </div>
    );
  }
}
