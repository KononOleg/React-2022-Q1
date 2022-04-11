import React from 'react';
import { getMovies } from '../../shared/api';
import './modal.css';

interface IProps {
  closeModal: () => void;
  id: string;
}
interface IGenre {
  name: string;
}

interface IState {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  release_date: string;
  genres: IGenre[];
  runtime: string;
  tagline: string;
  overview: string;
}

export class Modal extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {} as IState;
  }
  async componentDidMount() {
    const response = await getMovies(this.props.id);
    this.setState(response);
  }
  render() {
    const {
      backdrop_path,
      poster_path,
      original_title,
      release_date,
      genres,
      runtime,
      tagline,
      overview,
    } = this.state;
    const year = new Date(release_date);
    const totalMinutes = runtime as unknown as number;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return (
      <div className="modal">
        <div
          className="modal__wrapper"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}")`,
          }}
        >
          <div className="modal-wrapper__bg"></div>
          <div className="modal__content">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
              className="modal__poster"
            />
            <button className="modal__close" onClick={this.props.closeModal}>
              X
            </button>
            <div className="modal__description">
              <h2 className="modal__title">
                {original_title} <span className="original__year">{`(${year.getFullYear()})`}</span>
              </h2>
              <div className="from__fact">
                <span className="modal__certification">PG</span>
                <span>{release_date}</span>
                <span className="modal__genres">
                  {genres &&
                    genres.map((genre: IGenre, key: number) => (
                      <p className="modal__genre" key={key}>
                        {genre.name}
                      </p>
                    ))}
                </span>
                <span>{`${hours}h ${minutes}m`}</span>
              </div>
              <div
                style={{
                  height: '70px',
                }}
              ></div>
              <h3 className="modal__tagline">{tagline}</h3>
              <h3 className="modal__overview-title">Overview</h3>
              <p className="modal__overview">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
