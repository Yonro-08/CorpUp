import { ChangeEventHandler, FC } from "react";
import styles from "./Input.module.css";

type InputProps = {
  type: string;
  title?: string;
  value?: string;
  placeholder?: string;
  required?: Boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Input: FC<InputProps> = ({
  type,
  title,
  onChange,
  value,
  placeholder,
  required,
}) => {
  return (
    <label className={styles.label}>
      <p>
        {title} {required && <span className={styles.required}>*</span>}
      </p>
      <input
        type={type}
        className={styles.input}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
};

export default Input;
