import { KeyboardEventHandler, MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;
  onKeyPress?: KeyboardEventHandler;
  className?: string;
  style?: Object;
};
