import { useState } from "react";
import "./flipCard.scss";
import {
  FlipCardBackProps,
  FlipCardFrontProps,
  FlipCardProps,
} from "./flipCard.types";

export const FlipCard: React.FC<FlipCardProps> = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleFlipBack = () => {
    setIsFlipped(true);
  };

  const handleFlipFront = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flip-card-hover" : ""}`}
      onClick={handleFlipCard}
      onMouseOver={handleFlipBack}
      onMouseOut={handleFlipFront}
    >
      <div className="flip-card-inner">{children}</div>
    </div>
  );
};

export const FlipCardFront: React.FC<FlipCardFrontProps> = ({ children }) => (
  <div className="flip-card-front">{children}</div>
);

export const FlipCardBack: React.FC<FlipCardBackProps> = ({ children }) => (
  <div className="flip-card-back">{children}</div>
);
