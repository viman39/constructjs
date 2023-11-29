type Option = {
  value: string;
  title: string;
};

export type SelectProps = {
  name: string;
  options: Option[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
