import { Link } from "react-router-dom";
import { CALCULATOR_PATH, DASHBOARD_PATH } from "../../Router";
import "./header.scss";

export const Header = () => {
  return (
    <header className="grid-header">
      <Link to={DASHBOARD_PATH} className="nav-link">
        Acasa
      </Link>
      <Link to={CALCULATOR_PATH} className="nav-link">
        Calculator
      </Link>
    </header>
  );
};
