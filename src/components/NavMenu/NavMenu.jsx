import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Shop</NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
