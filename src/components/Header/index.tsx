import './index.scss';
import { BasketPreview } from "../BasketPreview";
import React from 'react';
import logo from '../../assets/logo.svg';


export const Header: React.FC = () => (
  <header className="app-header">
    <div className={"placeholder"} />
    <div className="logo">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <BasketPreview />
  </header>
);
