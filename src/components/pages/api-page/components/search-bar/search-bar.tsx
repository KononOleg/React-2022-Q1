import React, { useRef } from 'react';
import './search-bar.css';

interface IProps {
  handleSubmit: (input: string) => void;
}

export const SearchBar = (props: IProps) => {
  const input = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    props.handleSubmit(input.current?.value as string);
  };

  return (
    <div className="search-bar-api__wrapper">
      <h2 className="search-bar-api__title">Добро пожаловать.</h2>
      <h3 className="search-bar-api__subtitle">
        Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
      </h3>
      <form className="search-bar-api" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar-api__input"
          placeholder="Найти фильм, сериал, персону......"
          ref={input}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e.key === 'Enter' && handleSubmit
          }
        />
        <input type="submit" className="search-bar-api__submit" value="Search" />
      </form>
    </div>
  );
};
