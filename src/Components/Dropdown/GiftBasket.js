import React from "react";
import styles from "./GiftBasket.module.css";
import { Link } from "react-router-dom";

function GiftBasket() {
  return (
    <div className={styles["gift-basket"]}>
      <h5 className={styles["basket-content"]}>Basket Content</h5>
      <ul className={styles["list-items"]}>
        <Link to="/productlisting">
          <li className={styles["li"]}>Food Baskets</li>
        </Link>
        <Link to="/productlisting">
          <li className={styles["li"]}>Fruit Baskets</li>
        </Link>
        <Link to="/productlisting">
          <li className={styles["li"]}>Wine Baskets</li>
        </Link>
        <Link to="/productlisting">
          <li className={styles["li"]}>Flower Baskets</li>
        </Link>
      </ul>
    </div>
  );
}

export default GiftBasket;
