import { Link, NavLink } from "react-router-dom";
import { routes } from "../routes";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        {routes.map(({ path, name }) => (
          <NavLink
            className={(navData: { isActive: any }) =>
              navData.isActive
                ? "header__link header__link_active"
                : "header__link"
            }
            to={path}
          >
            {name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};
