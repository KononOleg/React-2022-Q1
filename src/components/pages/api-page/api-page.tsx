import { useEffect, useState } from 'react';
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

export const ApiPage = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    const fetchDate = async () => {
      setIsLoad(true);
      const response = await getPopularMovie();
      setCards(response.results);
      setIsLoad(false);
    };
    fetchDate();
  }, []);

  const handleSubmit = async (input: string) => {
    setIsLoad(true);
    const response = await getSearch(input);
    setCards(response);
    setIsLoad(false);
  };

  return (
    <div className="api-page">
      <div className="api-page__wrapper">
        <SearchBar handleSubmit={handleSubmit} />
        {isLoad ? (
          <Load />
        ) : cards.length !== 0 ? (
          <div className="api-cards__container">
            {cards.map((card: ICard) => (
              <CardApi {...card} key={card.id} />
            ))}
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};
