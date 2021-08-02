import './index.scss';
import { Basket } from "../Basket";
import { Filters } from "../Filters";
import { Products } from "../Products";
import React from 'react';


export const ProductListing: React.FC = () => (
  <main className={"product-listing"}>
    <Filters />
    <Products />
    <Basket />
  </main>
);
