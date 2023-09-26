import Button from "../Button/Button";
import styles from "./AppMenu.module.css";
import { NavLink } from "react-router-dom";

export default function AppMenu(): JSX.Element {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarMenu}>
        <li>
          <NavLink to="/" className={styles.menuLink}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="users" className={styles.menuLink}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="notifications" className={styles.menuLink}>
            Notifications
          </NavLink>
        </li>
      </ul>
      <Button textColor="white" bgColor="#339af0" textSize="1.5rem" width="22rem">
        Refresh Notifications
      </Button>
    </nav>
  );
}
