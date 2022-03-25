import React from "react";
import "./search-bar.css";

interface MyProps {}

interface MyState {
  searchActive: boolean;
  value: string;
}

export class SearchBar extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { searchActive: false, value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  render() {
    const searchActive = this.state.searchActive;
    return (
      <div className="search-bar__wrapper">
        <div
          className={`search-bar ${
            this.state.searchActive ? "" : "search-bar_disabled"
          }`}
        >
          <img
            className="search-bar__icon"
            src="icons/search.png"
            alt="search"
            onClick={() =>
              this.setState({ searchActive: !this.state.searchActive })
            }
          />
          <input
            type="text"
            className={`search-bar__input ${
              this.state.searchActive ? "" : "search-bar__input_disabled"
            }`}
            value={this.state.value}
            onChange={this.handleChange}
          />
          <img
            className={`search-bar__cancel ${
              this.state.searchActive ? "" : "search-bar__cancel_disabled"
            }  ${
              this.state.value.length === 0 ? "" : "search-bar__cancel_visible"
            }`}
            onClick={() => this.setState({ value: "" })}
            src="icons/cancel.png"
            alt="cancel"
          />
        </div>
      </div>
    );
  }
}
