import React from "react";
import Image from "next/image";
import styles from "./Services.module.css";
import { IoIosPricetag } from "react-icons/io";
import { MdLocalShipping } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";
const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      {/* <Image
        src="/images/hero.jpg"
        alt="services"
        layout="responsive"
        objectFit="cover"
        width="100vw"
        height={24}
        style={{ opacity: 0.7 }}
      /> */}
      <div className={styles.wrapper}>
        <div className={styles.service}>
          <div className="icon">
            <MdLocalShipping fontSize={35} />
          </div>
          <div className={styles.service_title}>
            <h3> free shipping</h3>
            <p>on all order over $15000</p>
          </div>
        </div>

        <div className={styles.service}>
          <div className="icon">
            <IoIosPricetag fontSize={35} />
          </div>
          <div className={styles.service_title}>
            <h3> price promise</h3>
            <p>on all order over $15000</p>
          </div>
        </div>
        <div className={styles.service}>
          <div className="icon">
            <RiMedalLine fontSize={35} />
          </div>
          <div className={styles.service_title}>
            <h3>3 years warranty</h3>
            <p>on all order over $15000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
