import Logo from "../logo/Logo";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerTop}>
        <Logo />
        <ul>
          <li>Support</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <span>©</span>
        <span>Restaurants, Inc. ®</span>
      </div>
    </section>
  );
};

export default Footer;
