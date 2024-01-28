import { ButtonProps } from "./button.types";
import "./button.scss";

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  color,
  fullWidth,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${type} ${color} ${
        fullWidth && "full-width"
      } ${className}`}
    >
      {children}
    </button>
  );
};
