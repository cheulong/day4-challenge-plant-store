import React from "react";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3>
            <div className={styles.products_title1}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            our <span>products</span>
          </h3>

          <div className={styles.tabs}>
            <a href="/" className={styles.active}>
              featured
            </a>
            <a href="/">best seller</a>
            <a href="/">new arrivals</a>
            <a href="/">sale</a>
          </div>
        </div>
        <div className="container">
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
