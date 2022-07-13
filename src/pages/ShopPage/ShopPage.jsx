import NavMenu from "../../components/NavMenu/NavMenu";

import styles from "./ShopPage.module.scss";

const ShopPage = () => {
  return (
    <main className="container">
      <div className={styles.wrapper}>
        <section className={styles.shopsMenu}>
          <h3 className={styles.sign}>Shops</h3>
          <ul className={styles.shopsList}>
            <li>Shop</li>
            <li>Shop</li>
            <li>Shop</li>
            <li>Shop</li>
            <li>Shop</li>
          </ul>
        </section>
        <section className={styles.productsMenu}>
          <ul className={styles.productsList}>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
            <li className={styles.productsListItem}>Product</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default ShopPage;
