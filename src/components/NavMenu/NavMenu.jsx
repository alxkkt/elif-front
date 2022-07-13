import { NavLink } from "react-router-dom";

import styles from "./NavMenu.module.scss";

const getActiveLink = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`;
};

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"} className={getActiveLink}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to={"/cart"} className={getActiveLink}>
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
