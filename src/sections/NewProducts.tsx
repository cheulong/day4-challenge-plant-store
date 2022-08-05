import React from "react";
import styles from "./NewProducts.module.css";
import { AiOutlineHeart } from "react-icons/ai";

const NewProducts = () => {
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
            new <span>products</span>
          </h3>

          <div className={styles.tabs}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. sed diam
            nonummy nibh euismod tincidunt
          </div>
        </div>
        <div>
          <div className={styles.grid_container}>
            <div>
              <img src="images/a.jpg" alt="" />
              <div>
                <p>lorem fa ege fww</p>
                <p className={styles.des}>Beautiful planter</p>
              </div>
              <p className={styles.price}>256$</p>
              <AiOutlineHeart fontSize={25} color={"grey"} />
            </div>
            <div>
              <img src="images/b.jpg" alt="" />
              <AiOutlineHeart fontSize={25} color={"grey"} />
            </div>
            <div>
              <img src="images/c.jpg" alt="" />
              <AiOutlineHeart fontSize={25} color={"grey"} />
            </div>
            <div>
              <img src="images/d.jpg" alt="" />
              <AiOutlineHeart fontSize={25} color={"grey"} />
            </div>
            <div>
              <img src="images/e.jpg" alt="" />
              <AiOutlineHeart fontSize={25} color={"grey"} />
              <div>
                <p>lorem fa ege fww</p>
                <p className={styles.des}>Beautiful planter</p>
              </div>
              <p className={styles.price}>256$</p>
            </div>
            <div>
              <img src="images/f.jpg" alt="" />
              <AiOutlineHeart fontSize={25} color={"grey"} />
            </div>
            <div>
              <img src="images/g.jpg" alt="" />
              <AiOutlineHeart fontSize={25} color={"grey"} />
            </div>
            <div>
              <img src="images/h.jpg" alt="" />
              <AiOutlineHeart fontSize={25} color={"grey"} />
            </div>
            <div>
              <img src="images/i.jpg" alt="" />
              <AiOutlineHeart fontSize={25} color={"grey"} />
            </div>
            <div>
              <img src="images/j.jpg" alt="" />
              <AiOutlineHeart fontSize={25} color={"grey"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
