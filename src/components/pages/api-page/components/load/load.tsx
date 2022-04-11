import React from 'react';
import './load.css';

export class Load extends React.Component<unknown, unknown> {
  render() {
    return (
      <div className="load__wrapper">
        <img src="/icons/load.png" alt="load" className="load__img" />
      </div>
    );
  }
}
