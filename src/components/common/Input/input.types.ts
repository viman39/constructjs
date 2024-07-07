export type InputProps = {
  placeholder?: string;
  type?: "text" | "number" | "color";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  className?: string;
};
