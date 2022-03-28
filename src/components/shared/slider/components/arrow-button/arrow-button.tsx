import './arrow-button.css';

interface IProps {
  onClick: () => void;
  isLeft?: boolean;
}

export const ArrowButton = (props: IProps) => {
  return (
    <div className="slider__button" onClick={props.onClick}>
      <img
        className={`slider__arrow ${props.isLeft ? 'slider__arrow_left' : ''}`}
        src="/icons/arrow.png"
        alt="arrow"
      />
    </div>
  );
};
