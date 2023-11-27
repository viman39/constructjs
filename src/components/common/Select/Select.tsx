type Option = {
  value: string;
  title: string;
};

type SelectProps = {
  name: string;
  options: Option[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

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
