export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type?: "button" | "text";
  color?: "primary";
  fullWidth?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};
