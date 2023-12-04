import { Link } from "react-router-dom";
import { CALCULATOR_PATH, DASHBOARD_PATH } from "../../Router";

export const Header = () => {
  return (
    <header>
      <Link to={DASHBOARD_PATH}>Acasa</Link>
      <Link to={CALCULATOR_PATH}>Calculator</Link>
    </header>
  );
};
