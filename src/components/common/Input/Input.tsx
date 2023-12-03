import { InputProps } from "./input.types";

export const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
