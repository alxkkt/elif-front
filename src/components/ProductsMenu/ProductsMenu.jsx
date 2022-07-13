import styles from "./ProductsMenu.module.scss";

const ProductsMenu = ({ items, isSuccess }) => {
  console.log(items);
  const elements = items?.map(({ price, name, id }) => {
    return (
      <li key={id}>
        <p>
          {name}: {price}
        </p>
      </li>
    );
  });
  return (
    <section className={styles.productsMenu}>
      <ul className={styles.productsList}>{isSuccess && elements}</ul>
    </section>
  );
};

export default ProductsMenu;
