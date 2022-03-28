import './card.css';

interface IProps {
  logo: string;
  title: string;
  year: string;
  age: string;
  duration: string;
  genre: string;
  description: string;
  cast: string;
  creators: string;
  background: string;
}

export const Card = (props: IProps) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__details">
          <div className="card-details__wrapper">
            <img className="card-details__logo" src={props.logo} alt={props.title} />
            <h2 className="card-details__title">{props.title}</h2>
            <div className="card-details__info">
              <span className="card-info__text">{props.year}</span>
              <span className="card-info__text">{props.age}</span>
              <span className="card-info__text">{props.duration}</span>
              <span className="card-info__text">{props.genre}</span>
            </div>
            <p className="card-details__description">{props.description}</p>
            <div className="card-details__talent">
              <div className="card-talent__wrapper">
                <span className="card-talent__label">В ролях:</span>
                <p className="card-talent__info">{props.cast}</p>
              </div>
              {props.creators ? (
                <div className="card-talent__wrapper">
                  <span className="card-talent__label">Создатели:</span>
                  <p className="card-talent__info">{props.creators}</p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <div className="card-image__container">
          <div
            className="card__image"
            style={{ backgroundImage: `url(${props.background})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
