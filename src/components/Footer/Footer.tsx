import { Heart, Facebook, Home, Phone } from "react-feather";
import "./footer.scss";
import { scrollElementIntoView } from "../../utils/dom";

export const scrollContactIntoView = () => {
  scrollElementIntoView("contactUs-footer");
};

export const Footer = () => {
  return (
    <footer className="grid-footer" id="contactUs-footer">
      <div>
        <div>
          <Home size={42} />
          <h3 className="mt-sm mb-xs">Adresa</h3>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Iasi+Lespezi&query_place_id=ChIJAb29dBovNUcR8GutJifXyjQ"
            target="_blank"
          >
            Com Lespezi Nr 415 Jud IASI
          </a>{" "}
          <br />
          <span>Iasi 707271</span>
        </div>
        <div>
          <Phone size={42} />
          <h3 className="mt-sm mb-xs">Contact</h3>
          <a href="tel:+40755898253">+40 755 898 253</a> <br />
          <a href="mailto:lespezel@yahoo.com">lespezel@yahoo.com</a> <br />
        </div>
      </div>

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
