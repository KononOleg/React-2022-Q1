import "./arrow-button.css";

export const ArrowButton = (props: any) => {
  return (
    <div className="slider__button" onClick={props.onClick}>
      <img
        className={`slider__arrow ${props.isLeft ? "slider__arrow_left" : ""}`}
        src="/icons/arrow.png"
        alt="arrow"
      />
    </div>
  );
};
