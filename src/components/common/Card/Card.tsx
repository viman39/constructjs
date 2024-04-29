import { useState } from "react";
import "./card.scss";

export const Card: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  const [shouldDisplay, setShouldDisplay] = useState(true);

  return (
    <div
      className={`card ${shouldDisplay ? "" : "hidden"} ${
        props?.className ? props.className : ""
      }`}
      onClick={() => setShouldDisplay(false)}
    >
      {props.children}
    </div>
  );
};
