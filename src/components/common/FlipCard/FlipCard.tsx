import "./flipCard.scss";
import {
  FlipCardBackProps,
  FlipCardFrontProps,
  FlipCardProps,
} from "./flipCard.types";

export const FlipCard: React.FC<FlipCardProps> = ({ children }) => {
  return (
    <div className="flip-card">
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
