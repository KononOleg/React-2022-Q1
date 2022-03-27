import { Link } from "react-router-dom";
import "./error-page.css";

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-page__wrapper">
        <h2 className="error-page__title">Не можете найти?</h2>
        <p className="error-page__subtitle">
          Нам не удалось найти эту страницу. Но на главной странице есть еще
          много всего интересного.
        </p>
        <Link className="error-page__button" to={"/"}>
          Главная страница
        </Link>
        <div className="error-code__container">
          <p>
            Код ошибки: <span className="error-code__code">NSES-404</span>
          </p>
        </div>
      </div>
    </div>
  );
};
