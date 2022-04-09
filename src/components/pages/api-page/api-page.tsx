import React from 'react';
import './api-page.css';
import { SearchBar } from './components/search-bar/search-bar';

export class ApiPage extends React.Component<unknown, unknown> {
  constructor(props: unknown) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(input: string) {}

  componentDidMount() {}

  render() {
    return (
      <div className="api-page">
        <div className="api-page__wrapper">
          <SearchBar handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
