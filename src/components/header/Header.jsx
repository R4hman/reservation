import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import SearchInput from "../searchInput/SearchInput";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Logo />
        <SearchInput />
      </div>
      <div className={styles.headerRight}>
        <Link className={styles.linkStyle} to="/sign-up">
          Sign up
        </Link>
        <Link className={styles.linkStyle} to="/login">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
