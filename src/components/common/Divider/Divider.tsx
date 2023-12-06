import { DividerProps } from "./divider.types";
import "./divider.scss";

export const Divider: React.FC<DividerProps> = ({
  isVertical = false,
  isStrong = false,
  className,
}) => {
  return (
    <div
      className={`divider ${isVertical ? "vertical" : ""} ${
        isStrong ? "strong" : ""
      } ${className}`}
    ></div>
  );
};
