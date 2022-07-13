import { useState, useEffect } from "react";
import styles from "./ShopMenu.module.scss";

import { useGetProductsQuery } from "../../redux/products/products";

const ShopMenu = () => {
  const { data, isSuccess } = useGetProductsQuery();

  const elements = data?.map(({ id, company, logo }) => {
    return (
      <li key={id} className={styles.item}>
        {company}
        {logo}
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
