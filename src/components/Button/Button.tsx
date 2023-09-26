import { ButtonProps } from "../../types";
import styles from "./Button.module.css";

export default function Button({ children, textColor, bgColor, textSize, width }: ButtonProps): JSX.Element {
  return (
    <button
      className={styles.btn}
      style={{
        color: textColor,
        backgroundColor: bgColor,
        fontSize: textSize,
        width,
      }}
    >
      {children}
    </button>
  );
}
