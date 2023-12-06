import { ButtonProps } from "./button.types";
import "./button.scss";

export const Button: React.FC<ButtonProps> = ({
  color,
  size = "small",
  fullWidth,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`button ${color} ${size} ${
        fullWidth && "fullWidth"
      } ${className}`}
    >
      {children}
    </button>
  );
};
