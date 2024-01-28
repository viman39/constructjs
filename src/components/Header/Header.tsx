import { Link } from "react-router-dom";
import "./header.scss";
import { DASHBOARD_PATH, ROUTES } from "../../Router";
import { Button } from "../common/Button/Button";
import { Menu } from "react-feather";
import { useState, useRef, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const drawerButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        drawerButtonRef.current &&
        !drawerButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="grid-header">
      <Link to={DASHBOARD_PATH}>
        <img src="/constructjs/assets/logo.png" alt="LOGO" height="50" />
      </Link>
      <div ref={drawerRef} className={`header-routes ${isOpen && "open"}`}>
        {ROUTES.map(({ path, title }) => (
          <Button type="text" key={title}>
            <Link to={path} className="nav-link">
              {title}
            </Link>
          </Button>
        ))}
        <Button type="text" size={undefined}>
          <span className="nav-link">Contact</span>
        </Button>
      </div>
      <span ref={drawerButtonRef} className="navbar-button">
        <Button type="text" onClick={() => setIsOpen((old) => !old)}>
          <Menu color="white" />
        </Button>
      </span>
    </header>
  );
};
