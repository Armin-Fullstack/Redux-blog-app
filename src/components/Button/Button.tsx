import { ButtonProps } from "../Types"
import styles from "./Button.module.css"

export default function Button({children , textColor , bgColor, textSize , width, onClick}: ButtonProps): JSX.Element {
  return <button onClick={onClick} className={styles.btn} style={{color: textColor, backgroundColor: bgColor, fontSize: textSize , width}} >{children}</button>
}