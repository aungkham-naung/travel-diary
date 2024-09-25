import styles from "./Button.module.css";

export default function Button({ onClick, type, children }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
