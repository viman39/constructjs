import { InputProps } from "./input.types";
import "./input.scss";

export const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={`input ${className ? className : ""}`}
    />
  );
};
