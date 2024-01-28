import { Link } from "react-router-dom";
import "./header.scss";
import { DASHBOARD_PATH, ROUTES } from "../../Router";
import { Button } from "../common/Button/Button";
import { Menu } from "react-feather";

export const Header = () => {
  return (
    <header className="grid-header">
      <Link to={DASHBOARD_PATH}>
        <img src="/constructjs/assets/logo.png" alt="LOGO" height="50" />
      </Link>
      <div className="header-routes">
        {ROUTES.map(({ path, title }) => (
          <Link to={path} className="nav-link" key={title}>
            {title}
          </Link>
        ))}
        <Button type="text" className="nav-link" size={undefined}>
          Contact
        </Button>
      </div>
      <Button className="navbar-button">
        <Menu />
      </Button>
    </header>
  );
};
