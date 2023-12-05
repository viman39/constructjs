import { Heart, Facebook } from "react-feather";

export const Footer = () => {
  return (
    <footer className="grid-footer text-dark-gray">
      <small>
        Developed with <Heart size={12} className="text-danger" /> for{" "}
        <a
          href="https://www.facebook.com/lespeziartconstruct"
          target="_blank"
          className="text-link text-dark-gray"
        >
          Lespezi Art Con
          <Facebook size={12} className="text-facebook-blue" />
        </a>
      </small>
    </footer>
  );
};
