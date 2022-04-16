import { useState } from 'react';
import { ICard } from '../../api-page';
import { Modal } from '../modal/modal';
import './card.css';

export const CardApi = (props: ICard) => {
  const [isStateActive, setIsStateActive] = useState<boolean>(false);

  const closeModal = () => {
    setIsStateActive(false);
  };

  const { id, title, poster_path, release_date } = props;
  return (
    <>
      <div className="card-api__wrapper">
        <img
          className="card-api__img"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
          onClick={() => setIsStateActive(true)}
        />
        <div className="card-api__content">
          <h2 className="card-api__title" onClick={() => setIsStateActive(true)}>
            {title}
          </h2>
          <p className="card-api__date">{release_date}</p>
        </div>
      </div>
      {!isStateActive || <Modal closeModal={closeModal} id={id} />}
    </>
  );
};
