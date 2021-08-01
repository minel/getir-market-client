import './index.scss';
import { DEFAULT_PRODUCT_PAGE_LIMIT } from "../../constants";
import { IProduct } from "../../models/IProduct";
import { Pagination } from "../Pagination";
import { ProductCard } from "../ProductCard";
import { ProductsState } from "../../reducers/productsReducer";
import React from 'react';
import { connect } from "react-redux";
import { getProducts } from "../../actions/productsActions";
import { useEffect } from 'react';
// todo: muhtemelen add to basket action'ı bağlanacak

type IProductsProps = ProductsState;

const ProductsBase: React.FC<any> = (props: IProductsProps ) => {
  const { products, isLoading, totalCount } = props;
  return (
    <section className={'products'}>
      <h2>Products</h2>
      <div>tags</div>
      <div className={'product-container'}>
        {isLoading ? <div>isLoading</div> :
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


const mapStateToProps = (combinedState: any) => {
  const { products, totalCount, isLoading } = combinedState.productsReducer as ProductsState;
  return {
    products,
    totalCount,
    isLoading
  };
};

export const Products = connect(mapStateToProps, null)(ProductsBase);

