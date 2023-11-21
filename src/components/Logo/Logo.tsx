import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src="assets/images/logo.png" alt="logo" />
      <h2>CorpUp</h2>
    </div>
  );
};

export default Logo;
