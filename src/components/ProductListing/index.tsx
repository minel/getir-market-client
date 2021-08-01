import './index.scss';
import { Basket } from "../Basket";
import { Products } from "../Products";
import React from 'react';


export const ProductListing: React.FC = () => (
  <main className={"product-listing"}>
    <aside>filter</aside>
    <Products />
    <Basket />
  </main>
);
