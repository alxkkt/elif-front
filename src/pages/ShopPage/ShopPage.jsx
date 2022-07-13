import ShopMenu from "../../components/ShopMenu/ShopMenu";
import ProductsMenu from "../../components/ProductsMenu/ProductsMenu";

import { useGetProductsQuery } from "../../redux/products/products";

import styles from "./ShopPage.module.scss";

const ShopPage = () => {
  const { data, isSuccess } = useGetProductsQuery();

  return (
    <main className="container">
      <div className={styles.wrapper}>
        <ShopMenu />
        <ProductsMenu goods={data?.goods} />
      </div>
    </main>
  );
};

export default ShopPage;
