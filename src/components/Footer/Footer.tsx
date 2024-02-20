import { Heart, Facebook } from "react-feather";
import "./footer.scss";

export const scrollContactIntoView = () => {
  document
    .getElementById("contactUs-footer")
    ?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
};

export const Footer = () => {
  return (
    <footer className="grid-footer" id="contactUs-footer">
      <div>Adresa Com Lespezi Nr 415 Jud IASI</div>
      <div>Contact 0755898253</div>
      <small>
        Developed with <Heart size={12} /> for{" "}
        <a
          href="https://www.facebook.com/lespeziartconstruct"
          target="_blank"
          className="text-link"
        >
          Lespezi Art Con
          <Facebook size={12} />
        </a>
      </small>
    </footer>
  );
};
