import React from "react";
import styles from "./Navbar.module.css";
import logo from "./images/logo.png";
import Image from "next/image";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_left}>
        <Image
          src="/images/logo.png"
          alt=""
          width={50}
          height={50}
          layout="fixed"
        />
      </div>
      <nav className={styles.nav_right}>
        <div className={styles.menu_left}>
          <AiOutlineSearch />
        </div>
        <ul className={styles.menu_center}>
          <li>home</li>
          <li>collection</li>
          <li>furniture</li>
          <li>pages</li>
          <li>blog</li>
          <li>services</li>
        </ul>
        <div className={styles.menu_right}>
          <div id="favorite">
            <AiOutlineHeart />
          </div>
          <div id="cart">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
