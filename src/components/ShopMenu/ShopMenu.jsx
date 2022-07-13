import { useState, useEffect } from "react";
import styles from "./ShopMenu.module.scss";

import { useGetProductsQuery } from "../../redux/products/products";

const ShopMenu = ({ data, isSuccess, handleClick }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const getIdx = (idx) => {
    setActiveIdx(idx);
    handleClick(idx);
  };

  const getActiveItem = (actIndex, itemIdx) => {
    return actIndex === itemIdx
      ? `${styles.item} ${styles.itemActive}`
      : `${styles.item}`;
  };
  // const { data, isSuccess, isFetching } = useGetProductsQuery();

  const elements = data?.map(({ id, company }, index) => {
    return (
      <li
        key={id}
        className={getActiveItem(activeIdx, index)}
        onClick={() => getIdx(index)}
      >
        {company}
      </li>
    );
  });
  return (
    <section className={styles.shopsMenu}>
      <h3 className={styles.sign}>Shops</h3>
      <ul className={styles.shopsList}>
        {/* <li>Shop</li>
        <li>Shop</li>
        <li>Shop</li>
        <li>Shop</li>
        <li>Shop</li> */}
        {isSuccess && elements}
      </ul>
    </section>
  );
};

export default ShopMenu;
