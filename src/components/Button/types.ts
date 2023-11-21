import { KeyboardEventHandler, MouseEventHandler } from "react";

export type ButtonProps = {
  children: string;
  onClick?: MouseEventHandler;
  onKeyPress?: KeyboardEventHandler;
  className?: string;
  style?: Object;
};
