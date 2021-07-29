import './App.scss';
import { Header } from './components/Header';
import { ProductListing } from "./components/ProductListing";
import React from 'react';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <ProductListing />
    </div>
  );
};
