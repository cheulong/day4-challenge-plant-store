import React from "react";
import styles from "./Promotion.module.css";
import { FaPlane } from "react-icons/fa";
const Promotion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img}></div>
        <div className={styles.content}>
          <div>
            This hanging planter is made using cotton thread and a wood wall
            hook that looks as thought it&apos;s sprouting from the wall.
          </div>
          <div className={styles.icon}>
            <FaPlane fontSize={40} />
          </div>
          <button className={styles.button}>View all shop</button>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
