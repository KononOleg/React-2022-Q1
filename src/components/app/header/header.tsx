import { Link } from "react-router-dom";
import { routes } from "../routes";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        {routes.map(({ path, name }) => (
          <Link to={path}>{name}</Link>
        ))}
      </div>
    </header>
  );
};
