import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "./slideshow.module.scss";

interface IProps {
  images: string[];
}
export function ProductSlideShow({ images }: IProps) {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {images.map((image) => {
        const url = `/products/${image}`;
        return (
          // inline CSS property does not support case insensitive names => className={styles["ease-slide"]}
          <div className={styles["ease-slide"]} key={image}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
}
