import React from 'react';
import './card.css';

export interface IProps {
  name: string;
  date: string;
  city: string;
  switcher: boolean;
  agreement: boolean;
  img: string;
}

export const FormCard: React.FC<IProps> = ({ name, date, city, switcher, agreement, img }) => {
  return (
    <div className="form-card__wrapper">
      <img className="form-card__img" src={img} alt="img" />
      <p className="form-card__title">
        Name: <span className="card__text">{name}</span>
      </p>
      <p className="form-card__title">
        Date: <span className="form-card__text">{date}</span>
      </p>
      <p className="form-card__title">
        City: <span className="form-card__text">{city}</span>
      </p>
      <p className="form-card__title">
        Name: <span className="form-card__text">{name}</span>
      </p>
      <p className="form-card__title">
        Switcher: <span className="form-card__text">{switcher ? 'Yes' : 'No'}</span>
      </p>
      <p className="form-card__title">
        Agreement: <span className="form-card__text">{agreement ? 'Yes' : 'No'}</span>
      </p>
    </div>
  );
};
