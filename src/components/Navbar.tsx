import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "./images/logo.png";
import Image from "next/image";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_left}>
        <Image
          src="/images/logo.png"
          alt=""
          width={50}
          height={50}
          layout="fixed"
        />
      </div>
      <nav
        className={
          nav
            ? [styles.navbar_right, styles.active].join(" ")
            : styles.navbar_right
        }
      >
        <div className={styles.menu_CloseBtn} onClick={() => setNav(!nav)}>
          <AiOutlineClose size={25} />
        </div>
        <div className={styles.menu_left}>
          <AiOutlineSearch />
        </div>
        <ul className={styles.menu_center}>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/">collection</Link>
          </li>
          <li>
            <Link href="/">furniture</Link>
          </li>
          <li>
            <Link href="/">pages</Link>
          </li>
          <li>
            <Link href="/">blog</Link>
          </li>
          <li>
            <Link href="/">services</Link>
          </li>
        </ul>
        <div className={styles.menu_right}>
          <div className={styles.mobile_search}>
            <AiOutlineSearch size={25} />
          </div>
          <div id="favorite">
            <AiOutlineHeart />
          </div>
          <div id="cart">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </nav>
      <div className={styles.mobile_btn} onClick={() => setNav(!nav)}>
        {!nav && <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default Navbar;
