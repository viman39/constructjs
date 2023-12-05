import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./layout.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main className="grid-main">{children}</main>
      <Footer></Footer>
    </>
  );
};
