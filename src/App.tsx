import './App.scss';
import { DEFAULT_PRODUCT_PAGE_LIMIT, DEFAULT_PRODUCT_PAGE_NUMBER } from "./constants";
import { Header } from './components/Header';
import { ProductListing } from "./components/ProductListing";
import React from 'react';
import { connect } from "react-redux";
import { getProducts } from "./actions/productsActions";
import { useEffect } from 'react';



const AppBase = (props: any): JSX.Element => {
  useEffect(() => {
    props.getProducts(DEFAULT_PRODUCT_PAGE_NUMBER, DEFAULT_PRODUCT_PAGE_LIMIT);
  });

  return (
    <div className="App">
      <Header />
      <ProductListing />
    </div>
  );
};

export const App = connect(null, { getProducts })(AppBase);
