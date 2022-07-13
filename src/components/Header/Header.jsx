import NavMenu from "../NavMenu";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavMenu />
    </header>
  );
};

export default Header;
