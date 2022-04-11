import React from 'react';
import './not-found.css';

export class NotFound extends React.Component<unknown, unknown> {
  render() {
    return (
      <div className="not-found__wrapper">
        <p>There are no movies that matched your query.</p>
      </div>
    );
  }
}
