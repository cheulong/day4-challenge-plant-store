import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./Hero.module.css";
import useEmblaCarousel, {
  EmblaCarouselType,
  UseEmblaCarouselType,
} from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);
  return (
    <div className={styles.container}>
      <div className={styles.hero_content}>
        <Image src="/images/hero.jpg" alt="" layout="fill" objectFit="cover" />
        <div className={styles.hero_overlay} />
        <div
          className={[styles.hero_text, styles.embla].join(" ")}
          ref={emblaRef}
        >
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>
              <p>
                hello. <span>we are plant store</span> a store for people who
                want to buy less, <span>but better.1</span>
              </p>
            </div>
            <div className={styles.embla__slide}>
              <p>
                {" "}
                hello. <span>we are plant store</span> a store for people who
                want to buy less, <span>but better.2</span>
              </p>
            </div>
            <div className={styles.embla__slide}>
              <p>
                {" "}
                hello. <span>we are plant store</span> a store for people who
                want to buy less, <span>but better.3</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <button
              className={[
                styles.embla__dot,
                index === selectedIndex && styles.is_selected,
              ].join(" ")}
              type="button"
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
