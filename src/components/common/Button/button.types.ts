export type ButtonProps = {
  color?: "primary";
  size?: "small" | "large";
  fullWidth?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};
