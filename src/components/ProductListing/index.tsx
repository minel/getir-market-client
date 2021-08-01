import './index.scss';
import { Products } from "../Products";
import React from 'react';


export const ProductListing: React.FC = () => (
  <main className={"product-listing"}>
    <aside>filter</aside>
    <Products />
    <aside>basket</aside>
  </main>
);
