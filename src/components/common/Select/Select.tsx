import { SelectProps } from "./select.types";

export const Select: React.FC<SelectProps> = ({ name, options, onChange }) => {
  return (
    <select name={name} onChange={onChange}>
      {options.map(({ value, title }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </select>
  );
};
