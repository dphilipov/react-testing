import styles from './Button.module.css';

function Button({label}) {
  return <div data-testid="button" className={styles.btn}>{label}</div>;
}

export default Button;
