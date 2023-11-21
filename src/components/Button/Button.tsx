import { FC } from "react";

import { ButtonProps } from "./types";
import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({
  children,
  className,
  style,
  onClick,
  onKeyPress,
}) => {
  return (
    <button
      className={`${styles.button} ${className || ""}`}
      style={style}
      onClick={onClick}
      onKeyPress={onKeyPress}
    >
      {children}
    </button>
  );
};

export default Button;
