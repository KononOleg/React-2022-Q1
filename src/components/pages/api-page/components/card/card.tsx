import React from 'react';
import { ICard } from '../../api-page';
import { Modal } from '../modal/modal';
import './card.css';

interface IState {
  isStateActive: boolean;
}

export class CardApi extends React.Component<ICard, IState> {
  constructor(props: ICard) {
    super(props);
    this.state = { isStateActive: false };
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState({ isStateActive: false });
  }

  render() {
    const { id, title, poster_path, release_date } = this.props;
    return (
      <>
        <div className="card-api__wrapper">
          <img
            className="card-api__img"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
          />
          <div className="card-api__content">
            <h2 className="card-api__title" onClick={() => this.setState({ isStateActive: true })}>
              {title}
            </h2>
            <p className="card-api__date">{release_date}</p>
          </div>
        </div>
        {!this.state.isStateActive || <Modal closeModal={this.closeModal} id={id} />}
      </>
    );
  }
}
