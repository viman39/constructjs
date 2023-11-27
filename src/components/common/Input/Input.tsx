type InputProps = {
  placeholder?: string;
  type?: "text" | "number" | "color";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  onChange,
}) => {
  return (
    <>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </>
  );
};
