import Button from "./Button";
import styles from "./AppMenu.module.css"
export default function AppMenu():JSX.Element {
  return(
    <nav className={styles.navBar}>
      <ul className={styles.navBarMenu}>
        <li>Posts</li>
        <li>Users</li>
        <li>Notifications</li>
      </ul>
      <Button textColor="white" bgColor="#339af0" textSize="1.5rem" width="22rem">Refresh Notifications</Button>
    </nav>
  )
}