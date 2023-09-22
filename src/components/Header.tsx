import AppMenu from "./AppMenu";
import styles from "./Header.module.css"
export default function Header():JSX.Element {
  return(
    <header className={styles.header}>
      <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Redux Essentials Example</h1>
       <AppMenu />
      </div>
    </header>
  )
}