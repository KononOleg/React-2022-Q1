import "./slider.css";
import { cards } from "../card/cards";
import { Card } from "../card/card";
import React from "react";
import { ArrowButton } from "./components/arrow-button/arrow-button";

interface MyProps {}

interface MyState {
  cardActive: number;
}

export class Slider extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { cardActive: 0 };
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  }

  handleLeftArrowClick() {
    this.state.cardActive === 0
      ? this.setState({ cardActive: cards.length - 1 })
      : this.setState({ cardActive: this.state.cardActive - 1 });
  }

  handleRightArrowClick() {
    this.state.cardActive === cards.length - 1
      ? this.setState({ cardActive: 0 })
      : this.setState({ cardActive: this.state.cardActive + 1 });
  }

  render() {
    return (
      <div className="slider">
        <ArrowButton onClick={this.handleLeftArrowClick} isLeft={true} />
        <div className="slider__wrapper">
          <div
            className="slider__inner"
            style={{ transform: `translate(-${this.state.cardActive}00%)` }}
          >
            {cards.map((card, index) => (
              <Card {...card} key={index} />
            ))}
          </div>
        </div>
        <ArrowButton onClick={this.handleRightArrowClick} />
      </div>
    );
  }
}
