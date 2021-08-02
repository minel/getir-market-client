import './App.scss';
import { DEFAULT_PRODUCT_PAGE_LIMIT, DEFAULT_PRODUCT_PAGE_NUMBER } from "./constants";
import { Header } from './components/Header';
import { ProductListing } from "./components/ProductListing";
import React from 'react';
import { getCompanies } from "./actions/companyActions";
import { getProducts } from "./actions/productsActions";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';




export const App = (props: any): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(DEFAULT_PRODUCT_PAGE_NUMBER, DEFAULT_PRODUCT_PAGE_LIMIT));
    dispatch(getCompanies());
  });

  return (
    <div className="App">
      <Header />
      <ProductListing />
    </div>
  );
};
