export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  color?: "primary";
  size?: "small" | "large";
  fullWidth?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};
