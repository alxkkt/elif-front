import { useState } from "react";

import ShopMenu from "../../components/ShopMenu/ShopMenu";
import ProductsMenu from "../../components/ProductsMenu/ProductsMenu";

import { useGetProductsQuery } from "../../redux/products/products";

import styles from "./ShopPage.module.scss";

const ShopPage = () => {
  const [goodsIdx, setGoodsIdx] = useState(0);
  const { data, isSuccess } = useGetProductsQuery();

  const getSelectedShopIdx = (idx) => setGoodsIdx(idx);

  return (
    <main className="container">
      <div className={styles.wrapper}>
        <ShopMenu
          data={data}
          isSuccess={isSuccess}
          handleClick={getSelectedShopIdx}
        />
        {isSuccess && (
          <ProductsMenu items={data[goodsIdx]?.goods} isSuccess={isSuccess} />
        )}
      </div>
    </main>
  );
};

export default ShopPage;
