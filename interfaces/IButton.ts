export interface IButton {
  apparence:string
  logo?: string;
  label: string;
  bgColor?: string;
  textColor?: string;
  margin?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onClick?: () => void;
  fontWeight?: string;
  type?: "submit" | "reset" | "button" | undefined;
  link?: string;
}
