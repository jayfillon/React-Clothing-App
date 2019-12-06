import React from "react";

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Outerwear</h1>
          <span className="subtitle">Shop</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Shoes</h1>
          <span className="subtitle">Shop</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Accessories</h1>
          <span className="subtitle">Shop</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Womens</h1>
          <span className="subtitle">Shop</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Mens</h1>
          <span className="subtitle">Shop</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;