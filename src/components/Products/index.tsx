import './index.scss';
import { DEFAULT_PRODUCT_PAGE_LIMIT } from "../../constants";
import { IProduct } from "../../models/IProduct";
import { Pagination } from "../Pagination";
import { ProductCard } from "../ProductCard";
import { ProductsState } from "../../reducers/productsReducer";
import React from 'react';
import { useSelector } from "react-redux";

type IProductsProps = {
};

export const Products: React.FC<any> = (props: IProductsProps ) => {
  const { products, totalCount, isLoading } = useSelector((state: any) => state.productsReducer as ProductsState);

  return (
    <section className={'products'}>
      <h2>Products</h2>
      {/* todo: <div>tags</div>*/}
      <div className={'product-container'}>
        {isLoading ? <div>Products Loading...</div> :
          products.map((product: IProduct) => (
            <ProductCard key={product.added} product={product} />
          ))
        }
      </div>
      {totalCount > DEFAULT_PRODUCT_PAGE_LIMIT &&
      <Pagination />
      }
    </section>
  )
};
