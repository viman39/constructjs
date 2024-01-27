import { SelectProps } from "./select.types";
import "./select.scss";

export const Select: React.FC<SelectProps> = ({ name, options, onChange }) => {
  return (
    <select name={name} onChange={onChange} className="select">
      {options.map(({ value, title }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </select>
  );
};
