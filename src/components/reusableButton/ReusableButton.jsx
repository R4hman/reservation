import styles from "./ReusableButton.module.css";
const ReusableButton = ({ children, bgColor, textColor, disabled }) => {
  return (
    <button
      className={styles.reusableButton}
      style={{ backgroundColor: bgColor, color: textColor }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ReusableButton;
