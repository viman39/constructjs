import { Header } from "../Header/Header";
import "./layout.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid-wrapper">
      <Header></Header>
      <main className="grid-main">{children}</main>
    </div>
  );
};
