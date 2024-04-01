import { Link, useLocation } from "react-router-dom";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import SearchInput from "../searchInput/SearchInput";
import { getCookie } from "../../lib/cookies";
import UserLogged from "../userLoggedIn/UserLogged";
import { useEffect, useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const fullName = getCookie("fullName");
  const mail = getCookie("mail");
  const { pathname } = useLocation();

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Logo />
        <SearchInput />
      </div>

      <div
        className={`${styles.headerRight} ${openMenu ? styles.navOpen : ""}`}
      >
        {fullName || mail ? (
          <UserLogged fullName={fullName} mail={mail} />
        ) : (
          <>
            <Link className={styles.linkStyle} to="/sign-up">
              Sign up
            </Link>
            <Link className={styles.linkStyle} to="/login">
              Login
            </Link>
          </>
        )}
      </div>

      <div
        className={styles.hamburger}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <div
          className={`${styles.bar} ${openMenu ? styles.hamburgerOpen : ""}`}
        />
        <div
          className={`${styles.bar} ${openMenu ? styles.hamburgerOpen : ""}`}
        />
        <div
          className={`${styles.bar} ${openMenu ? styles.hamburgerOpen : ""}`}
        />
      </div>
    </header>
  );
};

export default Header;
